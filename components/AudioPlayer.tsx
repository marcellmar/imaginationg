import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  title?: string;
  duration?: string;
  spotifyUrl?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, duration, spotifyUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      setProgress((currentTime / duration) * 100);

      const mins = Math.floor(currentTime / 60);
      const secs = Math.floor(currentTime % 60).toString().padStart(2, '0');
      setCurrentTime(`${mins}:${secs}`);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bar = e.currentTarget;
      const rect = bar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime('0:00');
  };

  // If Spotify URL provided, show Spotify embed instead
  if (spotifyUrl) {
    const episodeId = spotifyUrl.split('/episode/')[1]?.split('?')[0];
    return (
      <div className="bg-white border border-stone-200 rounded-lg p-4 mb-8">
        <div className="text-xs font-mono text-stone-400 mb-3">LISTEN TO THIS ANALYSIS</div>
        <iframe
          src={`https://open.spotify.com/embed/episode/${episodeId}?theme=0`}
          width="100%"
          height="152"
          allow="encrypted-media"
          className="rounded-lg"
        />
      </div>
    );
  }

  return (
    <div className="bg-white border border-stone-200 rounded-lg p-4 mb-8">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />

      <div className="flex items-center gap-4">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors flex-shrink-0 text-white"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
        </button>

        {/* Info + Progress */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-stone-400">LISTEN TO THIS ANALYSIS</div>
            <div className="text-xs font-mono text-stone-500">
              {currentTime} {duration && `/ ${duration}`}
            </div>
          </div>

          {title && (
            <div className="text-sm font-bold text-stone-600 truncate mb-2">{title}</div>
          )}

          {/* Progress Bar */}
          <div
            onClick={handleSeek}
            className="h-2 bg-stone-200 rounded-full cursor-pointer overflow-hidden"
          >
            <div
              className="h-full bg-red-600 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Mute */}
        <button
          onClick={toggleMute}
          className="text-stone-500 hover:text-stone-900 transition-colors flex-shrink-0"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
