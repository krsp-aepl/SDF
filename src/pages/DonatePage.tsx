import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, ChevronDown, CreditCard, Heart, HeartHandshake,
  Info, Landmark, Leaf, Mail, PawPrint, Recycle, ShieldCheck,
  Sparkles, Users, Wallet, Smartphone, Banknote, HandHeart
} from 'lucide-react';
import { SDF_INFO } from '../data/foundationData';

const causes = [
  { name: 'Where needed most', icon: HeartHandshake, description: 'Allow SDF to identify an eligible, priority area of support.' },
  { name: 'Women Empowerment', icon: Users, description: 'Proposed education, awareness and women-led community opportunities.' },
  { name: 'Animal Care & Welfare', icon: PawPrint, description: 'Planned care and veterinary referral coordination for vulnerable animals.' },
  { name: 'Community Development', icon: HandHeart, description: 'Proposed community outreach, wellbeing and educational activities.' },
  { name: 'Waste Management', icon: Recycle, description: 'Planned cleanliness and waste-segregation awareness.' },
  { name: 'Green Cover & Plantation', icon: Leaf, description: 'Planned sapling care, plantation and local green stewardship.' },
  { name: 'Tyre Recycling Awareness', icon: Recycle, description: 'Responsible tyre recycling education and partner coordination.' },
  { name: 'Heritage & Public Spaces', icon: Landmark, description: 'Proposed heritage and public-space cleanliness initiatives.' },
  { name: 'E-Waste Collection Awareness', icon: Smartphone, description: 'Responsible segregation and authorised e-waste handling awareness.' },
];
const presetAmounts = [501, 1100, 2500, 5000, 10000];
const inr = (n: number) => '₹' + n.toLocaleString('en-IN');

