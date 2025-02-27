import Link from 'next/link'
import { Nav } from './nav'
import { Logo } from './logo'

export const Header = () =>
  <header className='flex justify-center'>
    <div className='flex flex-row w-full md:max-w-5xl items-center justify-between mx-3 my-3 md:my-6'>
      <Link href='/' className='inline-block text-hot-blue-light hover:text-white text-nowrap mr-3'>
        <Logo className='inline-block mr-2' /> Storacha AI
      </Link>
      <Nav />
    </div>
  </header>
