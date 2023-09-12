import Link from 'next/link';

export default async function NotFound() {
  return (
    <main className='max-w-4xl w-full mx-auto font-mono flex min-h-screen flex-col justify-between p-24'>
      <p className='mb-8'>404</p>
      <p>
        &larr; <Link href='/'>Home</Link>
      </p>
    </main>
  );
}
