import Image from "next/image";
import Clock from "./components/Clock";
import { Suspense } from "react";
import PreviewBlock from "./components/PreviewBlock";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Clock/>
        <Suspense fallback={<p>Generating Visual Preview...</p>}>
      <PreviewBlock title="Preview 1" description="First Preview Generated"/>
      <PreviewBlock title="Preview 2" description="Second Preview Generated"/>
      <PreviewBlock title="Preview 3" description="Third Preview Generated"/>
      </Suspense>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </main>
    </div>
  );
}
