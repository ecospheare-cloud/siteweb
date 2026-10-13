/* Shared motion for expertise overview and service pages. */
(() => {
 if(!document.body.classList.contains('expertise-page')||!window.gsap||!window.ScrollTrigger)return;
 const {gsap,ScrollTrigger}=window;gsap.registerPlugin(ScrollTrigger);
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let context;let cleanups=[];
 const stop=()=>{context?.revert();context=null;cleanups.forEach(fn=>fn());cleanups=[];document.body.classList.remove('expert-motion-active');};
 const start=()=>{
  stop();if(reduced.matches||document.body.classList.contains('effects-paused'))return;
  document.body.classList.add('expert-motion-active');
  context=gsap.context(()=>{
   const hero=document.querySelector('.expert-hero,.expert-index-hero');
   if(hero)gsap.from(hero.children,{y:32,duration:.9,stagger:.12,ease:'power3.out',clearProps:'transform,opacity'});
   document.querySelectorAll('main>section:not(.expert-hero):not(.expert-index-hero):not(.first-conversation)').forEach(section=>{
    const targets=section.querySelectorAll('h2,h3,.expert-accent,.expert-tags,.expert-number,.text-link');
    gsap.from(targets,{y:26,duration:.75,stagger:.07,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 88%',once:true},clearProps:'transform,opacity'});
   });
   document.querySelectorAll('.expert-visual').forEach(figure=>{
    gsap.from(figure,{y:44,scale:.95,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:figure,start:'top 92%',once:true},clearProps:'transform,opacity'});
    if(matchMedia('(hover:hover) and (min-width:900px)').matches){
     const img=figure.querySelector('img');
     const move=e=>{const r=figure.getBoundingClientRect();gsap.to(img,{rotationY:((e.clientX-r.left)/r.width-.5)*7,rotationX:-((e.clientY-r.top)/r.height-.5)*7,transformPerspective:1000,scale:1.025,duration:.45,overwrite:true});};
     const leave=()=>gsap.to(img,{rotationX:0,rotationY:0,scale:1,duration:.65,overwrite:true});
     figure.addEventListener('pointermove',move);figure.addEventListener('pointerleave',leave);
     cleanups.push(()=>{figure.removeEventListener('pointermove',move);figure.removeEventListener('pointerleave',leave);gsap.killTweensOf(img);gsap.set(img,{clearProps:'transform'});});
    }
   });
   document.querySelectorAll('.expert-cards,.expert-process').forEach(group=>{
    const cards=group.querySelectorAll('article');
    gsap.from(cards,{y:40,duration:.8,stagger:.14,ease:'power3.out',scrollTrigger:{trigger:group,start:'top 85%',once:true},clearProps:'transform,opacity'});
   });
  });
  ScrollTrigger.refresh();
 };
 start();reduced.addEventListener('change',start);document.addEventListener('site-effects-change',start);
})();
