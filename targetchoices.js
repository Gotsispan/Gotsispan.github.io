var array2048 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
var autoreset = 1;
var blockmove = 0;

window.onload = function(){
    const div = document.createElement("div");
    div.setAttribute("id", "div1");
    document.getElementById('screeninfo').appendChild(div);

    var img = document.createElement('img');
    img.setAttribute("id", "myface");
    img.src = 'images/myFace.jpg';
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
}


function reset2048() {
  array2048 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
  array2048[Math.floor(Math.random()*4)][Math.floor(Math.random()*4)] = 2;

  for (let i=0; i<4; i++) {
    for (let j=0; j<4; j++) {
      if ( array2048[i][j] == 0 ) {
        document.getElementById('place'+(i*4+j)).innerText = '';
        document.getElementById('place'+(i*4+j)).style.backgroundColor = numbarray[0][1]
        document.getElementById('place'+(i*4+j)).style.color = numbarray[0][0]
      }
      else {
        document.getElementById('place'+(i*4+j)).innerText = 2;
        document.getElementById('place'+(i*4+j)).style.backgroundColor = numbarray[1][1]
        document.getElementById('place'+(i*4+j)).style.color = numbarray[1][0]
      }     
    }
  }

}

numbarray = [['#eee4da','#776e65'],['#eee4da','#776e65'],['#ede0c8','#776e65'],['#f9f6f2','#f2b179'],
['#f9f6f2','#f59563'],['#f9f6f2','#f67c5f'],['#f9f6f2','#f65e3b'],
['#f9f6f2','#edcf72'],['#f9f6f2','#edcc61'],['#f9f6f2','#edc850'],
['#f9f6f2','#edc53f'],['#f9f6f2','#edc22e']]


function showhelp2048() {
  if (lang == 'English') {
    if (document.getElementById('instr').innerText.includes("All the")) {
      let text = 'This game is called 2048. You move the tiles using your arrow keys (up,down,left and right). \r\n' +
          "You can press 'Help' to learn how the game works or 'Reset' to start over."
      document.getElementById('instr').innerText = text
      document.getElementById('helpbutton').innerText = 'Help'
      document.getElementById("2048board").style.height = Math.floor(0.3*window.innerHeight).toString() + 'px';
      blockmove = 0;
    }
    else {
      let text = '• All the tiles on the board will attempt to move to the direction you specified. \r\n' +
      '• The tiles will always move to the empty spots when available.  \r\n' +
      '• When two tiles with equal value collide, they combine and double the value. \r\n' +
      '• Every new turn, one  tile of value (2) will randomly spawn in one of the empty spots in the grid. If there are no empty spots for it to spawn, you lose the game.  \r\n' +
      "• If you lose the game, you can click the 'Reset' button to start over again. \r\n" +
      '• The game will automatically save your progress until you refresh or leave the page, so you can continue browsing and come back if you want \r\n' +
      "• You can  hide those instructions and return to your game by clicking 'Hide Help'"  
      document.getElementById('instr').innerText = text 
      document.getElementById('helpbutton').innerText = 'Hide Help'
      document.getElementById("2048board").style.height = '0px';
      blockmove = 1;
    }
  }
  if (lang == 'Greek') {
    if (document.getElementById('instr').innerText.includes("Όλα τα")) {
      let text = 'Αυτό το παιχνίδι ονομάζεται 2048. Μπορείτε να χρησιμοποιήσετε τα βελάκια (πάνω, κάτω, δεξιά, αριστερά). \r\n' +
      "Μπορείτε να πατήσετε το κουμπί 'Βοήθεια' για να δείτε πως παίζεται το παιχνίδι ή 'Επαναφορά' για να αρχίσετε από την αρχή."
      document.getElementById('instr').innerText = text
      document.getElementById('helpbutton').innerText = 'Βοήθεια'
      document.getElementById("2048board").style.height = Math.floor(0.3*window.innerHeight).toString() + 'px';
      blockmove = 0;
    }
    else {
      let text =  '• Όλα τα πλακίδια στον πίνακα θα προσπαθήσουν να μετακινηθούν προς την κατεύθυνση που καθορίσατε. \r\n' +
      '• Τα πλακίδια θα μετακινούνται πάντα στις κενές θέσεις όταν αυτές είναι διαθέσιμες. \r\n' +
      '• Όταν δύο πλακίδια ίσης αξίας συγκρούονται, συνδυάζονται σε ένα με διπλή αξία. \r\n' +
      '• Κάθε γύρο, ένα πλακίδιο αξίας (2) θα εμφανίζεται τυχαία σε ένα από τα κενά σημεία του πίνακα. Εάν δεν υπάρχουν κενά σημεία στον πίνακα, χάνετε το παιχνίδι. \r\n' +
      "• Άν χάσετε το παιχνίδι, μπορείτε να πατήσετετο κουμπί 'Επαναφορά' για να ξεκινήσετε ξανά. \r\n" +
      '• Το παιχνίδι αποθηκεύει αυτόματα την πρόοδό σας μέχρι να ανανεώσετε ή να αποχωρήσετε από τη σελίδα, ώστε να μπορείτε να συνεχίσετε την περιήγηση και να επιστρέψετε εάν θέλετε \r\n' +
      "• Μπορείτε να αποκρύψετε αυτές τις οδηγίες και να επιστρέψετε στο παιχνίδι σας πατώντας το κουμπί 'Απόκρυψη βοήθειας'" 
      document.getElementById('instr').innerText = text 
      document.getElementById('helpbutton').innerText = 'Απόκρυψη βοήθειας'
      document.getElementById("2048board").style.height = '0px';
      blockmove = 1;
    }

  }
}

