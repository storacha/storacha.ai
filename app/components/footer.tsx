import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { BlueSkyIcon, DiscordIcon, FarcasterIcon, GitHubIcon, MediumIcon, RedditIcon, XIcon, YouTubeIcon } from './socials'

export const Footer = () =>
  <footer className='bg-hot-blue py-12 flex justify-center'>
    <div className="flex-auto border-2 border-hot-blue-dark rounded-10 md:rounded-20 mx-3 p-6 md:px-8 md:pt-12 w-full md:min-w-md md:max-w-5xl">
      <div className="bg-[url('/wordmark.svg')] bg-contain bg-no-repeat bg-bottom text-hot-blue-dark min-h-52 md:min-h-72">
        <div className='md:flex md:flex-row md:justify-between'>
          <div className='mb-6'>
            <Link className='inline-block bg-hot-blue-dark border border-hot-blue-dark hover:border-hot-blue-light hover:text-hot-blue-dark text-white uppercase text-md px-6 py-2 rounded-full whitespace-nowrap' href='https://945c6cfe.sibforms.com/serve/MUIFAJNzeGADnYOjnq5OPKwFB20zQpcl9G2E47nP77Zf1JPIXMAmhQ2gKEVQc1MgNPPF-DJPTJOCwok9hv0YtO9hS4K0uG0PsInvT710CUg3S4opLYGnCOTPy1HbXEzLHKc0XqzZ7TmqAn2PJEzGGQYhE76eZnIIyI4TklhrsUOHdFiElgwrWxvn2J6ddb-ttKkg3HS6bEC6fSIa'>
              <EnvelopeIcon className='inline-block w-5 mr-1' />
              Join Mailing List
            </Link>
          </div>
          <div className='mb-6'>
            <Link href='https://discord.gg/pqa6Dn6RnP' className='inline-block mr-3 hover:text-hot-blue-light' title='Get involved on Discord'>
              <DiscordIcon className='inline-block' />
            </Link>
            <Link href='https://x.com/storachanetwork' className='inline-block mr-3 hover:text-hot-blue-light' title='Read the latest on X'>
              <XIcon className='inline-block' />
            </Link>
            <Link href='https://github.com/storacha' className='inline-block mr-3 hover:text-hot-blue-light' title='Build with us on GitHub'>
              <GitHubIcon className='inline-block' />
            </Link>
            <Link href='https://medium.com/@storacha' className='inline-block mr-3 hover:text-hot-blue-light' title='Read our blog on Medium'>
              <MediumIcon className='inline-block' />
            </Link>
            <Link href='https://www.youtube.com/@StorachaNetwork' className='inline-block mr-3 hover:text-hot-blue-light' title='Watch our demos on YouTube'>
              <YouTubeIcon className='inline-block' />
            </Link>
            <Link href='https://warpcast.com/storacha' className='inline-block mr-3 hover:text-hot-blue-light' title='Join the discussion on Farcaster'>
              <FarcasterIcon className='inline-block' />
            </Link>
            <Link href='https://bsky.app/profile/storacha.network' className='inline-block mr-3 hover:text-hot-blue-light' title='Join the conversation on Bluesky'>
              <BlueSkyIcon className='inline-block' />
            </Link>
            <Link href='https://www.reddit.com/r/Storacha' className='inline-block mr-3 hover:text-hot-blue-light' title='See more on Reddit'>
              <RedditIcon className='inline-block' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>