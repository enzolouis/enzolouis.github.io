/* main */

class Patron {
  constructor() {
    let inputs = document.querySelectorAll(".constant");

    this.measurements = {};

    inputs.forEach(input => {
        this.measurements[input.id] = parseFloat(input.value);
    });

    //this.size = Math.floor(this.measurements.chestCirc / 2);
    this.size = this.measurements.chestCirc / 2
  }

  getSize() {
    return this.size;
  }

  getEaseAllowance() {
    return this.measurements.easeallowance;
  }

  // BACK

  ab() {
    return 1 / 24 * this.size + 0.2;
  }

  ac() {
    return 1 / 8 * this.measurements.height + 1 / 24 * this.size + 1.7; // armhole depth measurement
  }

  ad() {
    return this.measurements.backwaistlength;
  }

  de() {
    return this.measurements.hipdepth;
  }

  af() {
    return this.measurements.dresslength;
  }

  ag() {
    return 1/6 * this.size;
  }

  ah() {
    return 1 / 2 * this.measurements.backwidth;
  }

  cc1() {
    return 1 / 4 * this.measurements.bustcirc - 1 + this.measurements.easeallowance;
  }

  dd1() {
    return 1 / 4 * this.measurements.waistcirc - 1 + 3 + this.measurements.easeallowance; // 3 = dart
  }

  ee1() {
    return 1/4 * this.measurements.hip - 1 + this.measurements.easeallowance;
  }

  ff1() {
    return this.ee1();
  }

  b1l1() {
    return 1/2 * this.measurements.backshoulderwidth;
  }

  // BACK DART

  dart_dr() {
    return 1/2 * this.dd1();
  }

  dart_rr1() {
    // ?? cc1 - 2 ou cc1 tiret 2
  }

  // FRONT

  da1() {
    return this.measurements.frontwaistlength;
  }

  a1b() {
    return 1/6 * this.size + 1;
  }

  a1g() {
    return 1/6 * this.size;
  }

  a1h() {
    return 1/2 * this.measurements.backwidth - 1;
  }

  cc2() {
    return 1 / 4 * this.measurements.bustcirc + 1 + this.measurements.easeallowance;
  }

  dd2() {
    return 1 / 4 * this.measurements.waistcirc + 1 + 3 + this.measurements.easeallowance; // 3 = dart
  }

  ee2() {
    return 1/4 * this.measurements.hip + 1 + this.measurements.easeallowance;
  }

  ff2() {
    return this.ee2();
  }

  a1n() {
    return this.measurements.bustheight;
  }

  nn1() {
    return 1/2 * this.measurements.breastdistance;
  }

  gg1() {
    return 1/10 * this.size + 0.5;
  }

  n1n2() {
    return (this.measurements.bustcirc - this.measurements.chestCirc) / 2;
  }

  // FRONT DART
  
  dart_dr_front() {
    return this.nn1();
  }


  // SLEEVE

  ab_sleeve() {
    return 1/2 * this.size
  }

  c_sleeve() { // c'est un point, pas de calcul
    return 1/2 * this.ab_sleeve()
    //return 99999
  }

  ad_sleeve() {
    return 1/10 * this.size + 0.5
  }

  ae_sleeve() {
    return 1/10 * this.measurements.height - 1
  }

  ch_sleeve() {
    return this.measurements.elbowlength
  }

  ci_sleeve() {
    return this.measurements.sleevelength;
  }

  // TWO-PIECE SLEEVE

  ab_sleeve2() {
    return 1/2 * this.size
  }

  ad_sleeve2() {
    return 1/10 * this.size + 0.5
  }

  ae_sleeve2() {
    return 1/10 * this.measurements.height
  }

  ah_sleeve2() {
    return this.measurements.elbowlength
  }

  ag_sleeve2() {
    return this.measurements.sleevelength
  }

  c_sleeve2() {
    return 1/2 * this.ab_sleeve2()
  }

  // TROUSERS 

  // FRONT:
  ab_trousers() {
    return this.measurements.hipdepth
  }
  ac_trousers() {
    return this.measurements.cratchlength
  }
  bb1_trousers() {
    return 1/4 * this.measurements.hip + 1.5
  }
  cc1_trousers() {
    return this.bb1_trousers()
  }
  cc2_trousers() {
    return 1/20 * this.measurements.hip + 0.5
  }
  d_trousers() {
    return 1/2 * (this.cc1_trousers() + this.cc2_trousers());
  }
  ed1_trousers() {
    return this.measurements.kneelength
  }
  ef_trousers() {
    return this.measurements.trouserslength + 8
  }
  aa1_trousers() {
    return 1/4 * this.measurements.waistcirc + 1 + 4
  }
  
