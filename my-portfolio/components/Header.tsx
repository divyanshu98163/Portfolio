"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          
          <span className="font-semibold">Divyanshu Singh</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
                      href="https://www.linkedin.com/in/divyanshu-kumar-86736a257/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded hover:bg-muted transition"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>

          <a
                      href="https://github.com/divyanshu98163"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded hover:bg-muted transition"
          >
            <Github className="w-4 h-4" />
            <span className="hidden md:inline">GitHub</span>
          </a>

          <Link href="/resume.pdf" target="_blank" className="px-3 py-1 rounded border hover:bg-muted transition">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
