import Image from "next/image";

export default function Home() {
  return (
    <main className="main-glass">
      {/* Header */}
      <header className="w-full max-w-6xl text-center">
        <h1 className="header-glass">
          Mission Control &mdash; Autonomous AI Operations
        </h1>
        <p className="text-glass text-lg">
          Your AI cockpit for building, tracking, and deploying autonomous workflows.
        </p>
      </header>

      {/* Center Logo */}
      <div className="relative z-0 flex justify-center items-center w-full max-w-4xl">
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
        {[ { href: "https://nextjs.org/docs", title: "Docs →", desc: "Find in-depth information about Next.js features and API." }, { href: "https://nextjs.org/learn", title: "Learn →", desc: "Interactive course with quizzes to level up your Next.js skills." }, { href: "https://vercel.com/templates?framework=next.js", title: "Templates →", desc: "Pre-built Next.js projects you can clone and deploy instantly." }, { href: "https://vercel.com/new", title: "Deploy →", desc: "Launch your Next.js app with a single click on Vercel." } ].map((card) => (
          <a key={card.href} href={card.href}
            className="card-glass flex flex-col justify-between"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-semibold text-glass mb-2">{card.title}</h2>
            <p className="text-glass opacity-80">{card.desc}</p>
          </a>
        ))}
      </section>

      {/* Call-to-Action Panel */}
      <section className="w-full max-w-6xl panel flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-glass mb-4">Build Your AI Tools</h2>
        <p className="text-glass opacity-90 mb-6">
          Add custom AI modules, track autonomous tasks, and manage all workflows in one place.
        </p>
        <button className="btn-glass font-semibold">
          Create Tool
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl flex justify-center items-center py-8">
        <a
          className="flex items-center gap-2 link-glass"
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
