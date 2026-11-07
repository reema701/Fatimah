const menu=document.querySelector('#menu'),sidebar=document.querySelector('#sidebar');
menu.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id))}})},{rootMargin:'-15% 0px -65% 0px'});
document.querySelectorAll('.section').forEach(section=>observer.observe(section));
const viewer=document.querySelector('#viewer'),viewerImg=document.querySelector('#viewer-image');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{viewerImg.src=button.dataset.image;viewerImg.alt=button.dataset.caption;document.querySelector('#viewer-title').textContent=button.dataset.caption;viewer.showModal()}));
document.querySelector('#close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close()}});
