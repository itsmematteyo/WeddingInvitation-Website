"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Music, Volume2, Play, Pause, SkipForward } from "lucide-react";

export const PLAYLIST = [
  {
    id: 1,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    version: "Violin Cover",
    src: "/music/Until%20I%20Found%20You%20-%20Stephen%20Sanchez%20-%20Cover%20(Violin).mp3",
  },
  {
    id: 2,
    title: "Golden Hour",
    artist: "JVKE",
    version: "Cinematic Violin Cover",
    src: "/music/Golden%20Hour%20-%20JVKE%20-%20Cinematic%20Violin%20Cover%20%5BsleMoipHT8k%5D.mp3",
  },
];

export default function AudioPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setAudioError] = useState(false);

  // Dedicated audio elements for both tracks to guarantee zero-latency cross-play
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);

  const currentTrack = PLAYLIST[currentTrackIndex];

  // Web Audio Synthesizer fallback if audio files fail
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

  // Seamless Track Switcher & Player
  const playTrack = useCallback(
    (targetIndex: number) => {
      setCurrentTrackIndex(targetIndex);

      const targetAudio = targetIndex === 0 ? audio1Ref.current : audio2Ref.current;
      const otherAudio = targetIndex === 0 ? audio2Ref.current : audio1Ref.current;

      // Pause and reset the other track
      if (otherAudio) {
        try {
          otherAudio.pause();
          otherAudio.currentTime = 0;
        } catch {
          // ignore
        }
      }

      // Play the target track
      if (targetAudio) {
        targetAudio.volume = 0.85;
        targetAudio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If browser policy restricted unmuted autoplay, wait for next user touch/click/scroll
            const onFirstGesture = () => {
              if (targetAudio) {
                targetAudio
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
              window.removeEventListener("pointerdown", onFirstGesture);
              window.removeEventListener("click", onFirstGesture);
              window.removeEventListener("touchstart", onFirstGesture);
              window.removeEventListener("scroll", onFirstGesture);
              window.removeEventListener("wheel", onFirstGesture);
              window.removeEventListener("keydown", onFirstGesture);
            };

            window.addEventListener("pointerdown", onFirstGesture, { once: true, passive: true });
            window.addEventListener("click", onFirstGesture, { once: true });
            window.addEventListener("touchstart", onFirstGesture, { once: true, passive: true });
            window.addEventListener("scroll", onFirstGesture, { once: true, passive: true });
            window.addEventListener("wheel", onFirstGesture, { once: true, passive: true });
            window.addEventListener("keydown", onFirstGesture, { once: true });
          });
      }
    },
    [startRomanticSynth]
  );

  // When Track 1 finishes -> Automatically play Track 2
  const handleTrack1Ended = useCallback(() => {
    playTrack(1);
  }, [playTrack]);

  // When Track 2 finishes -> Automatically play Track 1 (vice versa)
  const handleTrack2Ended = useCallback(() => {
    playTrack(0);
  }, [playTrack]);

  // Manual Skip to next song
  const handleNextTrack = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      const nextIndex = currentTrackIndex === 0 ? 1 : 0;
      playTrack(nextIndex);
    },
    [currentTrackIndex, playTrack]
  );

  // Toggle Play / Pause
  const togglePlay = () => {
    const activeAudio = currentTrackIndex === 0 ? audio1Ref.current : audio2Ref.current;

    if (!isPlaying) {
      if (activeAudio) {
        activeAudio.volume = 0.85;
        activeAudio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            playTrack(currentTrackIndex);
          });
      } else {
        playTrack(currentTrackIndex);
      }
    } else {
      if (activeAudio) {
        activeAudio.pause();
      }
      stopSynth();
      setIsPlaying(false);
    }
  };

  // Listen to preloader unlock event to automatically start with Track 1
  useEffect(() => {
    const handlePreloaderEvent = () => {
      playTrack(0);
    };

    window.addEventListener("wedding:play-music", handlePreloaderEvent);
    return () => window.removeEventListener("wedding:play-music", handlePreloaderEvent);
  }, [playTrack]);

  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, [stopSynth]);

  return (
    <>
      {/* Track 1: Until I Found You (Violin Cover) */}
      <audio
        ref={audio1Ref}
        src={PLAYLIST[0].src}
        preload="auto"
        onError={() => setAudioError(true)}
        onEnded={handleTrack1Ended}
      />

      {/* Track 2: Golden Hour (Cinematic Violin Cover) */}
      <audio
        ref={audio2Ref}
        src={PLAYLIST[1].src}
        preload="auto"
        onError={() => setAudioError(true)}
        onEnded={handleTrack2Ended}
      />

      {/* Floating Music Controller (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <div
          className={`flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 shadow-xl border backdrop-blur-md ${
            isPlaying
              ? "bg-[#783832] text-white border-[#bfa15f]/80 shadow-[#783832]/30"
              : "bg-white/95 text-[#783832] border-[#bfa15f]/50 hover:bg-[#f7ebe4] hover:border-[#bfa15f]"
          }`}
        >
          {/* Main Play / Pause interactive trigger */}
          <button
            onClick={togglePlay}
            type="button"
            aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
            className="flex items-center gap-2.5 focus:outline-none text-left cursor-pointer"
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
              <span className="font-display text-[10px] sm:text-[11px] font-semibold leading-tight flex items-center gap-1.5">
                <span>{isPlaying ? "Now Playing" : "Play Music"}</span>
                <span className="text-[9px] opacity-70 font-sans">
                  ({currentTrackIndex + 1}/{PLAYLIST.length})
                </span>
              </span>
              <span
                className={`text-[9px] font-serif leading-none tracking-normal truncate max-w-[120px] sm:max-w-[180px] ${
                  isPlaying ? "text-[#e0ca92]" : "text-[#8b685e]"
                }`}
              >
                {currentTrack.title} ({currentTrack.version})
              </span>
            </div>

            {/* Mini Play / Pause Icon Button */}
            <span className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-current">
              {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 translate-x-0.5" />}
            </span>
          </button>

          {/* Next Song Skip Button */}
          <button
            onClick={handleNextTrack}
            type="button"
            title="Next song"
            aria-label="Skip to next song"
            className="p-1 rounded-full text-current hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          {/* Equalizer Visualizer bars */}
          {isPlaying && (
            <div className="flex items-center gap-0.5 h-3 ml-0.5 pointer-events-none">
              <span className="w-0.5 bg-[#e0ca92] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
              <span className="w-0.5 bg-[#e0ca92] rounded-full animate-[pulse_0.6s_ease-in-out_0.2s_infinite] h-2" />
              <span className="w-0.5 bg-[#e0ca92] rounded-full animate-[pulse_0.9s_ease-in-out_0.4s_infinite] h-3.5" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
