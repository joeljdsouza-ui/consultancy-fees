import { useState } from "react";

const tabs = ["Engagement Slabs", "Pricing Breakdown", "Services Menu", "Contract Terms"];

const slabs = [
  {
    name: "Starter",
    tag: "Advisory",
    hours: "8–10 hrs/week",
    hoursNum: 9,
    color: "from-slate-700 to-slate-800",
    accent: "#94a3b8",
    ideal: "Early-stage founders who need strategic direction and a content foundation — not full execution yet.",
    includes: [
      "Monthly content strategy session (2 hrs)",
      "Founder LinkedIn — 2 posts/week (drafted)",
      "Content pillar framework setup",
      "Brand voice document",
      "Monthly performance review"
    ],
    notIncluded: ["Community management", "Webinars", "Company page", "Daily execution"],
    monthly: 40000,
    annual: 432000,
  },
  {
    name: "Growth",
    tag: "Execution",
    hours: "15–20 hrs/week",
    hoursNum: 17,
    color: "from-violet-700 to-violet-900",
    accent: "#a78bfa",
    ideal: "Funded startups and D2C brands ready to build a consistent content engine and community presence.",
    includes: [
      "Founder LinkedIn — 4 posts/week (drafted + managed)",
      "Company page — 3 posts/week",
      "Content repurposing (blog → post → carousel brief)",
      "Community management — 1 platform",
      "1 webinar/month (end-to-end)",
      "Weekly performance report",
      "Creator/influencer outreach (5–8 profiles)"
    ],
    notIncluded: ["Full GTM launch strategy", "Multi-platform community", "Paid amplification strategy"],
    monthly: 75000,
    annual: 810000,
    popular: true,
  },
  {
    name: "Operator",
    tag: "Full Embed",
    hours: "25–30 hrs/week",
    hoursNum: 27,
    color: "from-amber-600 to-orange-700",
    accent: "#fbbf24",
    ideal: "Pre-Series A to Series A companies needing a full-time content and GTM communications operator without a full-time hire.",
    includes: [
      "Founder LinkedIn — 4–5 posts/week (drafted, managed, comments handled)",
      "Company page — daily cadence",
      "Full content production: posts, carousels, video scripts, blog briefs",
      "Community management — multi-platform (LinkedIn group, WhatsApp/Discord)",
      "Champion program — identification, activation, monthly comms",
      "1–2 webinars/month (end-to-end pipeline)",
      "Creator/influencer relationship management (15–20 profiles)",
      "GTM launch content for product/funding announcements",
      "Daily reporting + weekly strategy alignment",
      "GenZ communications framework applied across all channels"
    ],
    notIncluded: [],
    monthly: 125000,
    annual: 1350000,
  },
];

