(()=>{
 const canAnimate=matchMedia('(min-width: 960px) and (prefers-reduced-motion: no-preference)').matches;
 if(!canAnimate||!window.gsap||!window.ScrollTrigger)return;
 document.documentElement.classList.add('has-scroll-chapters');
 gsap.registerPlugin(ScrollTrigger);

 const buildSequence=(section,items,options={})=>{
  if(!section||items.length<2)return;
  gsap.set(items.slice(1),{autoAlpha:0,y:54,scale:options.scale===false?1:.97});
  const timeline=gsap.timeline({
   defaults:{ease:'power2.inOut'},
   scrollTrigger:{
    trigger:section,
    start:'top top',
    end:`+=${Math.round(innerHeight*(items.length*.72))}`,
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
 if(agencyIntro){
  const style=document.createElement('style');
  style.textContent='html.has-scroll-chapters .agency-page .agency-intro>div::before{content:var(--chapter-index,"01 / 03")}';
  document.head.append(style);
 }

 addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
})();
