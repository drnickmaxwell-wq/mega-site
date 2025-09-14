"use client";

import React from "react";
import SparkleButton from "@/components/ui/SparkleButton";

export default function PreviewInk() {
  const year = new Date().getFullYear();
  return (
    <div className="theme-ink min-h-screen flex flex-col">
      <header className="p-4 container mx-auto">
        <h1 className="text-3xl font-semibold">St Mary\u2019s House Dental Care</h1>
      </header>
      <main className="flex-1 container mx-auto flex flex-col justify-center items-center gap-4 px-4">
        <h2 className="text-4xl font-bold text-center">Leading Dental Care</h2>
        <p className="text-lg text-center max-w-2xl">
          Experience the exceptional dental services at St Mary\u2019s House Dental Care.
        </p>
        <div className="flex gap-4">
          <SparkleButton as="a" href="#" variant="primary" size="lg">
            Book Appointment
          </SparkleButton>
          <SparkleButton as="a" href="#" variant="magenta" size="lg">
            View Treatments
          </SparkleButton>
        </div>
      </main>
      <footer className="p-4 container mx-auto text-center">
        &copy; {year} St Mary\u2019s House Dental Care. All rights reserved.
      </footer>
    </div>
  );
}
