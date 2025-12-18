import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 flex flex-col items-center px-6 py-20">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">
          Hi, I’m Esther 👋
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to my little corner of the internet!
        </p>
      </header>

      {/* Content */}
      <section className="max-w-2xl space-y-6 text-center">
        <p>
          I’m a <strong>frontend web developer</strong> who loves building cute,
          expressive, and delightful digital experiences. I enjoy working with{" "}
          <span className="text-pink-500 font-semibold">TypeScript</span>,{" "}
          <span className="text-pink-500 font-semibold">React</span>, and{" "}
          <span className="text-pink-500 font-semibold">Next.js</span>.
        </p>

        <p>
          When I’m not coding, you can usually find me exploring cozy cafés,
          sketching UI ideas, or tinkering with design systems. I love crafting
          interfaces that feel warm, approachable, and full of personality.
        </p>

        <p>
          This site is where I’ll share my projects, thoughts, and things that
          inspire me. Thanks for stopping by — I hope you enjoy your stay! 🌸
        </p>
      </section>
    </main>
  );
}
