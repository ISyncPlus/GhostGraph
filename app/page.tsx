import Image from "next/image";
import { Suspense } from "react";
import { getPreviews } from "./lib/preview";
import PreviewBlock from "./components/PreviewBlock";
// import MyClock from "./components/MyClock";


export default async function Home() {
  const previews = await getPreviews();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <MyClock/> */}
        {previews.map((preview, index) => (
           <Suspense key={preview.id} fallback={<p>Generating Visual Preview {index + 1}...</p>}>
            <PreviewBlock title={preview.title} description={preview.description} />
            </Suspense>
        )  )}
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
