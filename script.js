// 軽量なフェードイン演出
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(12px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 500, easing: 'ease-out', fill: 'forwards' }
      );
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section .card, .section h2, .section p, .section li, .section details').forEach((el) => {
  el.style.opacity = 0;
  io.observe(el);
});
