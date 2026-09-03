const escapeHtml=value=>String(value??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');

const renderSpace=space=>`<a class="space" data-accent="${escapeHtml(space.accent||'blue')}" href="${escapeHtml(space.href)}"><div class="space-top"><span class="space-category">${escapeHtml(space.category)}</span><span class="space-icon">${space.iconImage?`<img src="${escapeHtml(space.iconImage)}" alt="" width="52" height="52">`:escapeHtml(space.icon||'↗')}</span></div><div><h3>${escapeHtml(space.name)}</h3><p>${escapeHtml(space.description)}</p>${space.tags?.length?`<div class="tags">${space.tags.map(tag=>`<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>`:''}<div class="enter">${escapeHtml(space.action||'Abrir')} <span>→</span></div></div></a>`;

async function loadSpaces(){
  const count=document.querySelector('#spaceCount');
  const grid=document.querySelector('#spacesGrid');
  try{
    const response=await fetch('/spaces.json',{cache:'no-store'});
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    const catalog=await response.json();
    const spaces=Array.isArray(catalog.spaces)?catalog.spaces:[];
    count.textContent=`${spaces.length} ${spaces.length===1?'espaço':'espaços'}`;
    grid.innerHTML=spaces.length?spaces.map(renderSpace).join(''):'<div class="empty">Nenhum espaço publicado ainda.</div>';
  }catch(error){
    count.textContent='catálogo indisponível';
    grid.innerHTML='<div class="empty">Não foi possível carregar o catálogo agora. Você ainda pode usar os links de recursos abaixo.</div>';
    console.error('Falha ao carregar spaces.json',error);
  }
}

loadSpaces();

let installPrompt=null;
const installButton=document.querySelector('#installHub');
const standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
const isIOS=/iPad|iPhone|iPod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);

if(!standalone&&isIOS){
  installButton.hidden=false;
  installButton.onclick=()=>{
    const note=document.createElement('div');
    note.className='ios-note';
    note.innerHTML='<button aria-label="Fechar">×</button><strong>Instalar no iPhone/iPad</strong><br>Abra no Safari e use <strong>Compartilhar → Adicionar à Tela de Início → Abrir como App da Web</strong>.';
    document.body.appendChild(note);
    note.querySelector('button').onclick=()=>note.remove();
  };
}

addEventListener('beforeinstallprompt',event=>{
  event.preventDefault();
  installPrompt=event;
  if(standalone)return;
  installButton.hidden=false;
  installButton.onclick=async()=>{
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt=null;
    installButton.hidden=true;
  };
});

if('serviceWorker' in navigator)navigator.serviceWorker.register('/portal-sw.js');
