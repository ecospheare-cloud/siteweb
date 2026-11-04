(()=>{
 const init=()=>{
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 const media=gsap.matchMedia();
 const syncMotion=()=>{
  media.revert();
  if(document.body.classList.contains('effects-paused'))return;
  media.add('(min-width: 960px) and (min-height: 580px) and (prefers-reduced-motion: no-preference)',()=>{
 document.documentElement.classList.add('has-scroll-chapters');

 const buildSequence=(section,items,options={})=>{
  if(!section||items.length<2)return;
  gsap.set(items.slice(1),{autoAlpha:0,y:54,scale:options.scale===false?1:.97});
  const timeline=gsap.timeline({
   defaults:{ease:'power2.inOut'},
   scrollTrigger:{
    trigger:section,
    start:'top top',
    end:()=>`+=${Math.round(innerHeight*(items.length*.72))}`,
    scrub:.45,
    pin:true,
    anticipatePin:1,
    invalidateOnRefresh:true,
    onUpdate:self=>{
     section.style.setProperty('--chapter-progress',`${(self.progress*100).toFixed(1)}%`);
     options.update?.(self.progress);
    }
   }
  });
  items.forEach((item,index)=>{
   if(index===items.length-1)return;
   const next=items[index+1];
   timeline
    .to(item,{autoAlpha:0,y:-38,scale:options.scale===false?1:.985,duration:.38,pointerEvents:'none'})
    .to(next,{autoAlpha:1,y:0,scale:1,duration:.48,pointerEvents:'auto'},'<.12')
    .to({}, {duration:.18});
  });
 };

 const expertise=document.querySelector('.home .ecosfer-expertises');
 buildSequence(expertise,[...document.querySelectorAll('.home .ecosfer-offers>article')]);

 const agencyIntro=document.querySelector('.agency-page .agency-intro');
 const agencyCopy=[...document.querySelectorAll('.agency-page .agency-intro>div>p')];
 buildSequence(agencyIntro,agencyCopy,{
  scale:false,
  update:progress=>{
   const current=Math.min(agencyCopy.length,Math.floor(progress*agencyCopy.length)+1);
   const counter=agencyIntro?.querySelector(':scope > div');
   if(counter)counter.style.setProperty('--chapter-index',`"0${current} / 0${agencyCopy.length}"`);
  }
 });
 requestAnimationFrame(()=>ScrollTrigger.refresh());
 return ()=>{
  document.documentElement.classList.remove('has-scroll-chapters');
  expertise?.style.removeProperty('--chapter-progress');
  agencyIntro?.style.removeProperty('--chapter-progress');
  agencyIntro?.querySelector(':scope > div')?.style.removeProperty('--chapter-index');
 };
  });
 };
 syncMotion();
 document.addEventListener('site-effects-change',syncMotion);
 document.fonts?.ready.then(()=>ScrollTrigger.refresh());
 };
 // Dynamic script loading must finish after GSAP and the chapter stylesheet.
 if(document.readyState==='complete')init();
 else addEventListener('load',init,{once:true});
})();
