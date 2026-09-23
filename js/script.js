// script.js - ovladani menu, akordeonu, tabu a kvizu

function otevriMenu() {
  var nav = document.querySelector('.nav');
  if (nav.classList.contains('is-open')) {
    nav.classList.remove('is-open');
  } else {
    nav.classList.add('is-open');
  }
}

// napojeni tlacitka na hamburger menu
var hamburger = document.querySelector('.nav-toggle');
if (hamburger) {
  hamburger.onclick = otevriMenu;
}

// akordeony (rozbalovaci boxy u ridicaku, skoleni atd.)
var vsechnyAkordeony = document.querySelectorAll('.acc-group__head');
for (var i = 0; i < vsechnyAkordeony.length; i++) {
  vsechnyAkordeony[i].onclick = function () {
    var skupina = this.parentElement;
    var plus = this.querySelector('.acc-group__plus');
    if (skupina.classList.contains('is-open')) {
      skupina.classList.remove('is-open');
      plus.innerHTML = '+';
    } else {
      skupina.classList.add('is-open');
      plus.innerHTML = '-';
    }
  };
  // nastavit plus na zacatku
  var p = vsechnyAkordeony[i].querySelector('.acc-group__plus');
  if (p) { p.innerHTML = '+'; }
}

// taby na strance rididcak.html (motocykly / automobily / vraceni)
var tabTlacitka = document.querySelectorAll('.tab-btn');
for (var j = 0; j < tabTlacitka.length; j++) {
  tabTlacitka[j].onclick = function () {
    var cil = this.getAttribute('data-tab');

    for (var k = 0; k < tabTlacitka.length; k++) {
      tabTlacitka[k].classList.remove('is-active');
    }
    this.classList.add('is-active');

    var panely = document.querySelectorAll('.tab-panel');
    for (var m = 0; m < panely.length; m++) {
      if (panely[m].getAttribute('data-tab-panel') === cil) {
        panely[m].classList.add('is-active');
      } else {
        panely[m].classList.remove('is-active');
      }
    }
  };
}
