import ein1 from "@/assets/ein1.png";
import ein2 from "@/assets/ein2.png";
import ein3 from "@/assets/ein3.png";
import ein4 from "@/assets/ein4.png";
import ein5 from "@/assets/ein5.png";
import ein6 from "@/assets/ein6.png";

import obs1 from "@/assets/obs1.png";
import obs2 from "@/assets/obs2.png";
import obs3 from "@/assets/obs3.png";
import obs4 from "@/assets/obs4.png";
import obs5 from "@/assets/obs5.png";

import dtcars1 from "@/assets/dtcars1.jpg";
import dtcars2 from "@/assets/dtcars2.png";

import react from "@/assets/react.svg";
import angular from "@/assets/angular.svg";
import express from "@/assets/express.svg";
import nestjs from "@/assets/nestjs.svg";
import firebase from "@/assets/firebase.svg";
import github from "@/assets/github.svg";
import postgresql from "@/assets/postgresql.svg";
import tailwindcss from "@/assets/tailwindcss.svg";
import nodedotjs from "@/assets/nodedotjs.svg";
import html from "@/assets/html5.svg";
import css from "@/assets/css.svg";
import typescript from "@/assets/typescript.svg";
import javascript from "@/assets/javascript.svg";
import { StaticImageData } from "next/image";

export interface Tech {
  name: string;
  img: any;
}

export interface Project {
  slug: string;
  tag: string;
  techs: Tech[];
  title: string;
  description: string;
  img: StaticImageData;
  images?: StaticImageData[];
  link: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "obsentry",
    tag: "Vehicle Tracking",
    techs: [
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "JavaScript", img: javascript },
      { name: "Nodejs", img: nodedotjs },
      { name: "Express.js", img: express },
      { name: "Firebase", img: firebase },
      { name: "Github", img: github },
    ],
    title: "Obsentry",
    description: `A system that uses web app to monitor data relating to gps, gas sensor, and rfid. This system aims to help monitor untracked school vehicle in University of Mindanao. 
      Incorporating Arduino to code the sensors data capturing, then the extracted SSL with HTTP module allows it to send data to the deployed web. 
      The Socket.io with Leafletjs enables realtime features for Map and sensors data display`,
    img: obs1,
    images: [obs1, obs2, obs3, obs4, obs5],
    link: "https://um-obsentry.onrender.com/",
    features: [
      "Real-time GPS tracking of vehicles",
      "Gas sensor data monitoring",
      "RFID, Gas Sensor, and GPS Sensor integration for passenger tracking",
      "Responsive web dashboard",
      "Authentication",
    ],
  },
  {
    slug: "eingress",
    tag: "Door Lock System",
    techs: [
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "TypeScript", img: typescript },
      { name: "Angular", img: angular },
      { name: "Nodejs", img: nodedotjs },
      { name: "Nestjs", img: nestjs },
      { name: "Postgresql", img: postgresql },
      { name: "Github", img: github },
    ],
    title: "Eingress",
    description: `A door lock system made to secure and monitor the company building
      The admin has a user management feature to also monitor users in and out also their personal details
      My role as Frontend Developer helps me understand ui/ux principles, browser dev tools, client-server, rendering, and security`,
    img: ein1,
    images: [ein1, ein2, ein3, ein4, ein5, ein6],
    link: "",
    features: [
      "Secure door lock monitoring",
      "Employee access tracking",
      "Robust REST API with Nestjs",
      "Relational database management",
      "Authentication and Authorization",
    ],
  },
  {
    slug: "dt-cars",
    tag: "Car Dealership",
    techs: [
      { name: "HTML", img: html },
      { name: "TailwindCSS", img: tailwindcss },
      { name: "TypeScript", img: typescript },
      { name: "React", img: react },
      { name: "Nodejs", img: nodedotjs },
      { name: "Express.js", img: express },
      { name: "Firebase", img: firebase },
      { name: "Github", img: github },
    ],
    title: "DT Cars Davao",
    description: `A webapp that supports DT Cars to showcase their vehicles and display informations to help the client in selecting excellent quality cars with admin that monitor and manage cars data.
      As a Fullstack Developer and Project Manager, I learned how to develop production grade website also meet and support client needs to elevate business process, moreover to bear responsibilities, learning, and improving after the project is deployed`,
    img: dtcars1,
    images: [dtcars1, dtcars2],
    link: "https://www.dtcarsdavao.ph/",
    features: [
      "Dynamic vehicle showcase page",
      "Image and Data caching",
      "Firebase integration",
      "Client inquiry system",
      "Mobile-friendly sleek UI",
    ],
  },
];
