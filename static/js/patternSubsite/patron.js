class Patron {
  constructor() {
    let inputs = document.querySelectorAll(".constant");

    this.measurements = {};

    inputs.forEach(input => {
        this.measurements[input.id] = parseFloat(input.value);
    });

    this.size = this.measurements.chestCirc / 2 //this.size = Math.floor(this.measurements.chestCirc / 2);
  }

  getSize = () => this.size;
  getEaseAllowance = () => this.measurements.easeallowance;

  // DRESS
  // DRESS.BACK
  ab = () => 1 / 24 * this.size + 0.2;
  ac = () => 1 / 8 * this.measurements.height + 1 / 24 * this.size + 1.7; // armhole depth measurement
  ad = () => this.measurements.backwaistlength;
  de = () => this.measurements.hipdepth;
  af = () => this.measurements.dresslength;
  ag = () => 1/6 * this.size;
  ah = () => 1 / 2 * this.measurements.backwidth;
  cc1 = () => 1 / 4 * this.measurements.bustcirc - 1 + this.measurements.easeallowance;
  dd1 = () => 1 / 4 * this.measurements.waistcirc - 1 + 3 + this.measurements.easeallowance; // 3 = dart
  ee1 = () => 1/4 * this.measurements.hip - 1 + this.measurements.easeallowance;
  ff1 = () => this.ee1();
  b1l1 = () => 1/2 * this.measurements.backshoulderwidth;
  // DRESS.BACK.DART
  dart_dr = () => 1/2 * this.dd1(); // dart_rr1 = () =>  // ?? cc1 - 2 ou cc1 tiret 2  }
  // FRONT
  da1 = () => this.measurements.frontwaistlength;
  a1b = () => 1/6 * this.size + 1;
  a1g = () => 1/6 * this.size;
  a1h = () => 1/2 * this.measurements.backwidth - 1;
  cc2 = () => 1/4 * this.measurements.bustcirc + 1 + this.measurements.easeallowance;
  dd2 = () => 1/4 * this.measurements.waistcirc + 1 + 3 + this.measurements.easeallowance; // 3 = dart
  ee2 = () => 1/4 * this.measurements.hip + 1 + this.measurements.easeallowance;
  ff2 = () => this.ee2();
  a1n = () => this.measurements.bustheight;
  nn1 = () => 1/2 * this.measurements.breastdistance;
  gg1 = () => 1/10 * this.size + 0.5;
  n1n2 = () => (this.measurements.bustcirc - this.measurements.chestCirc) / 2; // nouvelle formule ajoutée par Avril au lieu de 2 (constante)
  // DRESS.FRONT.DART
  dart_dr_front = () => this.nn1();

  // SLEEVE
  ab_sleeve = () => 1/2 * this.size;
  c_sleeve =  () => 1/2 * this.ab_sleeve();
  ad_sleeve = () => 1/10 * this.size + 0.5;
  ae_sleeve = () => 1/10 * this.measurements.height - 1;
  ch_sleeve = () => this.measurements.elbowlength;
  ci_sleeve = () => this.measurements.sleevelength;

  // TWO-PIECE SLEEVE
  ab_sleeve2 = () => 1/2 * this.size;
  ad_sleeve2 = () => 1/10 * this.size + 0.5;
  ae_sleeve2 = () => 1/10 * this.measurements.height;
  ah_sleeve2 = () => this.measurements.elbowlength;
  ag_sleeve2 = () => this.measurements.sleevelength;
  c_sleeve2 = () => 1/2 * this.ab_sleeve2();

  // TROUSERS HEMLINE 
  // TROUSERSHEMLIN.FRONT
  ab_basictrousers = () => this.measurements.hipdepth;
  ac_basictrousers = () => this.measurements.cratchlength;
  bb1_basictrousers = () => 1/4 * this.measurements.hip + this.measurements.trouserseaseallowance;
  cc1_basictrousers = () => this.bb1_trousers()
  cc2_basictrousers = () => 1/20 * this.measurements.hip;
  d_basictrousers = () => 1/2 * (this.cc1_trousers() + this.cc2_trousers());
  ed1_basictrousers = () => this.measurements.kneelength
  ef_basictrousers = () => this.measurements.trouserslength
  aa1_basictrousers = () => 1/4 * this.measurements.waistcirc + 3
  f1f2_basictrousers = () => (this.measurements.bottomtrouserswidth - 3) / 2;
  d2d3_basictrousers = () => this.f1f2_trousers() + 2;
  // TROUSERS.BACK
  ah_basictrousers_back = () => this.d_basictrousers() - this.cc2_basictrousers() + 2 // AH = DC = C1C2/2 - CC2 = D - CC2       (+ 2)
  hh2_basictrousers_back = () => 1/4 * this.measurements.waistcirc + 2
  cc3_basictrousers_back = () => 1/24 * (1/2 * this.measurements.hip)
  c3c4_basictrousers_back = () => 1/10 * this.measurements.hip;
  ll1_basictrousers_back = () => 1/4 * this.measurements.hip + this.measurements.trouserseaseallowance;
  f3f4_basictrousers_back = () => (this.measurements.bottomtrouserswidth + 3) / 2;
  m_basictrousers_back = () => 1/2 * this.hh2_basictrousers_back();

  // TROUSERS HEMLINE 
  // TROUSERSHEMLIN.FRONT
  ab_trousers = () => this.measurements.hipdepth;
  ac_trousers = () => this.measurements.cratchlength;
  bb1_trousers = () => 1/4 * this.measurements.hip + 1.5;
  cc1_trousers = () => this.bb1_trousers()
  cc2_trousers = () => 1/20 * this.measurements.hip + 0.5;
  d_trousers = () => 1/2 * (this.cc1_trousers() + this.cc2_trousers());
  ed1_trousers = () => this.measurements.kneelength
  ef_trousers = () => this.measurements.trouserslength + 8
  aa1_trousers = () => 1/4 * this.measurements.waistcirc + 1 + 4
  f1f2_trousers = () => (this.measurements.bottomtrouserswidth - 3) / 2;
  d2d3_trousers = () => this.f1f2_trousers() - 2;
  // TROUSERS.BACK
  ah_trousers_back = () => this.d_trousers() - this.cc2_trousers() + 2 // AH = DC = C1C2/2 - CC2 = D - CC2     (+ 2)
  cc3_trousers_back = () => 1/24 * (1/2 * this.measurements.hip)
  c3c4_trousers_back = () => 1/10 * this.measurements.hip;
  h1h2_trousers_back = () => 1/4 * this.measurements.waistcirc - 1 + 3
  ll1_trousers_back = () => 1/4 * this.measurements.hip + 1;
  f3f4_trousers_back = () => (this.measurements.bottomtrouserswidth + 3) / 2;
  m_trousers_back = () => 1/2 * this.hh2_basictrousers_back();;
  ab_trousers_back = () => this.measurements.waistcirc;
  ac_trousers_back = () => this.measurements.waistbanwidth;
  c1_trousers_back = () => this.measurements.waistbanwidth / 2; // ou ac_trousers_back() / 2
}


