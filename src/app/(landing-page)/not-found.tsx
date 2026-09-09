import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-6 py-24 font-jakarta text-center">
      <div className="max-w-2xl">
        <p className="font-lora text-7xl font-bold italic text-(--ssc-uk-main-highlight-color)">404</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Page not found</h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-(--ssc-uk-muted-color)">The page you’re looking for may have moved. Return home or explore our heating services.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full bg-(--ssc-uk-cta-button-background) px-6 py-3 font-bold text-white">Back to home</Link>
          <Link href="/contact" className="rounded-full border border-(--ssc-uk-main-highlight-color) px-6 py-3 font-bold text-foreground">Contact an engineer</Link>
        </div>
      </div>
    </main>
  );
}
