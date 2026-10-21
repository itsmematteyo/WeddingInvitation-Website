"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Music, Volume2, Play, Pause } from "lucide-react";

const MUSIC_SRC = "/music/Until%20I%20Found%20You%20-%20Stephen%20Sanchez%20-%20Cover%20(Violin).mp3";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Web Audio Synthesizer fallback if file or format fails
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  const stopSynth = useCallback(() => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (synthCtxRef.current && synthCtxRef.current.state === "running") {
      synthCtxRef.current.suspend();
    }
  }, []);

  const startRomanticSynth = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!synthCtxRef.current) {
        synthCtxRef.current = new AudioCtx();
      }
      const ctx = synthCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const melody = [
        523.25, 659.25, 783.99, 1046.5, 880.0, 659.25, 783.99, 659.25,
        698.46, 523.25, 659.25, 587.33, 523.25, 440.0, 523.25, 587.33,
      ];
      let noteIdx = 0;

      const playNextNote = () => {
        if (!isPlaying) return;
        const now = ctx.currentTime;
        const freq = melody[noteIdx % melody.length];
        noteIdx++;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.5);

        synthTimerRef.current = window.setTimeout(playNextNote, 640);
      };

      playNextNote();
    } catch {
      // AudioContext not supported
    }
  }, [isPlaying]);

  const playMusic = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !audioError) {
      audio.volume = 0.85;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser policy blocked unprompted autoplay, immediately start on the very first gesture
          const handleFirstInteraction = () => {
            if (audioRef.current) {
              audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                  startRomanticSynth();
                  setIsPlaying(true);
                });
            }
            cleanup();
          };

          const cleanup = () => {
            window.removeEventListener("pointerdown", handleFirstInteraction);
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
            window.removeEventListener("wheel", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
          };

          window.addEventListener("pointerdown", handleFirstInteraction, { once: true, passive: true });
          window.addEventListener("click", handleFirstInteraction, { once: true });
          window.addEventListener("touchstart", handleFirstInteraction, { once: true, passive: true });
          window.addEventListener("scroll", handleFirstInteraction, { once: true, passive: true });
          window.addEventListener("wheel", handleFirstInteraction, { once: true, passive: true });
          window.addEventListener("keydown", handleFirstInteraction, { once: true });
        });
    } else {
      setIsPlaying(true);
      startRomanticSynth();
    }
  }, [audioError, startRomanticSynth]);

  // Handle Manual Play/Pause
  const togglePlay = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      playMusic();
    } else {
      if (audio) {
        audio.pause();
      }
      stopSynth();
      setIsPlaying(false);
    }
  };

  // Listen to preloader unlock event to automatically play
  useEffect(() => {
    const handlePreloaderEvent = () => {
      playMusic();
    };

    window.addEventListener("wedding:play-music", handlePreloaderEvent);
    return () => window.removeEventListener("wedding:play-music", handlePreloaderEvent);
  }, [playMusic]);

  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, [stopSynth]);

  return (
    <>
      {/* Hidden audio element pointing to user's mp3 */}
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        loop
        preload="auto"
        onError={() => {
          setAudioError(true);
        }}
        onEnded={() => {
          if (audioRef.current) audioRef.current.play();
        }}
      />

      {/* Floating Music Controller (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={togglePlay}
          type="button"
          aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
          className={`group flex items-center gap-3 px-4 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 shadow-xl border backdrop-blur-md ${
            isPlaying
              ? "bg-[#783832] text-white border-[#bfa15f]/80 shadow-[#783832]/30"
              : "bg-white/95 text-[#783832] border-[#bfa15f]/50 hover:bg-[#f7ebe4] hover:border-[#bfa15f]"
          }`}
        >
          {/* Animated vinyl / disc badge */}
          <span className="relative flex items-center justify-center">
            {isPlaying ? (
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0ca92] opacity-75"></span>
                <Volume2 className="w-4 h-4 text-[#e0ca92]" />
              </span>
            ) : (
              <Music className="w-4 h-4 text-[#783832] group-hover:scale-110 transition-transform" />
            )}
          </span>

          <div className="flex flex-col text-left">
            <span className="font-display text-[10px] sm:text-[11px] font-semibold leading-tight">
              {isPlaying ? "Playing Song" : "Play Wedding Music"}
            </span>
            <span
              className={`text-[9px] lowercase font-serif leading-none tracking-normal truncate max-w-[130px] sm:max-w-[180px] ${
                isPlaying ? "text-[#e0ca92]" : "text-[#8b685e]"
              }`}
            >
              Until I Found You (Violin Cover)
            </span>
          </div>

          {/* Mini Play / Pause Icon Button */}
          <span className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-current">
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 translate-x-0.5" />}
          </span>

          {/* Visualizer bars */}
          {isPlaying && (
            <div className="flex items-center gap-0.5 h-3 ml-0.5">
              <span className="w-0.5 bg-[#e0ca92] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
              <span className="w-0.5 bg-[#e0ca92] rounded-full animate-[pulse_0.6s_ease-in-out_0.2s_infinite] h-2" />
              <span className="w-0.5 bg-[#e0ca92] rounded-full animate-[pulse_0.9s_ease-in-out_0.4s_infinite] h-3.5" />
            </div>
          )}
        </button>
      </div>
    </>
  );
}
