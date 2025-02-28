import { PropsWithChildren } from 'react'
import Link from 'next/link'

export const Nav = ({ ...rest }: PropsWithChildren & { className?: string }) => {
  return (
    <nav {...rest}>
      <div className='hidden md:inline-flex rounded-full border-2 border-hot-blue-light overflow-hidden p-1'>
        <NavLink href='#features' title='Features'>Features</NavLink>
        <NavLink href='#tutorial' title='Tutorial'>Turorial</NavLink>
        <NavLink href='https://docs.storacha.network/ai/quickstart' title='Documentation'>Documentation</NavLink>
        <NavLink href='https://docs.storacha.network/ai/quickstart' title='GitHub' highlight>Quickstart</NavLink>
      </div>
      <div className='block md:hidden p-3 relative z-50'>
        <div className='tham tham-e-squeeze tham-w-7'>
          <div className='tham-box'>
            <div className='tham-inner bg-hot-blue-light' />
          </div>
        </div>
      </div>
      <ul className='tham-menu bg-hot-blue hidden absolute top-0 left-0 z-40 w-full h-screen p-3 pt-20 text-center text-3xl'>
        <li><Link className='block p-3 mb-3 hover:text-white' href='https://docs.storacha.network/ai/quickstart' title='Documentation'>Documentation</Link></li>
        <li><Link className='block p-3 mb-3 hover:text-white' href='https://console.storacha.network' title='Web Console'>Console</Link></li>
        <li><Link className='block p-3 mb-3 hover:text-white' href='https://storacha.network' title='Company'>Company</Link></li>
        <li><Link className='block p-3 mb-3 hover:text-white' href='https://github.com/storacha/elizaos-plugin' title='GitHub'>GitHub</Link></li>
      </ul>
      <script>{hamburgerScript}</script>
    </nav>
  )
}

const hamburgerScript = `
(() => {
  const tham = document.querySelector('.tham');
  const menu = document.querySelector('.tham-menu');
  const handleClick = () => {
    tham.classList.toggle('tham-active')
    menu.classList.toggle('hidden')
    window.scrollTo(0, 0)
    document.body.classList.toggle('overflow-y-hidden')
    document.body.classList.toggle('h-screen')
  };
  tham.addEventListener('click', handleClick);
  for (const link of document.querySelectorAll('.tham-menu a')) {
    link.addEventListener('click', handleClick);
  }
})()
`

export const NavLink = ({ href, title, highlight, children }: PropsWithChildren & { href: string, title: string, highlight?: boolean }) => {
  const cls = `inline-block px-5 py-2 mr-1 last:mr-0 font-[family-name:var(--font-dm-mono)] text-md focus:relative ${highlight ? 'bg-hot-blue-light' : 'bg-hot-red-light'} hover:bg-white text-hot-blue-dark bg-clip-padding rounded-full` 
  return <Link className={cls} href={href} title={title}>{children}</Link>
}
