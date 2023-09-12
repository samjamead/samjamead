import Link from 'next/link';
import { getBlogPostList } from '@/lib/blog-helpers';

export default async function Home() {
  const postList = await getBlogPostList();

  return (
    <main className='max-w-4xl w-full mx-auto font-mono flex min-h-screen flex-col justify-between p-24'>
      <p className='mb-8'>A simple list of posts:</p>
      <ul>
        {postList &&
          postList.map((post) => (
            <li key={post.slug} className='mb-6'>
              <span className='text-sm'>{post.date}</span>
              <Link href={post.slug} className='ml-4 underline'>
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
      <p>
        -- <br /> Thus endeth the list
      </p>
    </main>
  );
}
