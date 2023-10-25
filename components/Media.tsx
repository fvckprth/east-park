import Image from 'next/image';
import mountains from '@/public/assets/norway.jpg';

function Media() {
  return (
    <div className="relative h-screen">
      <Image
        src={mountains}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        layout="fill"
        objectFit="cover"
        alt="Another Planet by Daniel Farò"
        priority
      />
      <div className="fog-container absolute w-full h-screen">
        <div className="fog-img fog-img-first"></div>
        <div className="fog-img fog-img-second"></div>
      </div>
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#2b2b2b] via-[rgba(43,43,43,0.5)] to-[rgba(43,43,43,0)]" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#2b2b2b] via-[rgba(43,43,43,0.5)] to-[rgba(43,43,43,0)]" />
    </div>
  );
}

export default Media;
