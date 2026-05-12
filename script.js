const io = new IntersectionObserver((entries)=>{entries.forEach((e)=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('section h2, section article, .reserve-card, .split > div').forEach((el)=>{el.style.opacity='0';el.style.transform='translateY(10px)';el.style.transition='all .6s ease';io.observe(el)});
const style=document.createElement('style');style.textContent='.show{opacity:1!important;transform:none!important}';document.head.append(style);
