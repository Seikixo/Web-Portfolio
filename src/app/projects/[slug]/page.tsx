import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export default async function ProjectDetail({ params }: { params: Params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-12 md:py-24 flex-1">
      {/* Navigation */}
      <div className="mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-surface-container-lowest border-4 border-black px-6 py-2 font-label font-bold uppercase text-sm neo-shadow-sm neo-shadow-active transition-all"
        >
          <span className="material-symbols-outlined sm:text-xl">
            arrow_back
          </span>
          Back to Projects
        </Link>
      </div>

      <article className="flex flex-col gap-12">
        {/* Header Section */}
        <header className="flex flex-col gap-6">
          <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tighter text-on-surface">
            {project.title}
          </h1>
        </header>

        {/* Hero Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          {(project.images || [project.img]).map((image, idx) => (
            <div
              key={idx}
              className="w-full h-72 lg:h-[400px] relative bg-surface-container border-[6px] border-black neo-shadow overflow-hidden"
            >
              <Image
                style={{ objectFit: "cover" }}
                fill
                alt={`${project.title} - Image ${idx + 1}`}
                src={image}
                priority={idx < 2}
              />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 mt-4">
          <div className="lg:w-2/3">
            <h2 className="font-headline font-black text-2xl md:text-4xl uppercase mb-6 border-b-8 border-[#fed01b] w-max pb-2">
              Project Overview
            </h2>
            <div className="font-body text-xl md:text-2xl text-on-surface leading-relaxed border-l-8 border-black pl-6 py-2 whitespace-pre-line">
              <p>{project.description}</p>
            </div>

            {/* Extended Info for Neobrutalism UI */}
            <div className="mt-12 space-y-8 bg-surface-container border-4 border-black p-6 md:p-8 neo-shadow-sm">
              <h3 className="font-headline font-black text-2xl uppercase">
                Key Features
              </h3>
              <ul className="list-disc list-inside font-body text-lg space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:w-1/3 flex flex-col gap-8">
            <div className="bg-surface-container-highest border-[6px] border-black p-8 neo-shadow">
              <h3 className="font-headline font-black text-2xl uppercase mb-6 text-on-surface">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-surface-container-lowest border-2 border-black p-3 hover:-translate-y-1 transition-transform"
                    data-tooltip={tech.name}
                  >
                    <Image
                      alt={tech.name}
                      src={tech.img}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#fed01b] border-[6px] border-black p-8 neo-shadow text-black">
              <h3 className="font-headline font-black text-2xl uppercase mb-4 ">
                Live Preview
              </h3>
              <div className="mb-12">
                <p className="font-body font-medium">
                  Want to see this project in action? Visit the live repository
                  or deployed application.
                </p>
              </div>

              <div>
                <Link
                  className="w-full bg-surface-container-lowest text-on-surface border-4 border-black text-center px-8 py-4 font-label font-black uppercase text-base neo-shadow-sm neo-shadow-active transition-all"
                  href={project.link}
                >
                  View Live Site
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
