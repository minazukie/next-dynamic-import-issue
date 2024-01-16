import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() =>
  import('./hello').then((mod) => mod.Hello)
);

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <DynamicComponent />
    </div>
  );
}
