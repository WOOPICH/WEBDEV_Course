function parallax() {
  let parallax = document.querySelector('.parallax-container');
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  parallax.style.transform =`translate(-${x*30}px, -${y*30}px)`
};
document.addEventListener('mousemove', parallax);

function openBox(){
  const x = event.clientX;
  const y = event.clientY;
  if (document.elementFromPoint(x, y).id == "n1") {
    document.getElementById('n1').innerHTML =
    `<div class="innerText">${text1}</div>`;
  }
  if (document.elementFromPoint(x, y).id == "n2") {
    document.getElementById('n2').innerHTML =
    `<div class="innerText">${text2}</div>`;
  }
  if (document.elementFromPoint(x, y).id == "n3") {
    document.getElementById('n3').innerHTML =
    `<div class="innerText">${text3}</div>`;
  }
}

function closeBox(){
  const x = event.clientX;
  const y = event.clientY;
  let doc = document.elementFromPoint(x, y).id;
  if (doc != 'n1' || doc != 'n2' ||doc != 'n3') {
    document.getElementById('n1').innerHTML = '';
    document.getElementById('n2').innerHTML = '';
    document.getElementById('n3').innerHTML = '';
  }
}
let text1 = `<p>SOMBRA</p><p>Stealth and debilitating attacks make Sombra a powerful infiltrator. Her hacking can disrupt her enemies, ensuring they're easier to take out, while her EMP provides the upper hand against multiple foes at once. Sombra's ability to Translocate and camouflage herself makes her a hard target to pin down.</p>`;
let text2 = `<p>ANA</p><p>Ana's versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power.</p>`;
let text3 = `<p>HANZO</p><p>Hanzo's versatile arrows can reveal his enemies or rapid fire to strike multiple targets. He can scale walls to fire his bow from on high, or summon a titanic spirit dragon.</p>`;
