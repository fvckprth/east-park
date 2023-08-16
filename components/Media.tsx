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
      <div className="fog-container relative h-screen">
        <div className="fog-img fog-img-first"></div>
        <div className="fog-img fog-img-second"></div>
      </div>
    </div>
  );
}

export default Media;
