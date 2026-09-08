import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 pt-24 pb-16 px-6 sm:px-10">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8">
          <span className="inline-block text-xs font-semibold tracking-wider text-red-500 uppercase mb-3">
            Legal Agreement
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-zinc-400">
            Last updated: September 8, 2026
          </p>
        </div>

        {/* 1. Acceptance of Terms */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed text-zinc-400">
            By accessing or using{" "}
            <strong className="text-white">ComicsAI</strong>, you agree to be
            bound by these Terms of Service. If you do not agree to these terms,
            please refrain from using the platform.
          </p>
        </section>

        {/* 2. AI Content & Ownership */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            2. AI Content & Ownership
          </h2>
          <div className="space-y-3 text-zinc-400">
            <p className="leading-relaxed">
              <strong className="text-white">User Inputs:</strong> You retain
              ownership of all text prompts, character concepts, and custom
              materials provided to ComicsAI.
            </p>
            <p className="leading-relaxed">
              <strong className="text-white">Generated Output:</strong> Subject
              to these Terms and any applicable third-party service terms,
              ComicsAI permits you to use, display, and distribute content
              generated through the service for personal and commercial
              purposes. You are responsible for ensuring that your use of
              generated content complies with applicable laws and does not
              infringe the rights of others.
            </p>
          </div>
        </section>

        {/* 3. Prohibited Conduct */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            3. Prohibited Conduct
          </h2>
          <p className="text-zinc-400">
            When using ComicsAI, you agree not to generate, store, or distribute
            content that:
          </p>
          <ul className="space-y-2.5 text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>
                Is unlawful, sexually explicit, exploitative, hateful, or
                intended to facilitate violence or other serious harm.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>
                Infringes upon third-party copyrights, trademarks, or other
                intellectual property rights.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>
                Attempts to reverse engineer, disrupt, or exploit rate limits on
                our AI generation infrastructure.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>
                Uses automated scrapers, bots, or unauthorized methods to access
                or extract data from the service.
              </span>
            </li>
          </ul>
        </section>

        {/* 4. Service Availability & Disclaimers */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Service Availability & Disclaimers
          </h2>
          <p className="leading-relaxed text-zinc-400">
            ComicsAI is provided on an &quot;AS IS&quot; and &quot;AS
            AVAILABLE&quot; basis. Generative AI outputs are probabilistic in
            nature and may occasionally produce inaccurate or unexpected
            results. We reserve the right to modify, suspend, or terminate any
            aspect of the service at our discretion without prior notice.
          </p>
        </section>
        {/* 5. User Responsibility */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            5. User Responsibility
          </h2>
          <p className="leading-relaxed text-zinc-400">
            You are responsible for the prompts, materials, and other content
            you submit to ComicsAI. You represent that you have the necessary
            rights and permissions to use materials you provide to the service.
          </p>
        </section>
        {/* 6. Account Suspension & Termination */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            6. Account Suspension & Termination
          </h2>
          <p className="leading-relaxed text-zinc-400">
            We may suspend or terminate accounts that violate these Terms, abuse
            the service, or engage in activity that may harm ComicsAI or its
            users.
          </p>
        </section>
        {/* 7. Changes to These Terms */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            7. Changes to These Terms
          </h2>
          <p className="leading-relaxed text-zinc-400">
            We may update these Terms from time to time. When changes are made,
            the updated version will be posted on this page with a revised "Last
            updated" date. Continued use of ComicsAI after changes are posted
            constitutes acceptance of the updated Terms.
          </p>
        </section>
      </div>
    </div>
  );
}
