/* Observed LANDOR scroll relationships, adapted to ECOSPHEARE content. */
(() => {
 const {gsap,ScrollTrigger}=window;
 if(!gsap||!ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 const header=document.querySelector('.site-header');
 const home=document.body.classList.contains('home');
 const mm=gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)',()=>{
  document.documentElement.classList.add('motion-ready');
  const updateHeader=trigger=>{
   const atTop=trigger.scroll()<innerHeight*.1;
   const visible=(!home&&atTop)||(!atTop&&trigger.direction<0)||header.contains(document.activeElement)||document.querySelector('.menu-toggle')?.getAttribute('aria-expanded')==='true';
   header.classList.toggle('is-visible',visible);
   header.classList.toggle('is-retracted',!visible);
  };
  ScrollTrigger.create({start:0,end:'max',onUpdate:updateHeader,onRefresh:updateHeader});
  if(home){
   gsap.fromTo('.intro-shell',{scale:.965,transformOrigin:'top center'},{scale:1,ease:'none',scrollTrigger:{trigger:'.intro-shell',start:'top bottom',end:'top center',scrub:true,invalidateOnRefresh:true}});
   gsap.fromTo('.brand-film',{scale:.9,transformOrigin:'center center'},{scale:1,ease:'none',scrollTrigger:{trigger:'.brand-film',start:'top bottom',end:'70% bottom',scrub:true,invalidateOnRefresh:true}});
   ScrollTrigger.create({trigger:'.manifesto-stage',start:'top top',end:()=>'+='+innerHeight,pin:'.manifesto',pinSpacing:true,anticipatePin:1,invalidateOnRefresh:true});
  }
  if(document.querySelector('.case-immersive')){
   gsap.to('.case-immersive-image',{yPercent:-30,ease:'power1.in',scrollTrigger:{trigger:'.case-immersive',start:'top top',end:()=>'+='+innerHeight,pin:'.case-immersive-media',pinSpacing:false,scrub:true,anticipatePin:1,invalidateOnRefresh:true}});
  }
  return ()=>{document.documentElement.classList.remove('motion-ready');header.classList.remove('is-retracted');header.classList.add('is-visible')};
 });
 document.fonts.ready.then(()=>ScrollTrigger.refresh());
 for(const video of document.querySelectorAll('video'))video.addEventListener('loadedmetadata',()=>ScrollTrigger.refresh(),{once:true});
 addEventListener('pageshow',()=>ScrollTrigger.refresh());
})();
