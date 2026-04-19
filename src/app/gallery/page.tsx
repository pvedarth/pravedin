import type { Metadata } from 'next';
import Image from 'next/image';
import { photoGallery } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Nature Photography',
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Nature Through My Lens
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          A collection of moments captured in the wild.
        </p>
      </div>

      <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photoGallery.map((photo) => (
          <div key={photo.id} className="break-inside-avoid">
            <Card className="overflow-hidden group">
              <div className="overflow-hidden relative w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={photo.height}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={photo.aiHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4">
                <p className="font-semibold">{photo.alt}</p>
                <p className="text-sm text-muted-foreground">{photo.location}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}