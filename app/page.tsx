import About from '@/components/About';
import Info from '@/components/Info';
import Media from '@/components/Media';
import FadeEffect from '@/components/FadeEffect';

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen justify-between">
      <Media />
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between">
        <About />
        <Info />
      </div>
      <FadeEffect />
    </div>
  );
}
