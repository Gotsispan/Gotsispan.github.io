var lang = 'English';
var color = 'dark';
var lastno = -1;

function loadstart(){

    const div = document.createElement("div");
    div.setAttribute("id", "div1");
    document.getElementById('screeninfo').appendChild(div);

    var img = document.createElement('img');
    img.setAttribute("id", "myface");
    img.src = 'images/myFace.png';
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
    document.getElementById('div1').style.gridTemplateColumns = "30% 70%"
    document.getElementById('div1').style.gridTemplateColumns

    text = document.createElement('p')
    text.setAttribute("id", "text2");
    if (lang == 'English') {
      text.innerText =  'Welcome to my profile, I am a graduate in electrical engineering and information technology. \r\n' +
      'I enjoy making projects like this one as a junior web developer. \r\n' +
      'My field of expertise also extends to hardware designing, which is also the subject of my graduation thesis. \r\n' +
      'I am excited to expand my knowledge of the beautiful world of Information Technology and turn my passion into a career'
    }
    if (lang == 'Greek') {
      text.innerText =  'Καλως ήρθατε στο προφίλ μου. Είμαι απόφοιτος ηλεκτρολόγος μηχανικός και τεχνολογίας υπολογιστών. \r\n' +
      'Μου αρέσει να εκτελώ πρότζεκτς σαν και αυτό ως junior web developer. \r\n' +
      'Οι γνώσεις μου επεκτείνονται και στο σχεδιασμό ολοκληρωμένων κυκλωμάτων, το οποίο αποτελεί και το αντικείμενο της διπλωματικής εργασίας μου. \r\n' +
      'Θα ήθελα να επεκτείνω τις γνώσεις μου επάνω στον τομέα της τεχνολογίας υπολογιστών (IT) και να μετατρέψω το ενδιαφέρον μου σε εργασία'
    }
    document.getElementById('screeninfo').appendChild(text);

    document.getElementById('text1').style.fontSize = '3vh';
    document.getElementById('text1').style.fontWeight = 'bold';
    document.getElementById('text2').style.fontSize = '2vh';
    document.getElementById('myface').style.width = '13vw';
    document.getElementById('myface').style.height = '25vh';

    var taglinkarr = ['aboutme.jpg','education.jpg','hardware.webp','webdev.jpg','otherskills.jpg','languages.jpg','projects.jpg','game.jpg','hobbies.jpg','contact.jpg']
    for (i=0; i<10; i++) {
        document.getElementById("tag"+i).style.background = 'url(images/' + taglinkarr[i]
        document.getElementById("tag"+i).style.backgroundSize = '100%'
    }

    if (color == 'dark') {
        document.getElementById("gun").src = 'images/archerlight.png'
      }
    else {
        document.getElementById("gun").src = 'images/archerdark.png'
    }


}

