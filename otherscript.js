//https://ibb.co/C1y5fwj (target)
//https://ibb.co/C1y5fwjhttps://ibb.co/F3vnQrZ (gun)

//TO-DO
//Language change

var lang = 'English';
var lastno = -1;

document.getElementById("engbut").innerHTML = '<img id = "engflag" src="images/ENG.ico" />';
document.getElementById("grebut").innerHTML = '<img id = "greflag" src="images/GRE.png" />';
document.getElementById("engflag").style.height = '100%';
document.getElementById("engflag").style.width = '100%';
document.getElementById("greflag").style.height = '100%';
document.getElementById("greflag").style.width = '100%';


function updateLang(langg) {
    lang = langg
    if (lastno != -1) {
      showstats('yes',lastno,0)
    }

    var engterms = ['About  me','Education','Empl. History','Hardware Des. Skills','Web Dev. Skills','Other Prog. Skills','Other Projects','References','Play a Game!','Languages','My Hobbies','Contact']
    var greterms = ['Πληοροφορίες','Εκπαίδευση','Επαγελ. Εμπειρία','Γνώσεις  Hardware','Γνώσεις Web Dev','Άλλες γνώσεις Προγ.','Άλλα πρότζεκτ','Αναφορές','Παίξε ένα παιχνίδι','Γλώσσες','Ενδιαφέροντα','Επικοινωνία']
    for (i=0; i<12; i++) {
      if (langg == 'Greek') {
        document.getElementById('tag'+i).innerHTML = greterms[i];
      }
      if (langg == 'English'){
        document.getElementById('tag'+i).innerHTML = engterms[i];
      }
    }
}


function myFunction(e) {
    document.getElementById("gun").src = 'images/gun.png'
    var x = e.clientX;
    var y = window.innerHeight - e.clientY - 0.06*window.innerHeight;
    if (x < 0.5*window.innerWidth) {
        var deg = -180 + Math.atan(y/(0.5*window.innerWidth-x)) * 180/Math.PI;
    }
    else {
        var deg = -Math.atan(y/(x-0.5*window.innerWidth)) * 180/Math.PI;
    }
    document.getElementById("gun").style.transform = "rotate(" + deg +"deg)"
    if (x < 0.5*window.innerWidth) {
        document.getElementById("gun").style.transform += "scaleY(-1)";
    }

  }
  
  function clearCoor() {
    document.getElementById("gun").src = 'images/blank.png'
  }