const lst_constants = document.getElementsByClassName("constant")
const regex = /^$|^-?\d+(\.\d+)?$/; // check empty : /^-?\d+([.,]\d+)?$/;

function styleAfterCheck(input, valid, errorMessage) {
  if (valid) {
    input.parentElement.parentElement.children[2].innerHTML = ''
    input.parentElement.children[0].style.border = '1px solid #eee'
    input.parentElement.children[0].style.backgroundColor = 'rgba(26, 188, 156,0.03)'
    input.parentElement.children[0].style.color = '#106857'
  } else {
    input.parentElement.parentElement.children[2].innerHTML = `<i class="fa-solid fa-xmark"></i> ${errorMessage}`
    input.parentElement.children[0].style.border = '1px solid rgba(192, 57, 43,1.0)'
    input.parentElement.children[0].style.backgroundColor = 'rgba(192, 57, 43,0.2)'
    input.parentElement.children[0].style.color = 'rgba(192, 57, 43,1.0)'
  }
}

function check(input, checkempty=true) {
    // INPUTS TEXTUELS
    if (input.id == 'name') {
        if (input.value == '') {
          if (!checkempty) {
              return false;
          }
          styleAfterCheck(input, false, "Empty!")
          return false;
        } else {
          styleAfterCheck(input, true, '')
          return true
        }
    }

    // INPUTS NUMÉRIQUES
    if (regex.test(input.value)) {
        styleAfterCheck(input, true, '')
        return true;
    } else {
        styleAfterCheck(input, false, "Only numbers!")
        return false;
    }
}

function allValid() {
    let ret = true;
    Array.from(lst_constants).forEach(function(input, index) {
        if (!check(input, false)) {
            ret = false;
        }
    });
    return ret;
}

