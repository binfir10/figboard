'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Logo() {
  const router = useRouter()
  return (
    <div className='pt-3 flex items-center px-6'>
      <div className='transition hover:scale-105 flex ease-in-out cursor-pointer gap-0.5' onClick={() => router.push('/')}>
        <Image src={"/logo.svg"} alt='' width={30} height={30} priority />
        <p className='text-3xl font-semibold tracking-tighter underline underline-offset-2 decoration-muted-foreground/40 cursor-pointer '>figboard</p>

      </div>

    </div>
  )
}
