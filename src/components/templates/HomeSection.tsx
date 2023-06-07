import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/atoms'
import { socialMedia } from '@/utils/constants'
import { IconButton } from '../atoms/IconButton/IconButton'

export const HomeSection = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="">
        <h3 className="text-[3.2rem] font-bold">Hola, Soy</h3>
        <h1 className="text-[5.6rem] font-bold leading-[1.3]">
          Joseph De La Cruz Rivas
        </h1>
        <h3 className="text-[3.2rem] font-bold mb-8">
          Y Soy{' '}
          <span className="text-fuchsia-500">Desarrollador Fullstack</span>
        </h3>
        <p className="text-[1.6rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          corrupti reprehenderit numquam laborum iusto. Alias quam, voluptates
          laudantium iure voluptatem tenetur perferendis, reiciendis, nobis
          dignissimos voluptatibus fugiat commodi? Ab, non.
        </p>
        <div className="flex gap-6 my-12">
          {socialMedia.map(({ icon, url, name }) => (
            <Link
              href={url}
              key={name}
              aria-label={name}
              title={name}
              target="_blank"
            >
              <IconButton icon={icon} />
            </Link>
          ))}
        </div>
        <a href="/files/cv.pdf" role="button" download="curriculum_vitae">
          <Button shape="pill">Descargar CV</Button>
        </a>
      </div>
      <div>
        <Image
          src="/img/myself.png"
          alt="image"
          className="w-[1000px] rounded-full drop-shadow-fuchsia"
          width={800}
          height={800}
          priority
        />
      </div>
    </section>
  )
}
