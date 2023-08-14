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
    </div>
  );
}

export default Media;
