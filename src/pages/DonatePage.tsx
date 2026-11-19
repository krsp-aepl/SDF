import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronDown, CircleHelp,
  Flower2, HandHeart, Heart, Leaf, Mail, PawPrint, Recycle, Users,
  ShieldCheck, Sparkles, Wallet, Waves, Landmark, HeartHandshake
} from 'lucide-react';
import { SDF_INFO } from '../data/foundationData';

type CauseId = 'women' | 'animal' | 'waste' | 'green' | 'tyre' | 'heritage' | 'ewaste' | 'community';
type Frequency = 'one-time' | 'monthly';

const causes = [
  { id: 'women' as CauseId, number: '01', title: 'Women Empowerment', short: 'Opportunity begins with dignity.', icon: Users, image: '/images/women_empowerment.jpg',
    description: 'Explore potential programmes focused on women’s awareness, participation, skills and pathways towards greater confidence and community leadership.',
    uses: ['Skills and educational awareness', 'Community-led participation and outreach', 'Access to information and support networks'], tone: '#E4B9A7', status: 'Proposed area of support' },
  { id: 'animal' as CauseId, number: '02', title: 'Animal Care & Welfare', short: 'Care for vulnerable lives.', icon: PawPrint, image: '/images/samrakshan_protection.jpg',
    description: 'Support planned compassionate care initiatives for abandoned and injured animals, including essential supplies, welfare awareness and veterinary coordination.',
    uses: ['Animal water and feeding support', 'First-aid and veterinary referral coordination', 'Community animal welfare awareness'], tone: '#C7DFB8', status: 'Planned initiative' },
  { id: 'waste' as CauseId, number: '03', title: 'Waste Management', short: 'Cleaner spaces, healthier communities.', icon: Recycle, image: '/images/living_world_collage.png',
    description: 'Express support for proposed neighbourhood cleanliness drives, segregation education and community-based waste awareness.',
    uses: ['Community cleanliness materials', 'Waste segregation awareness', 'Volunteer outreach resources'], tone: '#F0D8A0', status: 'Planned initiative' },
  { id: 'green' as CauseId, number: '04', title: 'Green Cover & Plantation', short: 'Grow care beyond planting.', icon: Leaf, image: '/images/commitment_hands_promise.png',
    description: 'Help advance planned native plantation, sapling after-care and awareness initiatives that prioritise long-term stewardship.',
    uses: ['Native saplings and planting supplies', 'Watering and maintenance support', 'Local environmental awareness'], tone: '#B7DFAB', status: 'Planned initiative' },
  { id: 'tyre' as CauseId, number: '05', title: 'Tyre Recycling Awareness', short: 'A better future for discarded tyres.', icon: Waves, image: '/images/card_commitment_visual.png',
    description: 'Explore future support for safe tyre collection awareness and collaboration with appropriately authorised recycling partners.',
    uses: ['Responsible disposal awareness', 'Collection-drive coordination', 'Recycler partnership outreach'], tone: '#D2C8F1', status: 'Planned initiative' },
  { id: 'heritage' as CauseId, number: '06', title: 'Heritage & Public Spaces', short: 'Care for what connects us.', icon: Landmark, image: '/images/jharkhand_landscape_hero.png',
    description: 'Support proposed civic care, public-space cleanliness and heritage stewardship awareness with appropriate local permissions.',
    uses: ['Public-space cleanliness drives', 'Heritage respect campaigns', 'Volunteer mobilisation materials'], tone: '#ECD1B0', status: 'Planned initiative' },
  { id: 'ewaste' as CauseId, number: '07', title: 'E-Waste Collection Awareness', short: 'Small devices. Big responsibility.', icon: Recycle, image: '/images/card_vision_visual.png',
    description: 'Help prepare educational initiatives about safe e-waste segregation and handover through authorised recycling channels.',
    uses: ['E-waste awareness sessions', 'Safe segregation guidance', 'Authorised recycler coordination'], tone: '#A9DDE2', status: 'Planned initiative' },
  { id: 'community' as CauseId, number: '08', title: 'Community Development', short: 'Stronger communities, together.', icon: HandHeart, image: '/images/living_world_collage.png',
    description: 'Register interest in future community wellbeing and participation initiatives shaped by verified local needs and practical feasibility.',
    uses: ['Community workshops and inclusion', 'Neighbourhood volunteering coordination', 'Awareness and educational outreach'], tone: '#E6C5D7', status: 'Proposed area of support' },
];

