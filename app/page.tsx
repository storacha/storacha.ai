import Link from 'next/link'
import Image from 'next/image'
import { CircleStackIcon, ShareIcon, HandRaisedIcon, GlobeAltIcon, RocketLaunchIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Footer } from './components/footer'

const Home = () => {
  return (
    <>
      <div className='absolute w-full'>
        <Header />
      </div>
      <Hero />
      <main>
        <div id='features' className='bg-hot-blue-light text-hot-blue-dark py-16 flex justify-center'>
          <div className='md:max-w-5xl'>
            <div className='mx-3'>
              <h1 className='font-[family-name:var(--font-dm-mono)] text-2xl md:text-4xl mb-3'>Features</h1>
              <p className='mb-3'>Use Storacha to store your LLM, RAG knowledge fragments, agent state, outputs and all the rest in a decentralized network of storage nodes.</p>
              <p className='mb-3'>Storacha can be used to dynamically store data generated by AI Agents, or for storage/retrieval of initial training data, including RAG knowledge as well as intermediate state. Data can be retrieved by AI Agents using <Link href='https://docs.storacha.network/how-to/retrieve/' className='underline'>HTTP</Link> or over <Link href='https://docs.ipfs.tech/concepts/bitswap/' className='underline'>IPFS via bitswap</Link>.</p>
            </div>
            <ul className='mx-3 my-6 md:grid md:grid-rows-2 md:grid-flow-col md:gap-6'>
              <li className='mb-3 flex flex-row items-center bg-hot-red-light rounded-full p-6'>
                <div className='mr-6'>
                  <GlobeAltIcon className='w-10' />
                </div>
                <div>
                  <h2 className='font-[family-name:var(--font-dm-mono)] text-lg font-semibold'>Decentralized Storage</h2>
                  <p>Uses Storacha (IPFS and Filecoin) for permanent content storage.</p>
                </div>
              </li>
              <li className='mb-3 flex flex-row items-center bg-hot-red-light rounded-full p-6'>
                <div className='mr-6'>
                  <CircleStackIcon className='w-10' />
                </div>
                <div>
                  <h2 className='font-[family-name:var(--font-dm-mono)] text-lg font-semibold'>Data Redundancy</h2>
                  <p>All data persisted to Filecoin L1 as well as Storacha Hot Storage Nodes.</p>
                </div>
              </li>
              <li className='mb-3 flex flex-row items-center bg-hot-red-light rounded-full p-6'>
                <div className='mr-6'>
                  <HandRaisedIcon className='w-10' />
                </div>
                <div>
                  <h2 className='font-[family-name:var(--font-dm-mono)] text-lg font-semibold'>Immutable History</h2>
                  <p>All content is content-addressed and immutable.</p>
                </div>
              </li>
              <li className='mb-3 flex flex-row items-center bg-hot-red-light rounded-full p-6'>
                <div className='mr-6'>
                  <ShareIcon className='w-10' />
                </div>
                <div>
                  <h2 className='font-[family-name:var(--font-dm-mono)] text-lg font-semibold'>Multi-Agent Sharing</h2>
                  <p>Easy sharing between agents via decentralized identifier (DID).</p>
                </div>
              </li>
            </ul>
            <p className='text-lg md:text-xl text-center'>
              Learn more in our
              <Link className='inline-block bg-hot-blue-dark border border-hot-blue-dark hover:bg-hot-blue hover:border-hot-blue hover:text-hot-blue-dark text-white uppercase text-sm mx-3 px-6 py-2 rounded-full whitespace-nowrap shadow-md' href='https://docs.storacha.network/ai/quickstart'>
                <RocketLaunchIcon className='inline-block w-5 mr-1' />
                Quickstart
              </Link>
              docs.
            </p>
          </div>
        </div>
        <div id='tutorial' className='bg-hot-blue text-hot-blue-light py-16 flex justify-center'>
          <div className='w-full md:max-w-5xl px-3'>
            <h1 className='font-[family-name:var(--font-dm-mono)] text-2xl md:text-4xl mb-3'>Tutorial</h1>
            <p className='mb-6 max-w-prose'>Watch our video tutorial to discover how to setup and use the Storacha ElizaOS plugin in an AI Agent to store a file provided by a user:</p>
            <iframe className='w-full aspect-video shadow-md mb-6' src="https://www.youtube.com/embed/Ow4HDoq-FSE" title="Tutorial: Build ElizaOS AI Agents powered by Storacha" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p className='text-lg md:text-xl text-center'>
              Get started with our
              <Link className='inline-block bg-hot-blue-dark border border-hot-blue-dark hover:bg-hot-blue-light hover:border-hot-blue-light hover:text-hot-blue-dark text-white uppercase text-sm mx-3 px-6 py-2 rounded-full whitespace-nowrap shadow-md' href='https://docs.storacha.network/ai/quickstart'>
                <RocketLaunchIcon className='inline-block w-5 mr-1' />
                Quickstart
              </Link>
              docs.
            </p>
          </div>
        </div>
        <div id='about' className='bg-hot-blue-dark text-hot-blue-light py-16 flex justify-center'>
          <div className='w-full md:max-w-5xl px-3'>
            <Image src='/racha.png' width={235} height={128} alt='racha fire' className='mb-6 md:mb-0 md:float-right md:mr-20' />
            <h1 className='font-[family-name:var(--font-dm-mono)]  text-hot-red-light text-2xl md:text-4xl mb-3'>About Storacha</h1>
            <p className='text-xl max-w-md mb-6'>Leading the charge in truly decentralized hot data storage! Storacha is a Filecoin layer 2 built with IPFS tech.</p>
            <Link className='inline-block bg-hot-red-light border border-hot-blue-dark hover:bg-hot-blue-light hover:border-hot-blue-light hover:text-hot-blue-dark text-hot-blue-dark uppercase text-sm px-6 py-2 rounded-full whitespace-nowrap shadow-md' href='https://docs.storacha.network/ai/quickstart'>
              <BookOpenIcon className='inline-block w-5 mr-1' />
              Find out more
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
