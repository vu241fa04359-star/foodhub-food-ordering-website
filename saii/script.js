const planetInfo = {
  Mercury: "Mercury is the smallest planet in our solar system and the closest to the Sun, with almost no atmosphere to hold in heat.",
  Venus: "Venus is similar in size to Earth but has a thick, toxic atmosphere that traps heat, making it the hottest planet.",
  Earth: "Earth is the only planet known to support life, with liquid water covering most of its surface.",
  Mars: "Mars is called the Red Planet because iron oxide, or rust, covers much of its surface.",
  Jupiter: "Jupiter is the largest planet in the solar system, famous for its Great Red Spot, a storm larger than Earth.",
  Saturn: "Saturn is a gas giant best known for its extensive ring system, made mostly of ice and rock."
};
function showPlanet(name){
  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalText').textContent = planetInfo[name];
  document.getElementById('modalBg').classList.add('show');
}
function closeModal(){ document.getElementById('modalBg').classList.remove('show'); }
document.getElementById('modalBg').addEventListener('click', e=>{ if(e.target.id==='modalBg') closeModal(); });

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('modalTitle').textContent = 'Message sent';
  document.getElementById('modalText').textContent = 'Thank you, ' + name + '. Your message has been received.';
  document.getElementById('modalBg').classList.add('show');
  this.reset();
});

document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i=>{ i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight=null; });
    if(!open){ item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
  });
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click', ()=>{
    navLinks.classList.remove('open');
    document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
    link.classList.add('active');
  });
});
