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
  return timeline;
 };

 const expertise=document.querySelector('.home .ecosfer-expertises');
 buildSequence(expertise,[...document.querySelectorAll('.home .ecosfer-offers>article')]);

 const method=document.querySelector('.home .method-stage');
 const methodItems=[...document.querySelectorAll('.home .method-editorial-steps>li')];
 let methodLinks=[],methodHandlers=[];
 if(method){
  let progress=method.querySelector('.method-progress');
  if(!progress){
   progress=document.createElement('nav');progress.className='method-progress';progress.setAttribute('aria-label','Choisir une étape');
   methodItems.forEach((item,i)=>{const a=document.createElement('a');a.href='#'+item.id;a.textContent='0'+(i+1);a.setAttribute('aria-label','Étape '+(i+1)+' : '+item.querySelector('h3').textContent);progress.append(a)});
   method.querySelector('.method-editorial-heading').append(progress);
  }
  methodLinks=[...progress.querySelectorAll('a')];
  const sequence=buildSequence(method,methodItems,{scale:false,update:progress=>{
   const active=Math.min(methodItems.length-1,Math.round(progress*(methodItems.length-1)));
   methodLinks.forEach((a,i)=>{if(i===active)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current')});
  }});
  methodLinks[0]?.setAttribute('aria-current','step');
  methodHandlers=methodLinks.map((a,i)=>{
   const handler=event=>{event.preventDefault();const st=sequence.scrollTrigger;scrollTo({top:st.start+(st.end-st.start)*i/(methodItems.length-1),behavior:'smooth'})};
   a.addEventListener('click',handler);return handler;
  });
 }

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
  methodLinks.forEach((a,i)=>a.removeEventListener('click',methodHandlers[i]));
  method?.style.removeProperty('--chapter-progress');
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
