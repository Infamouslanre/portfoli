import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          className='rounded-full'
          src='/image/profile.jpg'
          alt=''
          height='144'
          width='144'
        />
        <h1 className='p-3 text-center'>
          LANRE
        </h1>
        <div>

        </div>
      </div>
    </main>
  )
}
