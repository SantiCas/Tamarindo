"use client";

import { useEffect, useState } from "react";
import { PROFILES, Profile } from "@/data/profiles";
import { getStoredProfile, setStoredProfile } from "@/lib/votes";

interface ProfileModalProps {
  onSelect: (profile: Profile) => void;
  forceOpen?: boolean;
}

export default function ProfileModal({ onSelect, forceOpen }: ProfileModalProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Profile | null>(null);

  useEffect(() => {
    const stored = getStoredProfile();
    if (!stored || forceOpen) {
      setOpen(true);
      setSelected(stored);
    }
  }, [forceOpen]);

  const handleConfirm = () => {
    if (!selected) return;
    setStoredProfile(selected);
    onSelect(selected);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-br from-tamarindo-500 to-tamarindo-700 p-6 text-white text-center">
          <div className="text-5xl mb-2">🌴</div>
          <h2 className="text-2xl font-bold">¡Hola, familia!</h2>
          <p className="text-tamarindo-100 mt-1 text-sm">
            Seleccioná tu perfil para votar las actividades
          </p>
        </div>

        {/* Profile list */}
        <div className="p-5 space-y-2">
          {PROFILES.map((profile) => (
            <button
              key={profile}
              onClick={() => setSelected(profile)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 font-medium text-sm ${
                selected === profile
                  ? "border-tamarindo-500 bg-tamarindo-50 text-tamarindo-800 shadow-md scale-[1.01]"
                  : "border-gray-200 hover:border-tamarindo-300 hover:bg-tamarindo-50/50 text-gray-700"
              }`}
            >
              <span className="mr-2">
                {selected === profile ? "✅" : "👤"}
              </span>
              {profile}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 pb-5">
          <button
            onClick={handleConfirm}
            disabled={!selected}
            className="w-full py-3 rounded-xl bg-tamarindo-600 text-white font-semibold text-base disabled:opacity-40 disabled:cursor-not-allowed hover:bg-tamarindo-700 active:scale-[0.98] transition-all duration-150 shadow-md"
          >
            ¡Entrar! 🌺
          </button>
        </div>
      </div>
    </div>
  );
}
