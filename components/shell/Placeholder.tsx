import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  intro?: string;
  links?: Array<{ href: string; label: string }>;
};

export default function Placeholder({ title, intro, links = [] }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
      {intro ? <p className="mt-4 text-lg text-neutral-600">{intro}</p> : null}
      {links.length > 0 && (
        <ul className="mt-8 grid gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="text-blue-600 underline hover:no-underline" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
