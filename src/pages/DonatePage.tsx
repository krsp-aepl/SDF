import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronDown, CircleHelp,
  Flower2, HandHeart, Heart, Leaf, Mail, PawPrint, Recycle,
  ShieldCheck, Sparkles, Wallet, Waves, Landmark, HeartHandshake
} from 'lucide-react';
import { SDF_INFO } from '../data/foundationData';

type CauseId = 'animal' | 'waste' | 'green' | 'tyre' | 'heritage' | 'ewaste';
type Frequency = 'one-time' | 'monthly';

const causes = [
  { id: 'animal' as CauseId, number: '01', title: 'Animal Care & Welfare', short: 'Care for vulnerable lives.', icon: PawPrint,
    description: 'Support planned compassionate care initiatives for abandoned and injured animals, including essential supplies, welfare awareness and veterinary coordination.',
    uses: ['Animal water and feeding support', 'First-aid and veterinary referral coordination', 'Community animal welfare awareness'], tone: '#BDE7D4' },
  { id: 'waste' as CauseId, number: '02', title: 'Waste Management', short: 'Cleaner spaces, healthier communities.', icon: Recycle,
    description: 'Express support for proposed neighbourhood cleanliness drives, segregation education and community-based waste awareness.',
    uses: ['Community cleanliness materials', 'Waste segregation awareness', 'Volunteer outreach resources'], tone: '#F0D8A0' },
  { id: 'green' as CauseId, number: '03', title: 'Green Cover & Plantation', short: 'Grow care beyond planting.', icon: Leaf,
    description: 'Help advance planned native plantation, sapling after-care and awareness initiatives that prioritise long-term stewardship.',
    uses: ['Native saplings and planting supplies', 'Watering and maintenance support', 'Local environmental awareness'], tone: '#B7DFAB' },
  { id: 'tyre' as CauseId, number: '04', title: 'Tyre Recycling Awareness', short: 'A better future for discarded tyres.', icon: Waves,
    description: 'Explore future support for safe tyre collection awareness and collaboration with appropriately authorised recycling partners.',
    uses: ['Responsible disposal awareness', 'Collection-drive coordination', 'Recycler partnership outreach'], tone: '#D2C8F1' },
  { id: 'heritage' as CauseId, number: '05', title: 'Heritage & Public Spaces', short: 'Care for what connects us.', icon: Landmark,
    description: 'Support proposed civic care, public-space cleanliness and heritage stewardship awareness with appropriate local permissions.',
    uses: ['Public-space cleanliness drives', 'Heritage respect campaigns', 'Volunteer mobilisation materials'], tone: '#ECD1B0' },
  { id: 'ewaste' as CauseId, number: '06', title: 'E-Waste Collection Awareness', short: 'Small devices. Big responsibility.', icon: Recycle,
    description: 'Help prepare educational initiatives about safe e-waste segregation and handover through authorised recycling channels.',
    uses: ['E-waste awareness sessions', 'Safe segregation guidance', 'Authorised recycler coordination'], tone: '#A9DDE2' },
];

const suggestedAmounts = [501, 1100, 2500, 5000];
const faq = [
  { question: 'Can I make a payment on this page now?', answer: 'Not yet. Online payments, UPI and payment-gateway collection are not enabled on this website. The form below only prepares a donation-interest email. No money is collected or charged.' },
  { question: 'Do these amounts guarantee a particular outcome?', answer: 'No. The amounts are optional indications of the support you may wish to offer later. They are not prices, programme budgets, receipts, guaranteed results or claims that a specific activity has already been funded.' },
  { question: 'Will I receive an 80G tax deduction?', answer: 'The Foundation is not presently representing that it holds an active Section 80G approval. Please do not assume tax-deduction eligibility. Any future benefit will depend on valid approvals and applicable law at the time of donation.' },
  { question: 'Can I express interest in non-financial support?', answer: 'Yes. You can choose a cause and use the message field to offer materials, volunteering or a partnership. You may also visit our Get Involved page.' },
];

