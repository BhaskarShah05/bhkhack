import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { isMuted, toggleMute, playSfx } from "../lib/soundFx";

export default function SoundToggle({ className = "", compact = false }) {
  const [muted, setMutedState] = useState(() => isMuted());
  const [isPlayingWave, setIsPlayingWave] = useState(false);

  useEffect(() => {
    const handleMuteChange = (e) => {
      setMutedState(e.detail.isMuted);
    };

    window.addEventListener("ncs_sfx_mute_change", handleMuteChange);
    return () => {
      window.removeEventListener("ncs_sfx_mute_change", handleMuteChange);
    };
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    const newMuted = toggleMute();
    setMutedState(newMuted);

    if (!newMuted) {
      setIsPlayingWave(true);
      setTimeout(() => setIsPlayingWave(false), 600);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      data-sfx="none" // Prevent duplicate click sfx
      className={`relative group flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer focus:outline-none select-none ${
        compact
          ? "size-9 sm:size-10 bg-white/10 hover:bg-white/15 border border-white/20 text-white shadow-md backdrop-blur-md"
          : "h-9 sm:h-10 px-3 sm:px-3.5 gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white shadow-md backdrop-blur-md"
      } ${className}`}
      aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}
      title={muted ? "Sound Effects: Muted (Click to enable)" : "Sound Effects: Active (Click to mute)"}
    >
      {/* Sound active pulsing ring */}
      {!muted && isPlayingWave && (
        <span className="absolute inset-0 rounded-full animate-ping bg-white/20 pointer-events-none" />
      )}

      {muted ? (
        <VolumeX className="size-4.5 sm:size-5 text-white/50 group-hover:text-white/80 transition-colors shrink-0" />
      ) : (
        <Volume2 className="size-4.5 sm:size-5 text-white/90 group-hover:text-white transition-colors shrink-0" />
      )}

      {!compact && (
        <span className="hidden md:inline font-['Satoshi',Arial,sans-serif] text-[12px] font-medium tracking-wide text-white/80 group-hover:text-white transition-colors">
          {muted ? "SFX OFF" : "SFX ON"}
        </span>
      )}

      {/* Status dot */}
      <span
        className={`size-1.5 rounded-full transition-colors shrink-0 ${
          muted ? "bg-red-400/80" : "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
        }`}
      />
    </motion.button>
  );
}
