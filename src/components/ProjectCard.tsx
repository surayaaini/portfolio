// src/components/ProjectCard.tsx
"use client";

import * as React from "react";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  tech: string[];         // array of tags
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  className = "",
  ...props
}: ProjectCardProps) {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -6;
    const rotateY = ((x - width / 2) / (width / 2)) * 6;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`,
      transition: "transform 0.12s ease-out, box-shadow 0.12s ease-out",
      boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.36s cubic-bezier(.2,.9,.2,1), box-shadow 0.36s ease-in-out",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative w-full min-h-[220px] rounded-xl bg-white border border-neutral shadow-sm p-6 flex flex-col justify-between transition-all ${className}`}
      {...props}
    >
      <div>
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-sm text-black/70 leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="inline-block rounded-full bg-[#ff4d6d] text-white text-xs font-medium px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

// also export default to support default imports
export default ProjectCard;
