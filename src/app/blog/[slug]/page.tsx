import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Calendar, UserCircle } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <div className="flex justify-center space-x-2">
          {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight font-headline sm:text-6xl">
          {post.title}
        </h1>
        <div className="mt-6 flex items-center justify-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
                <UserCircle className="h-5 w-5" />
                <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
        </div>
      </div>

      <div className="relative h-96 w-full mb-12">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
          data-ai-hint={post.aiHint}
        />
      </div>

      <div className="prose prose-lg dark:prose-invert mx-auto max-w-none text-lg leading-relaxed space-y-6">
        <p>
          {post.content}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          "The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela
        </blockquote>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
        </p>
      </div>
    </article>
  );
}
