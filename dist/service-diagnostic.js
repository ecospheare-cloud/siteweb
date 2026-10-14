document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-service-quiz]').forEach(form=>{
    const steps=[...form.querySelectorAll('[data-step]')];
    const progress=form.querySelector('progress');
    const label=form.querySelector('[data-progress-label]');
    const result=form.querySelector('[data-result]');
    let step=0;
    const recommendations={
      ia:['Une solution IA cadrée','Commençons par isoler la tâche, les sources et le niveau de validation humaine nécessaire.','/contact/?besoin=agence-ia'],
      automate:['Une automatisation de processus','Cartographions les outils, les ressaisies et les exceptions avant de construire le workflow.','/contact/?besoin=agence-automatisation'],
      product:['Une application ou un logiciel sur mesure','Définissons les utilisateurs, le parcours prioritaire et une première version exploitable.','/contact/?besoin=developpement-logiciel'],
      website:['Un site web orienté conversion','Clarifions l’offre, les pages essentielles et l’action attendue avant de concevoir le site.','/contact/?besoin=sites-web']
    };
    function show(){steps.forEach((s,i)=>s.hidden=i!==step);progress.value=step+1;label.textContent=`Question ${step+1} sur ${steps.length}`;}
    function selected(){return steps[step].querySelector('input:checked');}
    form.addEventListener('click',e=>{
      const next=e.target.closest('[data-next]'); const back=e.target.closest('[data-back]');
      if(back){step=Math.max(0,step-1);show();return;}
      if(!next)return;
      if(!selected()){steps[step].querySelector('.service-quiz__choice')?.focus();return;}
      if(step<steps.length-1){step++;show();return;}
      const data=new FormData(form); const key=data.get('goal')||'product'; const rec=recommendations[key];
      result.querySelector('h3').textContent=rec[0]; result.querySelector('p').textContent=rec[1]; result.querySelector('a').href=rec[2];
      steps.forEach(s=>s.hidden=true); form.querySelector('.service-quiz__progress').hidden=true; result.hidden=false;
    });
    form.querySelector('[data-restart]')?.addEventListener('click',()=>{form.reset();step=0;result.hidden=true;form.querySelector('.service-quiz__progress').hidden=false;show();});
    show();
  });
});
