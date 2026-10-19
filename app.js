const cases = {
  coffee: { kicker: 'PROJETO 01 · BRANDING & FIDELIZAÇÃO', title: 'Cantinho do Café', body: '<p><strong>O desafio:</strong> criar uma marca acolhedora para pessoas que valorizam pausa, conforto e bons momentos.</p><p><strong>A ideia:</strong> transformar o café cotidiano em uma experiência memorável, com identidade visual calorosa, lançamento com degustação e um programa de pontos pensado para aproximar a marca de seus clientes.</p><ul><li>Posicionamento e público-alvo</li><li>Identidade visual e materiais de marca</li><li>Estratégia de fidelização e relacionamento</li><li>Métricas: frequência, ticket médio e feedback</li></ul>' },
  vivant: { kicker: 'PROJETO 02 · CAMPANHA & BRANDING', title: 'Vivant — Viva Agora', body: '<p><strong>O desafio:</strong> posicionar uma marca de moda casual premium como urbana, contemporânea e autêntica.</p><p><strong>O conceito:</strong> “Viva Agora” — vestir como forma de expressão do presente. A campanha combina estética editorial, storytelling visual e conteúdo para Instagram e TikTok.</p><ul><li>Reconhecimento e posicionamento de marca</li><li>Direção criativa e moodboard</li><li>Conteúdo lifestyle para social media</li><li>Coerência entre identidade, mensagem e estratégia</li></ul>' }
};
const modal = document.getElementById('case-modal');
const openCase = (key) => { const item = cases[key]; document.getElementById('modal-kicker').textContent = item.kicker; document.getElementById('modal-title').textContent = item.title; document.getElementById('modal-body').innerHTML = item.body; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; };
document.querySelectorAll('.open-case').forEach((button) => button.addEventListener('click', () => openCase(button.dataset.case)));
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
