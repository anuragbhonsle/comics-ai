import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 pt-24 pb-16 px-6 sm:px-10">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8">
          <span className="inline-block text-xs font-semibold tracking-wider text-red-500 uppercase mb-3">
            Privacy Policy
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-zinc-400">
            Last updated: September 8, 2026
          </p>
        </div>

        {/* 1. Overview */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">1. Overview</h2>
          <p className="leading-relaxed text-zinc-400">
            At <strong className="text-white">ComicsAI</strong>, we are
            committed to protecting your personal data and respecting your
            privacy rights. This Privacy Policy outlines how we collect,
            process, and safeguard your information when you interact with our
            platform and generative services.
          </p>
        </section>

        {/* 2. Data We Collect */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            2. Data We Collect
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="font-semibold text-white mb-2">
                Account Information
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Email address, authentication tokens, and user profile data
                managed securely via our authentication provider (Neon Auth).
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="font-semibold text-white mb-2">
                Generated Content
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Text prompts, comic script inputs, generated responses, and
                saved library items linked directly to your account.
              </p>
            </div>
          </div>
        </section>

        {/* 3. How We Use Your Information */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            3. How We Use Your Information
          </h2>
          <ul className="space-y-2.5 text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>
                To generate, render, and archive your AI comics and story
                history.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>
                To authenticate identity and maintain secure account session
                state.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>
                To optimize application latency, server performance, and user
                experience.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>
                To enforce compliance with our terms and prevent unauthorized
                credit usage.
              </span>
            </li>
          </ul>
        </section>

        {/* 4. Data Sharing & Security */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Data Sharing & Security
          </h2>
          <p className="leading-relaxed text-zinc-400">
            We do not sell, rent, or trade personal information to third
            parties. All data is handled using industry-standard encryption
            protocols and stored within secure infrastructure providers (Neon
            Database).
          </p>
        </section>
        {/* 5. User Rights */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-white">5. Your Rights</h2>
          <p className="text-sm text-zinc-400">
            Depending on your location, you may have rights regarding your
            personal information, including the right to request access,
            correction, or deletion of your data. You may also contact us with
            questions about how your information is processed.
          </p>
        </section>
        {/* Contact Section */}
        <section className="border-t border-zinc-800 pt-8 space-y-3">
          <h2 className="text-lg font-semibold text-white">
            Questions & Contact
          </h2>
          <p className="text-sm text-zinc-400">
            If you have questions regarding this policy or wish to submit a data
            deletion request, please direct your inquiry to:
          </p>
          <a
            href="mailto:anuragkbhonsle@gmail.com"
            className="inline-block text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
          >
            anuragkbhonsle@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
