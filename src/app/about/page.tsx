import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mountain, Target, Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Me',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          About Me
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          My story, my values, and what drives me.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <Image
            src="https://placehold.co/400x600.png"
            alt="Portrait of me"
            width={400}
            height={600}
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="portrait person"
          />
        </div>
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-3xl font-headline font-semibold text-primary">My Story</h2>
            <p className="mt-4 text-lg leading-relaxed">
              From a young age, I've been captivated by the intricate dance between human innovation and the natural world. My journey has taken me from the quiet trails of mountain ranges to the bustling heart of the tech industry. I believe in lifelong learning and am constantly seeking new skills and experiences that broaden my perspective.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              This website is my digital garden—a place to document my growth, share my passions, and connect with like-minded individuals. It's a testament to the idea that we can be both technologically adept and deeply connected to the earth.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-headline font-semibold text-primary">My Philosophy</h2>
            <p className="mt-4 text-lg leading-relaxed">
              I strive to live intentionally, balancing ambition with mindfulness. My core philosophy revolves around three pillars: continuous improvement, authentic connection, and a profound respect for our planet. I believe that the best solutions—whether in code or in life—are often the simplest and most elegant ones, inspired by the efficiency of nature itself.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center font-headline mb-12">Core Values</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-accent/20 rounded-full p-3 w-fit">
                <Mountain className="h-8 w-8 text-accent"/>
              </div>
              <CardTitle className="mt-4">Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Embracing new challenges and stepping outside my comfort zone, whether on a mountain trail or in a new project.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-accent/20 rounded-full p-3 w-fit">
                <Target className="h-8 w-8 text-accent"/>
              </div>
              <CardTitle className="mt-4">Purpose</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Seeking meaning and intention in my work and personal life, striving to make a positive impact.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-accent/20 rounded-full p-3 w-fit">
                <Coffee className="h-8 w-8 text-accent"/>
              </div>
              <CardTitle className="mt-4">Simplicity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Finding clarity and beauty in minimalist design, clean code, and uncluttered living.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
