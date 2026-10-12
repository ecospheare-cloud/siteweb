// User-triggered guidance; no timers, data capture or unsolicited overlays.
const guide=document.querySelector('.guide-dialog');
const motion=matchMedia('(prefers-reduced-motion: reduce)');
let returnFocus=null;
const openDialog=(dialog,trigger)=>{returnFocus=trigger;dialog.showModal();document.dispatchEvent(new CustomEvent('ecospheare:dialog',{detail:true}));document.documentElement.classList.add('dialog-open');if(!motion.matches)dialog.animate([{opacity:0,transform:'translateY(24px) scale(.98)'},{opacity:1,transform:'none'}],{duration:360,easing:'cubic-bezier(.16,1,.3,1)'});};
for(const dialog of document.querySelectorAll('dialog')){
 dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{document.documentElement.classList.remove('dialog-open');document.dispatchEvent(new CustomEvent('ecospheare:dialog',{detail:false}));returnFocus?.focus({preventScroll:true});});
}
if(guide){
 const start=guide.querySelector('.guide-start'),result=guide.querySelector('.guide-result');
 const reset=()=>{start.hidden=false;result.hidden=true;guide.setAttribute('aria-labelledby','guide-title');};
 document.querySelectorAll('[data-open-guide]').forEach(button=>button.addEventListener('click',()=>{reset();openDialog(guide,button);}));
 const goals={visibilite:{title:'Rendre votre offre visible.',copy:'Le premier sujet : comprendre comment vos clients vous cherchent, puis choisir les bons points de rencontre.',steps:['Identifier les recherches et les intentions utiles.','Prioriser SEO, GEO et campagnes Google Ads.','Relier chaque visite à une page pertinente.'],need:'seo'},conversion:{title:'Donner envie de vous contacter.',copy:'Le premier sujet : rendre votre offre évidente et lever les hésitations qui séparent une visite d’une demande.',steps:['Clarifier la promesse et la structure du site.','Montrer les bonnes preuves au bon endroit.','Simplifier le parcours et mesurer les demandes.'],need:'sites-web'},suivi:{title:'Donner une suite à chaque contact.',copy:'Le premier sujet : centraliser les opportunités pour savoir quoi faire, quand et avec qui.',steps:['Cartographier votre fonctionnement actuel.','Structurer les étapes dans un CRM adapté.','Connecter les outils et les relances utiles.'],need:'web-apps'}};
 guide.querySelectorAll('[data-goal]').forEach(button=>button.addEventListener('click',()=>{const goal=goals[button.dataset.goal];start.hidden=true;result.hidden=false;guide.setAttribute('aria-labelledby','guide-result-title');const title=result.querySelector('h2');title.textContent=goal.title;result.querySelector('.guide-result-copy').textContent=goal.copy;result.querySelector('ol').replaceChildren(...goal.steps.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));result.querySelector('a').href='/contact/?besoin='+goal.need;title.focus();if(!motion.matches)result.animate([{opacity:0,transform:'translateX(16px)'},{opacity:1,transform:'none'}],{duration:280,easing:'ease-out'});}));
 guide.querySelector('.guide-back').addEventListener('click',()=>{reset();guide.querySelector('[data-goal]').focus();});
 const dock=document.querySelector('.journey-dock');let pastIntro=false,atEnd=false,inPortfolio=false;
 const update=()=>{dock.hidden=!pastIntro||atEnd||inPortfolio;};
 new IntersectionObserver(([entry])=>{pastIntro=!entry.isIntersecting&&entry.boundingClientRect.bottom<0;update();}).observe(document.querySelector('.intro-statement'));
 new IntersectionObserver(([entry])=>{atEnd=entry.isIntersecting;update();}).observe(document.querySelector('.first-conversation'));
 new IntersectionObserver(([entry])=>{inPortfolio=entry.isIntersecting;update();},{threshold:.15}).observe(document.querySelector('.featured'));
 const figureDialog=document.querySelector('.figure-dialog');
 document.querySelectorAll('[data-explain]').forEach(button=>button.addEventListener('click',()=>{const figure=button.closest('figure');const section=figure.closest('article,section');figureDialog.querySelector('h2').textContent=section.querySelector('h3,h2').textContent;const clone=figure.cloneNode(true);clone.querySelector('button').remove();figureDialog.querySelector('.figure-dialog-content').replaceChildren(clone);openDialog(figureDialog,button);}));
}
// Native details stay operable without JS; motion only acknowledges opening.
document.querySelectorAll('details').forEach(details=>details.addEventListener('toggle',()=>{if(details.open&&!motion.matches){const content=[...details.children].filter(el=>el.tagName!=='SUMMARY');content.forEach(el=>el.animate([{opacity:0,transform:'translateY(-6px)'},{opacity:1,transform:'none'}],{duration:240,easing:'ease-out'}));}}));
