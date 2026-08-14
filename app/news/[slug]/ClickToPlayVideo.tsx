"use client";

import { useEffect, useRef, useState } from "react";

type ClickToPlayVideoProps = {
  src: string;
  title: string;
  type: string;
};

export function ClickToPlayVideo({ src, title, type }: ClickToPlayVideoProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoUrl) return;

    void videoRef.current?.play().catch(() => {
      // Some browsers require one more click on the native play control.
    });

    return () => URL.revokeObjectURL(videoUrl);
  }, [videoUrl]);

  async function loadVideo() {
    if (loading || videoUrl) return;

    setLoading(true);
    setError(false);

    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error("Video download failed");

      const blob = await response.blob();
      setVideoUrl(URL.createObjectURL(blob));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (videoUrl) {
    return (
      <video ref={videoRef} controls playsInline preload="auto" aria-label={title}>
        <source src={videoUrl} type={type} />
        Your browser does not support embedded video.
      </video>
    );
  }

  return (
    <div className="news-video-launcher">
      <button type="button" onClick={loadVideo} disabled={loading}>
        <span className="news-video-play" aria-hidden="true">▶</span>
        <span>{loading ? "Loading video…" : "Play video"}</span>
      </button>
      {error ? (
        <p role="alert">The video could not be loaded. Please refresh the page and try again.</p>
      ) : null}
    </div>
  );
}