  // BACK:
  cc3_trousers_back() { // hipDepth ou hipCirc?
    return 1/24 * (1/2 * this.measurements.hip)
  }
  c3c4_trousers_back() {
    return 1/10 * this.measurements.hip
  }
  h1h2_trousers_back() { // + 3
    return 1/4 * this.measurements.waistcirc - 1 + 3
  }
  ll1_trousers_back() {
    return 1/4 * this.measurements.hip + 1
  }
  m_trousers_back() {
    return NaN
  }
  ab_trousers_back() {
    return this.measurements.waistcirc
  }
}


const lst_constants = document.getElementsByClassName("constant")
// const regex = /^-?\d+([.,]\d+)?$/;
const regex = /^-?\d+([.]\d+)?$/;

function check(input, checkempty=true) {
    if (input.value == '') {
        if (!checkempty) {
            return false;
        }
        input.parentElement.parentElement.children[2].innerHTML = '<i class="fa-solid fa-xmark"></i> Empty'
        input.parentElement.children[0].style.border = '1px solid rgba(192, 57, 43,1.0)'
        input.parentElement.children[0].style.backgroundColor = 'rgba(192, 57, 43,0.2)'
        input.parentElement.children[0].style.color = 'rgba(192, 57, 43,1.0)'
        return false;
    } else if (regex.test(input.value)) {
        input.parentElement.parentElement.children[2].innerHTML = ''
        input.parentElement.children[0].style.border = '1px solid #eee'
        input.parentElement.children[0].style.backgroundColor = 'rgba(26, 188, 156,0.03)'
        input.parentElement.children[0].style.color = '#106857'
        return true;
    } else {
        input.parentElement.parentElement.children[2].innerHTML = '<i class="fa-solid fa-xmark"></i> Only numbers'
        input.parentElement.children[0].style.border = '1px solid rgba(192, 57, 43,1.0)'
        input.parentElement.children[0].style.backgroundColor = 'rgba(192, 57, 43,0.2)'
        input.parentElement.children[0].style.color = 'rgba(192, 57, 43,1.0)'
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

  document.getElementById("ab-value").innerHTML = patron.ab().toFixed(2);
  document.getElementById("ac-value").innerHTML = patron.ac().toFixed(2);
  document.getElementById("ad-value").innerHTML = patron.ad().toFixed(2);
  document.getElementById("de-value").innerHTML = patron.de().toFixed(2);
  document.getElementById("af-value").innerHTML = patron.af().toFixed(2);
  document.getElementById("ag-value").innerHTML = patron.ag().toFixed(2);
  document.getElementById("ah-value").innerHTML = patron.ah().toFixed(2);
  document.getElementById("cc1-value").innerHTML = patron.cc1().toFixed(2);
  document.getElementById("dd1-value").innerHTML = patron.dd1().toFixed(2);
  document.getElementById("ee1-value").innerHTML = patron.ee1().toFixed(2);
  document.getElementById("ff1-value").innerHTML = patron.ff1().toFixed(2);
  document.getElementById("b1l1-value").innerHTML = patron.b1l1().toFixed(2);
  document.getElementById("dr-value").innerHTML = patron.dart_dr().toFixed(2);

  // FRONT

  document.getElementById("ac-value-front").innerHTML = patron.ac().toFixed(2);
  document.getElementById("ad-value-front").innerHTML = patron.ad().toFixed(2);
  document.getElementById("da1-value").innerHTML = patron.da1().toFixed(2);
  document.getElementById("a1b-value").innerHTML = patron.a1b().toFixed(2);
  document.getElementById("de-value-front").innerHTML = patron.de().toFixed(2);
  document.getElementById("af-value-front").innerHTML = patron.af().toFixed(2);
  document.getElementById("a1g-value").innerHTML = patron.a1g().toFixed(2);
  document.getElementById("a1h-value").innerHTML = patron.a1h().toFixed(2);
  document.getElementById("cc2-value").innerHTML = patron.cc2().toFixed(2);
  document.getElementById("dd2-value").innerHTML = patron.dd2().toFixed(2);
  document.getElementById("ee2-value").innerHTML = patron.ee2().toFixed(2);
  document.getElementById("ff2-value").innerHTML = patron.ff2().toFixed(2);
  document.getElementById("a1n-value").innerHTML = patron.a1n().toFixed(2);
  document.getElementById("nn1-value").innerHTML = patron.nn1().toFixed(2);
  document.getElementById("gg1-value").innerHTML = patron.gg1().toFixed(2);
  document.getElementById("n1n2-value").innerHTML = patron.n1n2().toFixed(2);

  // FRONT DART

  document.getElementById("dr-value-front").innerHTML = patron.dart_dr_front().toFixed(2);

  document.querySelectorAll(".size-result").forEach(e => {
    e.innerHTML = patron.getSize();
  })
  document.getElementById("ease-allowance-result").innerHTML = patron.getEaseAllowance();


  // SLEEVE

  document.getElementById("ab-value-sleeve").innerHTML = patron.ab_sleeve().toFixed(2);
  document.getElementById("c-value-sleeve").innerHTML = patron.c_sleeve().toFixed(2);
  document.getElementById("ad-value-sleeve").innerHTML = patron.ad_sleeve().toFixed(2);
  document.getElementById("ae-value-sleeve").innerHTML = patron.ae_sleeve().toFixed(2);
  document.getElementById("ch-value-sleeve").innerHTML = patron.ch_sleeve().toFixed(2);
  document.getElementById("ci-value-sleeve").innerHTML = patron.ci_sleeve().toFixed(2);

  // TWO-PIECE SLEEVE

  document.getElementById("ab-value-sleeve2").innerHTML = patron.ab_sleeve2().toFixed(2);
  document.getElementById("ad-value-sleeve2").innerHTML = patron.ad_sleeve2().toFixed(2);
  document.getElementById("ae-value-sleeve2").innerHTML = patron.ae_sleeve2().toFixed(2);
  document.getElementById("ah-value-sleeve2").innerHTML = patron.ah_sleeve2().toFixed(2);
  document.getElementById("ag-value-sleeve2").innerHTML = patron.ag_sleeve2().toFixed(2);
  document.getElementById("c-value-sleeve2").innerHTML = patron.c_sleeve2().toFixed(2);

  // TROUSERS 

  // FRONT:
  document.getElementById("ab-value-trousers").innerHTML = patron.ab_trousers().toFixed(2);
  document.getElementById("ac-value-trousers").innerHTML = patron.ac_trousers().toFixed(2);
  document.getElementById("bb1-value-trousers").innerHTML = patron.bb1_trousers().toFixed(2);
  document.getElementById("cc1-value-trousers").innerHTML = patron.cc1_trousers().toFixed(2);
  document.getElementById("cc2-value-trousers").innerHTML = patron.cc2_trousers().toFixed(2);
  document.getElementById("d-value-trousers").innerHTML = patron.d_trousers().toFixed(2);
  document.getElementById("ed1-value-trousers").innerHTML = patron.ed1_trousers().toFixed(2);
  document.getElementById("ef-value-trousers").innerHTML = patron.ef_trousers().toFixed(2);
  document.getElementById("aa1-value-trousers").innerHTML = patron.aa1_trousers().toFixed(2);
  
  // BACK:
  document.getElementById("cc3-value-back-trousers").innerHTML = patron.cc3_trousers_back().toFixed(2);
  document.getElementById("c3c4-value-back-trousers").innerHTML = patron.c3c4_trousers_back().toFixed(2);
  document.getElementById("h1h2-value-back-trousers").innerHTML = patron.h1h2_trousers_back().toFixed(2);
  document.getElementById("ll1-value-back-trousers").innerHTML = patron.ll1_trousers_back().toFixed(2);
  document.getElementById("m-value-back-trousers").innerHTML = patron.m_trousers_back().toFixed(2);
  document.getElementById("ab-value-back-waistband-trousers").innerHTML = patron.ab_trousers_back().toFixed(2);

}



Array.from(lst_constants).forEach( function(input, index) {
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





function notValidAnimation() {
  document.getElementById("save").style.backgroundColor = "rgb(192, 57, 43)";
  document.getElementById("save").style.transitionDuration = "0.1s";
  document.getElementById("save").style.transform = "translateX(2px)";
  setTimeout(() => {
    document.getElementById("save").style.transform = "translateX(-2px)";
    setTimeout(() => {
      document.getElementById("save").style.transform = "none";
    }, 200)
  }, 200)
  
  setTimeout(() => {
    document.getElementById("save").style.backgroundColor = "#1abc9c";
  }, 1000)
}


document.querySelectorAll(".slider-constant").forEach((s) =>
  s.addEventListener("input", () => {
    let inputTarget = s.parentElement.children[1].children[0]

    inputTarget.value = s.value
    check(inputTarget, false);
    results();
  })
)

/* home */



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

  if (!pattern) {
    console.log("empty")
    pattern = {};
  }

  console.log("P1", pattern)

  for (const measure in pattern) {
    if (!exclude.includes(measure)) {
      if (pattern[measure] != "NULL") {
        console.log("M1", measure)
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
        console.log("Avant maj:", pattern);
        const excludeKeys = ["updated_at", "created_at", "description", "id"];

        console.log(pattern)

        Object.keys(pattern).forEach(key => {
          if (!excludeKeys.includes(key)) {
            console.log(key)
            let value = "";
            if (key == "name") {
              value = document.getElementById(key)?.value || ""
            } else {
              value = parseFloat(document.getElementById(key)?.value) || 0;
            }
            pattern[key] = value;
          }
        });

        console.log("Après maj:", pattern);
        console.log("ID:", id);

        console.log(pattern)
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

  
  

  results(); // après load des valeurs des input depuis le storage
}).catch(e => {
    console.log(e)
  })