var array2048 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
var autoreset = 1;
var blockmove = 0;
var lastno = -1;

loadstart()

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
      '• The game will automatically save your progress until you refresh or leave the page, so you can continue browsing and come back if you want. \r\n' +
      "• You can  hide those instructions and return to your game by clicking 'Hide Help'."  
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
          '• I enjoy creating interactive websites with advanced UI and UX, as evidenced by this particular one which I created from scratch. \r\n' +
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

      if (1.5*window.innerWidth < window.innerHeight) {
        document.getElementById('text1').style.fontSize = '3vmin';
        document.getElementById('text2').style.fontSize = '2.2vmin';
        document.getElementById('text2').style.fontWeight = 'bold';
        document.getElementById('myface').style.width = '24vw';
        document.getElementById('myface').style.height = '24vmin';
        document.getElementById('logoo').style.width = '200%';
        document.getElementById('myface').style.height = '24vmin';
      }

    }

    //EDUCATION

    if (no == 1) {

      const div = document.createElement("div");
      div.setAttribute("id", "div1");
      document.getElementById('screeninfo').appendChild(div);

      let textarreng = ["• Graduated from the Department of Electrical Engineering of the University of Patras (Greece) in April of 2022 ","• My graduation thesis was called 'Hardware architectures for convolutional LDPC codes' and it involved designing an integrated circuit that uses a specific error correction algorithm. The thesis is published in Greek but you can read its abstract (in English) by clicking the link below: ","• Internship at Greek Army as general IT support (2022-2023). \n This includes computer software and hardware service, as well as army network upkeep and management. \n Skills learned include customer service, working in team environment, experience with IP networking, software repair, repair of PC and other office appliances"]
      let textarrgre = ["• Αποφοίτησα απο το τμήμα Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών της Πάτρας τον Απρίλιο του 2022.","• Η διπλωματική εργασία μου ονομάζεται 'Αρχιτεκτονικές υλικού για συνελικτικούς LDPC κώδικες' και αφορά το σχεδιασμό ενός ολοκληρωμένου κυκλώματος το οποίο υλοποιεί ένα συγκεκριμένο αλγόριθμο διόρθωσης λαθών. Μπορείτε να δείτε την περίληψη (καθώς και όλο το αρχείο) στο από κάτω link:","• Πρακτική άσκηση στο γραφείο έρευνας και πληροφορικής του Ελληνικού Στρατού (2022-2023).\n Αυτό το πόστο περιλαμβάνει επισκευή software και hardware υπολογιστών, καθώς και συντήρηση και διαχείριση του στρατιωτικού δικτύου.\n Οι δεξιότητες που αποκτήθηκαν περιλαμβάνουν εξυπηρέτηση πελατών, εργασία σε ομαδικό περιβάλλον, εμπειρία με δικτύωση IP , επισκευή λογισμικού, επισκευή Η/Υ και άλλων συσκευών γραφείου"]
      let linkarreng = ['Ptyxia/ECE_Upatras.pdf#zoom=35%','https://nemertes.library.upatras.gr/server/api/core/bitstreams/3605b667-1619-4dc3-b950-94004c3bf87b/content#page=9']
      let linkarrgre = ['Ptyxia/ECE_Upatras.pdf#zoom=35%','https://nemertes.library.upatras.gr/server/api/core/bitstreams/3605b667-1619-4dc3-b950-94004c3bf87b/content#page=8']

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
          link.target = "_blank"
          document.getElementById('div1').appendChild(link);

          document.getElementById('text' + i).style.fontSize = '2vh';
          document.getElementById('text' + i).style.fontWeight = 'bold';
          document.getElementById('text' + i).style.paddingLeft = '2%';
          document.getElementById('text' + i).style.paddingRight = '2%';
          document.getElementById('text' + i).style.textAlign = 'justify';
          document.getElementById('link' + i).style.paddingLeft = '2%';
          document.getElementById('link' + i).style.paddingRight = '2%';
          document.getElementById('link' + i).style.fontSize = '2vh';
          document.getElementById('link' + i).style.fontWeight = 'bold';
      }

      

    }

    //Hardware Skills
    if (no == 2 || no == 3 || no == 4) {
      if (no == 2) {
        iconarr = ['vhdl.png','vivado.png','Microwind.png']
        langarr = ['VHDL','Xilinx Vivado','Microwind']
        skillarr = [4,3,2]
      }
      if (no == 3){
        iconarr = ['html.png','css.png','javascript.png','microsoftsql.png']
        langarr = ['HTML','CSS','Javascript','Microsoft SQL']
        skillarr = [4,3,4,3]
      
      }
      if (no == 4){
        iconarr = ['Python.png','Excel.png','Mtlb.webp']
        langarr = ['Python','Excel','Matlab']
        skillarr = [4,4,4]
      }

      var div = document.createElement("div");
      div.setAttribute("id", "div1");
      document.getElementById('screeninfo').appendChild(div);

      for (let i=0; i<iconarr.length; i++) {

        var img = document.createElement('img');
        img.setAttribute("id","img" + i)
        img.src = 'images/'+iconarr[i];
        document.getElementById("div1").appendChild(img);
        document.getElementById("img" + i).style.width = '5.5vh';
        document.getElementById("img" + i).style.height = '5.5vh';
        document.getElementById('img' +i).style.display = 'flex'
        document.getElementById('img' +i).style.justifyContent = 'center'
        document.getElementById('img' +i).style.alignItems = 'center'

        text = document.createElement('p')
        text.setAttribute("id", "text"+i);
        text.innerText = langarr[i];
        document.getElementById("div1").appendChild(text);
        document.getElementById("text"+i).style.fontSize = '2.1vh';
        document.getElementById("text"+i).style.fontWeight = 'bold';


        var img2 = document.createElement('img');
        img2.setAttribute("id","img2" + i)
        if (color == 'dark') {
          img2.src = 'images/stars'+skillarr[i]+'dark.png';
        }
        if (color == 'light') {
          img2.src = 'images/stars'+skillarr[i]+'.png';
        }
        img2.height = (window.innerHeight*0.05).toString();
        document.getElementById("div1").appendChild(img2);
        document.getElementById("img2" + i).style.height = '5.5vh';
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
        certwordarr = ['Mother Tongue','certification','certification']
      }
      if (lang == 'Greek'){
        langarr = ['Ελληνικά','Αγγλικά','Γερμανικά']
        levelarr = ['Άπταιστα','C2','B2']
        certwordarr = ['Μητρική Γλώσσα','Πιστοποίηση','Πιστοποίηση']
      }
      

      for (let i=0; i<langarr.length; i++) {

        var img = document.createElement('img');
        img.src = 'images/'+iconarr[i];
        if (1.5*window.innerWidth > window.innerHeight) {
          img.width = (window.innerWidth*0.05).toString();
          img.height = (window.innerHeight*0.07).toString();
        }
        else{
          img.width = (window.innerWidth*0.12).toString();
          img.height = (window.innerHeight*0.07).toString();
        }
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
          link.target = "_blank"
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
      form.action = "https://formsubmit.co/7dc6ef70a821b6f72a2204d45e43720d"
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
      if (1.5*window.innerWidth < window.innerHeight) {
        document.getElementById("2048board").style.left = '21%';
      }
      else {
        document.getElementById("2048board").style.left = Math.floor(0.33*window.innerHeight).toString() + 'px';
      }
      document.getElementById("2048board").style.bottom = Math.floor(0.01*window.innerHeight).toString() + 'px';;
      document.getElementById("2048board").style.border = "1px solid"
      document.getElementById("2048board").style.borderLeft = "1px solid"
      document.getElementById("2048board").style.display = "grid";
      document.getElementById("2048board").style.height = Math.floor(0.3*window.innerHeight).toString() + 'px';
      document.getElementById("2048board").style.width = Math.floor(0.3*window.innerHeight).toString() + 'px';
      document.getElementById("2048board").style.gridTemplateColumns = "25% 25% 25% 25%";
      document.getElementById("2048board").style.gridTemplateRows = "25% 25% 25% 25%";
      document.getElementById("2048board").style.rowGap = '0px';
      document.getElementById("2048board").style.columnGap = '0px';
      document.getElementById("2048board").style.textAlign = 'center';

      
                    

      if (1.5*window.innerWidth < window.innerHeight) {
        let touchstartX = 0;
        let touchstartY = 0;
        let touchendX = 0;
        let touchendY = 0;

        const gestureZone = document.getElementById('container');

        gestureZone.addEventListener('touchstart', function(event) {
            touchstartX = event.changedTouches[0].screenX;
            touchstartY = event.changedTouches[0].screenY;
        }, false);

        gestureZone.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            touchendY = event.changedTouches[0].screenY;
            handleGesture();
        }, false); 

        console.log(gestureZone)

        function handleGesture() {
            if (Math.abs(touchendX - touchstartX) > Math.abs(touchendY - touchstartY) ) {
              if (touchendX <= touchstartX) {
                movedir('left');
              }
              if (touchendX >= touchstartX) {
                movedir('right');
              }
            }
            else {
              if (touchendY <= touchstartY) {
                movedir('up');
              }
              
              if (touchendY >= touchstartY) {
                movedir('down');
              }
            }
        }
      }
      else {
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
      }

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

    if (no == 8) {
      const div = document.createElement("div");
      div.setAttribute("id", "hobbydiv");
      div.style.display = "grid";
      div.style.height = '100%';
      div.style.width = '100%';
      div.style.gridTemplateColumns = "33% 33% 33%"
      document.getElementById('screeninfo').appendChild(div);
      var hobbiesarr = ['Programming','Sports','Animation','Nature','Gaming','Music']
      var hobbiesarrgre = ['Προγραμματισμός','Σπορ','Κινούμενα Σχέδια','Φύση','Βιντεοπαιχνίδια','Μουσική']
      var hobbiesource = ['programming.jpg','sports.jpg','animation.jpg','nature.jpg','gaming.jpg','music.jpg']
      for (i=0; i<hobbiesarr.length; i++) {
        divv = document.createElement("div");
        divv.setAttribute("id", "hobbyd" + i);
        divv.style.display = 'grid'
        divv.style.justifyContent = 'center'
        divv.style.padding = '9%'
        var elem = document.createElement("img");
        elem.src = 'images/' + hobbiesource[i];
        elem.style.width = '20vh';
        elem.style.height = '20vh';
        elem.style.border = "1px solid #e4e5f1";
        elem.style.borderRadius = "4px";
        var texx = document.createElement("div");
        //texx.style
        texx.style.display = 'grid'
        texx.style.fontSize = '2.3vh'
        texx.style.justifyContent = 'center'
        texx.style.fontWeight = 'bold'
         if (color == 'light') {
            texx.style.color = '#2f2f2f'
         }
         else {
            texx.style.color = '#e4e5f1'
         }
        texx.style.textDecorationLine = 'underline'
        if (lang == 'English') {
          texx.innerText = hobbiesarr[i]
        }
        else {
          texx.innerText = hobbiesarrgre[i]
        }
        divv.appendChild(texx);
        divv.appendChild(elem);
        div.appendChild(divv);
      }
    }

    
    if (color == 'light') {
      hex ='#010B9C'
      var links = document.getElementsByTagName('a')
      for(var i=0;i<links.length;i++) {
          console.log(links[i])
          links[i].style.color = hex; 
          console.log(links[i]) 
      }  
    }

    if (color == 'dark') {
      hex =  '#119BFA'
      var links = document.getElementsByTagName('a')
      for(var i=0;i<links.length;i++) {
          console.log(links[i])
          links[i].style.color = hex; 
          console.log(links[i]) 
      }  
    }
}
