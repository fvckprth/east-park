import Image from 'next/image';
import mountains from '../public/assets/seattle.jpg';

function Media() {
  return (
    <div className="relative h-screen">
      <Image
        src={mountains}
        placeholder="blur"
        quality={100}
        layout="fill"
        objectFit="cover"
        alt="Another Planet by Daniel Farò"
      />
      <div className="fog-container absolute w-screen h-screen">
        <div className="fog-img fog-img-first"></div>
        <div className="fog-img fog-img-second"></div>
      </div>
      <div className="absolute top-0 w-full h-1/3 z-10 bg-gradient-to-b from-[#2b2b2b] via-[rgba(43,43,43,0.5)] to-[rgba(43,43,43,0)]" />
      <div className="absolute bottom-0 w-full h-1/3 z-10 bg-gradient-to-t from-[#2b2b2b] via-[rgba(43,43,43,0.5)] to-[rgba(43,43,43,0)]" />
    </div>
  );
}

export default Media;
