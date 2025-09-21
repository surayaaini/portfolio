import { Marquee } from "@/components/Marquee";
import { SkillCard } from "@/components/SkillCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-primary py-20">
      <h2 className="text-4xl mb-12 text-center font-serif">Skills & Tech Stack</h2>

      {/* Front-End / Back-End Row */}
      <div className="mb-10">
        <Marquee pauseOnHover className="gap-6">
          <SkillCard name="HTML" logo="/logos/html5.svg" />
          <SkillCard name="Azure" logo="/logos/azure.png" />
          <SkillCard name="CSS" logo="/logos/css.svg" />
          <SkillCard name="JavaScript" logo="/logos/javascript.svg" />
          <SkillCard name="Next.js" logo="/logos/nextdotjs.svg" />
          <SkillCard name="n8n" logo="/logos/n8n.svg" />
          <SkillCard name="PHP" logo="/logos/php.svg" />
          <SkillCard name="Laravel" logo="/logos/laravel.svg" />
          <SkillCard name="Python" logo="/logos/python.svg" />
          <SkillCard name="C++" logo="/logos/cplusplus.svg" />
          <SkillCard name="Tableau" logo="/logos/tableau.svg" />

        </Marquee>
      </div>

      {/* Automation / Cloud Row */}
      <div>
        <Marquee reverse pauseOnHover className="gap-6">
          <SkillCard name="n8n" logo="/logos/n8n.svg" />
          <SkillCard name="Azure" logo="/logos/azure.png" />
          <SkillCard name="Google Cloud" logo="/logos/googlecloud.svg" />
          <SkillCard name="GitHub" logo="/logos/github.svg" />
          <SkillCard name="CI/CD"/>
          <SkillCard name="MySQL" logo="/logos/mysql.svg" />
          <SkillCard name="Tableau" logo="/logos/tableau.svg" />

        </Marquee>
      </div>
    </section>
  );
}
