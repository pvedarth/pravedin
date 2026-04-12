import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { futurePlans } from '@/lib/placeholder-data';
import { Rocket, BookOpen, Globe, Mountain, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Future Plans',
};

const planIcons: { [key: string]: React.ReactNode } = {
  rocket: <Rocket className="h-10 w-10 text-accent" />,
  book: <BookOpen className="h-10 w-10 text-accent" />,
  globe: <Globe className="h-10 w-10 text-accent" />,
  mountain: <Mountain className="h-10 w-10 text-accent" />,
  code: <Code className="h-10 w-10 text-accent" />,
};

export default function FuturePlansPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Future Plans & Aspirations
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Charting the course for the adventures that lie ahead.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {futurePlans.map((plan) => (
          <Card key={plan.id} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-accent/20 rounded-full p-4">
                {planIcons[plan.icon] || <Rocket className="h-8 w-8 text-accent"/>}
              </div>
              <CardTitle className="text-2xl font-headline">{plan.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">{plan.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
