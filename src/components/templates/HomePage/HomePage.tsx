import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/atoms'

export const HomePage = () => {
  return (
    <section className="flex justify-center items-center bg-red-500">
      <div>
        <h3 className="text-2xl font-bold">Hola, Soy</h3>
        <h1 className="text-4xl font-bold leading-[1.3]">
          Joseph De La Cruz Rivas
        </h1>
        <h3 className="text-2xl font-bold">
          Y Soy <span>Desarrollador Fullstack</span>
        </h3>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          corrupti reprehenderit numquam laborum iusto. Alias quam, voluptates
          laudantium iure voluptatem tenetur perferendis, reiciendis, nobis
          dignissimos voluptatibus fugiat commodi? Ab, non.
        </p>
        <div>
          <Link href="#contact">Contactame</Link>
          <Link href="#contact">Contactame</Link>
          <Link href="#contact">Contactame</Link>
          <Link href="#contact">Contactame</Link>
        </div>
        <Link href="#" role="button">
          <Button>Descargar CV</Button>
        </Link>
      </div>
      <div>
        <Image
          src="https://picsum.photos/900"
          alt="image"
          className="w-[35vw]"
          width={900}
          height={900}
        />
      </div>
    </section>
  )
}
