import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main className="py-12 md:py-24 flex-1">
      {/* Hero Section */}
      <header className="mb-20">
        <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tighter mb-8 text-on-surface">
          PROJECT <br /> ARCHIVE
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-12 font-medium border-l-8 border-black pl-6">
          A curated selection of high-performance applications, focused on
          scalability, clean architecture, and exceptional user experiences.
          Built with precision and intent.
        </p>
      </header>

      {/* Project List */}
      <section className="flex flex-col gap-12 mb-32">
        {projects.map((project) => (
          <article
            key={project.tag}
            className="bg-surface-container-lowest border-[6px] border-black neo-shadow flex flex-col md:flex-row neo-shadow-hover transition-all overflow-hidden"
          >
            <div className="w-full h-64 md:h-auto md:w-2/5 lg:w-1/3 bg-surface-container border-b-[6px] md:border-b-0 md:border-r-[6px] border-black relative shrink-0">
              <Image
                style={{ objectFit: "cover" }}
                fill
                alt={project.title}
                src={project.img}
              />
              <div className="absolute top-4 left-4 bg-primary-container px-3 py-1 border-2 border-black font-headline font-bold text-xs uppercase">
                {project.tag}
              </div>
            </div>
            <div className="p-8 grow flex flex-col justify-center">
              <div className="flex flex-col mb-20">
                <h3 className="font-headline font-black text-3xl md:text-4xl uppercase mb-4 tracking-tight">
                  {project.title}
                </h3>
                <div className="font-body text-on-surface-variant space-y-4 max-w-3xl leading-relaxed">
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="bg-primary-container border-4 border-black text-center px-8 py-3 font-label font-black uppercase text-sm neo-shadow-sm neo-shadow-active transition-all block w-max"
                >
                  View More Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination Section */}
      {/* <div className="mt-20 flex justify-center">
        <button className="group flex items-center gap-4 bg-surface-container-lowest border-[6px] border-black px-12 py-5 font-headline font-black text-xl uppercase neo-shadow neo-shadow-hover neo-shadow-active transition-all">
          Load More Projects
          <span className="material-symbols-outlined font-black text-3xl transition-transform duration-500 group-hover:rotate-90">
            add
          </span>
        </button>
      </div> */}
    </main>
  );
}
