(() => {
 const root=document.querySelector('.pf-carousel');if(!root)return;
 const track=root.querySelector('.pf-track'),slides=[...track.children],play=root.querySelector('.pf-play');
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let index=0,paused=motion.matches,visible=false,hovered=false,timer;
 const sync=()=>{clearTimeout(timer);play.textContent=paused?'Lecture ▷':'Pause Ⅱ';play.setAttribute('aria-label',paused?'Activer le défilement automatique':'Mettre le défilement en pause');if(!document.body.classList.contains('effects-paused')&&!paused&&!hovered&&visible&&!document.hidden&&!root.contains(document.activeElement))timer=setTimeout(()=>go(index+1),6000)};
 const go=n=>{index=(n+slides.length)%slides.length;track.scrollTo({left:slides[index].offsetLeft-slides[0].offsetLeft,behavior:motion.matches?'instant':'smooth'});sync()};
 root.querySelector('.pf-prev').addEventListener('click',()=>go(index-1));root.querySelector('.pf-next').addEventListener('click',()=>go(index+1));
 play.addEventListener('click',()=>{paused=!paused;sync()});
 track.addEventListener('keydown',e=>{if(e.target!==track)return;if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();go(e.key==='Home'?0:e.key==='End'?slides.length-1:index+(e.key==='ArrowRight'?1:-1))}});
 track.addEventListener('scroll',()=>{const offset=slides[0].offsetLeft;index=slides.reduce((best,s,i)=>Math.abs(s.offsetLeft-offset-track.scrollLeft)<Math.abs(slides[best].offsetLeft-offset-track.scrollLeft)?i:best,0);root.querySelector('.pf-position').textContent=`${String(index+1).padStart(2,'0')} / 04`;},{passive:true});
 root.addEventListener('mouseenter',()=>{hovered=true;sync()});root.addEventListener('mouseleave',()=>{hovered=false;sync()});
 root.addEventListener('focusin',sync);root.addEventListener('focusout',()=>setTimeout(sync,0));
 track.addEventListener('pointerdown',()=>{paused=true;sync()});
 document.addEventListener('visibilitychange',sync);document.addEventListener('site-effects-change',sync);motion.addEventListener('change',()=>{paused=motion.matches;sync()});
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()},{threshold:.25}).observe(root);
 sync();
})();
