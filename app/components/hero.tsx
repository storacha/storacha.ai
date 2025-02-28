import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const Hero = () =>
  <div className='flex justify-center'>
    <div className="w-full bg-[url('/hero.png')] md:max-w-5xl md:bg-[url('/hero-md.png')] h-screen bg-contain bg-no-repeat bg-center">
      <div className='w-full h-full flex items-end md:items-center md:justify-end'>
        <div className="px-3 py-6 bg-hot-blue-dark/75 md:bg-transparent md:max-w-md md:mb-20">
          <hgroup className='font-[family-name:var(--font-dm-mono)] leading-loose mb-3'>
            <h1 className='text-hot-red-light text-2xl md:text-4xl mb-1 md:mb-3'>Storacha Powered AI</h1>
            <h2 className='text-hot-blue-light text-xl md:text-2xl mb-2 md:mb-6'>Self-sovereign data for your multi-agent deployment.</h2>
          </hgroup>
          <Link className='inline-block bg-hot-red border border-hot-red hover:border-hot-blue-light text-white uppercase text-lg px-6 py-2 rounded-full whitespace-nowrap shadow-md' href='https://docs.storacha.network/ai/quickstart'>
            <RocketLaunchIcon className='inline-block w-5 mr-1' />
            Quickstart
          </Link>
        </div>
      </div>
    </div>
  </div>
