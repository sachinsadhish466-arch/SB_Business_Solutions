'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { BLOG_POSTS } from '@/lib/content';
import { Button } from '@/components/ui/button';

const categoryColors: Record<string, string> = {
  'AI Solutions': 'bg-secondary/10 text-secondary border-secondary/30',
  'Digital Transformation': 'bg-primary/10 text-primary border-primary/30',
  'SEO': 'bg-accent/10 text-accent border-accent/30',
};

export default function Blog() {
  return (
    <Section id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Blog & Insights"
          title={<>Ideas That <span className="text-gradient">Drive Growth</span></>}
          description="Expert perspectives on AI, digital transformation, marketing, and the technology shaping business."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/40 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-primary/20 transition-transform group-hover:scale-110">
                    {post.category.charAt(0)}
                  </span>
                </div>
                <span className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${categoryColors[post.category] ?? 'bg-card/60 text-foreground border-border'}`}>
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <button className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-secondary">
                  Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-border/60 bg-card/40 hover:border-primary/50 hover:text-primary">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
