import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-8 gap-8 bg-gradient-to-b from-zinc-100 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      {/* Header */}
      <header className="w-full max-w-6xl text-center">
        <h1 className="text-4xl font-extrabold text-white/90 drop-shadow-md mb-2">
          Mission Control &mdash; Autonomous AI Operations
        </h1>
        <p className="text-white/90 drop-shadow-md text-lg">
          Your AI cockpit for building, tracking, and deploying autonomous workflows.
        </p>
      </header>

      {/* Logos / Center Image */}
      <div className="relative z-[-1] flex justify-center items-center w-full max-w-4xl">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={40}
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        />
      </div>

      {/* Dashboard Cards */}
      <section className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="https://nextjs.org/docs"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-5 rounded-2xl shadow-xl transition-transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold text-white/90 drop-shadow-md mb-2">Docs &rarr;</h2>
          <p className="text-white/90 drop-shadow-md opacity-80">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-5 rounded-2xl shadow-xl transition-transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold text-white/90 drop-shadow-md mb-2">Learn &rarr;</h2>
          <p className="text-white/90 drop-shadow-md opacity-80">
            Interactive course with quizzes to level up your Next.js skills.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-5 rounded-2xl shadow-xl transition-transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold text-white/90 drop-shadow-md mb-2">Templates &rarr;</h2>
          <p className="text-white/90 drop-shadow-md opacity-80">
            Pre-built Next.js projects you can clone and deploy instantly.
          </p>
        </a>

        <a
          href="https://vercel.com/new"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-5 rounded-2xl shadow-xl transition-transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold text-white/90 drop-shadow-md mb-2">Deploy &rarr;</h2>
          <p className="text-white/90 drop-shadow-md opacity-80">
            Launch your Next.js app with a single click on Vercel.
          </p>
        </a>
      </section>

      {/* Call-to-Action Panel */}
      <section className="w-full max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 mb-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-white/90 drop-shadow-md mb-4">Build Your AI Tools</h2>
        <p className="text-white/90 drop-shadow-md opacity-90 mb-4">
          Add custom AI modules, track autonomous tasks, and manage all workflows in one place.
        </p>
        <button className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/25 text-white hover:bg-white/30 hover:border-white/40 transition-all">Create Tool</button>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl flex justify-center items-center py-8">
        <a
          className="flex items-center gap-2 text-sky-400 hover:text-sky-300 underline decoration-sky-200 hover:decoration-sky-100 transition-colors"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            className="dark:invert"
          />
        </a>
      </footer>
    </main>
  );
}
