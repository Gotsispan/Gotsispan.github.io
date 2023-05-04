var lang = 'English';
var color = 'dark';
localStorage.setItem("color", "dark");
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
      text.innerText +=  'Panagiotis Gotsis \r\n Date of Birth: 6/10/1995 \r\n Gender: Male \r\n Country of origin: Greece \r\n Email: gotsispan95@gmail.com \r\n'
    }
    if (lang == 'Greek') {
      text.innerText +=  'Παναγιώτης Γκότσης \r\n Ημερομηνία Γέννησης: 6/10/1995 \r\n Φύλο: Άντρας \r\n Χώρα καταγωγής: Ελλάδα \r\n Email: gotsispan95@gmail.com \r\n'
    }

    document.getElementById('div1').appendChild(text);
    document.getElementById('div1').style.display = "grid"
    document.getElementById('div1').style.gridTemplateColumns = "30% 70%"
    document.getElementById('div1').style.gridTemplateColumns

    text = document.createElement('p')
    text.setAttribute("id", "text2");
    if (lang == 'English') {
        text.innerText = '• Welcome to my hub. My name is Panagiotis and I am a graduate in electrical engineering and information technology. \r\n' +
        '• I am a passionate self taught web designer, skilled in CSS, HTML and Javascript. \r\n' +
        '• I enjoy creating interactive websites with advanced UI, as evidenced by this particular one which I created from scratch. \r\n' +
        '• I am excited to expand my knowledge on the beautiful world of web developing and turn my passion into a career. \r\n' +
        '• My field of expertise also extends to hardware design, which also happens to be the subject of my graduation thesis. \r\n' +
        '• I am open to anything on that spectrum, as long as I get to be creative and achieve a sufficient amount of short term goals. \r\n' +
        '• To navigate this page, shoot the arrows (by clicking your mouse) to the subsequent targets to see more stuff about me. \r\n' +
        "• Feel free to message me using the contact form I set up, by clicking 'Contact' on the menu below."
    }
    if (lang == 'Greek') {
      text.innerText = '• Καλωσήρθατε στην προσωπική μου σελίδα. Ονομάζομαι Παναγιώτης και είμαι απόφοιτος ηλεκτρολόγος μηχανικός. \r\n' +
        '• Είμαι ένας ενθουσιώδης αυτοδίδακτος σχεδιαστής ιστοσελίδων, με καλές γνώσεις CSS, HTML και Javascript. \r\n' +
        '• Μου αρέσει να φτιάχνω διαδραστικές ιστοσελίδες με εξελιγμένο γραφικό περιβάλλον, όπως αυτήν την σελίδα την οποία δημιούργησα από το μηδέν. \r\n' +
        '• Ενδιαφέρομαι να επεκτείνω τις γνώσεις μου στον όμορφο κόσμο του σχεδιασμού ιστοσελίδων και να μετατρέψω το πάθος μου σε επάγγελμα. \r\n' +
        '• Οι γνώσεις μου επεκτείνονται και στον σχεδιασμό ολοκληρωμένων κυκλωμάτων, το οποίο αποτελέι και το αντικείμενο της διπλωματικής εργασίας μου. \r\n' +
        '• Είμαι ανοιχτός σε οτιδήποτε σε αυτούς τους τομείς, αρκεί να έχω δημιουργική ελεύθερια και να πετυχαίνω τους στόχους μου. \r\n' +
        '• Για να μετακινηθείτε στη σελίδα, ρίξτε τα βέλη (πατώντας το αριστερό κλικ) στους αντίστοιχους στόχους για να δείτε παραπάνω πληροφορίες για μένα. \r\n' +
        "• Σε περίπτωση που θέλετε να επικοινωνήσετε μαζί μου, στείλτε μου ένα μύνημα μέσω της επιλογής 'Επικοινωνία'."
    }
    document.getElementById('screeninfo').appendChild(text);

    
    document.getElementById('text1').style.fontSize = '3vmin';
    document.getElementById('text1').style.fontWeight = 'bold';
    document.getElementById('text2').style.fontSize = '1.9vmin';
    document.getElementById('text2').style.textAlign = 'justify';
    document.getElementById('text2').style.paddingLeft = '2%';
    document.getElementById('text2').style.paddingRight = '2%';
    document.getElementById('text2').style.lineHeight = '110%';
    document.getElementById('text2').style.fontWeight = 'bold';
    document.getElementById('myface').style.width = '13vw';
    document.getElementById('myface').style.height = '25vmin';

    var taglinkarr = ['aboutme.jpg','education.jpg','hardware.jpg','webdev.jpg','otherskills.jpg','languages.jpg','projects.jpg','game.jpg','hobby.jpg','contact.jpg']
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

    if (1.5*window.innerWidth < window.innerHeight) {
      document.getElementsByClassName("langbuttons")[0].style.width = '100%';
      document.getElementsByClassName("langbuttons")[0].style.right = '25%';
      document.getElementsByClassName("colorbuttons")[0].style.width = '100%';
      document.getElementsByClassName("colorbuttons")[0].style.right = '25%';
      document.getElementById('link1').style.position = "absolute";
      document.getElementById('link1').style.top = '11%';
      document.getElementById('link1').style.right = '150%';
      document.getElementById('link1').style.fontSize = '2.5vmin';
      tagtxts = document.getElementsByClassName("tagtxt")
      for (i=0; i<tagtxts.length; i++){
        tagtxts[i].style.fontSize = '12px';
      }
      document.getElementById("gun").style.height = '10%';
      document.getElementById("gun").style.top = '90%';
      document.getElementById("screen").style.height = '72%';
      document.getElementById("screen").style.width = '90%';
      document.getElementsByClassName("screenimage")[0].style.top = '23%';
      document.getElementsByClassName("screenimage")[0].style.left = '5%';
      document.getElementsByClassName("screeninfo")[0].style.top = '25%';
      document.getElementsByClassName("screeninfo")[0].style.left = '8%';
      document.getElementById("screeninfo").style.height = '43%';
      document.getElementById("screeninfo").style.width = '85%';
      document.getElementById('text1').style.fontSize = '3vmin';
      document.getElementById('text2').style.fontSize = '2.2vmin';
      document.getElementById('text2').style.fontWeight = 'bold';
      document.getElementById('myface').style.width = '24vw';
      document.getElementById('myface').style.height = '24vmin';
      document.getElementById('logoo').style.width = '200%';
      document.getElementById('myface').style.height = '24vmin';
    }

}

