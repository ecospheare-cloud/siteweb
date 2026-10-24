const spaceIntro=document.querySelector('.space-intro');
if(spaceIntro){
 document.body.classList.add('space-intro-lock');
 let closed=false;
 const closeSpaceIntro=()=>{
  if(closed)return;
  closed=true;
  spaceIntro.classList.add('is-leaving');
  document.body.classList.remove('space-intro-lock');
  setTimeout(()=>spaceIntro.remove(),220);
 };
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const timer=setTimeout(closeSpaceIntro,reduced?140:1220);
 spaceIntro.querySelector('.space-intro__skip')?.addEventListener('click',()=>{clearTimeout(timer);closeSpaceIntro()});
 spaceIntro.addEventListener('keydown',event=>{if(event.key==='Escape'){clearTimeout(timer);closeSpaceIntro()}});
}

const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-menu');
const syncMenu=()=>{
 if(!menu||!menuButton)return;
 const open=!menu.hidden;
 menuButton.setAttribute('aria-expanded',String(open));
 menuButton.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
 document.body.classList.toggle('universe-menu-open',open);
 for(const el of document.querySelectorAll('main,.site-footer'))el.inert=open;
};
const closeMenu=(focus=false)=>{if(!menu)return;menu.hidden=true;syncMenu();if(focus)menuButton?.focus()};
menuButton?.addEventListener('click',()=>{menu.hidden=!menu.hidden;syncMenu()});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
document.addEventListener('keydown',e=>{
 if(!menu||menu.hidden)return;
 if(e.key==='Escape'){closeMenu(true);return;}
 if(e.key==='Tab'){
  const items=[...document.querySelectorAll('.site-header a,.site-header button')].filter(el=>el.getClientRects().length&&getComputedStyle(el).visibility!=='hidden');
  const first=items[0],last=items.at(-1);
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}
 }
});
matchMedia('(min-width:1024px)').addEventListener('change',()=>closeMenu());
for(const a of document.querySelectorAll('.desktop-nav a,.mobile-menu a')){
 const url=new URL(a.href);
 const current=url.pathname==='/'?location.pathname==='/':location.pathname.startsWith(url.pathname);
 if(!url.hash&&current)a.setAttribute('aria-current','page');
}
syncMenu();
const filters=[...document.querySelectorAll('[data-filter]')];
const setFilter=(value,update=false)=>{if(!filters.length)return;const valid=filters.some(b=>b.dataset.filter===value)?value:'tous';let count=0;for(const card of document.querySelectorAll('[data-category]')){card.hidden=valid!=='tous'&&!card.dataset.category.split(' ').includes(valid);if(!card.hidden)count++}for(const b of filters)b.setAttribute('aria-pressed',String(b.dataset.filter===valid));document.querySelector('#filter-status').textContent=`${count} projet${count>1?'s':''} affiché${count>1?'s':''}`;if(update){const url=new URL(location.href);if(valid==='tous')url.searchParams.delete('filtre');else url.searchParams.set('filtre',valid);history.pushState(null,'',url)}};
for(const b of filters)b.addEventListener('click',()=>setFilter(b.dataset.filter,true));
setFilter(new URLSearchParams(location.search).get('filtre')||'tous');
addEventListener('popstate',()=>setFilter(new URLSearchParams(location.search).get('filtre')||'tous'));
const form=document.querySelector('#brief-form');
if(form){let brief='';const select=form.elements.besoin;const rawNeed=new URLSearchParams(location.search).get('besoin');const requested=rawNeed==='geo'?'seo':rawNeed;if([...select.options].some(o=>o.value===requested))select.value=requested;
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=`Projet ECOSPHEARE : ${select.selectedOptions[0].textContent}`;brief=`Bonjour ECOSPHEARE,\n\nJe souhaite échanger sur le projet suivant.\n\nNom : ${data.get('nom')}\nE-mail : ${data.get('email')}\nEntreprise : ${data.get('entreprise')||'Non précisée'}\nBesoin : ${select.selectedOptions[0].textContent}\n\n${data.get('message')}\n\nÀ bientôt,\n${data.get('nom')}`;form.querySelector('.brief-result').hidden=false;location.href=`mailto:contact@ecospheare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;});
 document.querySelector('#copy-brief').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(brief);status.textContent='Message copié. Vous pouvez le coller dans votre messagerie.'}catch{status.textContent='La copie est indisponible dans ce navigateur. Utilisez « Télécharger le brief ».'}});
 document.querySelector('#download-brief').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='mon-projet-ecospheare.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});
}

// Load decorative video only when motion is permitted; pause outside the hero.
const film=document.querySelector('#hero-film');
if(film){
 const control=document.querySelector('.motion-toggle');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let userPaused=false,visible=true;
 const label=()=>{control.setAttribute('aria-label',userPaused?'Relancer l’animation':'Mettre l’animation en pause');control.innerHTML=userPaused?'Lecture <span aria-hidden="true">▶</span>':'Pause <span aria-hidden="true">Ⅱ</span>'};
 const sync=()=>{
  if(reduced.matches){film.pause();film.removeAttribute('src');film.load();film.parentElement.classList.remove('is-playing');control.hidden=true;return}
  control.hidden=false;
  if(!film.getAttribute('src')){film.src=film.dataset.src;film.muted=true}
  if(userPaused||!visible||document.hidden||document.body.classList.contains('effects-paused')){film.pause();return}
  film.play().catch(error=>{if(error.name==='AbortError'||!visible||document.hidden||reduced.matches)return;userPaused=true;label()});
 };
 film.addEventListener('playing',()=>{film.parentElement.classList.add('is-playing');film.parentElement.classList.remove('motion-paused')});
 film.addEventListener('pause',()=>film.parentElement.classList.add('motion-paused'));
 film.addEventListener('error',()=>{film.parentElement.classList.remove('is-playing');control.hidden=true});
 control.addEventListener('click',()=>{userPaused=!userPaused;label();sync()});
 reduced.addEventListener('change',sync);
 document.addEventListener('visibilitychange',sync);
 document.addEventListener('site-effects-change',sync);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:0.05}).observe(film.closest('.hero'));
 sync();
}

// The compact masthead takes over once the opening signature leaves the screen.
const signature=document.querySelector('.hero-brand');
if(signature)new IntersectionObserver(([entry])=>{if(!document.documentElement.classList.contains('motion-ready'))document.querySelector('.site-header').classList.toggle('is-visible',!entry.isIntersecting)},{rootMargin:'-68px 0px 0px 0px'}).observe(signature);
const identityFilm=document.querySelector('.identity-film');
const filmPlay=document.querySelector('.film-play');
if(identityFilm&&filmPlay){
 identityFilm.controls=false;
 filmPlay.addEventListener('click',async()=>{try{await identityFilm.play();identityFilm.controls=true;identityFilm.tabIndex=0;identityFilm.focus();filmPlay.hidden=true;identityFilm.closest('.brand-film').classList.add('is-playing')}catch{filmPlay.textContent='Réessayer la lecture'}});
 identityFilm.addEventListener('pause',()=>{filmPlay.hidden=false;filmPlay.innerHTML='Reprendre le film <span aria-hidden="true">▶</span>'});
 new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)identityFilm.pause()},{threshold:.1}).observe(identityFilm);
}
const slideButtons=[...document.querySelectorAll('[data-slide]')];
if(slideButtons.length){
 let current=0,timer=null,visible=false,paused=false,focused=false,modalOpen=false,remaining=6000,started=0,progress=null;
 const slides=[...document.querySelectorAll('.feature-slide')];
 const section=document.querySelector('.featured');
 const pauseButton=document.querySelector('.feature-pause');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const stop=()=>{if(timer!==null){clearTimeout(timer);timer=null;remaining=Math.max(0,remaining-(performance.now()-started));}progress?.pause();};
 const resetProgress=()=>{progress?.cancel();progress=null;remaining=6000;for(const button of slideButtons)button.querySelector('i').style.transform='scaleX(0)';};
 const changeSlide=(index,announce=true)=>{
  stop();resetProgress();
  const previous=slides[current],next=(index+slides.length)%slides.length,direction=index<current?-1:1;
  slides.forEach(slide=>{slide.getAnimations().forEach(a=>a.cancel());slide.hidden=true;slide.inert=true;slide.setAttribute('aria-hidden','true');slide.classList.remove('is-current')});
  const incoming=slides[next];incoming.hidden=false;incoming.inert=false;incoming.removeAttribute('aria-hidden');incoming.classList.add('is-current');
  if(next!==current&&!reduced.matches){previous.hidden=false;const fade=previous.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${-direction*8}%)`}],{duration:700,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'});incoming.animate([{opacity:0,transform:`translateX(${direction*12}%)`},{opacity:1,transform:'translateX(0)'}],{duration:700,easing:'cubic-bezier(.16,1,.3,1)'});fade.finished.then(()=>{if(previous!==slides[current])previous.hidden=true;fade.cancel()}).catch(()=>{})}
  current=next;slideButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===current)));
  document.querySelector('.portfolio-count').textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  if(announce)document.querySelector('#feature-status').textContent=incoming.querySelector('h2').textContent;
 };
 const sync=()=>{
  stop();const running=!paused&&visible&&!document.hidden&&!focused&&!modalOpen&&!reduced.matches;
  if(running){started=performance.now();if(!progress){progress=slideButtons[current].querySelector('i').animate([{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:6000,easing:'linear',fill:'forwards'});progress.currentTime=6000-remaining;}progress.play();timer=setTimeout(()=>{timer=null;changeSlide(current+1,false);sync();},remaining);}
  pauseButton.hidden=reduced.matches;pauseButton.textContent=paused?'Lecture':'Pause';pauseButton.setAttribute('aria-label',paused?'Relancer le diaporama':'Mettre le diaporama en pause');
  if(reduced.matches){progress?.cancel();progress=null;slideButtons[current].querySelector('i').style.transform='scaleX(1)';}
 };
 changeSlide(0,false);
 const select=index=>{changeSlide(index);sync();};
 slideButtons.forEach((button,i)=>button.addEventListener('click',()=>select(i)));
 document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>select(current+Number(button.dataset.direction))));
 pauseButton.addEventListener('click',()=>{paused=!paused;focused=false;sync();});
 section.addEventListener('focusin',event=>{focused=event.target!==pauseButton;sync();});
 section.addEventListener('focusout',e=>{if(!section.contains(e.relatedTarget)){focused=false;sync();}});
 document.addEventListener('visibilitychange',sync);
 document.addEventListener('site-effects-change',sync);reduced.addEventListener('change',sync);
 document.addEventListener('ecospheare:dialog',event=>{modalOpen=event.detail;sync();});
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();},{threshold:.25}).observe(section);
 document.querySelector('.feature-tabs').addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();select(event.key==='Home'?0:event.key==='End'?slides.length-1:current+(event.key==='ArrowRight'?1:-1));slideButtons[current].focus();});
}

