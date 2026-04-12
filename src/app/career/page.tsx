import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, Calendar, Award } from 'lucide-react';
import { careerHistory, keyAchievements } from '@/lib/placeholder-data';

export const metadata: Metadata = {
  title: 'Career & Achievements',
};

export default function CareerPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Career & Achievements
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          My professional path and key accomplishments along the way.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center font-headline mb-12">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-border"></div>
          {careerHistory.map((job, index) => (
            <div key={job.id} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2"></div>
              <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      {index % 2 === 1 && <h3 className="text-lg font-semibold">{job.company}</h3>}
                      <Briefcase className="h-8 w-8 text-primary"/>
                      {index % 2 === 0 && <h3 className="text-lg font-semibold">{job.company}</h3>}
                    </div>
                    <CardTitle className="text-xl font-headline mt-2">{job.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <Calendar className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                    <p>{job.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center font-headline mb-12">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyAchievements.map((achievement) => (
                <Card key={achievement.id} className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-accent/20 rounded-full p-4 w-fit">
                            <Award className="h-10 w-10 text-accent"/>
                        </div>
                        <CardTitle className="mt-4">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
