import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/home-background.jpeg"
          alt="Lush green valley with a river in New Zealand"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="new zealand landscape"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="font-headline text-5xl md:text-7xl font-bold">PRAVEDIN</h1>
            <p className="mt-2 text-md italic">
              प्रवेदिन् (Sanskrit) — means 'To know well or accurately'
            </p>
            <p className="mt-4 max-w-2xl text-lg md:text-xl">
              Exploring the intersections of technology, nature, and personal growth.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/about">
                Discover My Story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 text-center">
        <Logo markOnly className="mx-auto h-12 w-12" />
        <h2 className="mt-4 text-3xl font-headline font-semibold">A Little About Me</h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          I'm a passionate individual navigating the complexities of modern life while staying grounded in the beauty of the natural world. This space is a reflection of my journey, my work, and the things that inspire me.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold font-headline">Career & Achievements</h3>
            <p className="mt-2 text-muted-foreground">A snapshot of my professional journey and key milestones.</p>
            <Button asChild variant="link" className="mt-4 text-primary">
              <Link href="/career">View Career</Link>
            </Button>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold font-headline">Photography</h3>
            <p className="mt-2 text-muted-foreground">Capturing fleeting moments of beauty in the wild.</p>
            <Button asChild variant="link" className="mt-4 text-primary">
              <Link href="/gallery">Explore Gallery</Link>
            </Button>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold font-headline">Musings & Blog</h3>
            <p className="mt-2 text-muted-foreground">Thoughts on technology, personal development, and more.</p>
            <Button asChild variant="link" className="mt-4 text-primary">
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}