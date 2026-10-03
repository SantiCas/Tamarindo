"use client";

import { useCallback, useEffect, useState } from "react";
import { ACTIVITIES, CATEGORIES } from "@/data/activities";
import { Profile } from "@/data/profiles";
import { getStoredProfile, setStoredProfile } from "@/lib/votes";
import ActivityCard from "@/components/ActivityCard";
import ProfileModal from "@/components/ProfileModal";
import Header from "@/components/Header";
import Countdown from "@/components/Countdown";

export default function HomePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProfile(getStoredProfile());
  }, []);

  const handleProfileSelect = useCallback((p: Profile) => {
    setStoredProfile(p);
    setProfile(p);
  }, []);

  const filtered =
    selectedCategory === "all"
      ? ACTIVITIES
      : ACTIVITIES.filter((a) => a.category === selectedCategory);

  if (!mounted) {
    // Prevent hydration mismatch — show skeleton
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
      {!profile && <ProfileModal onSelect={handleProfileSelect} />}
      <Header currentProfile={profile} onProfileChange={handleProfileSelect} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-black text-tamarindo-800 mb-2">
            🌴 Vacaciones en Tamarindo
          </h1>
          <p className="text-gray-600 text-lg">
            Votá las actividades que querés hacer. ¡Todos los votos son
            visibles!
          </p>
          {profile && (
            <p className="mt-2 text-tamarindo-600 font-semibold">
              Estás votando como:{" "}
              <span className="bg-tamarindo-100 px-2 py-0.5 rounded-lg">
                {profile}
              </span>
            </p>
          )}
        </div>

        {/* Countdown */}
        <div className="mb-8 max-w-md mx-auto">
          <Countdown />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                selectedCategory === cat.id
                  ? "bg-tamarindo-600 text-white border-tamarindo-600 shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-tamarindo-400 hover:text-tamarindo-700"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Activity grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              currentProfile={profile}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-lg">No hay actividades en esta categoría</p>
          </div>
        )}
      </main>
    </>
  );
}
