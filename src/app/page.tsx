"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import profile from "@/assets/profile-pic.jpg";
import Button from "./_components/button";
import react from "../assets/react.svg";
import angular from "../assets/angular.svg";
import express from "../assets/express.svg";
import laravel from "../assets/laravel.svg";
import nestjs from "../assets/nestjs.svg";
import firebase from "../assets/firebase.svg";
import github from "../assets/github.svg";
import postgresql from "../assets/postgresql.svg";
import mysql from "../assets/mysql.svg";
import postman from "../assets/postman.svg";
import jest from "../assets/jest.svg";
import figma from "../assets/figma.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import nodedotjs from "../assets/nodedotjs.svg";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";

import cert1 from "@/assets/cert1.jpg";
import cert2 from "@/assets/cert2.png";
import cert3 from "@/assets/cert3.jpg";
import cert4 from "@/assets/cert4.jpg";
import Link from "next/link";

const certificates = [
  { name: "cert1", image: cert1 },
  { name: "cert2", image: cert2 },
  { name: "cert3", image: cert3 },
  { name: "cert4", image: cert4 },
];

const logosFrontend = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "TailwindCSS", logo: tailwindcss },
  { name: "Angular", logo: angular },
  { name: "React", logo: react },
];

const logosBackend = [
  { name: "Node.js", logo: nodedotjs },
  { name: "Express.js", logo: express },
  { name: "NestJS", logo: nestjs },
  { name: "Laravel", logo: laravel },
];

const logosOtherTechs = [
  { name: "MySql", logo: mysql },
  { name: "PostgreSQL", logo: postgresql },
  { name: "Firebase", logo: firebase },
  { name: "Postman", logo: postman },
  { name: "Jest", logo: jest },
  { name: "Figma", logo: figma },
  { name: "Github", logo: github },
];

const experiences = [
  {
    date: "August 2025 - Present",
    title: "Web Developer",
    comp: "Webee Labs",
    type: "Contract",
  },
  {
    date: "April 2025 - July 2025",
    title: "Web Developer",
    comp: "Backride Palawan",
    type: "Freelance",
  },
  {
    date: "February 2024 - May 2024",
    title: "Intern",
    comp: "Jairosoft Inc.",
    type: "Full-Time",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Text slamming down
      gsap.from(".hero-element", {
        y: -100,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(2)",
        duration: 0.8,
        delay: 0.2,
      });

      // 2. Image box violently scaling in
      gsap.from(".hero-image-box", {
        x: "-100vw", // Start completely off-screen to the left
        opacity: 0,
        rotation: 360,
        ease: "elastic.out(1, 1)",
        duration: 2,
        delay: 0.6,
      });

      gsap.from(".tech-logo", {
        scrollTrigger: {
          trigger: ".tech-section",
          start: "top 80%",
          toggleActions: "restart none none restart",
        },
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: "sine.in",
        duration: 0.6,
      });
    },
    { scope: container },
  );

  return (
    <main className="py-12 md:py-24 flex-1 w-full" ref={container}>
      {/* Hero Section */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <h1 className="hero-element font-headline font-black text-5xl md:text-8xl uppercase leading-[0.9] tracking-tighter mb-8 text-on-surface">
              WEB{" "}
              <span className="bg-primary-container inline-block px-4">
                DEVELOPER
              </span>{" "}
              {"&"} TECH ENTHUSIAST
            </h1>
            <p className="hero-element text-xl md:text-2xl max-w-2xl mb-12 font-medium border-l-8 border-black pl-6">
              Building reliable system where ideas meets reality. No gradients.
              No blurs. Just solid output.
            </p>
            <div className="hero-element inline-block">
              <Button buttonType="primary" className="cursor-pointer">
                LET'S BUILD
              </Button>
            </div>
          </div>
          <div className="lg:col-span-4 block">
            <div className="hero-image-box border-8 border-black bg-surface-container-lowest p-4 neo-shadow rotate-3 relative overflow-hidden">
              <Image src={profile} alt="Hero Image" width={800} height={600} />
              <div className="absolute inset-0 border-4 border-black pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="mb-32 tech-section">
        <h2 className="font-headline font-bold text-4xl uppercase mb-12 border-b-4 border-black inline-block pb-2">
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-bold text-3xl uppercase">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-4">
              {logosFrontend.map((logo) => (
                <div
                  key={logo.name}
                  data-tooltip={logo.name}
                  className="flex justify-center tech-logo"
                >
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    className="h-12 w-12 sm:h-16 sm:w-16"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-bold text-3xl uppercase">
              Backend
            </h3>
            <div className="flex flex-wrap gap-4">
              {logosBackend.map((logo) => (
                <div
                  key={logo.name}
                  data-tooltip={logo.name}
                  className="flex justify-center tech-logo"
                >
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    className="h-12 w-12 sm:h-16 sm:w-16"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-bold text-3xl uppercase">
              Other Techs
            </h3>
            <div className="flex flex-wrap gap-4">
              {logosOtherTechs.map((logo) => (
                <div
                  key={logo.name}
                  data-tooltip={logo.name}
                  className="flex justify-center tech-logo"
                >
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    className="h-12 w-12 sm:h-16 sm:w-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="space-y-12 mb-32">
        <h2 className="font-headline font-black text-4xl uppercase border-b-4 border-black inline-block pb-2">
          Certificates
        </h2>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {certificates.map((cert) => (
            <div
              key={cert.name}
              className="border-4 border-black bg-surface-container-lowest px-4 neo-shadow-hover transition-all flex flex-col"
            >
              <Image src={cert.image} height={500} alt="Certificate" />
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-32">
        <h2 className="font-headline font-bold text-4xl uppercase mb-12 border-b-4 border-black inline-block pb-2">
          Log History
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map((job, idx) => (
            <div
              key={idx}
              className="border-4 border-black bg-surface-container-low p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-surface-container transition-colors"
            >
              <div>
                <span className="font-label font-bold text-primary block mb-2">
                  {job.date}
                </span>
                <h4 className="font-headline font-black text-2xl uppercase">
                  {job.title}
                </h4>
                <p className="font-body text-on-surface-variant">{job.comp}</p>
              </div>
              <div className="bg-black text-white px-4 py-2 font-label font-bold uppercase text-xs">
                {job.type}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mb-32">
        <div
          id="contact"
          className="bg-primary-container border-8 border-black p-12 neo-shadow text-center"
        >
          <h2 className="font-headline font-black text-5xl md:text-7xl uppercase mb-8 leading-none">
            Ready for the <br />
            next sprint?
          </h2>
          <p className="font-body text-xl max-w-xl mx-auto mb-12 font-bold uppercase tracking-widest">
            Open for high-impact collaborations and technical consultancy.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button buttonType="white" className="cursor-pointer">
              Initiate Contact
            </Button>
            <Link href="/benedicto-resume.pdf" download="benedicto-resume.pdf">
              <Button buttonType="black" className="cursor-pointer">
                View Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
