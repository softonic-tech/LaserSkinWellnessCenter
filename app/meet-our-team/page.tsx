'use client';
import Image from 'next/image';
import SiteFrame from '../components/SiteFrame';

const BOOK='https://www.joinblvd.com/b/laser-skin-and-wellness/widget#/cart/menu?skipRedirect=true';
const members=[
  {name:'ARIANA',role:'Nurse injector',img:'doctor-image-laser-skin-6.webp',bio:'Ariana provides thoughtful, personalized care, focusing on enhancements that help clients feel confident and refreshed. Her approach ensures a comfortable experience and results that look naturally beautiful.'},
  {name:'NANCY',role:'Client Coordinator',img:'doctor-image-laser-skin-4.webp',bio:'Her role is pivotal in ensuring that every client’s journey from consultation to follow-up is seamless and satisfactory.'},
  {name:'MAGY',role:'Licensed Esthetician',img:'group-6-1.webp',bio:'Magy takes tailored approach to skincare, helping clients feel comfortable and cared for throughout their treatments. Her focus is on creating a relaxing experience with results that support healthy, glowing skin.'}
];
export default function MeetOurTeam(){
  return <SiteFrame>
    <section className="team-hero">
      <div className="team-hero-inner">
        <div className="team-hero-row">
          <div className="team-hero-copy">
            <h1>Meet Our Team</h1>
            <p>{"Each member of our team is not only an expert in their field but also committed to your care and comfort. Get to know our dedicated professionals who are here to ensure you receive \u2028the best treatment in a friendly and supportive environment."}</p>
          </div>
          <a className="team-orbit" href={BOOK} target="_blank" rel="noopener noreferrer" aria-label="Book your consultation"><Image src="/images/Group-64.png" alt="" width={381} height={323}/></a>
        </div>
      </div>
    </section>
    <section id="team-expert" className="team-expert">
      <div className="team-expert-head"><h2>OUR EXPERT TEAM</h2></div>
      <div className="team-doctor">
        <div className="team-doctor-panel"/>
        <Image className="team-doctor-photo" src="/images/dr-shermi-parikh.webp" alt="Dr. Shermi Parikh, physician at Laser Skin and Wellness Center" width={1057} height={1398} sizes="437px"/>
        <div className="team-doctor-copy">
          <h3>DR. SHERMI PARIKH</h3>
          <p className="role">FOUNDER &amp; OWNER</p>
          <p>Dr. Shermi Parikh brings over two decades of experience in medicine and a decade in aesthetic medicine to Laser Skin &amp; Wellness Center. As the founder and owner, Dr. Parikh is dedicated to offering cutting-edge, non-invasive treatments that ensure our clients receive the best care without significant downtime. Her philosophy centers around enhancing natural beauty and providing personalized care that aligns with each client’s unique needs.</p>
        </div>
      </div>
    </section>
    <section className="team-people">
      {members.map(m=><article key={m.name}>
        <Image src={'/images/'+m.img} alt={m.name} width={800} height={780} sizes="(max-width: 700px) 100vw, 33vw"/>
        <h3>{m.name}</h3>
        <p className="role">{m.role}</p>
        <p>{m.bio}</p>
      </article>)}
    </section>
    <section className="team-dream">
      <div className="team-dream-copy">
        <h2>GET YOUR DREAM RESULTS WITH NON-INVASIVE TREATMENTS</h2>
        <a href={BOOK} target="_blank" rel="noopener noreferrer" aria-label="Book your consultation"><Image src="/images/Group-64.png" alt="" width={381} height={323}/></a>
      </div>
    </section>
    <section className="team-quote" aria-label="Our team">
      <p className="team-quote-mark" aria-hidden="true">OUR</p>
      <p className="team-quote-mark team-quote-mark-end" aria-hidden="true">TEAM</p>
      <p className="team-quote-kicker">Our team</p>
      <h2>Where expertise meets care,<br/>our team illuminates your path</h2>
      <p className="shine">to radiant skin,</p>
      <p className="close">one treatment at a time</p>
      <a className="team-quote-btn" href="#team-expert">Meet our team <span aria-hidden="true">→</span></a>
    </section>
    <section className="finance team-finance"><Image src="/images/finan-scaled.webp" alt="" fill sizes="100vw"/><div className="finance-copy"><h2>TREATMENT TODAY, PAY LATER</h2><p>We accept Cherry &amp; CareCredit!</p><a href={BOOK} target="_blank" rel="noopener noreferrer">Explore Financing Options</a></div></section>
  </SiteFrame>;
}
