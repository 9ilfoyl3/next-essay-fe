import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/app/components/map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Map /> */}
    </div>
  );
}
