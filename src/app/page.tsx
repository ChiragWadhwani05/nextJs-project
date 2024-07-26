import HeroSection from '@/components/HeroSection/HeroSection';
import Latest from '@/components/WorkSpace/Latest';
import Trending from '@/components/WorkSpace/Trending';
export default function Home() {
  return (
    <>
      <HeroSection />
      <Latest />
      <Trending />
    </>
  );
}
