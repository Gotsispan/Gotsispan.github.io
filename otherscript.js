//https://ibb.co/C1y5fwj (target)
//https://ibb.co/C1y5fwjhttps://ibb.co/F3vnQrZ (gun)

//TO-DO
//Language change

var lastno = -1;
var engterms = ['About  me','Education and Experience','Hardware Design Skills','Web Developing Skills','Other Prog. Skills','Languages','Other Projects','Play a Game!','My Hobbies','Contact']
var greterms = ['Πληροφορίες','Εκπαίδευση και Εμπειρία','Εργαλεία Σχεδιασης Ολοκληρωμένων','Εργαλεία Ανάπτυξης ιστοσελίδων','Άλλες γνώσεις','Γλώσσες','Άλλα πρότζεκτ','Παίξε ένα παιχνίδι','Ενδιαφέροντα','Επικοινωνία']

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
    localStorage.setItem("lang",langg)
    if (lastno != -1) {
      showstats('yes',lastno,0)
    }
    else {
      showstats('yes',0,0)
    }
}

function updateColor(colorr) {
  color = colorr;
  if (lastno != -1) {
    showstats('yes',lastno,0)
  }

  if (colorr == 'dark') {
    localStorage.setItem("color", 'dark');
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
    document.getElementById("gun").src = 'images/archerlight.png'
    document.getElementById("logoo").src = 'images/mylogolight.png'

  }

  if (colorr == 'light') {
    localStorage.setItem("color", 'light');
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

    for (i=0; i<10; i++) {
      document.getElementById("tagtxt"+i).style.color = '#e4e5f1'
    }
      document.getElementById("gun").src = 'images/archerdark.png'
      document.getElementById("logoo").src = 'images/mylogodark.png'
  }

}

function myFunction(e,no) {

    var x = e.clientX;
    var y = window.innerHeight - e.clientY - 0.06*window.innerHeight;
    if (x < 0.5*window.innerWidth) {
        document.getElementById("container").style.cursor = "url('images/icon2left.png'), auto"
        var deg = -180 + Math.atan(y/(0.5*window.innerWidth-x)) * 180/Math.PI;
    }
    else {
        document.getElementById("container").style.cursor = "url('images/icon2right.png'), auto"
        var deg = -Math.atan(y/(x-0.5*window.innerWidth)) * 180/Math.PI;
    }
    document.getElementById("gun").style.transform = "rotate(" + deg +"deg)"
    if (x < 0.5*window.innerWidth) {
        document.getElementById("gun").style.transform += "scaleY(-1)";
    }
    
    if (no != -1) {
      document.getElementById('tag'+no).style.filter = 'brightness(15%)'
      if (lang == 'Greek') {
        document.getElementById('tagtxt'+no).innerText = greterms[no];
      }
      if (lang == 'English'){
        document.getElementById('tagtxt'+no).innerText = engterms[no];
      }
    }
  }
  
  function clearCoor(no) {
    //document.getElementById("gun").src = 'images/blank.png'
    document.getElementById('tag'+no).style.filter = 'brightness(100%)'
    if (lang == 'Greek') {
      document.getElementById('tagtxt'+no).innerText = '';
    }
    if (lang == 'English'){
      document.getElementById('tagtxt'+no).innerText = '';
    }
  }

 