(() => {
 const header=document.querySelector('.site-header');
 const home=document.body.classList.contains('home');
 const expertise=document.body.classList.contains('expertise-page');
 const wordmark=header?.querySelector('.wordmark');
 if(wordmark){wordmark.replaceChildren();const logo=document.createElement('img');logo.src='/assets/ecospheare-logo-white.svg';logo.alt='';logo.width=28;logo.height=34;logo.className='nav-brand-symbol';const name=document.createElement('span');name.append('ecospheare ');const agency=document.createElement('span');agency.className='brand-agency';agency.textContent='agency';name.append(agency);wordmark.append(logo,name);wordmark.setAttribute('aria-label','Ecospheare Agency, accueil');}

 if(header){const contact=document.createElement('a');contact.className='nav-contact-cta';contact.href='/contact/';contact.textContent='Contact';header.append(contact);}
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const updateHeader=()=>header?.classList.toggle('glass-docked',!home||scrollY>80);
 updateHeader();addEventListener('scroll',updateHeader,{passive:true});
 // One shared, low-contrast moving atmosphere behind the existing page sections.
 const atmosphere=document.createElement('div');atmosphere.className='site-atmosphere';atmosphere.setAttribute('aria-hidden','true');
 const film=document.createElement('video');film.muted=true;film.loop=true;film.playsInline=true;film.preload='none';film.tabIndex=-1;
 if(!expertise&&!document.body.classList.contains('portfolio-page'))atmosphere.append(film);document.body.prepend(atmosphere);
 let heroVisible=home;
 const sync=()=>{if(expertise||document.body.classList.contains('portfolio-page')||heroVisible||reduced.matches||document.hidden||document.body.classList.contains('effects-paused')){film.pause();return;}if(!film.src)film.src='https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4';film.play().catch(()=>{});};
 document.addEventListener('visibilitychange',sync);document.addEventListener('site-effects-change',sync);reduced.addEventListener('change',sync);sync();
 if(home)new IntersectionObserver(([entry])=>{heroVisible=entry.isIntersecting;sync()},{threshold:0}).observe(document.querySelector('.bloom-hero'));
 if(!home){const control=document.createElement('button');control.className='atmosphere-toggle';control.type='button';control.textContent='Effets Ⅱ';control.setAttribute('aria-pressed','false');control.addEventListener('click',()=>{const paused=document.body.classList.toggle('effects-paused');control.textContent=paused?'Effets ▷':'Effets Ⅱ';control.setAttribute('aria-pressed',String(paused));document.dispatchEvent(new Event('site-effects-change'));sync()});document.body.append(control);}

})();
(() => {
 const link=document.createElement('a');link.href='https://wa.me/33607166240';link.target='_blank';link.rel='noopener noreferrer';link.className='contact-float';link.setAttribute('aria-label','Contacter Sacha Zacharewicz sur WhatsApp au +33 6 07 16 62 40');link.innerHTML='<img src="/assets/equipe/sacha-zacharewicz-cutout.png" alt="" width="46" height="46"><span><small>Un projet en tête ?</small><strong>Me contacter ↗</strong></span>';document.body.append(link);
 const update=()=>{
 const end=document.querySelector('#votre-projet');
 const nearEnd=end&&end.getBoundingClientRect().top<innerHeight;
 link.classList.toggle('is-visible',scrollY>innerHeight*.8&&!nearEnd&&!document.body.classList.contains('universe-menu-open')&&!document.body.classList.contains('contact-page'));
 };addEventListener('scroll',update,{passive:true});addEventListener('resize',update);new MutationObserver(update).observe(document.body,{attributes:true,attributeFilter:['class']});update();
 for(const kind of ['branding','studio']){document.querySelectorAll(`.pf-image[href="/projets/qics-${kind}/"]`).forEach(card=>{card.innerHTML=`<div class="project-logo-only"><img src="/assets/qics-${kind}-logo.svg" alt=""><span>QICS<small>${kind==='branding'?'Branding':'Studio'}</small></span></div>`;});}
})();

(() => {
 const video=document.querySelector('.cta-brand-video');if(!video)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let visible=false;
 const sync=()=>{if(!visible||document.hidden||reduced.matches||document.body.classList.contains('effects-paused'))video.pause();else video.play().catch(()=>{});};
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();}).observe(video);
 document.addEventListener('visibilitychange',sync);document.addEventListener('site-effects-change',sync);reduced.addEventListener('change',sync);sync();
})();
