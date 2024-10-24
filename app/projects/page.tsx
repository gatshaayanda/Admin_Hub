import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "The Projects Page",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight"> Not to much... yet, hopefully.  
      </h1>
    <p>We can only take things day by day, do the best we can and with some patience and faith,
      we may get somewhere we couldn't even dream off! We are still a work in progress, just a seed, or seeds. Plenty of moving parts. <a className=" p-1 bg-blue-100 hover:grayscale rounded-lg" href="https://drive.google.com/file/d/1x84eV1mFPOYxTPsainsRxq30LB_o576Q/view?usp=drive_link">ClICK HERE! </a> to see.</p>
    </section>
  );
}
