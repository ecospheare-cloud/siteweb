/* Observed LANDOR scroll relationships, adapted to ECOSPHEARE content. */
(() => {
 const {gsap,ScrollTrigger}=window;
 if(!gsap||!ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 const header=document.querySelector('.site-header');
 const home=document.body.classList.contains('home');
 const mm=gsap.matchMedia();
 const syncMotion=()=>{mm.revert();if(document.body.classList.contains('effects-paused'))return;
 mm.add('(prefers-reduced-motion: no-preference)',()=>{
  document.documentElement.classList.add('motion-ready');
  const updateHeader=trigger=>{
   const atTop=trigger.scroll()<innerHeight*.1;
   const visible=atTop||(!atTop&&trigger.direction<0)||header.contains(document.activeElement)||document.querySelector('.menu-toggle')?.getAttribute('aria-expanded')==='true';
   header.classList.toggle('is-visible',visible);
   header.classList.toggle('is-retracted',!visible);
  };
  ScrollTrigger.create({start:0,end:'max',onUpdate:updateHeader,onRefresh:updateHeader});
  if(home){
   gsap.fromTo('.intro-shell',{scale:.965,transformOrigin:'top center'},{scale:1,ease:'none',scrollTrigger:{trigger:'.intro-shell',start:'top bottom',end:'top center',scrub:true,invalidateOnRefresh:true}});
   if(document.querySelector('.brand-film'))gsap.fromTo('.brand-film',{scale:.9,transformOrigin:'center center'},{scale:1,ease:'none',scrollTrigger:{trigger:'.brand-film',start:'top bottom',end:'70% bottom',scrub:true,invalidateOnRefresh:true}});
   const manifesto=document.querySelector('.manifesto');
   if(manifesto){
    const stage=manifesto.closest('.manifesto-stage');
    const lines=[...manifesto.querySelectorAll('h2 span')];
    const copy=manifesto.querySelector('p');
    const clamp=value=>Math.max(0,Math.min(1,value));
    let manifestoFrame=0;
    const updateManifesto=()=>{
     manifestoFrame=0;
     if(matchMedia('(prefers-reduced-motion: reduce)').matches||document.body.classList.contains('effects-paused')){
      lines.forEach(line=>{line.style.opacity='1';line.style.transform='none'});
      copy.style.opacity='1';copy.style.transform='none';return;
     }
     const rect=stage.getBoundingClientRect();
     const progress=clamp(-rect.top/Math.max(1,rect.height-innerHeight));
     lines.forEach((line,index)=>{
      const local=clamp((progress-index*.12)/.38);
      const eased=1-Math.pow(1-local,3);
      line.style.opacity=String(.15+.85*eased);
      line.style.transform=`translateY(${(1-eased)*65}px) scale(${.9+.1*eased})`;
     });
     const copyProgress=clamp((progress-.5)/.28);
     const copyEase=1-Math.pow(1-copyProgress,3);
     copy.style.opacity=String(copyEase);
     copy.style.transform=`translateY(${(1-copyEase)*25}px)`;
    };
    const queueManifesto=()=>{if(!manifestoFrame)manifestoFrame=requestAnimationFrame(updateManifesto)};
    addEventListener('scroll',queueManifesto,{passive:true});
    addEventListener('resize',queueManifesto);
    updateManifesto();
   }
  }
  if(home){
   gsap.fromTo('.cap-orbit',{rotation:-50,scale:.65,opacity:.2},{rotation:20,scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:'.first-conversation',start:'top bottom',end:'center center',scrub:1}});
   gsap.fromTo('.conversation-heading h2',{y:60,opacity:1},{y:0,opacity:1,scrollTrigger:{trigger:'.first-conversation',start:'top 85%',end:'top 30%',scrub:1}});
  }
  // The narrative advances one block at a time; links remain visible at all times.
  for(const block of document.querySelectorAll('.growth-heading,.chapter-copy,.people-heading,.method-heading,.outcome-heading')){
   gsap.from(block,{y:32,duration:.8,ease:'power3.out',scrollTrigger:{trigger:block,start:'top 92%',toggleActions:'play none none none',once:true}});
  }
  for(const figure of document.querySelectorAll('.growth-chapter .optical-figure picture')){
   gsap.fromTo(figure.querySelector('img'),{scale:1.08},{scale:1,ease:'none',scrollTrigger:{trigger:figure,start:'top bottom',end:'bottom center',scrub:.6}});
  }
  for(const row of document.querySelectorAll('.people-grid,.delivery-timeline')){
   gsap.from(row.children,{y:36,duration:.7,stagger:.09,ease:'power3.out',scrollTrigger:{trigger:row,start:'top 90%',once:true}});
  }
  for(const step of document.querySelectorAll('.delivery-timeline li'))ScrollTrigger.create({trigger:step,start:'top 75%',end:'bottom 35%',toggleClass:'is-step-active'});
  if(document.querySelector('.case-immersive')){
   gsap.to('.case-immersive-image',{yPercent:-30,ease:'power1.in',scrollTrigger:{trigger:'.case-immersive',start:'top top',end:()=>'+='+innerHeight,pin:'.case-immersive-media',pinSpacing:false,scrub:true,anticipatePin:1,invalidateOnRefresh:true}});
  }
  return ()=>{document.documentElement.classList.remove('motion-ready');header.classList.remove('is-retracted');header.classList.add('is-visible')};
 });
 };
 syncMotion();document.addEventListener('site-effects-change',syncMotion);
 document.fonts.ready.then(()=>ScrollTrigger.refresh());
 for(const video of document.querySelectorAll('video'))video.addEventListener('loadedmetadata',()=>ScrollTrigger.refresh(),{once:true});
 addEventListener('pageshow',()=>ScrollTrigger.refresh());
})();
