(() => {
 const header=document.querySelector('.site-header');
 const home=document.body.classList.contains('home');
 const expertise=document.body.classList.contains('expertise-page');
 const wordmark=header?.querySelector('.wordmark');
 const createBrandName=()=>{const name=document.createElement('span');name.className='brand-name-lockup';const image=document.createElement('img');image.src='/assets/ecospheare-wordmark-white.png';image.alt='';image.width=850;image.height=130;image.className='brand-name-image';const agency=document.createElement('span');agency.className='brand-agency';agency.textContent='agency';name.append(image,agency);return name};
 if(wordmark){wordmark.replaceChildren();const logo=document.createElement('img');logo.src='/assets/ecospheare-logo-white.svg';logo.alt='';logo.width=28;logo.height=34;logo.className='nav-brand-symbol';wordmark.append(logo,createBrandName());wordmark.setAttribute('aria-label','Ecospheare Agency, accueil');}
 document.querySelectorAll('.footer-identity').forEach(identity=>{const name=identity.querySelector(':scope>span');if(name)name.replaceWith(createBrandName());identity.setAttribute('aria-label','Ecospheare Agency, accueil')});

 if(header){
  const createLocaleTools=mobile=>{
   const tools=document.createElement('div');tools.className=`nav-locale${mobile?' nav-locale--mobile':''}`;
   const clock=document.createElement('time');clock.className='nav-local-time';
   const zone=Intl.DateTimeFormat().resolvedOptions().timeZone||'Europe/Paris';
   const city=(zone.includes('/')?zone.split('/').at(-1):zone).replaceAll('_',' ');
   const updateClock=()=>{const now=new Date();clock.dateTime=now.toISOString();clock.textContent=`${city} · ${new Intl.DateTimeFormat(document.documentElement.lang==='en'?'en-GB':'fr-FR',{hour:'2-digit',minute:'2-digit',hour12:false}).format(now)}`;clock.setAttribute('aria-label',`${city}, heure locale ${clock.textContent.split(' · ')[1]}`)};
   updateClock();setInterval(updateClock,30000);
   const label=document.createElement('label');label.className='nav-language';label.innerHTML='<span class="sr-only">Langue du site</span><select aria-label="Langue du site"><option value="fr">FR</option><option value="en">EN</option></select>';
   const select=label.querySelector('select');
   let saved='fr';try{saved=localStorage.getItem('ecospheare-language')||'fr'}catch{}
   select.value=saved;
   const applyLanguage=language=>{
    document.documentElement.lang=language;
    document.querySelectorAll('.nav-language select').forEach(item=>item.value=language);
    try{localStorage.setItem('ecospheare-language',language)}catch{}
    const combo=document.querySelector('.goog-te-combo');
    if(combo){combo.value=language;combo.dispatchEvent(new Event('change'));return}
    window.ecospheareTranslateLanguage=language;
    if(!document.querySelector('#ecospheare-google-translate')){const mount=document.createElement('div');mount.id='ecospheare-google-translate';mount.hidden=true;document.body.append(mount)}
    if(!document.querySelector('script[data-ecospheare-translate]')){window.ecospheareTranslateInit=()=>{new google.translate.TranslateElement({pageLanguage:'fr',includedLanguages:'fr,en',autoDisplay:false},'ecospheare-google-translate');const wait=setInterval(()=>{const input=document.querySelector('.goog-te-combo');if(!input)return;clearInterval(wait);input.value=window.ecospheareTranslateLanguage||'fr';input.dispatchEvent(new Event('change'))},80)};const script=document.createElement('script');script.src='https://translate.google.com/translate_a/element.js?cb=ecospheareTranslateInit';script.async=true;script.dataset.ecospheareTranslate='true';document.head.append(script)}
   };
   select.addEventListener('change',()=>applyLanguage(select.value));
   if(saved==='en')setTimeout(()=>applyLanguage(saved));
   tools.append(clock,label);return tools;
  };
  header.append(createLocaleTools(false));
  const mobileMenu=header.querySelector('.mobile-menu');if(mobileMenu)mobileMenu.append(createLocaleTools(true));
  const contact=document.createElement('a');contact.className='nav-contact-cta';contact.href='/contact/';contact.textContent='Contact';header.append(contact);
 }
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

 const footerIdentity=document.querySelector('.footer-new .footer-identity');
 if(footerIdentity&&!document.querySelector('.footer-audience')){const audience=document.createElement('p');audience.className='footer-audience';audience.textContent='Partenaire digital des agences de communication et des petites entreprises.';footerIdentity.after(audience)}

})();

