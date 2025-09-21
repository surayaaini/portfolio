// src/components/CertificationCard.tsx
import Image from "next/image";

interface CertificationCardProps {
  title: string;
  issuer: string;
  short: string;
  logo: string;
  link?: string; // <-- added this
}

export default function CertificationCard({
  title,
  issuer,
  short,
  logo,
  link,
}: CertificationCardProps) {
  const CardContent = (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm h-full 
                 transition-transform transform hover:scale-105 hover:shadow-lg border-1 cursor-pointer"
    >
      <Image
        src={logo}
        alt={title}
        width={48}
        height={48}
        className="mb-4 object-contain"
      />
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-neutral-600 mb-1">{issuer}</p>
      <p className="text-sm text-neutral-500 text-center">{short}</p>
    </div>
  );

  // Wrap with <a> only if link exists
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}
