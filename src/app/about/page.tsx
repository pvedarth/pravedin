import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, Target, Heart } from 'lucide-react';

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
            src="/profile.png"
            alt="Prashanth Vedartham"
            width={400}
            height={600}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-3xl font-headline font-semibold text-primary">My Story</h2>
            <p className="mt-4 text-lg leading-relaxed">
              I'm Prashanth — an IT professional with 14+ years of international experience spanning financial services, healthcare, and technology. My career has taken me from managing mission-critical infrastructure at global enterprises like Fidelity Investments and Cisco, to completing a Master of Digital Business with First Class Honours from the University of Waikato, and now building customer success at a New Zealand healthtech startup.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              In mid 2023, I made the leap to New Zealand — a country that has rewarded me with breathtaking landscapes, a gentler pace of life, and a renewed sense of what matters. This website is my digital home: a place to share my journey, my thinking, and the things that inspire me along the way.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-headline font-semibold text-primary">What Drives Me</h2>
            <p className="mt-4 text-lg leading-relaxed">
              I am drawn to the intersection of strategy, technology, and people. Whether it's designing resilient IT services, exploring how AI can transform organisations, or volunteering for causes close to my heart — mental health, education, and conservation — I seek to contribute meaningfully. I believe that clarity of purpose, continuous learning, and genuine human connection are the foundations of a life well lived.
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
                <Compass className="h-8 w-8 text-accent"/>
              </div>
              <CardTitle className="mt-4">Curiosity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Staying open to new ideas, places, and perspectives — whether in technology, nature, or the quiet moments in between.</p>
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
              <p>Seeking meaning and intention in my work and personal life, and striving to make a quiet but lasting positive impact.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-accent/20 rounded-full p-3 w-fit">
                <Heart className="h-8 w-8 text-accent"/>
              </div>
              <CardTitle className="mt-4">Connection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Valuing authentic relationships — with people, with nature, and with the communities I am part of wherever I am in the world.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}