import Link from 'next/link';

export const navItems = [
  {
    text: 'About',
    link: '/',
  },
  {
    text: 'Previously',
    link: '/',
  },
];

export default function AppHeader() {
  return (
    <nav className='flex items-center justify-between max-w-4xl mx-auto'>
      <div>
        <Link href='/'>sjam</Link>
      </div>
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.text}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