// Consentement : aucun traceur non essentiel n'est chargé sans accord explicite.
(()=>{
 const key='ecospheare-cookie-consent-v1';
 const show=()=>{
  if(document.querySelector('.cookie-consent'))return;
  const panel=document.createElement('aside');
  panel.className='cookie-consent';
  panel.setAttribute('role','dialog');
  panel.setAttribute('aria-modal','false');
  panel.setAttribute('aria-labelledby','cookie-consent-title');
  panel.innerHTML='<div><p class="cookie-consent__eyebrow">Vos préférences</p><h2 id="cookie-consent-title">Cookies et confidentialité</h2><p>Nous utilisons uniquement les éléments nécessaires au fonctionnement du site. Vous pouvez accepter ou refuser les éventuels cookies non essentiels.</p><a href="/politique-cookies/">Consulter la politique de cookies</a></div><div class="cookie-consent__actions"><button type="button" data-cookie-choice="refused">Refuser</button><button type="button" class="cookie-consent__accept" data-cookie-choice="accepted">Accepter</button></div>';
  document.body.append(panel);
  panel.querySelectorAll('[data-cookie-choice]').forEach(button=>button.addEventListener('click',()=>{
   localStorage.setItem(key,button.dataset.cookieChoice);
   document.documentElement.dataset.cookieConsent=button.dataset.cookieChoice;
   panel.remove();
  }));
 };
 let choice='';
 try{choice=localStorage.getItem(key)||''}catch{}
 if(choice)document.documentElement.dataset.cookieConsent=choice;else show();
 document.querySelector('#reopen-cookie-consent')?.addEventListener('click',()=>{
  try{localStorage.removeItem(key)}catch{}
  delete document.documentElement.dataset.cookieConsent;
  show();
 });
})();

const expertiseNav=document.querySelector('.nav-expertise');
const expertiseToggle=expertiseNav?.querySelector('.nav-expertise__toggle');
const expertiseLink=expertiseNav?.querySelector('.nav-expertise__link');
const closeExpertiseMenu=()=>{expertiseNav?.classList.remove('is-open');expertiseToggle?.setAttribute('aria-expanded','false')};
expertiseLink?.addEventListener('click',event=>{if(!matchMedia('(min-width:801px)').matches)return;event.preventDefault();event.stopPropagation();const open=!expertiseNav.classList.contains('is-open');closeExpertiseMenu();if(open){expertiseNav.classList.add('is-open');expertiseToggle?.setAttribute('aria-expanded','true');expertiseNav.querySelector('.nav-expertise__menu a')?.focus({preventScroll:true})}});
expertiseToggle?.addEventListener('click',event=>{event.stopPropagation();const open=!expertiseNav.classList.contains('is-open');closeExpertiseMenu();if(open){expertiseNav.classList.add('is-open');expertiseToggle.setAttribute('aria-expanded','true')}});
document.addEventListener('click',event=>{if(expertiseNav&&!expertiseNav.contains(event.target))closeExpertiseMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeExpertiseMenu()});
