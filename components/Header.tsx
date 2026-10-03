"use client";

import Link from "next/link";
import { Profile, PROFILE_COLORS } from "@/data/profiles";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

interface HeaderProps {
  currentProfile: Profile | null;
  onProfileChange: (profile: Profile) => void;
}

export default function Header({ currentProfile, onProfileChange }: HeaderProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-tamarindo-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🌴</span>
            <span className="font-black text-xl text-tamarindo-800 tracking-tight">
              Tamarindo
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden sm:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-tamarindo-50 hover:text-tamarindo-700 transition-colors"
            >
              🗳️ Actividades
            </Link>
            <Link
              href="/votes"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-tamarindo-50 hover:text-tamarindo-700 transition-colors"
            >
              📊 Votos
            </Link>
          </nav>

          {/* Profile button */}
          <button
            onClick={() => setShowModal(true)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-medium transition-all hover:shadow-md ${
              currentProfile
                ? PROFILE_COLORS[currentProfile]
                : "border-gray-200 text-gray-500 hover:border-tamarindo-300"
            }`}
          >
            <span>{currentProfile ? "👤" : "🙋"}</span>
            <span className="hidden sm:inline max-w-[160px] truncate">
              {currentProfile ?? "Elegir perfil"}
            </span>
          </button>
        </div>

        {/* Mobile nav */}
        <div className="sm:hidden flex border-t border-gray-100">
          <Link
            href="/"
            className="flex-1 text-center py-2 text-xs font-medium text-gray-600 hover:bg-tamarindo-50"
          >
            🗳️ Actividades
          </Link>
          <Link
            href="/votes"
            className="flex-1 text-center py-2 text-xs font-medium text-gray-600 hover:bg-tamarindo-50"
          >
            📊 Votos
          </Link>
        </div>
      </header>

      {showModal && (
        <ProfileModal
          forceOpen
          onSelect={(profile) => {
            onProfileChange(profile);
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}