const suggestedAmounts = [501, 1100, 2500, 5000, 10000];
const faq = [
  { question: 'Can I make a payment on this page now?', answer: 'Not yet. Online payments, UPI and payment-gateway collection are not enabled on this website. The form below only prepares a donation-interest email. No money is collected or charged.' },
  { question: 'Do these amounts guarantee a particular outcome?', answer: 'No. The amounts are optional indications of the support you may wish to offer later. They are not prices, programme budgets, receipts, guaranteed results or claims that a specific activity has already been funded.' },
  { question: 'Will I receive an 80G tax deduction?', answer: 'The Foundation is not presently representing that it holds an active Section 80G approval. Please do not assume tax-deduction eligibility. Any future benefit will depend on valid approvals and applicable law at the time of donation.' },
  { question: 'Can I express interest in non-financial support?', answer: 'Yes. You can choose a cause and use the message field to offer materials, volunteering or a partnership. You may also visit our Get Involved page.' },
];

const money = (value: number) => new Intl.NumberFormat('en-IN').format(value);

export const DonatePage: React.FC = () => {
  const [selectedCause, setSelectedCause] = useState<CauseId>('women');
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
        @keyframes sdf-photo-drift { 0%,100% {transform:translate3d(0,0,0) scale(1.02)} 50% {transform:translate3d(0,-10px,0) scale(1.05)} }
        @keyframes sdf-hero-reveal { from {opacity:0;transform:translateY(18px)} to {opacity:1;transform:translateY(0)} }
        .sdf-donate-photo {animation:sdf-photo-drift 13s ease-in-out infinite alternate;}
        .sdf-donate-reveal {animation:sdf-hero-reveal 680ms ease-out both;}
        @media(prefers-reduced-motion:reduce) {.sdf-donate-photo,.sdf-donate-reveal {animation:none!important}}
      `}</style>

      {/* Editorial hero: photography and story replace the repeated SDF logo orbit */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24 bg-[radial-gradient(ellipse_at_60%_30%,#165553_0%,#07383C_50%,#04282E_100%)]">
        <div className="absolute inset-0 opacity-[.12] pointer-events-none" style={{backgroundImage:'url(/images/dhara_river_scene.png)',backgroundSize:'cover',backgroundPosition:'center'}} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-[.95fr_1.05fr] gap-12 lg:gap-20 items-center">
          <div className="sdf-donate-reveal relative z-10">
            <div className="text-[#DBBE8D] text-[11px] font-semibold tracking-[.3em] uppercase flex items-center gap-3"><span className="w-10 h-px bg-[#DBBE8D]"/> Donate Now · Be part of change</div>
            <h1 className="font-serif mt-7 text-[clamp(3.3rem,6.4vw,6.4rem)] leading-[1.02] tracking-[-.035em] text-[#F5F0E4]">
              Every <em className="font-normal text-[#E4C49B]">contribution</em> has a story.
            </h1>
            <p className="mt-7 text-[#D4E6DF] text-base sm:text-lg font-light leading-relaxed max-w-xl">
              A kinder world begins with the choices we make. Explore where your future support could help people, animals and our shared environment.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#choose-cause" className="inline-flex items-center gap-2.5 rounded-full bg-[#EBD6B3] text-[#063C3A] px-7 py-3.5 text-sm font-semibold hover:bg-white transition-colors">Discover the causes <ArrowRight size={18}/></a>
              <Link to="/get-involved" className="text-[#DCE9E3] text-sm font-medium inline-flex gap-1 items-center hover:text-[#EBD6B3]">Other ways to help <ArrowUpRight size={16}/></Link>
            </div>
            <p className="mt-9 max-w-lg border-l border-[#D6B77C] pl-4 text-xs sm:text-sm text-[#C8DCD7] leading-relaxed">
              <strong className="text-[#EED4A6]">Donation-interest enquiries only.</strong> Online donations and payment collections are not enabled on this website.
            </p>
          </div>
          <div className="relative h-[400px] sm:h-[530px] lg:h-[600px] w-full" aria-label="Illustrative scenes of community support and care">
            <div className="absolute inset-4 rounded-full bg-[#7AD3AF]/15 blur-[70px]" aria-hidden="true"/>
            <div className="absolute top-[7%] right-[5%] w-[68%] h-[78%] rounded-[170px_20px_160px_25px] overflow-hidden border border-[#D2B57B]/55 shadow-[0_30px_70px_rgba(0,15,17,.5)]">
              <img src="/images/women_empowerment.jpg" alt="Illustrative photograph representing women's empowerment" className="w-full h-full object-cover sdf-donate-photo"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F31]/55 via-transparent to-transparent" />
            </div>
            <div className="absolute left-[2%] bottom-[6%] w-[48%] h-[49%] rounded-[20px_95px_18px_100px] overflow-hidden border-[5px] border-[#0A4241] shadow-[0_25px_60px_rgba(0,15,17,.6)]">
              <img src="/images/commitment_hands_promise.png" alt="Illustrative image of care and environmental stewardship" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F31]/30 to-transparent" />
            </div>
            <div className="absolute right-0 bottom-[2%] bg-[#EADFC8] text-[#164340] px-5 sm:px-7 py-4 rounded-[18px] shadow-2xl max-w-[215px] rotate-[-3deg]">
              <HandHeart size={25} strokeWidth={1.5}/>
              <p className="font-serif mt-2 text-xl leading-tight">Care becomes action.</p>
              <p className="text-[11px] mt-1 text-[#476660]">Explore a cause that matters to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* An editorial image-led selector, rather than eight repeated teal cards */}
      <section id="choose-cause" className="scroll-mt-28 relative py-16 sm:py-24 bg-[#07363A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] tracking-[.25em] uppercase text-[#DDBF8A]">Where your kindness could go</p>
              <h2 className="font-serif mt-3 text-4xl sm:text-5xl text-[#F5F0E4]">Eight paths. <em className="text-[#B6D9CC] font-normal">One shared purpose.</em></h2>
            </div>
            <p className="max-w-sm text-sm text-[#BED1CC]">Choose a cause to discover possible future support areas. Illustrative imagery and planned ideas are not completed activity claims.</p>
          </div>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-5" aria-label="Choose a cause">
            {causes.map(cause => {
              const Icon = cause.icon;
              const chosen = selectedCause === cause.id;
              return <button key={cause.id} type="button" aria-pressed={chosen} onClick={()=>selectCause(cause.id)}
                className={`group snap-start text-left relative flex-none w-[215px] sm:w-[250px] h-[290px] sm:h-[330px] rounded-[22px] overflow-hidden border-2 transition-all duration-300 ${chosen?'border-[#E8CB9D] shadow-[0_0_22px_rgba(232,203,157,.23)]':'border-white/15 hover:border-white/55'}`}>
                <img src={cause.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#062C30] via-[#073B3D]/40 to-[#041F25]/10" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[#FFF9EB]">
                  <span className="text-xs font-mono tracking-widest">{cause.number} / 08</span><Icon size={22} strokeWidth={1.6}/>
                </div>
                <div className="absolute left-5 right-5 bottom-5">
                  <h3 className="font-serif text-[23px] leading-tight text-white">{cause.title}</h3>
                  <p className="text-xs text-[#E0EEE8]/85 mt-2 leading-relaxed">{cause.short}</p>
                  <span className="inline-flex mt-4 items-center gap-2 text-xs font-semibold text-[#EDD8B5]">{chosen?'Selected cause':'Explore cause'} {chosen?<Check size={15}/>:<ArrowUpRight size={15}/>}</span>
                </div>
              </button>
            })}
          </div>
          <p className="text-[#A4C5BF] text-xs mt-2">Scroll horizontally to see all eight causes.</p>
          <div className="mt-8 overflow-hidden rounded-[26px] grid md:grid-cols-[.86fr_1.14fr] bg-[#F0E9DC] text-[#163D3A] shadow-[0_20px_65px_rgba(0,14,18,.25)]">
            <div className="relative min-h-[250px] sm:min-h-[350px]">
              <img src={active.image} key={active.image} alt="Illustrative image related to the selected cause" className="absolute inset-0 w-full h-full object-cover sdf-donate-reveal"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#062C2D]/50 to-transparent"/>
              <span className="absolute bottom-5 left-5 bg-[#F7EDDD]/95 rounded-full px-4 py-2 text-xs text-[#174B45] font-semibold">{active.status}</span>
            </div>
            <div className="p-6 sm:p-9 lg:p-10">
              <div className="flex items-center gap-2 text-[#247A71] text-xs font-semibold uppercase tracking-[.17em]"><ActiveIcon size={20}/> Your selected cause</div>
              <h3 className="font-serif mt-4 text-3xl sm:text-4xl">{active.title}</h3>
              <p className="mt-4 text-sm sm:text-base text-[#476761] leading-relaxed">{active.description}</p>
              <p className="mt-5 text-[11px] uppercase tracking-[.15em] text-[#9A7751] font-semibold">Potential areas of support</p>
              <div className="mt-3 space-y-2">{active.uses.map(use=><div key={use} className="flex gap-2 text-sm text-[#385D55]"><Check size={17} className="text-[#17806E] shrink-0"/>{use}</div>)}</div>
              <a href="#donation-interest" className="inline-flex mt-6 items-center gap-2 font-semibold text-sm text-[#09786B] hover:text-[#044B48]">Express support for this cause <ArrowRight size={17}/></a>
              <p className="text-xs text-[#758B82] mt-3">Activities remain subject to planning, permissions and resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donor interest, no fake payment processing */}
      <section id="donation-interest" className="scroll-mt-28 bg-[#F4EEE2] text-[#08383B] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-[.84fr_1.16fr] gap-10 xl:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 font-semibold text-[11px] tracking-[.22em] uppercase text-[#147A6D]"><HeartHandshake size={17}/> Express your support</div>
            <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-tight">Choose an amount <span className="italic text-[#147A6D]">that feels right.</span></h2>
            <p className="mt-5 text-[#3A5B5B] leading-relaxed">Choose a suggested amount or enter your own, then tell us which cause matters to you. This only prepares a donation-interest enquiry—not a payment.</p>
            <div className="mt-9 space-y-4 text-sm text-[#325757]">
              <div className="flex gap-3"><ShieldCheck className="text-[#147A6D] shrink-0" size={21}/><span><strong className="text-[#113E40]">No transaction today.</strong> No gateway, UPI, bank transfer or card collection.</span></div>
              <div className="flex gap-3"><BadgeCheck className="text-[#147A6D] shrink-0" size={21}/><span><strong className="text-[#113E40]">Full transparency.</strong> Suggested figures are not costs per beneficiary or guaranteed outcomes.</span></div>
              <div className="flex gap-3"><CircleHelp className="text-[#147A6D] shrink-0" size={21}/><span><strong className="text-[#113E40]">Tax status.</strong> Do not treat this as an 80G-eligible donation or tax receipt.</span></div>
            </div>
          </div>
          <div className="rounded-[28px] bg-white shadow-[0_24px_70px_rgba(8,56,59,.12)] border border-[#D5E2DA] p-6 sm:p-9">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#D7EEE5] text-[#116F65]"><Wallet size={21}/></span>
              <div><h3 className="font-serif text-2xl">Express Your Support</h3><p className="text-xs text-[#688181] mt-1">No payment is charged or scheduled.</p></div>
            </div>
            <form onSubmit={prepareEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">How would you like to contribute?</label>
                <div className="grid grid-cols-2 gap-2.5">{(['one-time','monthly'] as Frequency[]).map(item=><button type="button" key={item} onClick={()=>setFrequency(item)} aria-pressed={frequency===item} className={`py-3.5 rounded-xl border text-sm font-semibold transition-colors ${frequency===item?'bg-[#DCEEE4] text-[#076C60] border-[#0A8F80]':'bg-[#FBFAF6] text-[#5A7870] border-[#D6DBD1]'}`}>{item==='one-time'?'One-time interest':'Monthly interest'}</button>)}</div>
                <p className="text-xs text-[#6B8079] mt-2">Monthly interest is not a subscription or recurring payment.</p>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Select a suggested amount</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {suggestedAmounts.map(value=><button type="button" key={value} aria-pressed={!custom && amount===String(value)} onClick={()=>{setAmount(String(value));setCustom(false);setEmailPrepared(false);}} className={`rounded-xl border px-2 py-4 text-sm font-semibold ${!custom&&amount===String(value)?'bg-[#DDEFE5] border-2 border-[#0D8979] text-[#075A53]':'bg-[#FFFEFB] border-[#D2D9D1] text-[#214F49] hover:border-[#0D8979]'}`}>₹{money(value)}</button>)}
                  <button type="button" onClick={()=>{setCustom(true);setAmount('');}} aria-pressed={custom} className={`rounded-xl border px-2 py-4 text-sm font-semibold ${custom?'bg-[#DDEFE5] border-2 border-[#0D8979] text-[#075A53]':'bg-[#FFFEFB] border-[#D2D9D1] text-[#214F49] hover:border-[#0D8979]'}`}>Custom</button>
                </div>
                {custom&&<div className="mt-3"><label htmlFor="sdf-custom-amount" className="text-xs font-semibold">Enter your preferred amount (₹)</label><input id="sdf-custom-amount" type="number" min="1" max="100000000" step="1" required inputMode="numeric" placeholder="e.g. 1500" value={amount} onChange={e=>{setAmount(e.target.value);setEmailPrepared(false);}} className="mt-2 w-full rounded-xl bg-white border border-[#C8DAD4] p-3 outline-none focus:ring-2 focus:ring-[#087F78]"/></div>}
                <p className="mt-2 text-xs text-[#6B8079]">Suggested preferences only — not a project cost, guarantee or confirmed donation.</p>
              </div>
              <div>
                <label htmlFor="sdf-donate-cause" className="block text-sm font-semibold mb-2">What would you like to support?</label>
                <select id="sdf-donate-cause" value={selectedCause} onChange={e=>selectCause(e.target.value as CauseId)} className="w-full bg-[#FFFEFB] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#169B8C]">
                  {causes.map(item=><option value={item.id} key={item.id}>{item.title}</option>)}
                </select>
              </div>
              <div className="flex items-center justify-between gap-3 py-4 px-5 rounded-2xl bg-[#E1EDE5] border border-[#C6DDD0]">
                <div><p className="text-xs text-[#547268]">Your intended contribution</p><p className="font-serif text-3xl text-[#103F39] mt-1">₹{Number.isFinite(Number(amount)) && Number(amount)>0?money(Number(amount)):'—'}</p><p className="text-xs text-[#547268]">{frequency==='one-time'?'One-time interest only':'Monthly interest only'}</p></div>
                <ShieldCheck size={30} className="text-[#16816D]"/>
              </div>
              <div className="pt-2 border-t border-[#DEE4DA]"><h4 className="font-serif text-2xl">Donor enquiry details</h4><p className="text-xs text-[#688181] mt-1">Complete the details below to prepare an email to SDF.</p></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label htmlFor="sdf-donor-name" className="block text-sm font-semibold mb-2">Full name <span className="text-red-700">*</span></label><input id="sdf-donor-name" required maxLength={120} autoComplete="name" value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Your full name" className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#169B8C]"/></div>
                <div><label htmlFor="sdf-donor-email" className="block text-sm font-semibold mb-2">Email address <span className="text-red-700">*</span></label><input id="sdf-donor-email" required type="email" maxLength={160} autoComplete="email" value={donorEmail} onChange={e=>setDonorEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#169B8C]"/></div>
              </div>
              <div><label htmlFor="sdf-donor-phone" className="block text-sm font-semibold mb-2">Phone number <span className="font-normal text-[#718B89]">(optional)</span></label><input id="sdf-donor-phone" type="tel" maxLength={20} autoComplete="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Your contact number" className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#169B8C]"/></div>
              <div><label htmlFor="sdf-donor-message" className="block text-sm font-semibold mb-2">Your message <span className="font-normal text-[#718B89]">(optional)</span></label><textarea id="sdf-donor-message" rows={3} maxLength={1500} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us how you would like to support SDF..." className="w-full bg-[#F4F8F5] border border-[#C8DAD4] rounded-xl px-4 py-3.5 text-sm outline-none resize-y focus:ring-2 focus:ring-[#169B8C]"/></div>
              <label className="flex gap-3 text-xs leading-relaxed text-[#567674]"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} required className="mt-1 accent-[#087F78]"/><span>I agree that my details may be used by SDF to respond to this enquiry. I understand this is not a payment or a tax-deductible donation receipt. <Link to="/privacy-policy" className="underline text-[#116F65]">Privacy Policy</Link>.</span></label>
              <button type="submit" disabled={!consent || !fullName.trim() || !donorEmail.trim() || !Number.isInteger(Number(amount)) || Number(amount)<=0} className="w-full flex justify-center items-center gap-3 py-4 rounded-full bg-[#087F78] text-white font-semibold hover:bg-[#0B9E8F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Continue — Prepare enquiry email <Mail size={18}/></button>
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
