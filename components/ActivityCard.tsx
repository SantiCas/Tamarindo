"use client";

import Image from "next/image";
import { Activity } from "@/data/activities";
import { Profile, PROFILE_COLORS } from "@/data/profiles";
import { toggleVote, subscribeToVotes } from "@/lib/votes";
import { useState, useEffect, useCallback } from "react";

interface ActivityCardProps {
  activity: Activity;
  currentProfile: Profile | null;
}

const CATEGORY_EMOJI: Record<string, string> = {
  aventura: "🏄",
  naturaleza: "🌋",
  fauna: "🐢",
  "panorámicas": "⛵",
  gastronomía: "🍽️",
};

const CONTACT_ICON: Record<string, string> = {
  phone: "📞",
  email: "✉️",
  whatsapp: "💬",
  instagram: "📸",
  web: "🌐",
};

export default function ActivityCard({
  activity,
  currentProfile,
}: ActivityCardProps) {
  const [voters, setVoters] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);

  // Real-time subscription to this activity's votes
  useEffect(() => {
    const unsubscribe = subscribeToVotes(activity.id, (v) => setVoters(v));
    return unsubscribe;
  }, [activity.id]);

  const voted = currentProfile ? voters.includes(currentProfile) : false;

  const handleVote = useCallback(async () => {
    if (!currentProfile || loading) return;
    setLoading(true);
    try {
      await toggleVote(activity.id, currentProfile);
    } finally {
      setLoading(false);
    }
  }, [activity.id, currentProfile, loading]);

  const contactHref =
    activity.contact.type === "email"
      ? `mailto:${activity.contact.value}`
      : activity.contact.type === "whatsapp"
      ? `https://wa.me/${activity.contact.value.replace(/\D/g, "")}`
      : activity.contact.type === "phone"
      ? `tel:${activity.contact.value}`
      : activity.contact.value; // instagram or web — value is already a URL

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border-2 ${
        voted
          ? "border-tamarindo-400 ring-2 ring-tamarindo-200"
          : "border-transparent"
      }`}
    >
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={activity.coverImage}
          alt={activity.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full shadow">
          {CATEGORY_EMOJI[activity.category]} {activity.category}
        </span>
        {/* Vote count badge */}
        {voters.length > 0 && (
          <span className="absolute top-3 right-3 bg-tamarindo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            {voters.length} voto{voters.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          {activity.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {activity.description}
        </p>

        {/* Meta info */}
        <div className="space-y-1.5 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <span className="text-base shrink-0">📍</span>
            <span>
              <span className="font-medium">{activity.location}</span>
              <span className="text-gray-400"> · {activity.distance}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base shrink-0">
              {CONTACT_ICON[activity.contact.type]}
            </span>
            <a
              href={contactHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tamarindo-600 hover:underline truncate"
            >
              {activity.contact.label ?? activity.contact.value}
            </a>
          </div>
        </div>

        {/* Voters chips */}
        {voters.length > 0 && (
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
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-2">
          <a
            href={activity.infoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 text-center text-sm font-medium rounded-xl border border-gray-200 hover:border-tamarindo-400 hover:text-tamarindo-700 hover:bg-tamarindo-50 transition-all"
          >
            🔗 Ver más info
          </a>
          <a
            href={activity.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-center text-sm font-medium rounded-xl border border-gray-200 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all"
            title="Ver en Google Maps"
          >
            📍
          </a>
          <button
            onClick={handleVote}
            disabled={!currentProfile || loading}
            title={
              !currentProfile
                ? "Seleccioná tu perfil primero"
                : voted
                ? "Quitar voto"
                : "Votar esta actividad"
            }
            className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-150 active:scale-[0.97] ${
              loading
                ? "bg-gray-100 text-gray-400 cursor-wait"
                : voted
                ? "bg-tamarindo-600 text-white hover:bg-tamarindo-700 shadow-md"
                : currentProfile
                ? "bg-tamarindo-50 border-2 border-tamarindo-400 text-tamarindo-700 hover:bg-tamarindo-100"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? "⏳" : voted ? "✅ ¡Votado!" : "🗳️ Votar"}
          </button>
        </div>
      </div>
    </div>
  );
}
