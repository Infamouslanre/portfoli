import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='content-center'>
        <Image
          className='rounded-full'
          src='/image/profile.jpg'
          alt=''
          height='144'
          width='144'
        />
        <h1 className='p-3 text-center'>
          PEEP THIS
        </h1>
      </div>
    </main>
  )
}
