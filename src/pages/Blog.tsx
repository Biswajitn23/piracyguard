
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The State of Digital Piracy in 2023',
    excerpt: 'An in-depth look at current piracy trends and how content creators are fighting back with new technologies.',
    author: 'Alex Johnson',
    date: 'June 15, 2023',
    readTime: '8 min read',
    category: 'Industry Trends',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-2',
    title: 'How AI is Transforming Content Protection',
    excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing the way we protect digital content.',
    author: 'Sarah Chen',
    date: 'May 22, 2023',
    readTime: '6 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1550645612-83f5d594b671?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-3',
    title: 'The Economic Impact of Piracy on Streaming Services',
    excerpt: 'A detailed analysis of how piracy affects revenue streams for major streaming platforms and content creators.',
    author: 'Michael Roberts',
    date: 'April 10, 2023',
    readTime: '10 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-4',
    title: 'Legal Frameworks for Digital Content Protection',
    excerpt: 'Understanding the global legal landscape for copyright protection and anti-piracy measures.',
    author: 'Linda Park',
    date: 'March 5, 2023',
    readTime: '7 min read',
    category: 'Legal',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-5',
    title: 'Watermarking: The Invisible Shield for Your Content',
    excerpt: 'How digital watermarking technology provides an essential layer of protection for premium content.',
    author: 'David Wilson',
    date: 'February 18, 2023',
    readTime: '5 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-6',
    title: 'The Future of Content Distribution in a Secure Digital Ecosystem',
    excerpt: 'Predictions for how content creators and distributors will adapt to evolving piracy threats.',
    author: 'Emily Zhang',
    date: 'January 30, 2023',
    readTime: '9 min read',
    category: 'Industry Trends',
    image: 'https://images.unsplash.com/photo-1557853197-aefb550b6fdc?auto=format&fit=crop&w=800&q=80'
  },
];

const CATEGORIES = ['All', 'Industry Trends', 'Technology', 'Business', 'Legal'];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heading level={1} className="font-bold mb-4 text-foreground">
              PiracyGuard Blog
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Insights, trends, and expert perspectives on digital content protection and anti-piracy efforts.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {CATEGORIES.map((category) => (
              <Badge 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-foreground/60">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-piracy-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-foreground/60 text-sm">
                    {post.date} • by {post.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-piracy-600 hover:text-piracy-700" asChild>
                    <Link to={`/blog/${post.id}`} className="flex items-center">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
