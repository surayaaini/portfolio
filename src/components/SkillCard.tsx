// src/components/SkillCard.tsx
import Image from "next/image";

interface SkillCardProps {
  name: string;
  logo?: string; // path to logo image (public folder or an icon lib)
}

export function SkillCard({ name, logo }: SkillCardProps) {
  return (
    <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-neutral">
      {logo && (
        <Image
          src={logo}
          alt={name}
          width={24}
          height={24}
          className="object-contain"
        />
      )}
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