export const DonatePage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1100);
  const [custom, setCustom] = useState('');
  const [frequency, setFrequency] = useState<'once'|'monthly'>('once');
  const [cause, setCause] = useState(causes[0].name);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [faq, setFaq] = useState<number | null>(0);
  const amount = selectedAmount === null ? Number(custom) : selectedAmount;
  const validAmount = Number.isFinite(amount) && Number.isInteger(amount) && amount > 0 && amount <= 10000000;
  const selectedCause = causes.find(x => x.name === cause) || causes[0];
  const CauseIcon = selectedCause.icon;

  function requestNotification(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validAmount || !name.trim() || !email.trim()) return;
    const subject = encodeURIComponent('SDF — Notify me when donations open');
    const body = encodeURIComponent(
      `Hello Samrakshan Dhara Foundation,\n\n` +
      `Please notify me when official online donations become available.\n\n` +
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not supplied'}\n` +
      `Preferred cause: ${cause}\nIndicative amount: INR ${amount}\n` +
      `Frequency preference: ${frequency === 'once' ? 'One-time' : 'Monthly'}\n\n` +
      `I understand this does not make, authorise, schedule or collect any payment.`
    );
    window.location.href = `mailto:${SDF_INFO.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="bg-[#F5F0E5] text-[#153D39]">
      <style>{`
        @keyframes sdf-donate-glow { 0%,100%{transform:translateX(-5%) translateY(0);opacity:.5} 50%{transform:translateX(7%) translateY(-4%);opacity:.85} }
        @keyframes sdf-donate-enter {from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        .sdf-donate-glow {animation:sdf-donate-glow 12s ease-in-out infinite;}
        .sdf-donate-enter {animation:sdf-donate-enter .7s ease-out both;}
        @media (prefers-reduced-motion:reduce){.sdf-donate-glow,.sdf-donate-enter{animation:none}}
      `}</style>
      <section className="relative overflow-hidden bg-[#07383C] text-[#F8F3E9]">
        <div aria-hidden="true" className="sdf-donate-glow absolute -right-[18%] -top-[25%] w-[75%] aspect-square rounded-full blur-[65px] pointer-events-none"
             style={{background:'radial-gradient(circle,rgba(55,161,144,.35),rgba(7,56,60,0) 65%)'}}/>
        <div aria-hidden="true" className="absolute inset-0 opacity-[.12] pointer-events-none"
             style={{backgroundImage:'radial-gradient(circle at 20% 15%, #DCC8A0 1px, transparent 1.5px)',backgroundSize:'31px 31px'}} />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-14 lg:pb-20">
          <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-9 lg:gap-16 items-start">
            <div className="sdf-donate-enter lg:sticky lg:top-24 pt-4 lg:pt-12">
              <p className="text-[#DCC28C] font-semibold text-[11px] tracking-[.27em] uppercase flex items-center gap-2"><Sparkles size={15}/> SAMRAKSHAN DHARA FOUNDATION</p>
              <h1 className="font-serif mt-5 text-[clamp(3.5rem,6.1vw,6rem)] leading-[1.04] tracking-[-.04em]">Donate <em className="text-[#E9D3AA] font-normal">Now.</em></h1>
              <p className="text-xl sm:text-2xl mt-5 font-serif text-[#E1EBE4]">Your kindness. Their tomorrow.</p>
              <p className="mt-5 max-w-md text-[#CAE1D9] leading-relaxed text-sm sm:text-base">
                Choose a cause, choose an amount, and get ready to support meaningful future initiatives. Our online payment gateway will be connected soon.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs">
                <span className="flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 bg-white/5"><Heart size={15} className="text-[#E9D3AA]"/> 8 areas of support + general fund</span>
                <span className="flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 bg-white/5"><ShieldCheck size={15} className="text-[#E9D3AA]"/> Transparent donation status</span>
              </div>
              <div className="mt-8 border-l-2 border-[#E5C58E] pl-4 max-w-md">
                <p className="text-[#F2DDB6] font-semibold text-sm">Payment activation pending</p>
                <p className="text-[#C5DDD6] text-xs sm:text-sm mt-1">No UPI, card, bank transfer or online payment is processed on this page yet. You can request to be notified when donations open.</p>
              </div>
            </div>
            <div id="donation-form" className="sdf-donate-enter rounded-[28px] bg-[#FCFAF5] text-[#143F3A] overflow-hidden shadow-[0_28px_90px_rgba(0,12,14,.32)] border border-[#D8E4DB]">
              <div className="px-5 sm:px-8 py-6 border-b border-[#DFE7DD] bg-[#F3F7F1] flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-lg">Make a difference</p>
                  <p className="text-[#64736D] text-xs mt-1">Set up your donation preference</p>
                </div>
                <span className="rounded-full bg-[#E4EEE9] text-[#166F61] text-xs px-3 py-1.5 font-semibold">Coming soon</span>
              </div>
              <div className="p-5 sm:p-8 space-y-6">
                <div>
                  <div className="flex justify-between items-center gap-3 mb-3">
                    <label className="font-semibold text-sm">1. Choose donation amount</label>
                    <span className="text-[#74817A] text-xs">INR</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {presetAmounts.map(v => (
                      <button type="button" key={v} onClick={()=>{setSelectedAmount(v);setCustom('');}}
                        aria-pressed={selectedAmount===v}
                        className={`relative rounded-xl px-1 py-3 sm:py-4 font-semibold text-sm sm:text-base border transition-all ${selectedAmount===v?'border-[#0C846F] bg-[#E0F0E8] text-[#075C50] shadow-[0_0_0_1px_#0C846F]':'border-[#D1DDD4] bg-white hover:border-[#0C846F]'}`}>
                        {inr(v)}{selectedAmount===v&&<Check size={13} className="absolute top-1.5 right-1.5"/>}
                      </button>
                    ))}
                    <button type="button" onClick={()=>setSelectedAmount(null)}
                      aria-pressed={selectedAmount===null}
                      className={`rounded-xl px-1 py-3 sm:py-4 text-sm font-semibold border transition-all ${selectedAmount===null?'border-[#0C846F] bg-[#E0F0E8] text-[#075C50] shadow-[0_0_0_1px_#0C846F]':'border-[#D1DDD4] bg-white hover:border-[#0C846F]'}`}>
                      Custom
                    </button>
                  </div>
                  {selectedAmount===null&&
                    <div className="mt-3">
                      <label htmlFor="sdf-custom-amount" className="block text-xs font-medium mb-1.5">Enter preferred amount (₹)</label>
                      <input id="sdf-custom-amount" inputMode="numeric" type="number" min="1" max="10000000" step="1" value={custom} onChange={e=>setCustom(e.target.value)}
                        placeholder="Enter amount" className="w-full px-4 py-3 bg-white border border-[#C5D7CB] rounded-xl outline-none focus:border-[#0C846F]"/>
                    </div>}
                </div>
                <div>
                  <label className="block font-semibold text-sm mb-3">2. Donation frequency</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" aria-pressed={frequency==='once'} onClick={()=>setFrequency('once')}
                      className={`rounded-xl px-4 py-3 font-semibold text-sm border ${frequency==='once'?'bg-[#E0F0E8] border-[#0C846F] text-[#075C50]':'bg-white border-[#D1DDD4]'}`}>One-time</button>
                    <button type="button" aria-pressed={frequency==='monthly'} onClick={()=>setFrequency('monthly')}
                      className={`rounded-xl px-4 py-3 font-semibold text-sm border ${frequency==='monthly'?'bg-[#E0F0E8] border-[#0C846F] text-[#075C50]':'bg-white border-[#D1DDD4]'}`}>Monthly</button>
                  </div>
                  {frequency==='monthly'&&<p className="text-[#687970] text-xs mt-2">Monthly payments will be available only if recurring-payment support is enabled and authorised later.</p>}
                </div>
                <div>
                  <label htmlFor="sdf-cause" className="block font-semibold text-sm mb-3">3. Choose a cause</label>
                  <div className="relative">
                    <select id="sdf-cause" value={cause} onChange={e=>setCause(e.target.value)}
                      className="appearance-none w-full bg-white border border-[#C9D9CF] rounded-xl px-4 py-3.5 pr-10 outline-none focus:border-[#0C846F] text-sm font-medium">
                      {causes.map(item=><option key={item.name} value={item.name}>{item.name}</option>)}
                    </select>
                    <ChevronDown size={18} aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"/>
                  </div>
                  <div className="flex items-start gap-3 bg-[#F2F5EF] border border-[#E0E8DC] rounded-xl p-3 mt-3">
                    <CauseIcon size={20} className="text-[#137667] shrink-0"/>
                    <p className="text-xs text-[#5B7067] leading-relaxed">{selectedCause.description}</p>
                  </div>
                </div>
                <div className="bg-[#E7F1E9] rounded-2xl px-5 py-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-[#5B746A]">Your intended {frequency==='monthly'?'monthly ':''}donation</p>
                    <p className="font-serif text-3xl sm:text-4xl font-semibold mt-1 text-[#073F39]">{validAmount ? inr(amount) : '—'}</p>
                  </div>
                  <Wallet size={30} className="text-[#0B7A69]"/>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold">4. Payment</h2>
                    <span className="text-xs text-[#9E6A2D] font-medium">Not active yet</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[{name:'UPI',icon:Smartphone},{name:'Cards',icon:CreditCard},{name:'Net banking',icon:Banknote}].map(option=>{
                      const Icon = option.icon;
                      return <div key={option.name} className="rounded-xl border border-dashed border-[#CED9D0] p-3 flex flex-col items-center gap-2 text-[#829088] bg-[#F7F8F4]" aria-label={`${option.name} coming soon`}>
                        <Icon size={21}/><span className="text-[11px] text-center">{option.name}</span>
                      </div>;
                    })}
                  </div>
                  <button type="button" disabled className="w-full rounded-full bg-[#B3C7BD] text-[#F8FFFA] py-4 font-semibold cursor-not-allowed">
                    Pay {validAmount?inr(amount):'Amount'} — Available soon
                  </button>
                  <p className="flex gap-2 items-start text-xs text-[#63756A] leading-relaxed"><Info size={15} className="shrink-0"/> Payment options are placeholders for future integration. No payment, mandate or receipt is created.</p>
                </div>
                <div className="border-t border-[#E4E9DF] pt-5">
                  <h2 className="font-serif text-xl mb-1">Get notified when donations open</h2>
                  <p className="text-xs text-[#6A7A70] mb-4">Optional: prepares an email on your device. It does not submit data to a server.</p>
                  <form onSubmit={requestNotification} className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <input required maxLength={120} autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Full name *"
                        aria-label="Full name" className="w-full rounded-xl border border-[#C9D9CF] bg-white px-4 py-3 text-sm outline-none focus:border-[#0C846F]"/>
                      <input type="email" required autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address *"
                        aria-label="Email address" className="w-full rounded-xl border border-[#C9D9CF] bg-white px-4 py-3 text-sm outline-none focus:border-[#0C846F]"/>
                    </div>
                    <input type="tel" autoComplete="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Mobile number (optional)"
                      aria-label="Mobile number" className="w-full rounded-xl border border-[#C9D9CF] bg-white px-4 py-3 text-sm outline-none focus:border-[#0C846F]"/>
                    <button type="submit" disabled={!validAmount}
                      className="w-full flex items-center justify-center gap-2 rounded-full bg-[#087F78] hover:bg-[#07685F] disabled:opacity-40 text-white font-semibold py-3.5 transition-colors">
                      <Mail size={17}/> Prepare notification email <ArrowRight size={17}/>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-14 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1fr] gap-8 lg:gap-16">
          <div>
            <p className="tracking-[.22em] uppercase text-[#177A69] text-[11px] font-bold">Donate with clarity</p>
            <h2 className="font-serif text-3xl sm:text-4xl mt-3 leading-tight">Good intentions deserve clear information.</h2>
            <p className="text-sm text-[#526C61] mt-4 leading-relaxed">SDF is preparing its fundraising infrastructure. Amounts are suggestions, not project prices or guaranteed outcomes. Women Empowerment and Community Development are proposed support areas; programmes will depend on planning, resources and approvals.</p>
            <p className="text-sm text-[#526C61] mt-4 leading-relaxed">No Section 80G tax deduction should be assumed unless the Foundation receives valid approval and issues documentation required by law.</p>
            <Link to="/get-involved" className="inline-flex gap-2 items-center mt-5 text-sm font-semibold text-[#087F78]">Explore non-financial ways to help <ArrowRight size={16}/></Link>
          </div>
          <div className="space-y-2">
            {[
              {q:'Can I donate money right now?',a:'Not through this website yet. The payment gateway is pending activation; please do not treat an amount selection as a transaction.'},
              {q:'Will monthly payments start automatically?',a:'No. Selecting monthly here does not create a subscription, charge, auto-debit or standing instruction.'},
              {q:'Can I claim an 80G deduction?',a:'Do not assume 80G tax benefits. They depend on the Foundation obtaining applicable valid approval and meeting the requirements in force.'},
              {q:'Where will contributions go?',a:'The selected cause expresses your preference. Specific project allocations and receipts will be clarified when official payment collection is activated.'}
            ].map((item,i)=>
              <div key={item.q} className="rounded-xl bg-white border border-[#DEE7DC] overflow-hidden">
                <button className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 font-medium text-sm"
                  type="button" aria-expanded={faq===i} onClick={()=>setFaq(faq===i?null:i)}>
                  {item.q}<ChevronDown size={18} className={`shrink-0 transition-transform ${faq===i?'rotate-180':''}`}/>
                </button>
                {faq===i&&<p className="px-5 pb-4 text-xs sm:text-sm text-[#5D7268] leading-relaxed">{item.a}</p>}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
