'use client';
import {useState} from 'react';
import Image from 'next/image';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import SiteFrame from '../components/SiteFrame';

const BOOK='https://www.joinblvd.com/b/laser-skin-and-wellness/widget#/cart/menu?skipRedirect=true';
const perks=[
  {icon:'icon-1.svg',title:'Minimally Invasive'},
  {icon:'icon-2.svg',title:'Natural Looking Results'},
  {icon:'icon-3.svg',title:'Quick Recovery'},
  {icon:'icon-4.svg',title:'Long-Lasting'},
  {icon:'icon-5.svg',title:'Reversible'}
];
const steps=[
  {num:'step-1.png',title:'Consultation',body:'Our specialists evaluate your needs and discuss your goals.'},
  {num:'step-3.png',title:'Preparation',body:<>The buttocks area<br/>is cleansed and numbed for comfort.</>},
  {num:'step-4.png',title:'Treatment',body:<>Dermal <a href="/#treatments">fillers</a> are carefully injected using fine needles to ensure precision.</>},
  {num:'step-04.png',title:'Immediate Aftercare',body:'You can resume normal activities with specific aftercare instructions for the best results.'}
];
const rows=[
  ['Invasiveness','No surgery or incisions','Requires surgery and incisions'],
  ['Recovery Time','Quick recovery','Weeks of downtime'],
  ['Customization','Highly customizable','Limited by fat transfer'],
  ['Reversibility','Reversible','Irreversible; permanent results'],
  ['Time','Outpatient in under an hour','Multi-hour surgical procedure'],
  ['Complications','Low risk','High risk'],
  ['Eligibility','No need for fat transfer','Requires fat for transfer'],
  ['Results','Less chance of asymmetry','Potential for uneven results'],
  ['Cost','Affordable with financing options','Expensive']
];
const photos=['result-1.webp','result-2.webp','result-3.webp','result-4.webp','result-5.webp','result-6.webp','result-7.webp','result-8.webp'];

export default function LiquidVsSurgical(){
  const [shot,setShot]=useState(0);
  const max=photos.length-1;
  return <SiteFrame>
    <section className="bbl-hero">
      <div className="bbl-hero-row">
        <div className="bbl-hero-copy">
          <h1>Transform your curves without surgery</h1>
          <p>Liquid bbl vs surgical bbl</p>
        </div>
        <a className="bbl-orbit" href={BOOK} target="_blank" rel="noopener noreferrer" aria-label="Book your consultation"><Image src="/images/Group-64.png" alt="" width={381} height={323}/></a>
      </div>
    </section>

    <section className="bbl-adv">
      <h2>THE LIQUID BBL ADVANTAGE</h2>
      <div className="bbl-adv-panel">
        <div className="bbl-perks">
          {perks.map(item=><article key={item.title}>
            <img src={'/images/bbl/'+item.icon} alt="" width={94} height={85}/>
            <h3>{item.title}</h3>
          </article>)}
        </div>
        <Image className="bbl-curves" src="/images/bbl/curves.webp" alt="Illustrated comparison of body curves" width={700} height={688}/>
      </div>
    </section>

    <section className="bbl-process">
      <h2>SIMPLE &amp; FAST PROCESS</h2>
      <div className="bbl-steps">
        {steps.flatMap((step,i)=>[
          i>0?<Image key={step.title+'-arrow'} className="bbl-arrow" src="/images/bbl/step-2.png" alt="" width={80} height={27}/>:null,
          <article key={step.title}>
            <Image src={'/images/bbl/'+step.num} alt="" width={120} height={67}/>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ])}
      </div>
      <a className="bbl-book" href={BOOK} target="_blank" rel="noopener noreferrer">Book your Consultation</a>
    </section>

    <section className="bbl-compare">
      <h2>LIQUID VS. SURGICAL BBL</h2>
      <div className="bbl-table">
        <div className="bbl-gap"/>
        <div className="bbl-h liquid">Liquid BBL</div>
        <div className="bbl-h surgical">Surgical BBL</div>
        {rows.flatMap(row=>[
          <div key={row[0]} className="bbl-lab">{row[0]}</div>,
          <div key={row[0]+'-l'} className="bbl-liq">{row[1]}</div>,
          <div key={row[0]+'-s'} className="bbl-sur">{row[2]}</div>
        ])}
      </div>
    </section>

    <section className="bbl-results">
      <h2>NATURAL LOOKING RESULTS</h2>
      <div className="bbl-scroller">
        <button type="button" className="ig-arrow prev" aria-label="Previous results" onClick={()=>setShot(n=>Math.max(0,n-1))}><ChevronLeft size={28}/></button>
        <div className="bbl-viewport"><div className="bbl-track" style={{transform:'translateX(-'+shot*25+'%)'}}>{photos.map(src=><Image key={src} src={'/images/bbl/'+src} alt="Liquid BBL result" width={800} height={700}/>)}</div></div>
        <button type="button" className="ig-arrow next" aria-label="Next results" onClick={()=>setShot(n=>Math.min(max-3,n+1))}><ChevronRight size={28}/></button>
      </div>
    </section>

    <section className="bbl-cta">
      <h2>READY FOR EFFORTLESS CURVES?</h2>
      <p>Let’s Get Started</p>
      <a href={BOOK} target="_blank" rel="noopener noreferrer">Book your Consult</a>
    </section>
  </SiteFrame>;
}
