const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-menu');
const closeMenu=(focus=false)=>{menu.hidden=true;menuButton.setAttribute('aria-expanded','false');if(focus)menuButton.focus()};
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menu.hidden=open;menuButton.setAttribute('aria-expanded',String(!open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden)closeMenu(true)});
document.addEventListener('click',e=>{if(!menu.hidden&&!e.target.closest('.site-header'))closeMenu()});
matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
for(const a of document.querySelectorAll('.desktop-nav a,.mobile-menu a')){if(location.pathname.startsWith(a.getAttribute('href')))a.setAttribute('aria-current','page')}
const filters=[...document.querySelectorAll('[data-filter]')];
const setFilter=(value,update=false)=>{if(!filters.length)return;const valid=filters.some(b=>b.dataset.filter===value)?value:'tous';let count=0;for(const card of document.querySelectorAll('[data-category]')){card.hidden=valid!=='tous'&&!card.dataset.category.split(' ').includes(valid);if(!card.hidden)count++}for(const b of filters)b.setAttribute('aria-pressed',String(b.dataset.filter===valid));document.querySelector('#filter-status').textContent=`${count} projet${count>1?'s':''} affiché${count>1?'s':''}`;if(update){const url=new URL(location.href);if(valid==='tous')url.searchParams.delete('filtre');else url.searchParams.set('filtre',valid);history.pushState(null,'',url)}};
for(const b of filters)b.addEventListener('click',()=>setFilter(b.dataset.filter,true));
setFilter(new URLSearchParams(location.search).get('filtre')||'tous');
addEventListener('popstate',()=>setFilter(new URLSearchParams(location.search).get('filtre')||'tous'));
const form=document.querySelector('#brief-form');
if(form){let brief='';const select=form.elements.besoin;const requested=new URLSearchParams(location.search).get('besoin');if([...select.options].some(o=>o.value===requested))select.value=requested;
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=`Projet ECOSPHEARE : ${select.selectedOptions[0].textContent}`;brief=`Bonjour ECOSPHEARE,\n\nJe souhaite échanger sur le projet suivant.\n\nNom : ${data.get('nom')}\nE-mail : ${data.get('email')}\nEntreprise : ${data.get('entreprise')||'Non précisée'}\nBesoin : ${select.selectedOptions[0].textContent}\n\n${data.get('message')}\n\nÀ bientôt,\n${data.get('nom')}`;form.querySelector('.brief-result').hidden=false;location.href=`mailto:Ecospheare@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;});
 document.querySelector('#copy-brief').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(brief);status.textContent='Message copié. Vous pouvez le coller dans votre messagerie.'}catch{status.textContent='La copie est indisponible dans ce navigateur. Utilisez « Télécharger le brief ».'}});
 document.querySelector('#download-brief').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='mon-projet-ecospheare.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});
}
