const io = new IntersectionObserver((entries)=>{entries.forEach((e)=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('section h2, section article, .reserve-card, .split > div').forEach((el)=>{el.style.opacity='0';el.style.transform='translateY(10px)';el.style.transition='all .6s ease';io.observe(el)});
const style=document.createElement('style');style.textContent='.show{opacity:1!important;transform:none!important}';document.head.append(style);

const faqList = document.querySelector('.faq-list');
if (faqList) {
  const mode = faqList.dataset.accordionMode === 'multiple' ? 'multiple' : 'single'; // default: single
  const triggers = Array.from(faqList.querySelectorAll('.faq-trigger'));

  const setExpanded = (trigger, expanded) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;
    trigger.setAttribute('aria-expanded', String(expanded));
    panel.hidden = !expanded;
    const icon = trigger.querySelector('.faq-icon');
    if (icon) icon.textContent = expanded ? '-' : '+';
  };

  triggers.forEach((trigger) => {
    setExpanded(trigger, trigger.getAttribute('aria-expanded') === 'true');
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      if (mode === 'single') {
        triggers.forEach((item) => setExpanded(item, false));
      }
      setExpanded(trigger, !isExpanded);
    });
  });
}
