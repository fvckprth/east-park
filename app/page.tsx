import About from '@/components/About';
import Info from '@/components/Info';
import Media from '@/components/Media';

export default function Home() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-20 flex flex-col justify-between">
      <Media />
      <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col justify-between overflow-auto">
        <About />
        <Info />
      </div>
    </div>
  );
}
