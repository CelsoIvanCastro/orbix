import Image from "next/image";

type OrbixLogoProps = { className?: string; compact?: boolean };

export default function OrbixLogo({ className = "", compact = false }: OrbixLogoProps) {
  return <Image className={className} src={compact ? "/orbix-wordmark-clean.svg" : "/orbix-logo-clean.svg"} alt="Orbix Real Estate & Design" width={310} height={compact ? 125 : 132} priority />;
}
