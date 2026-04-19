import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { personalInterests } from '@/lib/placeholder-data';
import { Logo } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Personal Interests',
};

export default function InterestsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Passions & Pastimes
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          What I love to do when I'm not working.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalInterests.map((interest) => (
          <Card key={interest.id} className="text-center shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <CardHeader>
              <div className="mx-auto bg-accent/20 rounded-full p-4 w-fit">
                <Logo markOnly className="h-10 w-10" />
              </div>
              <CardTitle className="mt-4 font-headline">{interest.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{interest.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}