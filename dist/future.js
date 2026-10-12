(() => {
 if(!document.body.classList.contains('home'))return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),toggle=document.querySelector('.motion-master');
 let paused=reduced.matches;
 const apply=()=>{document.body.classList.toggle('effects-paused',paused);toggle.setAttribute('aria-pressed',String(paused));toggle.setAttribute('aria-label',paused?'Activer les effets du site':'Mettre les effets du site en pause');toggle.innerHTML=paused?'Effets <span>▷</span>':'Effets <span>Ⅱ</span>';if(window.gsap)window.gsap.globalTimeline.paused(paused);document.dispatchEvent(new Event('site-effects-change'));};
 toggle.addEventListener('click',()=>{paused=!paused;apply()});reduced.addEventListener('change',()=>{paused=reduced.matches;apply()});apply();
 // Content remains visible if scripts or observers are unavailable.
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.orbit-step,.acquisition-launch,.global-heading,.world-connection,.collective-partners').forEach((el,i)=>{el.classList.add('future-reveal');el.style.transitionDelay=`${(i%4)*65}ms`;observer.observe(el)});document.body.classList.add('future-ready');}
 if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.querySelectorAll('.orbit-step').forEach(card=>{card.addEventListener('pointermove',event=>{if(paused||reduced.matches)return;const r=card.getBoundingClientRect();card.style.setProperty('--tilt-x',`${(0.5-(event.clientY-r.top)/r.height)*6}deg`);card.style.setProperty('--tilt-y',`${((event.clientX-r.left)/r.width-0.5)*7}deg`)});card.addEventListener('pointerleave',()=>{card.style.setProperty('--tilt-x','0deg');card.style.setProperty('--tilt-y','0deg')})});}
 const menu=document.querySelector('#mobile-menu'),button=document.querySelector('.menu-toggle');
 const sync=()=>{document.body.classList.toggle('universe-menu-open',!menu.hidden);button.setAttribute('aria-label',menu.hidden?'Ouvrir le menu':'Fermer le menu')};
 new MutationObserver(sync).observe(menu,{attributes:true,attributeFilter:['hidden']});sync();
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.hidden=true;button.setAttribute('aria-expanded','false')}));
 document.addEventListener('keydown',e=>{if(e.key!=='Tab'||menu.hidden)return;const links=[button,...menu.querySelectorAll('a')];const first=links[0],last=links.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
})();
