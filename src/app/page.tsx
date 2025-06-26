import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Hi, I'm Your Name
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-xl">
        I'm a passionate developer building modern web experiences with Next.js,
        TypeScript, and Tailwind CSS.
      </p>
      <Button asChild size="lg">
        <Link href="/projects">View My Projects</Link>
      </Button>
    </main>
  );
}