function results() {
  const patron = new Patron();

  const mapping = {
    "ab-value": "ab", "ac-value": "ac", "ad-value": "ad", "de-value": "de", "af-value": "af", "ag-value": "ag", "ah-value": "ah", "cc1-value": "cc1",
    "dd1-value": "dd1", "ee1-value": "ee1", "ff1-value": "ff1", "b1l1-value": "b1l1", "dr-value": "dart_dr",
    // FRONT
    "ac-value-front": "ac", "ad-value-front": "ad", "da1-value": "da1", "a1b-value": "a1b", "de-value-front": "de", "af-value-front": "af", 
    "a1g-value": "a1g", "a1h-value": "a1h", "cc2-value": "cc2", "dd2-value": "dd2", "ee2-value": "ee2", "ff2-value": "ff2", "a1n-value": "a1n",
    "nn1-value": "nn1", "gg1-value": "gg1", "n1n2-value": "n1n2",
    // FRONT.DART
    "dr-value-front": "dart_dr_front",
    // SLEEVE
    "ab-value-sleeve": "ab_sleeve", "c-value-sleeve": "c_sleeve", "ad-value-sleeve": "ad_sleeve", "ae-value-sleeve": "ae_sleeve",
    "ch-value-sleeve": "ch_sleeve", "ci-value-sleeve": "ci_sleeve",
    // TWO-PIECE SLEEVE
    "ab-value-sleeve2": "ab_sleeve2", "ad-value-sleeve2": "ad_sleeve2", "ae-value-sleeve2": "ae_sleeve2",
    "ah-value-sleeve2": "ah_sleeve2", "ag-value-sleeve2": "ag_sleeve2", "c-value-sleeve2": "c_sleeve2",
    // BASIC TROUSERS
    

    // BASICTROUSERS.FRONT
    "ab-value-basictrousers": "ab_basictrousers", "ac-value-basictrousers": "ac_basictrousers", "bb1-value-basictrousers": "bb1_basictrousers", "cc1-value-basictrousers": "cc1_basictrousers",
    "cc2-value-basictrousers": "cc2_basictrousers", "d-value-basictrousers": "d_basictrousers", "ed1-value-basictrousers": "ed1_basictrousers", "ef-value-basictrousers": "ef_basictrousers",
    "aa1-value-basictrousers": "aa1_basictrousers", "f1f2-value-basictrousers": "f1f2_basictrousers", "d2d3-value-basictrousers": "d2d3_basictrousers",
    // BASICTROUSERS.BACK
    "ah-value-back-basictrousers": "ah_basictrousers_back", "hh2-value-back-basictrousers": "hh2_basictrousers_back", "cc3-value-back-basictrousers": "cc3_basictrousers_back", "c3c4-value-back-basictrousers": "c3c4_basictrousers_back", "h1h2-value-back-basictrousers": "h1h2_basictrousers_back",
    "ll1-value-back-basictrousers": "ll1_basictrousers_back", "f3f4-value-back-basictrousers": "f3f4_basictrousers_back", "m-value-back-basictrousers": "m_basictrousers_back", "ab-value-back-waistband-basictrousers": "ab_basictrousers_back",
    "c1-value-back-waistband-basictrousers": "c1_basictrousers_back", "ac-value-back-waistband-basictrousers": "ac_basictrousers_back",

    // TROUSERSHEMLINE.FRONT
    "ab-value-trousers": "ab_trousers", "ac-value-trousers": "ac_trousers", "bb1-value-trousers": "bb1_trousers", "cc1-value-trousers": "cc1_trousers",
    "cc2-value-trousers": "cc2_trousers", "d-value-trousers": "d_trousers", "ed1-value-trousers": "ed1_trousers", "ef-value-trousers": "ef_trousers",
    "aa1-value-trousers": "aa1_trousers", "f1f2-value-trousers": "f1f2_trousers", "d2d3-value-trousers": "d2d3_trousers",
    // TROUSERSHEMLINE.BACK
    "ah-value-back-trousers": "ah_trousers_back", "cc3-value-back-trousers": "cc3_trousers_back", "c3c4-value-back-trousers": "c3c4_trousers_back", "h1h2-value-back-trousers": "h1h2_trousers_back",
    "ll1-value-back-trousers": "ll1_trousers_back", "f3f4-value-back-trousers": "f3f4_trousers_back", "m-value-back-trousers": "m_trousers_back", "ab-value-back-waistband-trousers": "ab_trousers_back",
    "c1-value-back-waistband-trousers": "c1_trousers_back", "ac-value-back-waistband-trousers": "ac_trousers_back"
  }

  function formatNumber(num) {
    if (!isFinite(num)) return "—";
    if (Number.isInteger(num)) return num.toString();
    if (Math.abs(num * 10 - Math.round(num * 10)) < 1e-6) return num.toFixed(1); // 1 décimale utile
    return num.toFixed(2);
  }

  for (const [id, methodName] of Object.entries(mapping)) {
    const el = document.getElementById(id);
    if (el && typeof patron[methodName] === "function") {
      const val = patron[methodName]();
      el.innerHTML = formatNumber(val);
    }
  }

  document.querySelectorAll(".size-result").forEach(e => {e.innerHTML = formatNumber(patron.getSize());})
  document.getElementById("ease-allowance-result").innerHTML = formatNumber(patron.getEaseAllowance());
}


