// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard"; 
import SkillsSection from "@/components/SkillSection";
import CertificationsSection from "@/components/CertificationSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-primary pt-24">
      {/* 👆 pt-24 adds spacing so navbar doesn’t block Hero */}
      <Navbar />
      <Hero />
      <div className="w-1/4 mx-auto border-b border-neutral mt-20"></div>

      {/* Projects Section */}
      <section id="projects" className="bg-primary py-20">

        <h2 className="text-4xl mb-12 text-center font-serif">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[1000px] mx-auto px-6 items-stretch">
        <ProjectCard
            title="KICT X-Change Web Application"
            description="A centralized platform designed to make the international mobility process clearer and more accessible for IIUM students. The system digitizes applications, staff proposals, and alumni experience sharing, enhancing communication and efficiency for both the faculty and the Office of International Affairs."
            tech={["Laravel", "PHP", "MySQL", "HTML", "CSS", "JS"]}
          />
          <ProjectCard
            title="Teleport Next Day's Post Signup Cadence"
            description="Automated lead-nurturing pipeline that reads new user entries from Google Sheets, enriches them via external APIs for CRM, and triggers a drip-email sequence to onboard and engage new signups. Includes error handling, scheduling, and templated email content for scalability."
            tech={["n8n", "APIs", "Looker Studio", "SDLC", "Automation"]}
          />
          <ProjectCard
            title="Uncovering Malaysia's Blood Donation Trends"
            description="An interactive Tableau dashboard analyzing Malaysia’s blood donation trends (2022–2025) using MOH datasets. Conducted data cleaning, statistical analysis, and visualization to uncover demographic, seasonal, and regional patterns. Determined key insights and delivered data-driven recommendations."
            tech={["Tableau", "Data Visualisation", "Spreadsheet"]}
          />
          <ProjectCard
            title="Serenity-Sphere Web Application"
            description="A calm, user-focused web application built to allow users to track and review daily wellness insights (meditation, mood, journaling). Features include user authentication, personalized dashboards, and data visualizations to reflect trends over time. Built with Next.js, Tailwind CSS, and a backend API for storing entries."
            tech={["Laravel", "PHP", "MySQL", "UI/UX"]}
          />
        </div>

      </section>
      <div className="w-1/4 mx-auto border-b border-neutral mt-15"></div>


      {/* Skills & Tech Stack Section */}
      <section id="skills" className="bg-primary py-20">
      <SkillsSection />
      <div className="w-1/4 mx-auto border-b border-neutral mt-10"></div>

      </section>

      {/* Skills & Tech Stack Section */}
      <section id="cert" className="bg-primary">
      <CertificationsSection />
      <div className="w-1/4 mx-auto border-b border-neutral mt-15"></div>

      </section>


      {/* Hobbies Section */}
      <section id="hobbies" className="bg-primary py-20">
      <h2 className="text-4xl mb-12 text-center font-serif">Hobbies & Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-[1200px] mx-auto px-6">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral">
            <span className="text-6xl">🏎️</span>
            <p className="mt-3 text-base">F1 Racing</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral">
            <span className="text-6xl">🗺️</span>
            <p className="mt-3 text-base">Travel</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral">
            <span className="text-6xl">🤼</span>
            <p className="mt-3 text-base">WWE</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral">
            <span className="text-6xl">🧁</span>
            <p className="mt-3 text-base">Baking</p>
          </div>
        </div>

      </section>
      <div className="w-1/4 mx-auto border-b border-neutral mt-10"></div>


      {/* Contact Section */}
      <section id="contact" className="bg-primary py-20 text-center">

        <h2 className="text-4xl mb-6 font-serif">Let’s Connect</h2>
        <p className="text-neutral mb-8">
          Always open to talk about good food and movies.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:surayaa0103@gmail.com" className="hover:text-accent transition-colors">
            📧 Email
          </a>
          <a
            href="https://www.linkedin.com/in/suraya-aini/"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/surayaaini"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.goodreads.com/user/show/132171139-suraya"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            📖 Goodreads
          </a>

        </div>
        
      </section>

      <footer className="border-t mt-12">
        <div className="max-w-[1200px] mx-auto px-6 py-8 text-sm text-neutral text-center">
          © {new Date().getFullYear()} Suraya Aini — Built with Next.js
        </div>
      </footer>
    </main>
  );
}