const services = [
  {
    category: "Founder LinkedIn Presence",
    icon: "👤",
    description: "Your most underleveraged GTM asset. Built and managed in your voice.",
    items: [
      { name: "Voice calibration & content pillar setup", oneTime: true, price: "Included in onboarding" },
      { name: "Post drafting (per post)", price: "₹3,000–5,000/post" },
      { name: "Comment management & response drafting", price: "Included in slab" },
      { name: "Carousel briefing (copy only)", price: "₹4,000–6,000/carousel" },
      { name: "Short video scriptwriting", price: "₹5,000–8,000/script" },
    ]
  },
  {
    category: "Content Strategy & GTM Narrative",
    icon: "🧭",
    description: "The architecture before the content. The story before the posts.",
    items: [
      { name: "Brand positioning & messaging framework", oneTime: true, price: "₹35,000–50,000 (one-time)" },
      { name: "Content archetype mapping (4 pillars)", oneTime: true, price: "₹20,000 (one-time)" },
      { name: "GTM launch content strategy", oneTime: true, price: "₹40,000–60,000 (one-time)" },
      { name: "Monthly content calendar", price: "₹15,000/month" },
      { name: "ICP communication strategy doc", oneTime: true, price: "₹25,000 (one-time)" },
    ]
  },
  {
    category: "Content Production Engine",
    icon: "⚙️",
    description: "Consistent output across formats. Built around the weekly content call method.",
    items: [
      { name: "Blog post (briefed or written)", price: "₹6,000–12,000/post" },
      { name: "LinkedIn carousel (copy + design brief)", price: "₹6,000–8,000" },
      { name: "Content repurposing (long → multi-format)", price: "₹8,000/piece" },
      { name: "Weekly content call (60 min extract → 3–5 posts)", price: "Included in slab" },
      { name: "YouTube title, description, thumbnail brief", price: "₹3,000/video" },
    ]
  },
  {
    category: "Community Building & Management",
    icon: "🏘️",
    description: "Followers are passive. Community converts.",
    items: [
      { name: "Community setup (LinkedIn group / WhatsApp)", oneTime: true, price: "₹20,000 (one-time)" },
      { name: "Daily community management (1 platform)", price: "₹25,000/month" },
      { name: "Champion program — setup & activation", oneTime: true, price: "₹30,000 (one-time)" },
      { name: "Champion program — monthly management", price: "₹15,000/month" },
      { name: "Monthly champion email / update", price: "₹5,000/email" },
    ]
  },
  {
    category: "Webinars & Events",
    icon: "🎙️",
    description: "The highest-trust B2B content format. Owned end-to-end.",
    items: [
      { name: "Single webinar (end-to-end, including follow-up)", price: "₹35,000–50,000/event" },
      { name: "Webinar series strategy (3-month plan)", oneTime: true, price: "₹40,000 (one-time)" },
      { name: "Post-event content extraction (clips, blog, recap)", price: "₹15,000/event" },
      { name: "Monthly webinar retainer (1/month)", price: "Included in Operator slab" },
    ]
  },
  {
    category: "Creator & Influencer Engagement",
    icon: "🤝",
    description: "Genuine relationships with voices your ICP already trusts.",
    items: [
      { name: "Creator mapping & outreach strategy", oneTime: true, price: "₹20,000 (one-time)" },
      { name: "Ongoing creator relationship management (10–15)", price: "₹20,000/month" },
      { name: "Co-creation coordination (joint posts, webinar guests)", price: "₹10,000/collaboration" },
    ]
  },
  {
    category: "GenZ Communications Layer",
    icon: "⚡",
    description: "The strategic overlay that makes everything above land with India's dominant emerging audience.",
    items: [
      { name: "GenZ brand audit (comms, content, employer brand)", oneTime: true, price: "₹30,000–50,000 (one-time)" },
      { name: "GenZ employer brand content strategy", oneTime: true, price: "₹40,000–60,000 (one-time)" },
      { name: "GenZ GTM communication workshop (founder/team)", oneTime: true, price: "₹25,000–40,000/session" },
      { name: "Ongoing GenZ comms advisory", price: "Included in all slabs" },
    ]
  },
];

const terms = [
  {
    title: "Payment Schedule",
    icon: "📅",
    content: [
      { label: "Monthly Retainer", detail: "Invoiced on the 25th of the current month. Due by the 1st of the following month. Auto-renews unless 30-day notice given." },
      { label: "Annual Contract", detail: "Full year invoiced upfront OR split into quarterly payments. 10% discount applied on full upfront annual payment." },
      { label: "Project / One-Time", detail: "50% upfront on agreement signing. 50% on delivery. No credit terms on first engagement." },
    ]
  },
  {
    title: "Contract Terms",
    icon: "📋",
    content: [
      { label: "Minimum Engagement", detail: "3 months for all retainer slabs. Compounding requires runway — this protects both parties." },
      { label: "Notice Period", detail: "30 days written notice to exit a monthly retainer after the minimum term." },
      { label: "Annual Contract Lock-in", detail: "12-month commitment. Early exit after Month 6 permitted with 60-day notice and 1-month penalty fee." },
      { label: "Scope Changes", detail: "Slab upgrades take effect the following month. Additional ad-hoc work billed at ₹3,500/hr." },
    ]
  },
  {
    title: "What's Always Included",
    icon: "✅",
    content: [
      { label: "Onboarding", detail: "Brand voice calibration, ICP mapping, content pillar setup. Completed in Week 1 of every engagement." },
      { label: "Reporting", detail: "Weekly async update + monthly performance review across all active KPIs." },
      { label: "Strategy Alignment", detail: "Monthly 60-minute strategy call with Joel directly. No account managers. No handoffs." },
      { label: "GenZ Lens", detail: "Applied to every piece of content, every community touchpoint, and every GTM decision." },
    ]
  },
  {
    title: "What's Never Included",
    icon: "❌",
    content: [
      { label: "Design Execution", detail: "Joel briefs designers. Execution is handled by your in-house designer or a recommended resource." },
      { label: "Paid Media / Ad Spend", detail: "Strategy and briefing for thought leadership ads is included in Operator slab. Actual ad spend is client-side." },
      { label: "Video Production", detail: "Joel scripts and coordinates. Filming and editing tools/resources are client-side (Descript, CapCut)." },
      { label: "SEO / Technical Marketing", detail: "Not in scope. Blog content is written for audience quality, not technical SEO." },
    ]
  }
];

