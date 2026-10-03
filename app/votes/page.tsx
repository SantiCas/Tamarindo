"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ACTIVITIES } from "@/data/activities";
import { Profile, PROFILE_COLORS, PROFILES } from "@/data/profiles";
import { getStoredProfile, setStoredProfile, subscribeToAllVotes } from "@/lib/votes";
import Header from "@/components/Header";
import ProfileModal from "@/components/ProfileModal";

export default function VotesPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [voteMap, setVoteMap] = useState<Record<string, Profile[]>>({});
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<"by-activity" | "by-family">("by-activity");

  useEffect(() => {
    setMounted(true);
    setProfile(getStoredProfile());
    // Real-time subscription to all votes
    const unsubscribe = subscribeToAllVotes((map) => setVoteMap(map));
    return unsubscribe;
  }, []);

  const handleProfileChange = useCallback((p: Profile) => {
    setStoredProfile(p);
    setProfile(p);
  }, []);

  // Sort activities by vote count
  const sorted = [...ACTIVITIES].sort(
    (a, b) => (voteMap[b.id]?.length ?? 0) - (voteMap[a.id]?.length ?? 0)
  );

  const totalVotes = Object.values(voteMap).reduce(
    (acc, v) => acc + v.length,
    0
  );

  if (!mounted) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-tamarindo-600 text-lg font-semibold animate-pulse">
          🌴 Cargando...
        </div>
      </div>
    );
  }

  return (
    <>
      {!profile && <ProfileModal onSelect={handleProfileChange} />}
      <Header currentProfile={profile} onProfileChange={handleProfileChange} />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Page header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-tamarindo-800 mb-2">
            📊 Actividades Votadas
          </h1>
          <p className="text-gray-500">
            {totalVotes} voto{totalVotes !== 1 ? "s" : ""} en total · Se
            actualiza en tiempo real
          </p>
        </div>

        {/* View toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setView("by-activity")}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
              view === "by-activity"
                ? "bg-tamarindo-600 text-white border-tamarindo-600"
                : "bg-white border-gray-200 text-gray-600 hover:border-tamarindo-300"
            }`}
          >
            🏆 Por actividad
          </button>
          <button
            onClick={() => setView("by-family")}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
              view === "by-family"
                ? "bg-tamarindo-600 text-white border-tamarindo-600"
                : "bg-white border-gray-200 text-gray-600 hover:border-tamarindo-300"
            }`}
          >
            👨‍👩‍👧‍👦 Por familia
          </button>
        </div>

        {/* BY ACTIVITY VIEW */}
        {view === "by-activity" && (
          <div className="space-y-4">
            {sorted.map((activity, index) => {
              const voters = voteMap[activity.id] ?? [];
              const hasAny = voters.length > 0;
              return (
                <div
                  key={activity.id}
                  className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm transition-all ${
                    hasAny ? "border-tamarindo-200" : "border-gray-100 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-4 p-4">
                    {/* Rank */}
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-tamarindo-50 flex items-center justify-center">
                      <span className="font-black text-lg text-tamarindo-700">
                        {index + 1}
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={activity.coverImage}
                        alt={activity.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 truncate">
                        {activity.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        📍 {activity.distance}
                      </p>
                      {/* Voter chips */}
                      {hasAny ? (
                        <div className="flex flex-wrap gap-1.5">
                          {voters.map((v) => (
                            <span
                              key={v}
                              className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                                PROFILE_COLORS[v as keyof typeof PROFILE_COLORS] ??
                                "bg-gray-100 text-gray-700 border-gray-200"
                              }`}
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">
                          Sin votos aún
                        </span>
                      )}
                    </div>

                    {/* Vote count */}
                    <div className="shrink-0 text-center">
                      <span
                        className={`text-3xl font-black ${
                          hasAny ? "text-tamarindo-600" : "text-gray-300"
                        }`}
                      >
                        {voters.length}
                      </span>
                      <p className="text-xs text-gray-400">
                        {voters.length === 1 ? "voto" : "votos"}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {hasAny && (
                    <div className="px-4 pb-3">
                      <div className="h-1.5 bg-tamarindo-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-tamarindo-500 rounded-full transition-all duration-500"
                          style={{
                            width: `${(voters.length / PROFILES.length) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* BY FAMILY VIEW */}
        {view === "by-family" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROFILES.map((familyProfile) => {
              const myVotes = ACTIVITIES.filter((a) =>
                voteMap[a.id]?.includes(familyProfile)
              );
              return (
                <div
                  key={familyProfile}
                  className="bg-white rounded-2xl border-2 border-gray-100 p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className={`font-bold text-sm px-3 py-1 rounded-full border ${
                        PROFILE_COLORS[familyProfile]
                      }`}
                    >
                      {familyProfile}
                    </h3>
                    <span className="text-tamarindo-600 font-black text-xl">
                      {myVotes.length}
                    </span>
                  </div>
                  {myVotes.length === 0 ? (
                    <p className="text-sm text-gray-400 italic">
                      Todavía no votaron ninguna actividad
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {myVotes.map((a) => (
                        <li
                          key={a.id}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <span className="text-tamarindo-400">✓</span>
                          <span className="font-medium">{a.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-tamarindo-600 text-white font-semibold rounded-2xl hover:bg-tamarindo-700 transition-colors shadow-md"
          >
            🗳️ Ir a votar
          </Link>
        </div>
      </main>
    </>
  );
}
