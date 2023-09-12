import { loadBlogPost } from '@/lib/blog-helpers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Params } from '@/lib/types';

export async function generateMetadata({ params }: { params: Params }) {
  const postMeta = await loadBlogPost(params.slug);

  return {
    title: postMeta?.frontmatter?.title || 'Not Found',
  };
}

async function BlogPost({ params }: { params: Params }) {
  const blogPostData = await loadBlogPost(params.slug);

  if (!blogPostData) {
    notFound();
  }

  const { frontmatter, contentHtml } = blogPostData;

  return (
    <article className='max-w-4xl mx-auto py-24'>
      <div>
        <p className='mb-8'>{frontmatter.title}</p>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <hr className='my-12 border-gray-400' />
        <p>
          &larr; <Link href='/'>Home</Link>
        </p>
      </div>
    </article>
  );
}

export default BlogPost;