export default function PricingDoc() {
  const [activeTab, setActiveTab] = useState(0);
  const [billingToggle, setBillingToggle] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-b border-gray-800 px-6 py-10 text-center">
        <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-2">Fractional GTM Communications</p>
        <h1 className="text-3xl font-bold text-white mb-1">Joel Dsouza</h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">Embedded Operator · GenZ-Native Communications · Founder Brand & GTM Strategy</p>
        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          {["B2B SaaS", "Pre-Series A", "D2C", "Mid-Market"].map(t => (
            <span key={t} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">{t}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800 px-4 overflow-x-auto">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActiveTab(i)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${activeTab === i ? "border-b-2 border-amber-400 text-amber-400" : "text-gray-500 hover:text-gray-300"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="px-4 py-8 max-w-5xl mx-auto">

        {/* TAB 1: ENGAGEMENT SLABS */}
        {activeTab === 0 && (
          <div>
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-white">Engagement Slabs</h2>
              <p className="text-gray-400 text-sm mt-1">Three levels of commitment. One point of accountability.</p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-8 gap-3 items-center">
              <span className={`text-sm ${billingToggle === "monthly" ? "text-white font-semibold" : "text-gray-500"}`}>Monthly</span>
              <button onClick={() => setBillingToggle(billingToggle === "monthly" ? "annual" : "monthly")}
                className={`w-12 h-6 rounded-full transition-all relative ${billingToggle === "annual" ? "bg-amber-500" : "bg-gray-700"}`}>
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${billingToggle === "annual" ? "left-7" : "left-1"}`} />
              </button>
              <span className={`text-sm ${billingToggle === "annual" ? "text-white font-semibold" : "text-gray-500"}`}>Annual <span className="text-amber-400 text-xs">(Save 10%)</span></span>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {slabs.map((s) => {
                const price = billingToggle === "annual" ? Math.round(s.annual / 12) : s.monthly;
                const annualTotal = billingToggle === "annual" ? s.annual : null;
                return (
                  <div key={s.name} className={`relative rounded-2xl border ${s.popular ? "border-violet-500" : "border-gray-800"} bg-gray-900 overflow-hidden`}>
                    {s.popular && <div className="bg-violet-600 text-white text-xs text-center py-1 font-semibold tracking-wide">MOST POPULAR</div>}
                    <div className={`bg-gradient-to-br ${s.color} px-5 pt-5 pb-4`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs font-semibold tracking-widest uppercase opacity-70">{s.tag}</p>
                          <h3 className="text-2xl font-bold text-white">{s.name}</h3>
                        </div>
                        <span className="text-xs bg-black bg-opacity-30 text-white px-2 py-1 rounded-full">{s.hours}</span>
                      </div>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-white">₹{price.toLocaleString("en-IN")}</span>
                        <span className="text-sm text-white opacity-70">/month</span>
                        {annualTotal && <p className="text-xs text-white opacity-60 mt-1">₹{annualTotal.toLocaleString("en-IN")} billed annually</p>}
                      </div>
                      <p className="text-xs text-white opacity-70 mt-3 leading-relaxed">{s.ideal}</p>
                    </div>

                    <div className="px-5 py-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">What's included</p>
                      <ul className="space-y-2">
                        {s.includes.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-300">
                            <span style={{ color: s.accent }} className="mt-0.5 shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {s.notIncluded.length > 0 && (
                        <>
                          <p className="text-xs text-gray-600 uppercase tracking-wider mt-4 mb-2 font-semibold">Not included</p>
                          <ul className="space-y-1">
                            {s.notIncluded.map((item, i) => (
                              <li key={i} className="flex gap-2 text-xs text-gray-600">
                                <span>—</span>{item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    <div className="px-5 pb-5">
                      <div className="bg-gray-800 rounded-lg p-3 text-xs text-gray-400">
                        <span className="text-gray-300 font-semibold">Hourly equivalent: </span>
                        ₹{Math.round(price / (s.hoursNum * 4.3)).toLocaleString("en-IN")}/hr
                        <span className="text-gray-600 ml-1">(vs ₹3,500/hr ad-hoc rate)</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hourly breakdown table */}
            <div className="mt-8 bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-800">
                <h3 className="text-sm font-semibold text-white">Hourly & Weekly Breakdown</h3>
                <p className="text-xs text-gray-500 mt-1">How the numbers break down across billing periods</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left px-6 py-3 text-xs text-gray-500 font-semibold">Slab</th>
                      <th className="text-right px-4 py-3 text-xs text-gray-500 font-semibold">Hrs/Week</th>
                      <th className="text-right px-4 py-3 text-xs text-gray-500 font-semibold">Hrs/Month</th>
                      <th className="text-right px-4 py-3 text-xs text-gray-500 font-semibold">Monthly Fee</th>
                      <th className="text-right px-4 py-3 text-xs text-gray-500 font-semibold">Effective/Hr</th>
                      <th className="text-right px-6 py-3 text-xs text-gray-500 font-semibold">Annual (10% off)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slabs.map((s, i) => (
                      <tr key={s.name} className={`border-b border-gray-800 ${i === 1 ? "bg-violet-950 bg-opacity-20" : ""}`}>
                        <td className="px-6 py-4 font-semibold text-white">{s.name}</td>
                        <td className="text-right px-4 py-4 text-gray-300">{s.hoursNum}</td>
                        <td className="text-right px-4 py-4 text-gray-300">{Math.round(s.hoursNum * 4.3)}</td>
                        <td className="text-right px-4 py-4 text-white font-semibold">₹{s.monthly.toLocaleString("en-IN")}</td>
                        <td className="text-right px-4 py-4 text-amber-400">₹{Math.round(s.monthly / (s.hoursNum * 4.3)).toLocaleString("en-IN")}</td>
                        <td className="text-right px-6 py-4 text-gray-300">₹{s.annual.toLocaleString("en-IN")}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-800">
                      <td className="px-6 py-3 text-xs text-gray-500 font-semibold" colSpan={4}>Ad-hoc / Overflow rate (outside slab scope)</td>
                      <td className="text-right px-4 py-3 text-amber-400 font-bold">₹3,500/hr</td>
                      <td className="px-6 py-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRICING BREAKDOWN */}
        {activeTab === 1 && (
          <div>
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-white">À La Carte Pricing</h2>
              <p className="text-gray-400 text-sm mt-1">For standalone projects, one-time builds, or add-ons outside your slab.</p>
            </div>
            <div className="space-y-5">
              {services.map((s) => (
                <div key={s.category} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-800 flex gap-3 items-center">
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{s.category}</h3>
                      <p className="text-xs text-gray-500">{s.description}</p>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-800">
                    {s.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-center px-5 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-300">{item.name}</span>
                          {item.oneTime && <span className="text-xs bg-amber-900 text-amber-400 px-2 py-0.5 rounded-full">One-time</span>}
                        </div>
                        <span className="text-xs text-amber-400 font-semibold text-right ml-4 shrink-0">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SERVICES MENU */}
        {activeTab === 2 && (
          <div>
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-white">What Joel Builds</h2>
              <p className="text-gray-400 text-sm mt-1">The full map of communications engagement types across all client work.</p>
            </div>

            {[
              {
                area: "Founder Voice & Personal Brand",
                icon: "👤",
                color: "border-violet-700",
                accent: "text-violet-400",
                what: "Building and operating the founder's LinkedIn as the primary inbound GTM channel.",
                deliverables: ["4–5 LinkedIn posts/week in founder voice", "Comment management & response drafting", "Carousel and video scripts", "Content idea bank (updated weekly)", "Voice calibration document"],
                outcome: "Founder becomes a credible, visible thought leader in their category. Inbound DMs from ICP replace cold outreach."
              },
              {
                area: "GTM Content Strategy",
                icon: "🧭",
                color: "border-amber-700",
                accent: "text-amber-400",
                what: "The narrative architecture before the content. Making sure everything pulls toward the same story.",
                deliverables: ["Brand positioning & messaging framework", "Content archetype (4-pillar system)", "ICP communication strategy", "Category creation narrative", "Launch content strategy"],
                outcome: "Every piece of content reinforces the same brand story. Sales, hiring, and fundraising get easier simultaneously."
              },
              {
                area: "Content Production Engine",
                icon: "⚙️",
                color: "border-blue-700",
                accent: "text-blue-400",
                what: "A weekly system that produces consistent, high-quality output without monopolising the founder's calendar.",
                deliverables: ["Weekly content call (30–60 min extract → 3–5 posts)", "Blog posts and briefs", "Carousel copy + design briefs", "Video scripts", "Content repurposing across formats"],
                outcome: "Consistent 3–5x/week publishing cadence. Content library builds over time and keeps selling when no one is in the room."
              },
              {
                area: "Community Building",
                icon: "🏘️",
                color: "border-green-700",
                accent: "text-green-400",
                what: "Building an active community of buyers, advocates, and champions around the brand.",
                deliverables: ["LinkedIn group setup and moderation", "WhatsApp/Discord community management", "Champion identification and activation", "Monthly champion comms (email/update)", "UGC monitoring and amplification"],
                outcome: "Brand has an owned audience that creates content, refers clients, and validates the product socially."
              },
              {
                area: "Webinars & Events",
                icon: "🎙️",
                color: "border-pink-700",
                accent: "text-pink-400",
                what: "The highest-trust B2B content format. One webinar = 3–4 weeks of repurposable content.",
                deliverables: ["Topic planning + landing page", "Invitation and reminder sequences", "Live coordination", "Post-event follow-up email sequence", "Content extraction (clips, blog, recap, YouTube)"],
                outcome: "1–2 webinars/month generates pipeline, community growth, and a library of credibility-building content."
              },
              {
                area: "GenZ Communications Layer",
                icon: "⚡",
                color: "border-orange-700",
                accent: "text-orange-400",
                what: "The strategic overlay applied to all of the above. Making everything land with India's most important emerging audience.",
                deliverables: ["GenZ brand audit", "Employer brand content for GenZ talent acquisition", "GenZ GTM communication workshop", "Platform-native content strategy (LinkedIn, Reels, Shorts)", "GenZ-specific messaging for product and hiring"],
                outcome: "Brand becomes legible, credible, and compelling to the generation reshaping Indian business — as buyers, as talent, and as advocates."
              }
            ].map((s) => (
              <div key={s.area} className={`bg-gray-900 rounded-2xl border ${s.color} mb-5 overflow-hidden`}>
                <div className="px-5 py-4 flex gap-3 items-start">
                  <span className="text-2xl mt-0.5">{s.icon}</span>
                  <div className="flex-1">
                    <h3 className={`font-bold text-base ${s.accent}`}>{s.area}</h3>
                    <p className="text-gray-400 text-xs mt-1">{s.what}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Deliverables</p>
                    <ul className="space-y-1">
                      {s.deliverables.map((d, i) => (
                        <li key={i} className={`text-xs flex gap-2 text-gray-300`}>
                          <span className={`${s.accent} shrink-0`}>→</span>{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Business Outcome</p>
                    <p className="text-xs text-gray-300 leading-relaxed">{s.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: CONTRACT TERMS */}
        {activeTab === 3 && (
          <div>
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-white">Contract & Payment Terms</h2>
              <p className="text-gray-400 text-sm mt-1">Clear, simple, founder-friendly.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {terms.map((t) => (
                <div key={t.title} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-800 flex gap-2 items-center">
                    <span>{t.icon}</span>
                    <h3 className="font-semibold text-white text-sm">{t.title}</h3>
                  </div>
                  <div className="divide-y divide-gray-800">
                    {t.content.map((c) => (
                      <div key={c.label} className="px-5 py-4">
                        <p className="text-xs font-semibold text-amber-400 mb-1">{c.label}</p>
                        <p className="text-xs text-gray-400 leading-relaxed">{c.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary card */}
            <div className="mt-6 bg-gradient-to-br from-amber-900 to-orange-950 rounded-2xl border border-amber-700 p-6">
              <h3 className="text-white font-bold text-base mb-4">The One-Page Summary</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { label: "Monthly Retainer", detail: "Invoice on 25th\nDue by 1st of next month\n3-month minimum" },
                  { label: "Annual Contract", detail: "10% discount on upfront\nOR quarterly splits\n60-day exit after Month 6" },
                  { label: "One-Time Projects", detail: "50% upfront on signing\n50% on delivery\nNo credit on first engagement" }
                ].map(c => (
                  <div key={c.label} className="bg-black bg-opacity-30 rounded-xl p-4">
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.label}</p>
                    {c.detail.split("\n").map((l, i) => <p key={i} className="text-white text-xs mb-1">· {l}</p>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