// Load the immersive, scroll-driven chapters only on the two editorial pages that use them.
(()=>{
 if(!document.body.matches('.home,.agency-page'))return;
 const css=document.createElement('link');
 css.rel='stylesheet';css.href='/scroll-chapters.css?v=restored-animation-20261029';
 document.head.append(css);
 const script=document.createElement('script');
 script.src='/scroll-chapters.js?v=restored-animation-20261029';script.defer=true;
 document.head.append(script);
})();
(() => {
 const home=document.body.classList.contains('home');
 const projectMessage=encodeURIComponent('Bonjour Sacha, j’ai un projet et j’aimerais en discuter avec vous.');
 const recruitmentMessage=encodeURIComponent('Bonjour Sacha, je suis intéressé(e) par l’opportunité commerciale chez Ecospheare Agency.');
 const projectHref=`https://wa.me/33607166240?text=${projectMessage}`;
 const recruitmentHref=`https://wa.me/33607166240?text=${recruitmentMessage}`;
 const link=document.createElement(home?'div':'a');
 link.className='contact-float';
 if(home){
  link.classList.add('contact-float--dual');
  link.classList.add('is-ready');
  link.setAttribute('aria-label','Contacter Sacha Zacharewicz sur WhatsApp');
  link.innerHTML=`<img src="/assets/equipe/sacha-zacharewicz-cutout.png" alt="Portrait de Sacha Zacharewicz" width="46" height="46"><span class="contact-float__choices"><a href="${projectHref}" target="_blank" rel="noopener noreferrer"><small>Un projet en tête ?</small><strong>Parlons-en ↗</strong></a><a href="${recruitmentHref}" target="_blank" rel="noopener noreferrer"><small>Nous recrutons</small><strong>Devenir commercial ↗</strong></a></span>`;
 }else{
  link.href=projectHref;link.target='_blank';link.rel='noopener noreferrer';
  link.setAttribute('aria-label','Contacter Sacha Zacharewicz sur WhatsApp au +33 6 07 16 62 40');
  link.innerHTML='<img src="/assets/equipe/sacha-zacharewicz-cutout.png" alt="" width="46" height="46"><span><small>Un projet en tête ?</small><strong>Me contacter ↗</strong></span>';
 }
 document.body.append(link);
 const update=()=>{
 const end=document.querySelector('#votre-projet');
 const nearEnd=end&&end.getBoundingClientRect().top<innerHeight;
 link.classList.toggle('is-visible',(!home||link.classList.contains('is-ready'))&&(home||scrollY>innerHeight*.8)&&!nearEnd&&!document.body.classList.contains('universe-menu-open')&&!document.body.classList.contains('contact-page'));
 };addEventListener('scroll',update,{passive:true});addEventListener('resize',update);new MutationObserver(update).observe(document.body,{attributes:true,attributeFilter:['class']});update();
})();

(() => {
 const video=document.querySelector('.cta-brand-video');if(!video)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let visible=false;
 const sync=()=>{if(!visible||document.hidden||reduced.matches||document.body.classList.contains('effects-paused'))video.pause();else video.play().catch(()=>{});};
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();}).observe(video);
 document.addEventListener('visibilitychange',sync);document.addEventListener('site-effects-change',sync);reduced.addEventListener('change',sync);sync();
})();
