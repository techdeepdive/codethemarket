// CodeTheMarket Interactive Website Scripts
document.addEventListener('DOMContentLoaded', () => {
  // 1. Animated Stat Counters
  const counters = document.querySelectorAll('.stat-val');
  const speed = 200;

  const runCounter = (el) => {
    const target = +el.getAttribute('data-target');
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    
    let count = 0;
    const inc = target / (speed / 16);

    const updateCount = () => {
      count += inc;
      if (count < target) {
        el.innerText = prefix + Math.ceil(count) + suffix;
        requestAnimationFrame(updateCount);
      } else {
        el.innerText = prefix + target + suffix;
      }
    };
    updateCount();
  };

  // Intersection Observer for Counters
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));

  // 2. Curriculum Accordion Toggle
  window.toggleModule = function(el) {
    const item = el.closest('.module-item');
    if (item) {
      item.classList.toggle('active');
    }
  };

  // 3. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
