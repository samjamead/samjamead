import Link from 'next/link';
import { getBlogPostList } from '@/lib/blog-helpers';
import Image from 'next/image';
import heroImg from '@/public/img/niceTurnStill.jpeg';

export default async function Mountains() {
  const postList = await getBlogPostList();
  const mountainPosts = postList.filter((post) => post.category === 'Mountain');

  return (
    <main className='min-h-screen w-full max-w-4xl mx-auto'>
      <div className='flex justify-between items-center gap-8'>
        <div className=''>
          <Image
            src={heroImg}
            alt='a nice pic'
            width={700}
            height={300}
            className='w-xl h-auto rounded-xl'
          />
        </div>
      </div>

      <ul>
        {mountainPosts &&
          mountainPosts.map((post) => {
            let path = `/posts/${post.slug}`;

            return (
              <li key={post.slug} className='mb-6'>
                <span className='text-sm'>{post.date}</span>
                <Link href={path} className='ml-4 underline'>
                  {post.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
