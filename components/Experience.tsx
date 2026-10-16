import Image from "next/image";
import { HolographicCard } from "@/components/ui/holographic-card";
import { cn } from "@/lib/utils";

interface Experience {
  company: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  logo?: string;
  featured?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Safran Landing Systems",
    role: "Software Developer Co-op",
    year: "'26 – Now",
    description:
      "Desktop and web apps on the Microsoft stack in C# and ASP.NET with React and Vue front ends, plus SQL Server (SSIS/SSRS), Power BI reports, and SharePoint workflows in Nintex.",
    tags: ["C#", "ASP.NET", "SQL Server", "Power BI", "PowerShell"],
    logo: "/safran.jpeg",
    featured: true,
  },
  {
    company: "EMA Nonprofit Technologies",
    role: "Software Engineer Intern",
    year: "'26",
    description:
      "Full-stack features for a Canadian fintech donation platform, including a real-time Blazor admin dashboard that turns live SQL Server data into Chart.js visuals.",
    tags: ["C#", "Blazor", "SQL Server", "Azure"],
    logo: "/ema.png",
  },
  {
    company: "Pharma 360 Solutions",
    role: "Software Engineer Intern",
    year: "'26",
    description:
      "Real-time service health dashboard in React showing per-service success and failure rates from live backend data for a pharmaceutical operations platform.",
    tags: ["React", "JavaScript", "Real-time", "Data viz"],
    logo: "/pharma360.jpg",
  },
  {
    company: "Brand Love Inc.",
    role: "Full-Stack Developer",
    year: "'26",
    description:
      "Built ContinuityOS — an executive dashboard aggregating ClickUp, Vapi, and Apollo, with an LLM that translates metrics into plain-English insights.",
    tags: ["Next.js", "Tailwind", "Supabase", "LLMs"],
    logo: "/brandloveinc_logo.jpeg",
  },
  {
    company: "Wouessi Digital",
    role: "Software Engineering Intern",
    year: "'25",
    description:
      "Web onboarding form for new hires in React with Java/Python backend handling account setup, permissions, and tool access — reducing manual coordination.",
    tags: ["React", "Java", "Python", "Agile"],
    logo: "/Wouessi_logo.jpeg",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/80">
      {children}
    </span>
  );
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("");
}

function SectionCard({ company, role, year, description, tags, logo, featured }: Experience) {
  return (
    <HolographicCard
      className={cn(
        "group rounded-xl border border-white/10 bg-white/[0.03] p-[22px]",
        featured && "md:col-span-2"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/[0.06]">
            {logo ? (
              <Image
                src={logo}
                alt={`${company} logo`}
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            ) : (
              <span aria-hidden="true" className="text-[11px] font-medium text-white/80">
                {initials(company)}
              </span>
            )}
          </div>
          <span className="text-[12px] text-white">{company}</span>
        </div>
        <span className="font-mono text-[10px] text-white/40">{year}</span>
      </div>
      <h3
        className="mt-7 text-[22px] font-medium leading-[1.05] tracking-[-0.02em]"
        style={{
          background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {role}
      </h3>
      <p className="mt-3 text-[13px] leading-[1.65] text-white/62">{description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((t) => <Pill key={t}>{t}</Pill>)}
      </div>
    </HolographicCard>
  );
}

export function Experience() {
  return (
    <section className="relative" id="work">
      <div className="mx-auto max-w-7xl px-6 py-[120px] lg:px-12">
        <div className="mx-auto max-w-[680px] text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-white/62">
            <span className="relative inline-block w-3.5 h-px bg-white/40" />
            <span className="font-serif italic text-[15px] text-white/90">Experience</span>
          </div>
          <h2
            className="mt-6 text-[40px] font-medium tracking-[-0.035em] md:text-[56px]"
            style={{
              background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.0,
            }}
          >
            Shipped in production.
            <br />
            From intern to lead.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3">
          {experiences.map((exp) => <SectionCard key={exp.company} {...exp} />)}
        </div>
      </div>
      <div className="h-px bg-white/10" />
    </section>
  );
}