const money = (value: number) => new Intl.NumberFormat('en-IN').format(value);

export const DonatePage: React.FC = () => {
  const [selectedCause, setSelectedCause] = useState<CauseId>('animal');
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [amount, setAmount] = useState('1100');
  const [custom, setCustom] = useState(false);
  const [fullName, setFullName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [emailPrepared, setEmailPrepared] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const active = causes.find(item => item.id === selectedCause)!;
  const ActiveIcon = active.icon;

  function selectCause(id: CauseId) {
    setSelectedCause(id);
    setEmailPrepared(false);
  }

  function prepareEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const numeric = Number(amount);
    if (!Number.isFinite(numeric) || numeric <= 0 || !Number.isInteger(numeric) || !consent) return;
    const subject = encodeURIComponent(`SDF Donation Interest — ${active.title} — ${fullName}`);
    const body = encodeURIComponent(
      `To: Samrakshan Dhara Foundation\n\n` +
      `I would like to register an enquiry about supporting a future SDF initiative.\n\n` +
      `Full Name: ${fullName}\nEmail: ${donorEmail}\nPhone: ${phone || 'Not provided'}\n` +
      `Area of Interest: ${active.title}\nIndicative Amount: INR ${money(numeric)}\n` +
      `Interest: ${frequency === 'one-time' ? 'One-time' : 'Monthly'}\n` +
      `Message: ${message || 'None'}\n\n` +
      `I understand this is an enquiry only. No payment has been made, scheduled or collected through this website.\n`
    );
    window.location.href = `mailto:${SDF_INFO.email}?subject=${subject}&body=${body}`;
    setEmailPrepared(true);
  }

  return (
    <div className="relative overflow-hidden bg-[#052A2F] text-[#F8F7EF]">
      <style>{`
        @keyframes sdf-donate-orbit { to { transform:rotate(360deg); } }
        @keyframes sdf-donate-float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-14px) } }
        @keyframes sdf-donate-flow { from {stroke-dashoffset:520} to {stroke-dashoffset:0} }
        .sdf-donate-orbit { animation:sdf-donate-orbit 32s linear infinite; }
        .sdf-donate-float { animation:sdf-donate-float 7s ease-in-out infinite; }
        .sdf-donate-flow { stroke-dasharray:16 20; animation:sdf-donate-flow 22s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .sdf-donate-orbit,.sdf-donate-float,.sdf-donate-flow { animation:none!important; } }
      `}</style>

      {/* Hero / distinct SDF identity, not an unrelated generic donation template */}
      <section className="relative min-h-[660px] lg:min-h-[685px] pt-36 pb-20 lg:pt-40 overflow-hidden bg-[radial-gradient(ellipse_at_75%_44%,#136765_0%,#073C42_41%,#03252C_82%)]">
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{background:'radial-gradient(circle at 12% 15%,rgba(73,206,195,.35),transparent 28%),radial-gradient(circle at 86% 80%,rgba(213,173,101,.22),transparent 26%)'}}/>
        <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-[#052A2F] to-transparent" />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-35" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M-80 650 C250 350 460 730 755 450 S1170 150 1540 300" fill="none" stroke="#50BEB2" strokeWidth="1.4" className="sdf-donate-flow"/>
          <path d="M-80 565 C220 310 520 665 790 360 S1190 250 1500 75" fill="none" stroke="#D5AD65" strokeOpacity=".55" strokeWidth="1" className="sdf-donate-flow"/>
        </svg>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-[1.08fr_.92fr] gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[.24em] text-[#D5AD65] font-semibold"><Sparkles size={16}/> A future built on care</div>
            <h1 className="font-serif text-[clamp(3.3rem,6vw,6.2rem)] leading-[1.04] tracking-[-.04em] mt-7">
              Every act of <span className="italic text-[#B4DCD1]">giving</span><br/> begins with <span className="text-[#E7C994]">care.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base sm:text-lg text-[#DDEBE5]/85 font-light leading-relaxed">
              Your support can help shape the future of compassionate communities, animal welfare and responsible environmental action through Samrakshan Dhara Foundation.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a href="#choose-cause" className="inline-flex gap-2.5 items-center px-7 py-3.5 rounded-full bg-[#2BA587] hover:bg-[#49CEC3] text-[#032F32] font-semibold transition-colors shadow-lg shadow-[#2BA587]/20">Explore causes <ArrowRight size={18}/></a>
              <Link to="/get-involved" className="inline-flex gap-2 items-center px-5 py-3 text-[#E4F1E9] hover:text-[#8BDACA] font-medium text-sm">Other ways to help <ArrowUpRight size={16}/></Link>
            </div>
            <div className="mt-10 border-l-2 border-[#D5AD65]/60 pl-4 max-w-xl text-sm text-[#E7ECDD]/75 leading-relaxed">
              <strong className="text-[#F6E4BF]">Donation enquiries are open.</strong> Online contributions are not yet enabled. No payment will be requested or processed on this page.
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px] h-[430px] sm:h-[520px] flex items-center justify-center" aria-label="Samrakshan Dhara Foundation visual emblem">
            <div className="absolute w-[95%] aspect-square rounded-full bg-[#49CEC3]/10 blur-[70px]"/>
            <div className="absolute w-[85%] aspect-square rounded-full border border-[#50BEB2]/25 sdf-donate-orbit" style={{boxShadow:'0 0 45px rgba(73,206,195,.09)'}}>
              <span className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-[#D5AD65] shadow-[0_0_16px_#D5AD65]"/>
            </div>
            <div className="absolute w-[71%] aspect-square rounded-full border border-dashed border-[#D5AD65]/40 sdf-donate-orbit" style={{animationDirection:'reverse',animationDuration:'48s'}} />
            <div className="absolute w-[62%] aspect-square rounded-full bg-gradient-to-br from-[#0D635C]/50 to-[#052D31]/70 border border-white/10 backdrop-blur-xl shadow-2xl" />
            <div className="relative w-[64%] sdf-donate-float">
              <img src="/assets/sdf-dhara-gold-emblem.png" alt="SDF emblem representing care for nature and humanity" className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,.35)]" />
            </div>
            <span className="absolute left-[6%] top-[19%] px-3 py-2 rounded-full bg-[#0D615A]/80 border border-[#6AD5C0]/30 text-[11px] tracking-wide text-[#E1EFE8] backdrop-blur-md">Protect</span>
            <span className="absolute right-[4%] top-[32%] px-3 py-2 rounded-full bg-[#0D615A]/80 border border-[#6AD5C0]/30 text-[11px] tracking-wide text-[#E1EFE8] backdrop-blur-md">Nurture</span>
            <span className="absolute right-[9%] bottom-[17%] px-3 py-2 rounded-full bg-[#0D615A]/80 border border-[#6AD5C0]/30 text-[11px] tracking-wide text-[#E1EFE8] backdrop-blur-md">Together</span>
          </div>
        </div>
      </section>

      {/* Cause selector */}
      <section id="choose-cause" className="scroll-mt-28 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[.23em] text-[#D5AD65] mb-3">Choose what speaks to you</p>
            <h2 className="font-serif text-4xl sm:text-5xl max-w-xl">Six causes. <span className="italic text-[#8CCFC1]">One purpose.</span></h2>
          </div>
          <p className="text-sm leading-relaxed text-[#C3D8D3]/80 max-w-sm">Select a cause to understand where future support may be directed. These are proposed areas of work, not completed project claims.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {causes.map(cause => {
            const Icon = cause.icon;
            const chosen = selectedCause === cause.id;
            return (
              <button key={cause.id} onClick={() => selectCause(cause.id)} type="button" aria-pressed={chosen}
                className={`relative text-left min-h-[214px] p-6 rounded-[24px] border transition-all duration-300 group overflow-hidden ${chosen ? 'bg-[#0B4D4C] border-[#72CEB8] shadow-[0_16px_45px_rgba(5,30,31,.38)] -translate-y-1' : 'bg-[#07383E] border-[#75B3AA]/20 hover:border-[#75B3AA]/70 hover:bg-[#0A454A]'}`}>
                <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full blur-[50px] opacity-10 pointer-events-none" style={{background:cause.tone}}/>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] tracking-[.18em] text-[#ADC8C3]">{cause.number} / 06</span>
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 bg-white/5" style={{color:cause.tone}}><Icon size={23} strokeWidth={1.7}/></span>
                </div>
                <h3 className="font-serif text-[25px] leading-tight mt-5 text-[#F7F5EB]">{cause.title}</h3>
                <p className="mt-2 text-sm text-[#CBDDD7]/78">{cause.short}</p>
                <div className="flex items-center justify-between mt-5 text-xs font-semibold" style={{color:chosen?'#A8EBD6':'#91C2B7'}}>
                  {chosen ? 'Selected cause' : 'Explore this cause'} {chosen ? <Check size={17}/> : <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>}
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative mt-7 rounded-[28px] overflow-hidden border border-[#74C7B4]/25 bg-gradient-to-r from-[#0B4747] to-[#07353B] p-7 sm:p-9 lg:p-10 grid lg:grid-cols-[1.05fr_.95fr] gap-10">
          <div>
            <div className="flex gap-3 items-center text-[#B8E6D9]"><ActiveIcon size={21}/><span className="uppercase tracking-[.17em] text-xs">Your selected cause</span></div>
            <h3 className="mt-4 font-serif text-3xl sm:text-4xl">{active.title}</h3>
            <p className="mt-4 text-sm sm:text-base text-[#D8E7E0]/85 leading-relaxed max-w-xl">{active.description}</p>
            <a href="#donation-interest" className="mt-7 inline-flex items-center gap-2 font-semibold text-sm text-[#B6F0DC] hover:text-white">Register interest in this cause <ArrowRight size={16}/></a>
          </div>
          <div className="rounded-2xl bg-[#042A30]/70 border border-white/10 p-6">
            <p className="text-xs tracking-[.16em] uppercase text-[#D5AD65] mb-4">Potential areas of support</p>
            <div className="space-y-4">
              {active.uses.map(use => <div key={use} className="flex items-start gap-3 text-sm text-[#E4F0EA]"><span className="rounded-full bg-[#1B796B]/60 text-[#9BE8D1] p-1"><Check size={13}/></span>{use}</div>)}
            </div>
            <p className="mt-5 pt-4 border-t border-white/10 text-xs text-[#C0D2CD]/70">Activities are subject to future programme planning, feasibility, permissions and availability of resources.</p>
          </div>
        </div>
      </section>

      {/* Donor interest, no fake payment processing */}
      <section id="donation-interest" className="scroll-mt-28 bg-[#E9E8DC] text-[#08383B] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-[.84fr_1.16fr] gap-10 xl:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 font-semibold text-[11px] tracking-[.22em] uppercase text-[#147A6D]"><HeartHandshake size={17}/> Express your support</div>
            <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-tight">Your intention.<br/><span className="italic text-[#147A6D]">A meaningful beginning.</span></h2>
            <p className="mt-5 text-[#3A5B5B] leading-relaxed">Choose an indicative amount, frequency and the cause you care about. We'll prepare an enquiry to the Foundation—not a payment.</p>
            <div className="mt-9 space-y-4 text-sm text-[#325757]">
              <div className="flex gap-3"><ShieldCheck className="text-[#147A6D] shrink-0" size={21}/><span><strong className="text-[#113E40]">No transaction today.</strong> No gateway, UPI, bank transfer or card collection.</span></div>
              <div className="flex gap-3"><BadgeCheck className="text-[#147A6D] shrink-0" size={21}/><span><strong className="text-[#113E40]">Full transparency.</strong> Suggested figures are not costs per beneficiary or guaranteed outcomes.</span></div>
              <div className="flex gap-3"><CircleHelp className="text-[#147A6D] shrink-0" size={21}/><span><strong className="text-[#113E40]">Tax status.</strong> Do not treat this as an 80G-eligible donation or tax receipt.</span></div>
            </div>
          </div>
          <div className="rounded-[28px] bg-white shadow-[0_24px_70px_rgba(8,56,59,.12)] border border-[#D5E2DA] p-6 sm:p-9">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#D7EEE5] text-[#116F65]"><Wallet size={21}/></span>
              <div><h3 className="font-serif text-2xl">Donation interest enquiry</h3><p className="text-xs text-[#688181] mt-1">No payment is charged or scheduled.</p></div>
            </div>
            <form onSubmit={prepareEmail} className="space-y-6">
              <div>
                <label htmlFor="sdf-donate-cause" className="block text-sm font-semibold mb-2">Choose a cause</label>
                <select id="sdf-donate-cause" value={selectedCause} onChange={e => selectCause(e.target.value as CauseId)} className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#169B8C]">
                  {causes.map(item=><option value={item.id} key={item.id}>{item.title}</option>)}
                </select>
              </div>
              <div>
                <span className="block text-sm font-semibold mb-3">Your intended contribution</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {suggestedAmounts.map(value => <button key={value} type="button" aria-pressed={!custom && amount === String(value)} onClick={() => {setAmount(String(value));setCustom(false);setEmailPrepared(false);}} className={`rounded-xl border px-3 py-3.5 text-sm font-semibold transition-colors ${!custom && amount === String(value) ? 'bg-[#087F78] text-white border-[#087F78]' : 'bg-[#F4F8F5] border-[#C8DAD4] hover:border-[#087F78]'}`}>₹{money(value)}</button>)}
                </div>
                <button type="button" onClick={()=>{setCustom(true);setAmount('');}} className={`mt-3 text-sm font-semibold ${custom?'text-[#087F78]':'text-[#4D7170]'}`}>+ Enter a custom amount</button>
                {custom && <div className="mt-3"><label htmlFor="sdf-custom-amount" className="text-xs text-[#567879]">Custom amount (₹)</label><input id="sdf-custom-amount" type="number" min="1" max="100000000" step="1" required inputMode="numeric" placeholder="Enter an amount" value={amount} onChange={e=>{setAmount(e.target.value);setEmailPrepared(false);}} className="mt-1 w-full rounded-xl border border-[#C8DAD4] bg-[#F4F8F5] px-4 py-3 outline-none focus:ring-2 focus:ring-[#087F78]"/></div>}
                <p className="mt-2 text-xs text-[#688181]">Amounts are suggestions only, not fixed donation packages.</p>
              </div>
              <div><span className="block text-sm font-semibold mb-3">Frequency of interest</span>
                <div className="flex gap-2.5">{(['one-time','monthly'] as Frequency[]).map(item => <button type="button" key={item} onClick={()=>setFrequency(item)} aria-pressed={frequency===item} className={`flex-1 text-sm font-medium rounded-xl border px-4 py-3 transition-colors ${frequency===item?'border-[#087F78] bg-[#E4F5EF] text-[#08665D]':'border-[#C8DAD4] bg-[#F7FAF7] text-[#557674]'}`}>{item==='one-time'?'One-time interest':'Monthly interest'}</button>)}</div>
                <p className="mt-2 text-xs text-[#688181]">Selecting monthly does not create a subscription or recurring payment.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label htmlFor="sdf-donor-name" className="block text-sm font-semibold mb-2">Full name <span className="text-red-700">*</span></label><input id="sdf-donor-name" required maxLength={120} autoComplete="name" value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Your full name" className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#169B8C]"/></div>
                <div><label htmlFor="sdf-donor-email" className="block text-sm font-semibold mb-2">Email address <span className="text-red-700">*</span></label><input id="sdf-donor-email" required type="email" maxLength={160} autoComplete="email" value={donorEmail} onChange={e=>setDonorEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#169B8C]"/></div>
              </div>
              <div><label htmlFor="sdf-donor-phone" className="block text-sm font-semibold mb-2">Phone number <span className="font-normal text-[#718B89]">(optional)</span></label><input id="sdf-donor-phone" type="tel" maxLength={20} autoComplete="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Your contact number" className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#169B8C]"/></div>
              <div><label htmlFor="sdf-donor-message" className="block text-sm font-semibold mb-2">Your message <span className="font-normal text-[#718B89]">(optional)</span></label><textarea id="sdf-donor-message" rows={3} maxLength={1500} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us how you would like to support SDF..." className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none resize-y focus:ring-2 focus:ring-[#169B8C]"/></div>
              <label className="flex gap-3 text-xs leading-relaxed text-[#567674]"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} required className="mt-1 accent-[#087F78]"/><span>I agree that my details may be used by SDF to respond to this enquiry. I understand this is not a payment or a tax-deductible donation receipt. <Link to="/privacy-policy" className="underline text-[#116F65]">Privacy Policy</Link>.</span></label>
              <button type="submit" disabled={!consent || !fullName.trim() || !donorEmail.trim() || !Number.isInteger(Number(amount)) || Number(amount)<=0} className="w-full flex justify-center items-center gap-3 py-4 rounded-full bg-[#087F78] text-white font-semibold hover:bg-[#0B9E8F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Prepare enquiry email <Mail size={18}/></button>
              {emailPrepared && <div role="status" className="rounded-xl bg-[#EBF6F0] text-[#235F52] border border-[#B7D9CB] p-4 text-sm">Your email application should open with the enquiry prepared. <strong>No payment has been made and no enquiry is recorded by this website.</strong> Please send the email from your mail application, or write directly to <a className="underline" href={`mailto:${SDF_INFO.email}`}>{SDF_INFO.email}</a>.</div>}
              <p className="text-center text-xs text-[#698581]">No card details, UPI PIN, Aadhaar or banking credentials are collected.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Transparency and FAQs */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 grid lg:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-20">
        <div>
          <p className="text-[#D5AD65] uppercase tracking-[.22em] text-xs mb-4">Clarity creates trust</p>
          <h2 className="font-serif text-4xl sm:text-5xl">Giving should begin with <em className="text-[#BCE9DA]">confidence.</em></h2>
          <p className="mt-6 text-[#C8E0D8]/80 leading-relaxed text-sm sm:text-base">Samrakshan Dhara Foundation is a Section 8 non-profit organisation incorporated on 04 August 2026, CIN {SDF_INFO.cin}. The Foundation is developing its initiatives and financial contribution process.</p>
          <div className="mt-7 rounded-2xl border border-[#D5AD65]/30 bg-[#0B4846]/50 p-5 text-sm text-[#E6F0EA]/90 leading-relaxed">
            <div className="flex gap-2 items-center text-[#F3D49C] font-semibold mb-2"><ShieldCheck size={18}/> Important disclosure</div>
            We have not enabled online donation collection. SDF does not currently claim active 12AB, 80G, CSR-1 or FCRA registration through this website. No 80G deduction or donation receipt is promised. Any future donation facility will be activated only after appropriate verification and configuration.
          </div>
        </div>
        <div className="space-y-3">
          {faq.map((item,index)=><div key={item.question} className="rounded-xl border border-white/10 bg-[#073B41] overflow-hidden">
            <button type="button" onClick={()=>setOpenFaq(openFaq===index?null:index)} aria-expanded={openFaq===index} className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-sm sm:text-base text-[#F5F4E9]">{item.question}<ChevronDown className={`shrink-0 transition-transform ${openFaq===index?'rotate-180':''}`} size={19}/></button>
            {openFaq===index&&<p className="px-5 pb-5 text-sm leading-relaxed text-[#CCE0DB]/80">{item.answer}</p>}
          </div>)}
          <div className="pt-5 text-sm text-[#CCE0DB]/80">Questions? <a className="underline text-[#A9EAD9] hover:text-white" href={`mailto:${SDF_INFO.email}`}>Write to SDF</a> or <Link to="/contact" className="underline text-[#A9EAD9] hover:text-white">contact the team</Link>.</div>
        </div>
      </section>
    </div>
  );
};