function showstats(e,no,sound){
    lastno = no
  

    if (sound == 1) {
      var gunshot = document.getElementById('audio')
      gunshot.innerHTML = '<audio id = "audioo" autoplay><source src="shot.mp3"></audio>';
      document.getElementById('audioo').volume = 0.1;
    }

    document.getElementById('screeninfo').innerHTML = "";

    //ABOUT ME
    if (no == 0) {

        const div = document.createElement("div");
        div.setAttribute("id", "div1");
        document.getElementById('screeninfo').appendChild(div);
    
        var img = document.createElement('img');
        img.setAttribute("id", "myface");
        img.src = 'images/myFace.jpg';
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

    }

    //EDUCATION

    if (no == 1) {

      const div = document.createElement("div");
      div.setAttribute("id", "div1");
      document.getElementById('screeninfo').appendChild(div);

      let textarreng = ["• Graduated from the Department of Electrical Engineering of the University of Patras (Greece) in April of 2022 ","• My graduation thesis was called 'Hardware architectures for convolutional LDPC codes' and it involved designing an integrated circuit that uses a specific error correction algorithm. The thesis is published in Greek but you can read its abstract (in English) by clicking the link below: "]
      let textarrgre = ["• Αποφοίτησα απο το τμήμα Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών της Πάτρας τον Απρίλιο του 2022.","• Η διπλωματική εργασία μου ονομάζεται 'Αρχιτεκτονικές υλικού για συνελικτικούς LDPC κώδικες' και αφορά το σχεδιασμό ενός ολοκληρωμένου κυκλώματος το οποίο υλοποιεί ένα συγκεκριμένο αλγόριθμο διόρθωσης λαθών. Μπορείτε να δείτε την περίληψη (καθώς και όλο το αρχείο) στο από κάτω link:"]
      let linkarreng = ['Ptyxia/ECE_Upatras.pdf#zoom=35%','https://nemertes.library.upatras.gr/jspui/bitstream/10889/16021/3/Nemertes_Gkotsis%28ele%29.pdf.pdf#page=9']
      let linkarrgre = ['Ptyxia/ECE_Upatras.pdf#zoom=35%','https://nemertes.library.upatras.gr/jspui/bitstream/10889/16021/3/Nemertes_Gkotsis%28ele%29.pdf.pdf#page=8']

      if (lang == 'English') {
          textarr = textarreng;
          linkarr = linkarreng;
          linktrans = 'Source'
      }   
      if (lang == 'Greek') {
          textarr = textarrgre;
          linkarr = linkarrgre;
          linktrans = 'Πηγή'
      }
      for (let i=0; i<textarr.length; i++) {

          text = document.createElement('p')
          text.setAttribute("id", "text" + i);
          text.innerText = ''
          text.innerText +=  textarr[i]
          document.getElementById('div1').appendChild(text);

          link = document.createElement('a');
          link.setAttribute("id","link"+i)
          link.innerText = linktrans
          link.href = linkarr[i];
          document.getElementById('div1').appendChild(link);

          document.getElementById('text' + i).style.fontSize = '2vh';
          document.getElementById('text' + i).style.fontWeight = 'bold';
      }

      
      

    }

    //Hardware Skills
    if (no == 2 || no == 3 || no == 4) {
      if (no == 2) {
        iconarr = ['vhdl.png','vivado.png','Microwind.png']
        langarr = ['VHDL','Xilinx Vivado','Microwind']
        skillarr = [3,1,1]
      }
      if (no == 3){
        iconarr = ['html.png','css.png','javascript.png']
        langarr = ['HTML','CSS','Javascript']
        skillarr = [2,2,3]
      
      }
      if (no == 4){
        iconarr = ['Python.png','Excel.png','Mtlb.webp','MySQL.png']
        langarr = ['Python','Excel','Matlab','My SQL']
        skillarr = [3,2,3,1]
      }

      var div = document.createElement("div");
      div.setAttribute("id", "div1");
      document.getElementById('screeninfo').appendChild(div);

      for (let i=0; i<iconarr.length; i++) {

        var img = document.createElement('img');
        img.setAttribute("id","img" + i)
        img.src = 'images/'+iconarr[i];
        document.getElementById("div1").appendChild(img);
        document.getElementById("img" + i).style.width = '7vh';
        document.getElementById("img" + i).style.height = '7.1vh';
        document.getElementById('img' +i).style.display = 'flex'
        document.getElementById('img' +i).style.justifyContent = 'center'
        document.getElementById('img' +i).style.alignItems = 'center'

        text = document.createElement('p')
        text.setAttribute("id", "text"+i);
        text.innerText = langarr[i];
        document.getElementById("div1").appendChild(text);
        document.getElementById("text"+i).style.fontSize = '2.5vh';
        document.getElementById("text"+i).style.fontWeight = 'bold';


        var img2 = document.createElement('img');
        img2.setAttribute("id","img2" + i)
        if (color == 'dark') {
          img2.src = 'images/stars'+skillarr[i]+'.png';
        }
        if (color == 'light') {
          img2.src = 'images/stars'+skillarr[i]+'dark.png';
        }
        img2.height = (window.innerHeight*0.05).toString();
        document.getElementById("div1").appendChild(img2);
        document.getElementById("img2" + i).style.height = '7.1vh';
        document.getElementById('img2'+i).style.display = 'flex'
        document.getElementById('img2'+i).style.justifyContent = 'center'
        document.getElementById('img2'+i).style.alignItems = 'center'

      }

      document.getElementById("div1").style.display = "grid"
      document.getElementById("div1").style.gridTemplateColumns = "20% 30% 50%"
      document.getElementById('div1').style.columnGap = '0'
      document.getElementById('div1').style.justifyItems = 'center';

    }


    if (no == 5) {
      var div = document.createElement("div");
      div.setAttribute("id", "div1");
      document.getElementById('screeninfo').appendChild(div);

      iconarr = ['Greece.png','England.png','Germany.png']
      certarr = ['none','Ptyxia/C2_English.pdf#zoom=33%','Ptyxia/B2_German.pdf#zoom=33%']
      if (lang == 'English') {
        langarr = ['Greek','English','German']
        levelarr = ['Fluent','C2','B2']
        certwordarr = ['Mother Tongue','certifcation','certification']
      }
      if (lang == 'Greek'){
        langarr = ['Ελληνικά','Αγγλικά','Γερμανικά']
        levelarr = ['Άπταιστα','C2','B2']
        certwordarr = ['Μητρική Γλώσσα','Πιστοποίηση','Πιστοποίηση']
      }
      

      for (let i=0; i<langarr.length; i++) {

        var img = document.createElement('img');
        img.src = 'images/'+iconarr[i];
        img.width = (window.innerWidth*0.05).toString();
        img.height = (window.innerHeight*0.07).toString();
        document.getElementById("div1").appendChild(img);

        text = document.createElement('p')
        text.setAttribute("id", "text1"+i);
        text.innerText = langarr[i];
        document.getElementById("div1").appendChild(text);
        document.getElementById("text1"+i).style.fontSize = '2.5vh';
        document.getElementById("text1"+i).style.fontWeight = 'bold';

        text2 = document.createElement('p')
        text2.setAttribute("id", "text2"+i);
        text2.innerText = levelarr[i];
        document.getElementById("div1").appendChild(text2);
        document.getElementById("text2"+i).style.fontSize = '2.5vh';
        document.getElementById("text2"+i).style.fontWeight = 'bold';

        if (i !=0 ) {
          link = document.createElement('a');
          link.innerText = certwordarr[i];
          link.setAttribute("id","link"+i)
          link.href = certarr[i];
          document.getElementById('div1').appendChild(link);
          document.getElementById("link"+i).style.textAlign =  'center';
          document.getElementById("link"+i).style.display = 'inline-block';
          document.getElementById("link"+i).style.padding = Math.floor(0.023*window.innerHeight).toString() + "px 0px";
          document.getElementById("link"+i).style.fontSize = '2.5vh'
        }
        else {
          text3 = document.createElement('p')
          text3.setAttribute("id", "text3"+i);
          text3.innerText = certwordarr[i];
          document.getElementById("div1").appendChild(text3);
          document.getElementById("text3"+i).style.maxHeight = 0.022*window.innerHeight.toString() + 'px';
          document.getElementById("text3"+i).style.fontSize = '2.5vh';
          document.getElementById("text3"+i).style.fontWeight = 'bold';
        }

      }

      document.getElementById("div1").style.display = "grid"
      document.getElementById("div1").style.gridTemplateColumns = "25% 25% 20% 30%"
      document.getElementById('div1').style.columnGap = '0';
      document.getElementById('div1').style.rowGap = 0.05*window.innerHeight.toString() + 'px';
      document.getElementById('div1').style.justifyItems = 'center';


    }

    if (no == 9) {


      var div = document.createElement("div");
      div.setAttribute("id", "div1");
      document.getElementById('screeninfo').appendChild(div);

      text = document.createElement('text')
      text.setAttribute("id", "text");
      if (lang == 'English') {
        text.innerText = 'Send me a message! It will be delivered to my email\r\n' 
      }
      if (lang == 'Greek') {
        text.innerText = 'Στείλτε μου ένα μήνυμα! Θα μεταφερθεί στο λογαριασμό email μου\r\n'
      }
      document.getElementById('div1').appendChild(text);

      form = document.createElement('form')
      form.setAttribute("id","form")
      form.action = "https://formsubmit.co/ece8306@upnet.gr"
      form.method = "POST"
      document.getElementById('div1').appendChild(form);

      text = document.createElement('text')
      text.innerText = '\r\n'
      document.getElementById('form').appendChild(text);

      label1 = document.createElement('label')
      label1.setAttribute('id', 'label1');
      document.getElementById('form').appendChild(label1);
      if (lang == 'English') {
        document.getElementById('label1').innerHTML = 'Enter your name here:'
      }
      if (lang == 'Greek') {
        document.getElementById('label1').innerHTML = 'Εισάγετε το όνομα σας εδώ:'
      }

      
      input1 = document.createElement('input')
      input1.setAttribute('id', 'input1');
      input1.type = "text"
      input1.name = "Name"
      input1.setAttribute('required', '');
      document.getElementById('form').appendChild(input1);

      text = document.createElement('text')
      text.innerText = '\r\n'
      document.getElementById('form').appendChild(text);

      label2 = document.createElement('label')
      label2.setAttribute('id', 'label2');
      document.getElementById('form').appendChild(label2);
      if (lang == 'English') {
        document.getElementById('label2').innerHTML = 'Enter your email adress here, so we can get back to you: (optional)   '
      }
      if (lang == 'Greek') {
        document.getElementById('label2').innerHTML = 'Εισάγετε τo email σας εδώ, για να σας απαντήσουμε: (προεραιτικό)'
      }

      input2 = document.createElement('input')
      input2.setAttribute('id', 'input2');
      input2.type = "text"
      input2.name = "Email"
      input2.setAttribute('required', '');
      document.getElementById('form').appendChild(input2);

      text = document.createElement('text')
      text.innerText = '\r\n'
      document.getElementById('form').appendChild(text);

      label3 = document.createElement('label')
      label3.setAttribute('id', 'label3');
      document.getElementById('form').appendChild(label3);
      if (lang == 'English') {
        document.getElementById('label3').innerHTML = 'Type your message in the form below:'
      }
      if (lang == 'Greek') {
        document.getElementById('label3').innerHTML = 'Γράψτε το μήνυμα σας παρακάτω:'
      }

      input3 = document.createElement('textarea')
      input3.type = "text"
      input3.name = "Message"
      input3.setAttribute('id', 'input3');
      input3.setAttribute('required', '');
      document.getElementById('form').appendChild(input3);

      text = document.createElement('text')
      text.innerText = '\r\n'
      document.getElementById('form').appendChild(text);

      button = document.createElement('button')
      button.type="submit"
      if (lang == 'English') {
        button.innerHTML = 'Send'
      }
      if (lang == 'Greek') {
        button.innerHTML = 'Αποστολή'
      }
      document.getElementById('form').appendChild(button);

      document.getElementById("form").style.display = "grid";
      document.getElementById("form").style.height = Math.floor(0.39*window.innerHeight).toString() + 'px';
      document.getElementById("form").style.width = '100%';
      document.getElementById("form").style.gridTemplateRows = "6% 6% 6% 6% 6% 6% 6% 6% 40% 6% 6%"
      document.getElementById("form").style.rowGap = '0px';
      document.getElementById("form").style.float = 'left';

      document.getElementById('input1').style.fontSize = '1.8vh'
      document.getElementById('input2').style.fontSize = '1.8vh'
      document.getElementById('text').style.fontSize = '1.8vh'
      document.getElementById('label1').style.fontSize = '1.8vh'
      document.getElementById('label2').style.fontSize = '1.8vh'
      document.getElementById('label3').style.fontSize = '1.8vh'
    }
    
    if (no == 7) {

      var div = document.createElement("div");
      div.setAttribute("id", "div1");
      document.getElementById('screeninfo').appendChild(div);

      var text = document.createElement('text')
      text.setAttribute("id", "instr");
      if (lang == "English") {
        text.innerText = 'This game is called 2048. You move the tiles using your arrow keys (up,down,left and right). \r\n' +
        "You can press 'Help' to learn how the game works or 'Reset' to start over."
      }
      if (lang == 'Greek') {
        text.innerText = 'Αυτό το παιχνίδι ονομάζεται 2048. Μπορείτε να χρησιμοποιήσετε τα βελάκια (πάνω, κάτω, δεξιά, αριστερά). \r\n' +
        "Μπορείτε να πατήσετε το κουμπί 'Βοήθεια' για να δείτε πως παίζεται το παιχνίδι ή 'Επαναφορά' για να αρχίσετε από την αρχή."
      }
      document.getElementById('div1').appendChild(text);
      document.getElementById('instr').style.fontSize = '2.5vh';
      document.getElementById('instr').style.fontWeight = 'bold';

      
      var divbot = document.createElement("div");
      divbot.setAttribute("id", "divbot");
      document.getElementById('div1').appendChild(divbot);

      var button1 = document.createElement("button")
      button1.setAttribute("id","helpbutton")
      if (lang == "English") {
        button1.innerHTML = 'Help'
      }
      if (lang == "Greek") {
        button1.innerHTML = 'Βοήθεια'
      }
      document.getElementById('divbot').appendChild(button1);
      document.getElementById("helpbutton").onclick = function() {showhelp2048()}


      var board = document.createElement("div");
      board.setAttribute("id", "2048board");
      document.getElementById('divbot').appendChild(board);

      var button2 = document.createElement("button")
      button2.setAttribute("id","resetbutton")

      if (lang == "English") {
        button2.innerHTML = 'Reset'
      }
      if (lang == "Greek") {
        button2.innerHTML = 'Επανέναρξη'
      }
      document.getElementById('divbot').appendChild(button2);
      document.getElementById("resetbutton").onclick = function() {reset2048()}

      document.getElementById("helpbutton").style.position = 'absolute';
      document.getElementById("helpbutton").style.bottom = '5%';
      document.getElementById("helpbutton").style.left = '2%';
      document.getElementById("helpbutton").style.width = '15%';
      document.getElementById("helpbutton").style.height = '15%';
      document.getElementById("helpbutton").style.fontSize = '2vh';

      document.getElementById("resetbutton").style.position = 'absolute';
      document.getElementById("resetbutton").style.bottom = '5%';
      document.getElementById("resetbutton").style.right = '2%';
      document.getElementById("resetbutton").style.width = '15%';
      document.getElementById("resetbutton").style.height = '15%';
      document.getElementById("resetbutton").style.fontSize = '2vh';


      for (i=0; i<16; i++) {
        text = document.createElement('text')
        text.setAttribute("id", "place"+i);
        text.innerText = '';
        document.getElementById('2048board').appendChild(text);
        document.getElementById('place'+i).style.border = '1px solid'
        document.getElementById('place'+i).style.fontSize = '3.5vh'
        document.getElementById('place'+i).style.backgroundColor = numbarray[0][1]
        document.getElementById('place'+i).style.color = numbarray[0][0]
        document.getElementById('place'+i).style.display = 'flex'
        document.getElementById('place'+i).style.justifyContent = 'center'
        document.getElementById('place'+i).style.alignItems = 'center'
      }


      
      document.getElementById("2048board").style.position = 'absolute';
      document.getElementById("2048board").style.bottom = Math.floor(0.01*window.innerHeight).toString() + 'px';;
      document.getElementById("2048board").style.border = "1px solid"
      document.getElementById("2048board").style.borderLeft = "1px solid"
      document.getElementById("2048board").style.left = Math.floor(0.33*window.innerHeight).toString() + 'px';
      document.getElementById("2048board").style.display = "grid";
      document.getElementById("2048board").style.height = Math.floor(0.3*window.innerHeight).toString() + 'px';
      document.getElementById("2048board").style.width = Math.floor(0.3*window.innerHeight).toString() + 'px';
      document.getElementById("2048board").style.gridTemplateColumns = "25% 25% 25% 25%";
      document.getElementById("2048board").style.gridTemplateRows = "25% 25% 25% 25%";
      document.getElementById("2048board").style.rowGap = '0px';
      document.getElementById("2048board").style.columnGap = '0px';
      document.getElementById("2048board").style.textAlign = 'center';

      

      document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
            case 37:
                movedir('left');
                break
            case 38:
                movedir('up');
                break
            case 39:
                movedir('right');
                break
            case 40:
                movedir('down');
                break
        }
      });

      if (autoreset == 1) {
        reset2048()
        autoreset = 0;
      }

      for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
          if (array2048[i][j] != 0) {
            document.getElementById('place'+(i*4+j)).style.backgroundColor = numbarray[Math.log2(array2048[i][j])][1]
            document.getElementById('place'+(i*4+j)).style.color = numbarray[Math.log2(array2048[i][j])][0]
          }
          else {
            document.getElementById('place'+(i*4+j)).style.backgroundColor = numbarray[0][1]
            document.getElementById('place'+(i*4+j)).style.color = numbarray[0][0]
          }
        }
      }

      for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
          if ( array2048[i][j] == 0 ) {
            document.getElementById('place'+(i*4+j)).innerText = '';
          }
          else {
            document.getElementById('place'+(i*4+j)).innerText = array2048[i][j];
          }     
        }
      }

      function movedir(dir) {
        
        if (blockmove != 1){
          switch (dir) {
            case 'left':
              for (let i=0; i<4; i=i+1) {
                for (let j=1; j<4; j=j+1) {
                  for (let l=j; l>0; l=l-1) {
                    if (array2048[i][l-1] == array2048[i][l]) {
                      array2048[i][l-1] = 2 * array2048[i][l]
                      array2048[i][l] = 0;
                    }
                    else if (array2048[i][l-1] == 0) {
                      array2048[i][l-1] = array2048[i][l]
                      array2048[i][l] = 0;
                    }
                  } 
                }
              }
              break
            case 'right':
              for (let i=0; i<4; i=i+1) {
                for (let j=2; j>-1; j=j-1) {
                  for (let l=0; l<j+1; l=l+1) {
                    if (array2048[i][l+1] == array2048[i][l]) {
                      array2048[i][l+1] = 2 * array2048[i][l]
                      array2048[i][l] = 0;
                    }
                    else if (array2048[i][l+1] == 0) {
                      array2048[i][l+1] = array2048[i][l]
                      array2048[i][l] = 0;
                    }
                  } 
                }
              }
              break
            case 'up':
              for (let j=0; j<4; j=j+1) {
                for (let i=1; i<4; i=i+1) {
                  for (let l=i; l>0; l=l-1) {
                    if (array2048[l-1][j] == array2048[l][j]) {
                      array2048[l-1][j] = 2 * array2048[l][j]
                      array2048[l][j] = 0;
                    }
                    else if (array2048[l-1][j] == 0) {
                      array2048[l-1][j] = array2048[l][j]
                      array2048[l][j] = 0;
                    }
                  } 
                }
              }
              break
            case 'down':
              for (let j=0; j<4; j=j+1) {
                for (let i=2; i>-1; i=i-1) {
                  for (let l=0; l<i+1; l=l+1) {
                    if (array2048[l+1][j] == array2048[l][j]) {
                      array2048[l+1][j] = 2 * array2048[l][j]
                      array2048[l][j] = 0;
                    }
                    else if (array2048[l+1][j] == 0) {
                      array2048[l+1][j] = array2048[l][j]
                      array2048[l][j] = 0;
                    }
                  } 
                }
              }
              break
          } 
          
          possarr = []
          for (let i=0; i<4; i++) {
            for (let j=0; j<4; j++) {
              if (array2048[i][j] == 0) {
                possarr.push([i,j])
              }
            }
          }
          
          if (possarr.length != 0) {
            randplace = possarr[Math.floor(Math.random()*possarr.length)]
            array2048[randplace[0]][randplace[1]] = 2;  
          }
          else {
            alert('You lost')
          }


          for (let i=0; i<4; i++) {
            for (let j=0; j<4; j++) {
              if ( array2048[i][j] == 0 ) {
                document.getElementById('place'+(i*4+j)).innerText = '';
              }
              else {
                document.getElementById('place'+(i*4+j)).innerText = array2048[i][j];
              }
              
              
              if (array2048[i][j] != 0) {
                document.getElementById('place'+(i*4+j)).style.backgroundColor = numbarray[Math.log2(array2048[i][j])][1]
                document.getElementById('place'+(i*4+j)).style.color = numbarray[Math.log2(array2048[i][j])][0]
              }
              else {
                document.getElementById('place'+(i*4+j)).style.backgroundColor = numbarray[0][1]
                document.getElementById('place'+(i*4+j)).style.color = numbarray[0][0]
              }
            }
          }
        }
      }

    } 

    
    if (color == 'light') {
      hex = '#119BFA'
      var links = document.getElementsByTagName('a')
      for(var i=0;i<links.length;i++) {
          console.log(links[i])
          links[i].style.color = hex; 
          console.log(links[i]) 
      }  
    }

    if (color == 'dark') {
      hex = '#010B9C'
      var links = document.getElementsByTagName('a')
      for(var i=0;i<links.length;i++) {
          console.log(links[i])
          links[i].style.color = hex; 
          console.log(links[i]) 
      }  
    }
}
