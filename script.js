//https://ibb.co/C1y5fwj (target)
//https://ibb.co/C1y5fwjhttps://ibb.co/F3vnQrZ (gun)

//TO-DO
//Language change

var lang = 'Greek';

function myFunction(e) {
    document.getElementById("gun").src = 'gun.png'
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
    document.getElementById("gun").src = 'blank.png'
  }

  function showstats(e,no){
    let x = e.clientX;
    let y = e.clientY;
    let radius = 0.045* window.innerWidth;
    let xmat = [4,14.5,25,74.1,84.6,95.1]
    let ymat = [49.3,76]
    var enable = 0;
    console.log(x,y)
    dance:
    for (i=0; i<6; i++) {
      for (j=0; j<2; j++){
        if (Math.pow(Math.abs(x-xmat[i]/100*window.innerWidth),2) + Math.pow(Math.abs(y-ymat[j]/100*window.innerHeight),2) < Math.pow(radius,2)) {
          enable = 1;
          break dance
        }
      }
    }
    console.log(enable)
    if (enable == 1) {
      var gunshot = document.getElementById('audio')
      gunshot.innerHTML = '<audio id = "audioo" autoplay><source src="shot.mp3"></audio>';
      document.getElementById('audioo').volume = 0.1;

      document.getElementById('screeninfo').innerHTML = "";
      if (no == 0) {

        const div = document.createElement("div");
        div.setAttribute("id", "div1");
        document.getElementById('screeninfo').appendChild(div);

        var img = document.createElement('img');
        img.src = 'myFace.jpg';
        img.width = (window.innerWidth*0.1).toString();
        img.height = (window.innerHeight*0.2).toString();
        document.getElementById('div1').appendChild(img);

        document.getElementById('screeninfo').style.gridTemplateColumns
        text = document.createElement('p')
        text.setAttribute("id", "text1");
        text.innerText = ''
        if (lang == 'English') {
          text.innerText +=  'Panagiotis Gotsis \r\n Date of Birth: 6/10/1995 \r\n Gender: Male \r\n Country of origin: Greece \r\n Email: ece8306@upnet.gr \r\n'
        }
        if (lang == 'Greek') {
          text.innerText +=  'Παναγιώτης Γκότσης \r\n Ημερομηνία Γέννησης: 6/10/1995 \r\n Φύλο: Άντρας \r\n Χώρα καταγωγής: Ελλάδα \r\n Email: ece8306@upnet.gr \r\n'
        }
        document.getElementById('div1').appendChild(text);

        document.getElementById('div1').style.display = "grid"
        document.getElementById('div1').style.gridTemplateColumns = "45% 55%"

        document.getElementById('div1').style.gridTemplateColumns
        text = document.createElement('p')
        text.setAttribute("id", "text2");
        if (lang == 'English') {
          text.innerText =  '• Welcome to my profile, I am a post-graduate in electrical engineer and information technology. \r\n' +
          '• I enjoy making projects like this one as a junior web developer. \r\n' +
          '• My field of expertise also extends to hardware designing, which is also the subject of my graduation thesis. \r\n' +
          '• I am excited to expand my knowledge of the beautiful world of Information Technology and turn my passion into a career'
        }

        if (lang == 'Greek') {
          text.innerText =  '• Καλως ήρθατε στο προφίλ μου. Είμαι απόφοιτος ηλεκτρολόγος μηχανικός και τεχνολογίας υπολογιστών. \r\n' +
          '• Μου αρέσει να εκτελώ porjects σαν και αυτό ως junior web developer. \r\n' +
          '• Οι γνώσεις μου επεκτείνονται και στο σχεδιασμό ολοκληρωμένων κυκλωμάτων, το οποίο αποτελεί και το αντικείμενο της διπλωματικής εργασίας μου. \r\n' +
          '• Θα ήθελα να επεκτείνω τις γνώσεις μου επάνω στον τομέα της τεχνολογίας υπολογιστών (IT) και να μετατρέψω το ενδιαφέρον μου σε εργασία'
        }
        document.getElementById('screeninfo').appendChild(text);

        document.getElementById('text1').style.fontSize = 'large';
        document.getElementById('text1').style.fontWeight = 'bold';

        document.getElementById('text2').style.fontSize = 'large';


        //document.getElementById('screeninfo').innerText = 'Panagiotis Gotsis'
      }

    }
  }