function showstats(e,no,sound){
    lastno = no
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
    if (enable == 1 || e == 'yes') {

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
        img.src = 'images/myFace.jpg';
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
          '• Μου αρέσει να εκτελώ πρότζεκτς σαν και αυτό ως junior web developer. \r\n' +
          '• Οι γνώσεις μου επεκτείνονται και στο σχεδιασμό ολοκληρωμένων κυκλωμάτων, το οποίο αποτελεί και το αντικείμενο της διπλωματικής εργασίας μου. \r\n' +
          '• Θα ήθελα να επεκτείνω τις γνώσεις μου επάνω στον τομέα της τεχνολογίας υπολογιστών (IT) και να μετατρέψω το ενδιαφέρον μου σε εργασία'
        }
        document.getElementById('screeninfo').appendChild(text);

        document.getElementById('text1').style.fontSize = 'large';
        document.getElementById('text1').style.fontWeight = 'bold';

        document.getElementById('text2').style.fontSize = 'large';

      }

      //EDUCATION

      if (no == 1) {

        const div = document.createElement("div");
        div.setAttribute("id", "div1");
        document.getElementById('screeninfo').appendChild(div);

        let textarreng = ["• Graduated from the Department of Electrical Engineering of the University of Patras (Greece) in April of 2022 ","• My graduation thesis was 'Hardware architectures for convolutional LDPC codes' and it involved designing an integrated circuit that uses a specific error correction algorithm. The thesis is in Greek but you can read the abstract of it in English from the link below: "]
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
            text.setAttribute("id", "text1");
            text.innerText = ''
            text.innerText +=  textarr[i]
            document.getElementById('div1').appendChild(text);

            link = document.createElement('a');
            link.innerText = linktrans
            link.href = linkarr[i];
            document.getElementById('div1').appendChild(link);
        }
        

      }

      //Empl. History
      if (no == 2) {



      }

      //Hardware Skills
      if (no == 3 || no == 4 || no == 5) {
        if (no == 3) {
          iconarr = ['VHDL.png','vivado.png','Microwind.png']
          langarr = ['VHDL','Xilinx Vivado','Microwind']
          skillarr = [3,1,1]
        }
        if (no == 4){
          iconarr = ['html.png','css.png','javascript.png']
          langarr = ['HTML','CSS','Javascript']
          skillarr = [2,2,3]
        
        }
        if (no == 5){
          iconarr = ['Python.png','Excel.png','Mtlb.jpg','MySQL.png']
          langarr = ['Python','Excel','Matlab','My SQL']
          skillarr = [3,2,3,1]
        }

        var div = document.createElement("div");
        div.setAttribute("id", "div1");
        document.getElementById('screeninfo').appendChild(div);

        for (let i=0; i<iconarr.length; i++) {

          var img = document.createElement('img');
          img.src = 'images/'+iconarr[i];
          img.width = (window.innerWidth*0.03).toString();
          img.height = (window.innerHeight*0.05).toString();
          document.getElementById("div1").appendChild(img);

          text = document.createElement('p')
          text.setAttribute("id", "text"+i);
          text.innerText = langarr[i];
          document.getElementById("div1").appendChild(text);
          document.getElementById("text"+i).style.fontSize = 'large';
          document.getElementById("text"+i).style.fontWeight = 'bold';
  

          var img2 = document.createElement('img');
          img2.src = 'images/stars'+skillarr[i]+'.png';
          img2.height = (window.innerHeight*0.05).toString();
          document.getElementById("div1").appendChild(img2);

        }

        document.getElementById("div1").style.display = "grid"
        document.getElementById("div1").style.gridTemplateColumns = "20% 30% 50%"
        document.getElementById('div1').style.columnGap = '0'
        document.getElementById('div1').style.justifyItems = 'center';

      }


      if (no == 9) {
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
          img.width = (window.innerWidth*0.04).toString();
          img.height = (window.innerHeight*0.06).toString();
          document.getElementById("div1").appendChild(img);

          text = document.createElement('p')
          text.setAttribute("id", "text1"+i);
          text.innerText = langarr[i];
          document.getElementById("div1").appendChild(text);
          document.getElementById("text1"+i).style.fontSize = 'large';
          document.getElementById("text1"+i).style.fontWeight = 'bold';

          text2 = document.createElement('p')
          text2.setAttribute("id", "text2"+i);
          text2.innerText = levelarr[i];
          document.getElementById("div1").appendChild(text2);
          document.getElementById("text2"+i).style.fontSize = 'large';
          document.getElementById("text2"+i).style.fontWeight = 'bold';
          console.log(window.innerHeight)
          
          if (i !=0 ) {
            link = document.createElement('a');
            link.innerText = certwordarr[i];
            link.setAttribute("id","link"+i)
            link.href = certarr[i];
            document.getElementById('div1').appendChild(link);
            document.getElementById("link"+i).style.textAlign =  'center';
            document.getElementById("link"+i).style.display = 'inline-block';
            console.log(Math.floor(0.026*window.innerHeight))
            document.getElementById("link"+i).style.padding = Math.floor(0.017*window.innerHeight).toString() + "px 0px";
            console.log(document.getElementById("link"+i))
          }
          else {
            text3 = document.createElement('p')
            text3.setAttribute("id", "text3"+i);
            text3.innerText = certwordarr[i];
            document.getElementById("div1").appendChild(text3);
            document.getElementById("text3"+i).style.maxHeight = 0.022*window.innerHeight.toString() + 'px';
            console.log(document.getElementById("text3"+i))
          }

        }

        document.getElementById("div1").style.display = "grid"
        document.getElementById("div1").style.gridTemplateColumns = "25% 25% 20% 30%"
        document.getElementById('div1').style.columnGap = '0';
        document.getElementById('div1').style.rowGap = toString(0.05*window.innerHeight);
        document.getElementById('div1').style.justifyItems = 'center';


      }

      if (no == 11) {

        var div = document.createElement("div");
        div.setAttribute("id", "div1");
        document.getElementById('screeninfo').appendChild(div);

        form = document.createElement('form')
        form.setAttribute("id","form")
        form.action = "https://formsubmit.co/ece8306@upnet.gr"
        form.method = "POST"
        document.getElementById('div1').appendChild(form);
        
        input1 = document.createElement('input')
        input1.type = "text"
        input1.name = "name"
        input1.setAttribute('required', '');
        document.getElementById('form').appendChild(input1);

        input2 = document.createElement('input')
        input2.type = "text"
        input2.name = "email"
        input2.setAttribute('required', '');
        document.getElementById('form').appendChild(input2);

        input3 = document.createElement('input')
        input3.type = "text"
        input3.name = "emailtext"
        input3.setAttribute('required', '');
        document.getElementById('form').appendChild(input3);

        button = document.createElement('button')
        button.type="submit"
        button.innerHTML = 'Send'
        document.getElementById('form').appendChild(button);
  
      }
     


      //Other Projects
      //References
      //Play a Game!
      //Languages
      //My Hobbies
      //Contact

  }
}