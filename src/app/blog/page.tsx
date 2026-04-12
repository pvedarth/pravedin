import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/placeholder-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Earthen Echoes
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          A collection of thoughts, stories, and reflections.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
            <CardHeader className="p-0">
              <Link href={`/blog/${post.slug}`} className="block">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  data-ai-hint={post.aiHint}
                />
              </Link>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <div className="flex space-x-2">
                {post.tags.map(tag => (
                   <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <CardTitle className="mt-4">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="ghost" className="p-0 h-auto">
                <Link href={`/blog/${post.slug}`}>
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
