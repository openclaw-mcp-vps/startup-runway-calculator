export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Startup Finance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Your Runway.<br />
          <span className="text-[#58a6ff]">Before It&apos;s Too Late.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your bank accounts and expense tools to get real-time burn rate tracking, automated expense categorization, and scenario planning — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $29/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🏦", title: "Bank Sync via Plaid", desc: "Connect accounts in seconds. Transactions auto-imported daily." },
            { icon: "📊", title: "Live Burn Rate", desc: "See your monthly burn and runway updated in real time." },
            { icon: "🔮", title: "Scenario Planning", desc: "Model hiring, cuts, or fundraising to see runway impact instantly." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
              <div className="text-xs text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, billed monthly</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited bank account connections",
              "Real-time burn rate dashboard",
              "Automated expense categorization",
              "Scenario planning & forecasting",
              "Runway milestone alerts",
              "CSV & accounting tool exports",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Free
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">14-day free trial. No credit card needed.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the bank connection work?",
              a: "We use Plaid, the industry-standard bank connectivity platform trusted by thousands of apps. Your credentials are never stored on our servers — Plaid handles all authentication securely."
            },
            {
              q: "How accurate is the runway calculation?",
              a: "Runway is calculated from your actual transaction data, not estimates. We analyze your last 3 months of spending to compute a rolling average burn rate, updated daily as new transactions arrive."
            },
            {
              q: "Can I model fundraising or headcount changes?",
              a: "Yes. The scenario planner lets you add or remove recurring expenses, model new hires, or simulate a funding round — and instantly see how each change affects your runway in months."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white text-sm mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} RunwayCalc. All rights reserved.
      </footer>
    </main>
  );
}
