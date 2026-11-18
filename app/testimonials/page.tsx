'use client';
import {useState} from 'react';
import SiteFrame from '../components/SiteFrame';

const GOOGLE='https://www.google.com/maps/place/Laser+Skin+%26+Wellness+Center/@42.0397179,-87.8633288,17z/data=!4m8!3m7!1s0x880fc94674fe4a85:0x8b10eaadecfbce52!8m2!3d42.0397179!4d-87.8633288!9m1!1b1';
const reviews=[
  {name:'Taquila Coleman',text:'Love this place!!! Everybody that works here are so friendly and make you feel at home. I’ll give them 20 stars if I could and most of all they provide good services at a fair price love these guys!!!and the work they do is excellent'},
  {name:'Misti Tula',text:'I am so happy with my results these ladies do amazing work and made me feel so comfortable and relaxed definitely recommend them. 🙂'},
  {name:'Jane',text:'I am post-op liquid bbl week 5 and couldn’t be more satisfied with my outcome and experience. Nurse Julie and Dr. Shermi are both true professionals. They took the time to listen to my concerns. I appreciated their honest recommendations and never felt pressured to opt for more. Nurse Julie and Dr. Shermi both have a gentle touch and an eye for detail, ensuring natural-looking results. Client coordinator Nancy is very sweet and answered all my questions with kindness. I cannot wait to go back for round two!'},
  {name:'Linda Lucas',text:'Wonderful experience! I had a liquid BBL and everything went very smoothly. Little to no pain, no bruising, very gentle technique. I have had another liquid BBL at another med spa and my experience with Laser Skin & Wellness Center was much better! Everyone was so nice and they are very clean and careful with all their treatments. I would definitely recommend them!'},
  {name:'Heleen Shihab',text:'My experience at laser skin & wellness center was amazing. I had 2 different body contouring and BBL done with Dr. Shermi Parikh. Dr. Parikh is definitely the best and gave me just what I wanted. I am so happy with my results. The receptionist was very sweet. The nurse was very nice and delicate with me. Great experience! I highly recommend laser skin & wellness center!!'},
  {name:'Boo boo Kitty',text:'They were so nice and amazing I’m gathering more money so I can see them again'},
  {name:'Ana Vargas',text:'Outstanding service! Definitely recommend it, everyone was super friendly and helpful, making my experience exceptional. Will be coming back soon!'},
  {name:'Alma Valencia',text:'Highly recommended their liquid bbl, results are amazing this changed my mind about getting a real bbl, pain is tolerable no down time which was a big thing for me. Nancy along with Dr Shermi Parikh and Julie Lee are absolutely amazing people. I felt so comfortable around them. Very knowledgeable and caring thank you guys so much!'},
  {name:'Kristine Cook',text:'Julie was great and made the whole process easy and comfortable! Love my lips!'},
  {name:'Sylvia Reyes',text:'I had been thinking about having laser hair removal for several years. Top concerns were cost and effectiveness. After research into the differences between lasers that most places use and the ones here, it seems to be huge. There is virtually zero pain (slight pinch). After one session, there was a noticeable difference. The cost seemed reasonable and they have specials from time to time. The best part of my experience, truly, is the entire staff. Dr. Parikh is great! She is so passionate about the services that are offered and it shows. Carolyn is fantastic. This is a great place! I recommend highly!'}
];

function Stars(){
  return <span className="g-stars" aria-label="5 out of 5 stars">{[0,1,2,3,4].map(i=><svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.8 6.6 19.4l1-6.1L3.2 9l6.1-.9L12 2.6z"/></svg>)}</span>;
}

export default function Testimonials(){
  const [shown,setShown]=useState(4);
  const [open,setOpen]=useState<Record<string,boolean>>({});
  return <SiteFrame>
    <section className="t-hero">
      <p className="t-kicker">Testimonials</p>
      <h1>What our patients say</h1>
      <p>Real stories from real clients who’ve experienced transformative results.</p>
    </section>
    <section className="g-reviews" aria-label="Google reviews">
      <h2>Google <span>Reviews</span></h2>
      <a className="g-badge" href={GOOGLE} target="_blank" rel="noopener noreferrer">
        <strong>EXCELLENT</strong>
        <Stars/>
        <span>320 reviews on <em>Google</em></span>
      </a>
      <div className="g-list">
        {reviews.slice(0,shown).map(review=>{
          const long=review.text.length>180;
          const expanded=open[review.name];
          return <article key={review.name} className="g-card">
            <header>
              <span className="g-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
              <div>
                <h3>{review.name}</h3>
                <Stars/>
              </div>
              <svg className="g-mark" viewBox="0 0 24 24" aria-label="Posted on Google"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z"/><path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.8V6.5H1.4a12 12 0 0 0 0 11l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4A12 12 0 0 0 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8z"/></svg>
            </header>
            <p>{long&&!expanded?review.text.slice(0,180).trimEnd()+'…':review.text}</p>
            {long&&<button type="button" onClick={()=>setOpen(s=>({...s,[review.name]:!s[review.name]}))}>{expanded?'Show less':'Read more'}</button>}
          </article>;
        })}
      </div>
      {shown<reviews.length&&<button type="button" className="g-more" onClick={()=>setShown(reviews.length)}>Show more reviews</button>}
      <a className="g-all" href={GOOGLE} target="_blank" rel="noopener noreferrer">See all reviews on Google</a>
    </section>
  </SiteFrame>;
}