/* INITIALISATION */

Array.from(lst_constants).forEach(function(input, index) {
    input.valid = false;
    check(input, false);
    input.onkeyup = function() {
        check(input);
        results(); // update results
    }

    input.onblur = function() {
        check(input);
        results(); // update results
    }
});

document.querySelectorAll(".slider-constant").forEach((s) =>
  s.addEventListener("input", () => {
    let inputTarget = s.parentElement.children[1].children[0]

    inputTarget.value = s.value
    check(inputTarget);
    results();
  })
)




/* UTILS */

function notValidAnimation() {
  const saveBtn = document.getElementById("save");

  saveBtn.style.backgroundColor = "rgb(192, 57, 43)";
  saveBtn.style.transitionDuration = "0.1s";
  saveBtn.style.transform = "translateX(2px)";
  setTimeout(() => {
    saveBtn.style.transform = "translateX(-2px)";
    setTimeout(() => {
      saveBtn.style.transform = "none";
    }, 200)
  }, 200)
  
  setTimeout(() => {
    saveBtn.style.backgroundColor = "#1abc9c";
  }, 1000)
}

/* INITIALISATION */

const params = new URLSearchParams(window.location.search);
const profile = params.get("profile");
let id = params.get("id")

if (profile) {
  document.getElementById("profile").innerText = profile
} else {
  document.getElementById("profile").innerText = "Draft (not registered)"
  document.getElementById("profile").classList.add("draft")
}

const exclude = ["id", "description", "created_at", "updated_at"]

getByAPI(id).then(pattern => {
  if (!pattern) pattern = {};

  for (const measure in pattern) {
    if (!exclude.includes(measure)) {
      if (pattern[measure] != "NULL") {
        document.getElementById(measure).value = pattern[measure]
        if (measure != "name") {
          document.getElementById(measure).parentElement.parentElement.children[3].value = pattern[measure]
        }
      }
    }
  }

  function generateResults() {
      if (!allValid()) {
          notValidAnimation();
          return
      }
      
      const proceed = () => {
        Object.keys(pattern).forEach(key => {
          if (!exclude.includes(key)) {
            let value = "";
            if (key == "name") {
              value = document.getElementById(key)?.value || ""
            } else {
              value = parseFloat(document.getElementById(key)?.value) || "";
            }
            pattern[key] = value;
          }
        });

        putByAPI(id, pattern).then(x => {
            console.log("good");
            console.log(x);
        });

        const saveSvg = document.getElementById("save-svg");
        saveSvg.innerHTML = '<i class="fa-solid fa-check"></i>';
        saveSvg.style.transform = "scale(1.2)";

        setTimeout(() => {
            saveSvg.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
            saveSvg.style.transform = "scale(1)";
        }, 1000);
    };

    if (Object.keys(pattern).length === 0) {
        const nom = document.getElementById("name").value
        postByAPI({name: nom}).then(id_ => {
            id = id_;
            document.getElementById("profile").textContent = nom;
            document.getElementById("profile").classList.add("draft")

            const newUrl = `${window.location.pathname}?profile=${encodeURIComponent(nom)}&id=${id}`;
            window.history.pushState({}, "", newUrl);

            getByAPI(id).then(pattern_ => {
              console.log(pattern_)
              pattern = pattern_
              proceed();
            })
        });
    } else {
        proceed();
    }
  }


  document.getElementById("save").onclick = function() {
    Array.from(lst_constants).forEach(function(input) {
      check(input);
    });
    generateResults()
  }


  const container = document.getElementById("container");

  document.getElementById("dress").addEventListener("click", () => {
    container.classList.add("show-pattern");
    document.getElementById("dress-pattern").style.display = "block"
  });

  document.getElementById("trousers").addEventListener("click", () => {
    container.classList.add("show-pattern");
    document.getElementById("trousers-pattern").style.display = "block"
  });

  document.getElementById("basictrousers").addEventListener("click", () => {
    container.classList.add("show-pattern");
    document.getElementById("basictrousers-pattern").style.display = "block"
  });

  document.getElementById("two-piece-sleeve").addEventListener("click", () => {
    container.classList.add("show-pattern");
    document.getElementById("two-piece-sleeve-pattern").style.display = "block"
  });


  document.getElementById("sleeve").addEventListener("click", () => {
    container.classList.add("show-pattern");
    document.getElementById("sleeve-pattern").style.display = "block"
  });


  const btnsBack = document.querySelectorAll('.back-pattern');

  btnsBack.forEach(button => {
    button.addEventListener("click", (e) => {
      const parent = button.parentElement; // e varie de <button> (lui) à <div> son vrai parent jsp pk
      parent.style.display = "none"
      container.classList.remove("show-pattern");
    });
  });

  results(); // lancement initial
})