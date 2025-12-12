import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-background/80 border-t backdrop-blur-md py-4 z-50">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">made with ❤️ by Divyanshu Singh</p>

                <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/divyanshu-kumar-86736a257/" target="_blank" rel="noreferrer" className="hover:text-primary">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/divyanshu98163" target="_blank" rel="noreferrer" className="hover:text-primary">
                        <Github className="w-5 h-5" />
                    </a>
                    <Link href="/resume.pdf" className="text-sm px-3 py-1 rounded border hover:bg-muted">Resume</Link>
                </div>
            </div>
        </footer>
    );
}
