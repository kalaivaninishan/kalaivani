// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  navToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Active nav highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#nav-menu a, #mobile-menu a');

  function highlightNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('text-white', 'bg-white/5');
          if (link.getAttribute('href') === '#' + id && !link.classList.contains('bg-brand-600')) {
            link.classList.add('text-white');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNav);
});
// Proficiency Chart
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('experienceChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['ABAP Cloud', 'RAP', 'OData', 'CDS Views', 'S/4HANA', 'SQL'],
      datasets: [{
        label: 'Proficiency',
        data: [9, 8, 9, 9, 7, 7],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(129, 140, 248, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(167, 139, 250, 0.7)',
          'rgba(79, 70, 229, 0.7)',
          'rgba(99, 102, 241, 0.5)'
        ],
        borderRadius: 6,
        borderWidth: 0,
        barThickness: 28
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0f172a',
          titleColor: '#e2e8f0',
          bodyColor: '#818cf8',
          borderColor: 'rgba(255,255,255,0.05)',
          borderWidth: 1,
          cornerRadius: 8,
          padding: 12
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#6b7280', font: { size: 11, weight: '500' } },
          border: { display: false }
        },
        y: {
          beginAtZero: true,
          max: 10,
          grid: { color: 'rgba(255,255,255,0.03)' },
          ticks: { color: '#6b7280', font: { size: 11 }, stepSize: 2 },
          border: { display: false }
        }
      }
    }
  });
});

 