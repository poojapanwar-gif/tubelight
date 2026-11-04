"use client";
import React, { useEffect, useRef } from "react";

const CanvasVideo = ({ src, className, style }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animId;
    let isMounted = true;

    const video = document.createElement("video");
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.preload = "auto";

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const render = () => {
      if (!isMounted) return;
      if (video.readyState >= 2) {
        if (
          canvas.width !== video.videoWidth ||
          canvas.height !== video.videoHeight
        ) {
          canvas.width = video.videoWidth || 1920;
          canvas.height = video.videoHeight || 1080;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
      animId = requestAnimationFrame(render);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      render();
    };

    video.addEventListener("canplay", handleCanPlay);

    video.play().then(() => {
      if (isMounted) render();
    }).catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });

    return () => {
      isMounted = false;
      cancelAnimationFrame(animId);
      video.removeEventListener("canplay", handleCanPlay);
      video.pause();
      video.src = "";
      video.load();
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        WebkitMaskImage:
          "-webkit-linear-gradient(top, black calc(100% - 4px), transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black calc(100% - 4px), transparent 100%)",
        ...style,
      }}
    />
  );
};

export default CanvasVideo;

