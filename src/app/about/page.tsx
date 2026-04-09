"use client";

import Image from "next/image";
import toga from "@/assets/toga-pic.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";
import Button from "../_components/button";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function About() {
  const container = useRef<HTMLElement>(null);

  const email = "vaughnfitz27@gmail.com";
  const subject = encodeURIComponent("Project Inquiry");
  const body = encodeURIComponent("Hi, I saw your portfolio and...");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  useGSAP(
    () => {
      // 2. Image box violently scaling in
      gsap.from(".hero-image-box", {
        x: "-100vw",
        opacity: 0,
        rotation: -360,
        ease: "elastic.out(1, 2)",
        duration: 1,
        delay: 0.5,
      });
      //3. Typing Animation
      gsap.from(".hero-headline", {
        width: 0,
        duration: 1.5,
        ease: "steps(20)",
        stagger: 1,
      });

      const mm = gsap.matchMedia();

      // Define your breakpoints
      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          // Access the boolean flags from the conditions defined above
          let { isMobile, isTablet, isDesktop } = context.conditions as any;

          // 1. Line draws on scroll (Logic shared but values dynamic)
          gsap.fromTo(
            ".timeline-line",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".timeline-container",
                start: isMobile
                  ? "top 80%"
                  : isTablet
                    ? "top 70%"
                    : "top center",
                end: isMobile
                  ? "bottom 60%"
                  : isTablet
                    ? "bottom 50%"
                    : "bottom center",
                scrub: 0.5,
                invalidateOnRefresh: true,
              },
            },
          );

          // 2. Cards animate in
          gsap.utils.toArray(".timeline-card").forEach((card: any) => {
            const shape = card.querySelector(".timeline-shape");
            const content = card.querySelector(".timeline-content");

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: isMobile
                  ? "top 85%"
                  : isTablet
                    ? "top 75%"
                    : "top center",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            });

            tl.from(shape, {
              scale: 0,
              opacity: 0,
              duration: isMobile ? 0.3 : isTablet ? 0.35 : 0.4,
              ease: `back.out(${isMobile ? 1.5 : isTablet ? 1.7 : 2})`,
            }).from(
              content,
              {
                // Custom X or Y movement based on device
                y: isMobile ? 30 : 0,
                x: isMobile ? 0 : isTablet ? 30 : 50,
                opacity: 0,
                duration: isMobile ? 0.4 : isTablet ? 0.45 : 0.5,
                ease: "power2.out",
              },
              "-=0.15",
            );
          });
        },
      );
    },
    { scope: container },
  );

  return (
    <main className="md:py-24 space-y-32 flex-1" ref={container}>
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 order-2 lg:order-1 hero-image-box">
          <div className="border-8 border-black bg-surface-container-lowest p-4 neo-shadow rotate-3 aspect-square relative overflow-hidden">
            <Image src={toga} alt="Hero Image" width={800} height={600} />
            <div className="absolute inset-0 border-4 border-black pointer-events-none"></div>
          </div>
        </div>
        <div className="lg:col-span-8 order-1 lg:order-2 space-y-8 hero-element pt-12 lg:pt-0">
          <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-8xl uppercase tracking-tighter overflow-hidden whitespace-nowrap border-r-4 border-black hero-headline inline-block animate-cursor">
            WHO IS{" "}
            <span className="bg-primary-container inline-block px-4">
              VAUGHN?
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium border-l-8 border-black pl-6 max-w-2xl">
            From the hometown of Davao City, a graduate of BS in Computer
            Engineering in University of Mindanao and a Full-Stack Web Developer
            obsessed with crafting and learning this vast field of web
            development.
          </p>
        </div>
      </section>

      {/* The Journey Timeline */}
      <section className="space-y-8 md:space-y-12 overflow-hidden">
        <h2 className="font-headline font-black text-4xl md:text-5xl border-b-8 border-black inline-block pb-2 uppercase">
          THE JOURNEY
        </h2>

        <div className="flex flex-col gap-8 md:gap-12 relative pb-4 md:pb-8 timeline-container">
          {/* Vertical Line for timeline effect */}
          <div className="absolute left-5 md:left-12 top-2 md:top-4 bottom-0 w-2 bg-black z-0 neo-shadow origin-top timeline-line"></div>

          {/* Card 1 */}
          <div className="relative z-10 pl-14 md:pl-28 timeline-card">
            <div className="absolute left-3 md:left-10 top-8 md:top-10 w-6 h-6 bg-red-400 border-4 border-black z-20 rotate-45 transform timeline-shape"></div>
            <div className="border-black bg-white p-6 md:p-10 neo-shadow border-[6px] timeline-content">
              <span className="font-headline font-black text-lg md:text-xl mb-4 bg-black text-white inline-block px-4 py-1 uppercase neo-shadow">
                1 / The Spark
              </span>
              <p className="text-lg md:text-xl leading-relaxed font-body mt-4 md:mt-6">
                My journey started as a student in{" "}
                <strong className="bg-red-200 px-2 py-1 border-2 border-black uppercase text-sm md:text-base align-middle inline-block rotate-1">
                  University of Mindanao
                </strong>{" "}
                who just wanted to pass a research subject with the project{" "}
                <em className="font-bold border-b-4 border-black not-italic bg-red-100">
                  Obsentry
                </em>{" "}
                . But along the way, I found myself captivated by the endless
                possibilities of the web.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative z-10 pl-14 md:pl-28 timeline-card">
            <div className="absolute left-3 md:left-10 top-8 md:top-10 w-6 h-6 bg-gray-400 border-4 border-black z-20 rotate-45 transform timeline-shape"></div>
            <div className="border-black bg-white p-6 md:p-10 neo-shadow border-[6px] timeline-content">
              <span className="font-headline font-black text-lg md:text-xl mb-4 bg-black text-white inline-block px-4 py-1 uppercase neo-shadow">
                2 / The Foundation
              </span>
              <p className="text-lg md:text-xl leading-relaxed font-body mt-4 md:mt-6">
                During my internship at{" "}
                <strong className="bg-gray-200 px-2 py-1 border-2 border-black uppercase text-sm md:text-base align-middle inline-block -rotate-1">
                  Jairosoft
                </strong>
                , I was blessed to work with friends in a real software
                environment. Developing{" "}
                <em className="font-bold border-b-4 border-black not-italic bg-gray-100">
                  Eingress
                </em>{" "}
                didn't just sharpen my coding skills, it taught me the
                real-world value of Agile Scrum and intense collaboration.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative z-10 pl-14 md:pl-28 timeline-card">
            <div className="absolute left-3 md:left-10 top-8 md:top-10 w-6 h-6 bg-green-400 border-4 border-black z-20 rotate-45 transform timeline-shape"></div>
            <div className="border-black bg-white p-6 md:p-10 neo-shadow border-[6px] timeline-content">
              <span className="font-headline font-black text-lg md:text-xl mb-4 bg-black text-white inline-block px-4 py-1 uppercase neo-shadow">
                3 / The Expansion
              </span>
              <p className="text-lg md:text-xl leading-relaxed font-body mt-4 md:mt-6">
                I jumped into freelancing with{" "}
                <strong className="bg-green-200 px-2 py-1 border-2 border-black uppercase text-sm md:text-base align-middle inline-block rotate-1">
                  Backride Pinas
                </strong>
                . This role opened my eyes to how massive enterprise projects
                operate and scale. Though the time was short, the technical and
                business lessons were invaluable.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative z-10 pl-14 md:pl-28 timeline-card">
            <div className="absolute left-3 md:left-10 top-8 md:top-10 w-6 h-6 bg-blue-400 border-4 border-black z-20 rotate-45 transform timeline-shape"></div>
            <div className="border-black bg-white p-6 md:p-10 neo-shadow border-[6px] timeline-content">
              <span className="font-headline font-black text-lg md:text-xl mb-4 bg-black text-white inline-block px-4 py-1 uppercase neo-shadow">
                4 / The Next Chapter
              </span>
              <p className="text-lg md:text-xl leading-relaxed font-body mt-4 md:mt-6">
                The journey continued with{" "}
                <strong className="bg-blue-200 px-2 py-1 border-2 border-black uppercase text-sm md:text-base align-middle inline-block -rotate-1">
                  Born Digital
                </strong>
                , where I leveled up my expertise in crafting bulletproof
                digital experiences. At the end of the day, I don't just write
                code—I empower people to achieve their grandest goals through
                the web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-32">
        <div className="bg-primary-container border-8 border-black p-12 md:p-20 neo-shadow text-center mb-12">
          <h2 className="font-headline font-black text-4xl md:text-6xl uppercase mb-12 leading-none">
            WANT TO WORK <br />
            TOGETHER?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href={gmailUrl} className="cursor-pointer">
              <Button buttonType="white" className="cursor-pointer">
                Initiate Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
