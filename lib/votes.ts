import {
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Profile } from "@/data/profiles";

// ─── Firestore schema ────────────────────────────────────────────────────────
// Collection: "votes"
// Document per activity: { id: activityId, voters: Profile[] }
// ─────────────────────────────────────────────────────────────────────────────

const PROFILE_KEY = "tamarindo_profile";

// ─── Profile (localStorage, device-local) ───────────────────────────────────

export function getStoredProfile(): Profile | null {
  if (typeof window === "undefined") return null;
  return (localStorage.getItem(PROFILE_KEY) as Profile) ?? null;
}

export function setStoredProfile(profile: Profile): void {
  localStorage.setItem(PROFILE_KEY, profile);
}

// ─── Firestore helpers ───────────────────────────────────────────────────────

function voteDocRef(activityId: string) {
  return doc(db, "votes", activityId);
}

export async function getVotesForActivity(activityId: string): Promise<Profile[]> {
  const snap = await getDoc(voteDocRef(activityId));
  if (!snap.exists()) return [];
  return (snap.data()?.voters as Profile[]) ?? [];
}

export async function hasVoted(
  activityId: string,
  profile: Profile
): Promise<boolean> {
  const voters = await getVotesForActivity(activityId);
  return voters.includes(profile);
}

export async function toggleVote(
  activityId: string,
  profile: Profile
): Promise<void> {
  const ref = voteDocRef(activityId);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    // Create document with this first vote
    await setDoc(ref, { voters: [profile] });
  } else {
    const voters: Profile[] = snap.data()?.voters ?? [];
    if (voters.includes(profile)) {
      await updateDoc(ref, { voters: arrayRemove(profile) });
    } else {
      await updateDoc(ref, { voters: arrayUnion(profile) });
    }
  }
}

/** Subscribe to real-time vote updates for a single activity */
export function subscribeToVotes(
  activityId: string,
  callback: (voters: Profile[]) => void
): () => void {
  return onSnapshot(voteDocRef(activityId), (snap) => {
    const voters = snap.exists() ? ((snap.data()?.voters as Profile[]) ?? []) : [];
    callback(voters);
  });
}

/** Get all votes across all activities as a map */
export async function getAllVotesMap(): Promise<Record<string, Profile[]>> {
  const snap = await getDocs(collection(db, "votes"));
  const map: Record<string, Profile[]> = {};
  snap.forEach((doc) => {
    map[doc.id] = (doc.data()?.voters as Profile[]) ?? [];
  });
  return map;
}

/** Subscribe to all votes (for the summary page) */
export function subscribeToAllVotes(
  callback: (map: Record<string, Profile[]>) => void
): () => void {
  return onSnapshot(collection(db, "votes"), (snapshot) => {
    const map: Record<string, Profile[]> = {};
    snapshot.forEach((doc) => {
      map[doc.id] = (doc.data()?.voters as Profile[]) ?? [];
    });
    callback(map);
  });
}
