//https://ibb.co/C1y5fwj (target)
//https://ibb.co/C1y5fwjhttps://ibb.co/F3vnQrZ (gun)

//TO-DO
//Language change


var lang = 'English';
var color = 'dark';
var lastno = -1;

document.getElementById("engbut").innerHTML = '<img id = "engflag" src="images/ENG.ico" />';
document.getElementById("grebut").innerHTML = '<img id = "greflag" src="images/GRE.png" />';
document.getElementById("engflag").style.height = '100%';
document.getElementById("engflag").style.width = '100%';
document.getElementById("greflag").style.height = '100%';
document.getElementById("greflag").style.width = '100%';

document.getElementById("darkbut").innerHTML = '<img id = "darkicon" src="images/darkmode.png" />';
document.getElementById("lightbut").innerHTML = '<img id = "lighticon" src="images/lightmode.png" />';

document.getElementById("darkicon").style.height = '100%';
document.getElementById("darkicon").style.width = '100%';
document.getElementById("lighticon").style.height = '100%';
document.getElementById("lighticon").style.width = '100%';

document.getElementById("grebut").style.background = "none";
document.getElementById("grebut").style.border = "none";
document.getElementById("engbut").style.background = "none";
document.getElementById("engbut").style.border = "none";

document.getElementById("darkbut").style.color = '#e4e5f1'
document.getElementById("darkbut").style.backgroundColor = '#2f2f2f'
document.getElementById("lightbut").style.color = '#2f2f2f'
document.getElementById("lightbut").style.backgroundColor = '#e4e5f1'

function updateLang(langg) {
    lang = langg
    if (lastno != -1) {
      showstats('yes',lastno,0)
    }

    var engterms = ['About  me','Education','Hardware Design','Web Developing','Other Skills','Languages','Other Projects','Play a Game!','My Hobbies','Contact']
    var greterms = ['Πληοροφορίες','Εκπαίδευση','Σχεδιαση Ολοκληρωμένων','Ανάπτυξη ιστοσελίδων','Άλλες γνώσεις','Γλώσσες','Άλλα πρότζεκτ','Παίξε ένα παιχνίδι','Ενδιαφέροντα','Επικοινωνία']
    for (i=0; i<10; i++) {
      if (langg == 'Greek') {
        document.getElementById('tag'+i).innerHTML = greterms[i];
      }
      if (langg == 'English'){
        document.getElementById('tag'+i).innerHTML = engterms[i];
      }
    }
}

function updateColor(colorr) {
  color = colorr;
  if (lastno != -1) {
    showstats('yes',lastno,0)
  }

  if (colorr == 'dark') {
    document.getElementById('screen').src = 'images/screendark.png'
    document.getElementById("container").style.color = '#e4e5f1'
    for (i=0; i<10; i++) {
      document.getElementById('tag'+i).style.color = '#e4e5f1'
      document.getElementById('tag'+i).style.borderColor = '#e4e5f1'
      document.getElementById('target-'+i).src = 'images/targetlight.png'
    }
    console.log(document.getElementById("container").style)
    document.getElementById("container").style.background = 'url(images/night.png) no-repeat center center fixed'
    document.getElementById("container").style.height = '100%';
    document.getElementById("container").style.backgroundPosition = 'center'
    document.getElementById("container").style.backgroundRepeat = 'no-repeat'
    document.getElementById("container").style.backgroundSize = 'cover'

  }

  if (colorr == 'light') {
    document.getElementById('screen').src = 'images/screen.png'
    document.getElementById("container").style.color = '#2f2f2f'
    for (i=0; i<10; i++) {
      document.getElementById('tag'+i).style.color = '#2f2f2f'
      document.getElementById('tag'+i).style.borderColor = '#2f2f2f'
      document.getElementById('target-'+i).src = 'images/targetdark.png'
    }
    console.log(document.getElementById("container").style)
    document.getElementById("container").style.background = 'url(images/day.jpg) no-repeat center center fixed'
    document.getElementById("container").style.height = '100%';
    document.getElementById("container").style.backgroundPosition = 'center'
    document.getElementById("container").style.backgroundRepeat = 'no-repeat'
    document.getElementById("container").style.backgroundSize = 'cover'

  }
}


function myFunction(e) {
    document.getElementById("gun").src = 'images/archer.png'
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

