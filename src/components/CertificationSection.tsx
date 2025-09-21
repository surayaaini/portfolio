// src/components/CertificationsSection.tsx
import CertificationCard from "@/components/CertificationCard";

const CERTS = [
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    short: "Intro to AI concepts and Azure AI services.",
    logo: "/logos/azure.png",
    link: "https://www.credly.com/badges/9f985100-eee9-4e5c-9602-3c4cfcbf9ae3?source=linked_in_profile",
  },
  {
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    short: "Design & implement Azure AI solutions.",
    logo: "/logos/azure.png",
    link: "https://learn.microsoft.com/en-gb/users/surayaaini-6502/credentials/e0b0cfd1451d80dc?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "Google Data Analytics v2",
    issuer: "Coursera / Google",
    short: "Foundations of data analysis and visualization.",
    logo: "/logos/googlecloud.svg",
    link: "https://www.credly.com/badges/517453be-1b24-4a56-8f75-a23214a8ba14/linked_in_profile",
  },
  {
    title: "Google UX Design",
    issuer: "Coursera / Google",
    short: "UX design foundations & portfolio projects.",
    logo: "/logos/googlecloud.svg",
    link: "https://www.credly.com/badges/ad44ac65-408e-4231-9ce0-8a34e8b4e7d4/linked_in_profile",
  },
  {
    title: "Intro to Blockchain Technologies",
    issuer: "INSEAD",
    short: "Foundational blockchain principles & applications.",
    logo: "/logos/coursera.svg",
    link: "https://www.coursera.org/account/accomplishments/verify/TMEHN9KZNK8E",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "CISCO",
    short: "Networking concepts, protocols, and architecture.",
    logo: "/logos/cisco.svg",
    link: "https://www.credly.com/badges/e4dbf537-fd94-4c29-8447-3db48c2d4255/linked_in_profile",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-primary py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl mb-8 text-center font-serif">
          Education & Certifications
        </h2>

        <p className="text-lg text-center text-neutral-700 font-light mb-12">
          <span className="block font-semibold">
            International Islamic University Malaysia (IIUM)
          </span>
          <span className="block">
            Bachelor of IT (Hons.) • Expected Graduation:{" "}
            <span className="italic">March 2026</span>
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CERTS.map((c, i) => (
            <CertificationCard
              key={i}
              title={c.title}
              issuer={c.issuer}
              short={c.short}
              logo={c.logo}
              link={c.link} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
