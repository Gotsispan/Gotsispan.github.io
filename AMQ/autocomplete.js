// Add your javascript here


var availablesingers = [
'3 Nen E Gumi Uta Tan - Bye Bye Yesterday', '3 Nen E Gumi Uta Tan - Seishun Satsubatsuron', '7!! - Orange', '99RadioService - COLORFUL', '99RadioService - STAR',
'99RadioService - YOUTHFUL', 'Abingdon Boys School - Howling', 'AIKI from bless4 - Kago no NaKa no Bokura wa', 'Aimer - Brave Shine', 'Aimer - Last Stardust',
'Aimer - Torches', 'AIRFLIP - Rise Again', 'Akatsuki no yona ed full (128 kbps) (1)', 'Akihisha Kondou - Tete', 'ALI - Lost in Paradise', 'ALI - Wild Side', 
'ALI Project - Haramitsu Renge', 'Ali project - Kyomu Densen', 'ALTIMA - Fight 4 Real', 'Amagami SS ED2 - Kitto Ashita wa... [SUBTHAI] (128 kbps)', 
'Amagami SS ED4 - Koi wa Mizuiro [SUBTHAI] (128 kbps)', 'Amamiya Sora - Skyreach', 'Amazarashi - Sayonaragokko', 'Amazarashi - Sora Ni Utaeba',
'Anna Tsuchiya - Lucy', 'Anna Tsuchiya - Rose', 'Anzen Chitai - Suki Sa (I Love You)', 'Asaka - Shiny Days', 'ASCA - Resister',
'Asian Kung-Fu Generation - A Lost Dog and Beats of the Rain', 'Asian Kung-Fu Generation - Dororo', 'Asian Kung-Fu Generation - ReRe', 
'Asuka Oogame - Os uchujin', 'Awakened Pillar Men Theme', 'Aya Endo - Mizuiro', 'Ayako Ikeda - Prism', 'Bakudan Johnny - Tada Hitori', 'Batta - Chase', 'BECK - Face',
'Beck - Moon on the Water', 'BECK - Slip Out', 'Beverly - Again', "Black Raison d'être - INSIDE IDENTITY (Chuunibyou demo Koi ga Shitai! ED) - Lyrics",
"Black Raison d'être - Van!shment Th!s World", 'Blend A - Bon Apetit', 'Blue Drops - Ring my bell', 'Blue Encount - Freedom', 'Blue Encount - Polaris', 
'Boa - Duvet', 'Bocchi and Friends - Hitoribocchi no monologue', 'BRADIO - Flyers', 'BUMP OF CHICKEN - Answer', 'Bump of Chicken - Fighter', 
'BUMP OF CHICKEN - Hello,world!', 'Burnout Syndromes - Fly High!!', 'BURNOUT SYNDROMES - Good Morning World!', 'Burnout Syndromes - Hikari Are', 
'BURNOUT SYNDROMES - Phoenix', 'Carole & Tuesday - Loneliest Girl', 'Centimilimental - Kizuato', 'Chelmico - Easy breezy', 'Chemistry - Period',
'Chiai Fujikawa - Kimi no Namae', 'Chiaki Ishikawa - Uninstall', 'CHiCO with Honey Works - Otome domo yo', 'Chorogonzu - Ishukan Communication', 
'ChouCho - Ashita no Kimi sae Ireba Ii', 'Clammbon -  Rough & Laugh', 'ClariS - Connect', 'ClariS - Hitorigoto', 'ClariS - Irony', 'ClariS - Reunion',
'Co Shu Nie - Asphyxia', 'Coda - Bloody Stream', 'Coda - Fighting Gold', 'Coda, TOMMY, Jin - Sono Chi no Kioku', 'Coldrain - Feed the fire', 
'Coldrain - Gone', 'Coldrain - Mayday', "Coldrain - We're not alone", 'Crystal Kay - Konna ni Chikaku de', 'Daisuke Hasegawa - Uragirimono no Requiem', 
'Daisuke Ono - Llama-san no Llama Mambo', 'Daoko - Big Fireworks', 'Dave Rodgers - Deja Vu', 'David Sylvian - For the Love of Life', 
'Dean Fujioka - History Maker', 'DOES - Yumemiru Sekai', 'Donna Burke - Glassy Sky', "Fujifabric - Rakuen", 'Eir Aoi - Ignite', 
'Eir Aoi - Innocence', 'Eir Aoi - Iris', 'Eir Aoi - Lapis Lazuri', 'Eir Aoi - MEMORIA -after days ver.- (128 kbps)', 'Eir Aoi - Memoria', 
'Eir Aoi - Ryuussei', 'Eir Aoi - Sirius', 'Eir Aoi - Tsubasa', 'ENOZ - God Knows', 'Eri Kitamura - Before the Moment', 'Ertegun - Take Me Now', 
'Etsuko Yakushimaru Metro Orchestra - Nornir', 'Etsuko Yakushimaru Metro Orchestra - Shounen yo Ware ni Kaere', 'Eufonius - Hiyoku no Hane',
'Eve - Ambivolent', 'Eve - Kaikai Kitan', 'Eve - Yamiyo', 'Fade - One Reason', 'Faylan - Blood Teller', 'Faylan - Dead end', 'Faylan - Sousei no Thanatos', 
'Fear, and Loathing in Las Vegas - Let Me Hear', 'Fear, and Loathing in Las Vegas - PVChase the Light!', 'Fear, and Loathing in Las Vegas - Virtue and Vice', 
'Fhana - Ai no supreme', 'Fhana - Aozora no rhapsody', 'FLOW - Colors', 'FLOW - Days', "FLOW - Steppin' out", 'FLOW, GRANRODEO - Howling', 'Fonsi M - Fukashigi no Carte',
'Franchouchou - Adabana Necromancy', 'Franz Ferdinard - Do you want to', 'Freddie Mercury - The Great Pretender', 'Frederic - Kanashii Ureshii', 'Fujifabric - Life',
'Fujifabric - Small World', 'Fune wo Amu Opening (full) (Shiokaze  - Taiiku Okazaki)', 'Galileo Galilei - Aoi Shiori', 'Galileo Galilei - Circle Game', 
'Galileo Galilei - Climber', 'Galneryus - A Far-off Distance', 'Galneryus - Hunting for your dream', 'Goosehouse - Hikaru Nara', 'GRANRODEO - Setsuna no Ai', 
'Halca - Houkago no Liberty', 'Hanae Natsuki - Seishun wa Zankoku Janai', 'Hanazawa Kana - Renai Circulation', 'Haruka Tomatsu - Resolution', 'Hayami Saori - Hatsukoi', 
'Hayami Saori - Heart no Kakuritsu', 'Hayami Saori - Odoriko', 'Hayami Saori - Soba ni irareru dake de', "Headhunt - OKAMOTO'S", 'Hello Sleepwalkers - Goya wa Machiawase', 
'Hiroaki Tominaga - Sono Chi no Sadame', 'Hiroko Suzuki - Aino Hikarito Kage', 'Hiroko Suzuki - Bara wa Utsukushiku Chiru', 'Hiroyuki Sawano - ətˈæk 0N tάɪtn', 
'Home Made Kazoku - Shounen Heart', 'Home Made Kazoku - Thank You!!', 'Hyadain - 23_40', 'Hyadain - Hyadain no Joujou Yuujou', 'Hyadain - Hyadain no Kakakata Kataomoi', 
'Ikimonogakari - Netsujou no spectrum', 'immi - Sign of Love', 'Inori Minase, Yurika Kubo - Ugoku, Ugoku', 'iRis - FANTASTIC ILLUSION', 'Jam Project - Hero',
'Jason Paige - Pokemon theme song', 'Jean Jacques Burnel - We Were Lovers', 'Jin Hashimoto - Stand Proud', "JoJo's Bizarre AdventureGolden Wind OST Giorno's Theme Il vento d'oro (Main Theme)", 
'JP - Boku ni Invitation', 'JUNNA - Here', 'Kairi Yagi - Sing My Pleasure', 'Kalafina - Believe', 'Kalafina - Blaze', 'Kalafina - Kimi no gin no niwa', 'Kalafina - Magia',
'Kalafina - Märchen', 'Kalafina - One Light', 'Kalafina - To the Beginning', 'Kami-sama, I have noticed - Namae no Nai Ao', 'Kana-Boon - Silhouette', 'Kana-Boon - Star Marker',
'Kanako Ito - Anata no Eranda Kono Toki wo', 'Kanako Ito - Fatima', 'Kanako Ito - Hacking To The Gate', 'Karen Aoki & Daisuke Hasegawa - Great Days', 
'Katsuyuki Konishi - ZOO tto ne!', 'Q-MHz feat. Mitsuhiro Hidaka a.k.a SKY-H - Kaze Tsuyoku, Kimi Atsuku', 'Kenichi Asai - Motor City', 
'Kenji Kawai - Making of a cyborg', 'Kenji Ohtsuki - Hito toshite Jiku ga Bureteiru', 'Kenji Ohtsuki - Odoru Akachan Ningen', 'Kenshi Yonezu - Peace Sign', 
'Kensuke Ushio - Débilman No Uta', 'Kevin Penkin - Hanezeve Caradhina', 'King Gnu - Boy', 'King Gnu - Hakujitsu', 'King Gnu - One Way', 'King Gnu - Prayer X', 
'Kishida Kyoudan & The Akeboshi Rockets - Blood and Emotions', 'Kishida Kyoudan & The Akeboshi Rockets - HIGHSCHOOL OF THE DEAD', 'Kishida Kyoudan & The Akeboshi Rockets - Tenkyō no Alderamin',
'KNoWNAME - Welcome to Chaos', 'Komine Lisa - Resuscitated Hope', 'Komine Lisa - Unity', 'Konomi Suzuki  - Inochi no Tomoshibi', 'Konomi Suzuki - Redo', 
'Konomi Suzuki - This Game', 'Konomi Suzuki - Utaeba Soko ni Kimi ga Iru kara', 'Konomi Suzuki - Watashi ga motenai no wa dō kangaetemo omaera ga warui', 
'Kozo Murashita - Hatsukoi', 'Kozo Murashita - Hidamari', 'Kozo Murashita - Odoriko', 'Kumiko Noma - Lilium', "L'Arc-en-Ciel - Driver's high", 'Lanhua - Hana to Chou no Serenade', 
'Larval Stage Planning - Sympathy', 'Larval Stage Planning Trip-innocent of D', 'Lenny code fiction - Make my story (128 kbps)', 'Lenny code fiction - Make my story', 
'Lia - Bravely you', 'Lia - Toki wo kizamu uta', 'Lia-My Soul Your Beats', 'Lil B - Tsunaida te', 'Ling Tosite Sigure - Abnormalize', 'Ling Tosite Sigure - Enigmatic Feeling', 
'Linked Horizon - Guren No Yumiya', 'Linked Horizon - Jiyuu No Tsubasa', 'Linked Horizon - Requiem der Morgenrote', 'Linked Horizon - Shinzou No Sasageyo', 
'Linked Horizon - Shoukei to Shikabane no Michi', 'LiSA - Adamas', 'LiSA - Catch the Moment', 'LiSA - Crossing Field', 'LiSA - Ichiban no Takaramono', 'LiSA - Oath Sign', 
'LiSA - Rising Hope', 'LONG SHOT PARTY - Ano hi Time Machine', 'Lotus Juice - Lay Back', 'Lotus Juice - Nora Tan', 'Luck Life - Symbol', 'Luna Haruna - Overfly', 
'Luna Haruna - Sora wa takaku kaze wa utau', 'M.O.V.E - Around The World', 'M.O.V.E - Break in2 the Nite', 'Machico - Fantastic Dreamer', 'MADKID - Faith', 'MADKID - Rise', 
'Magokoro Brothers - Kienai e', 'Man with a mission  - Dark Crow','Man with a mission - Merry go round', 'Man with a mission - Seven Deadly Sins', 'Man with a mission ft. Takuma - Database',
'Maon Kurosaki - Rakuen no Tsubasa', 'Masayoshi Ooishi - Kimi ja Nakya Dame Mitai', 'Masayoshi Ooishi - Paradise City', 'Masayuki Suzuki - Daddy daddy do', 
'Masayuki Suzuki - Love dramatic', 'Mashiro Ayano - Ideal White', "May'n - ViViD", 'Megumi Hayashibara - Imawa no shinigami', 'Megumi Hayashibara - Usurahi Shinjuu', 
'MELL - Red Fraction', 'Merengue -  Ano Yoake Mae no Bokura ni Tsuite', 'Merengue - Crater', 'Mermaid Melody - Taiyou No Rakuen', 'Mermaid Melody - Yume no Sono Saki He (Greek)',
'Mermaid Sisters Song', 'Miho Fukuhara - Beyond (English)', 'Miho Fukuhara - Beyond', 'Miho Fukuhara - Let it out', 'Mika Nakashima x Hyde - Kiss of death', 
'Mikio Sakai - Dive In The Sky', 'milet - Drown', 'Mina - ff (Fortissimo)', 'Mina - Misaki Meguri', 'Minami - Kawaki no ameku', 'Minami Kuribayashi - Switch',
'Minori Chihara - Kyoukai no kanata', "Mix Speaker's,Inc. - Shiny Tail", 'Miyu Tomita, Ise Mariya - Deep in abyss', 'Mob Choir - 99', 'Momoiro Clover - Nippon Egao Hyakkei',
'Monoral - Kiri', 'Motohiro Hata - Goodbye Isaac', 'Mrs. GREEN APPLE - Inferno', 'Myth & Roid - Styx Helix', 'Myth & Roid - Tit for Tat', 'Myth & Roid - Voracity',
'Nagi Yanagi - Aquaterrarium', 'Nagi Yanagi - Yukitoki', 'Nano - No pain, No game', 'Natsuki Hanae - Kokoro', 'Natsumi Kiyoura - Tabi no Tochuu', 
'Nico Touches the Wall - Mashi Mashi', 'Nico Touches The Walls - Hologram', 'Nico touches the walls - Uzu to Uzu', 'Nightmare - Alumina', 
'Nightmare - The World', 'NoB with Kemoner Mask - Fight! Kemoner Mask', 'Nothings Carved in Stone - Out of Control', 'Occult Kenkyubu Girls - Lovely Devil',
'Occult Kenkyuubu Girls - Houteishiki wa Kotaenai', 'Okuda Miwako - Shizuku', 'Olivia Lufkin - A little pain', 'Olivia Lufkin - Starless Night', 
'Olivia Lufkin - Wish', 'Ono Masatoshi - Departure!', 'Oratorio The World God Only Knows - A Whole New World God Only Knows', 'Oratorio The World God Only Knows - God only knows (Full Version)'
, 'Oratorio The World God Only Knows - God only knows -Secrets of the Goddess-', 'Origa - Inner Universe', 'Origa - Rise', 'OxT - Clatanoia', 'OxT - Silent Solitude', 
'Paradise Lunch - Guns & Roses', 'PELICAN FANCLUB - Sangenshoku', 'Penpals - Tell Me Why', 'Pet na Kanojo-tachi - Kimi ga Yume wo Tsuretekita', 'Pico - Koi wo Shiyou yo',
'Pico - My Little Summer Story', 'Pico - Natsuyasumi', 'Pico - Tsuretette', 'Pillows - Ride on Shooting Star', 'Porno Graffiti - The Day', 'Porno Graffitti - Hitorino Yoru',
'Porno Graffitti - The Day', 'PUFFY - Sweet Drops', 'Radwimps - Sparkle', 'Radwimps - Zen Zen Zense', 'Rie Maekawa - Distance', 'Rika Mayama - Liar Mask', 
'Rina Satou - Kitto Ashita wa', 'Ritsuko Okazaki  - Morning Grace', "ROOKiEZ is PUNK'D - Complication", 'Round Table - Puzzle', 'Ryouta Komatsu and Charlie Kosei - Kagen no tsuki', 
'Sailor Moon Theme', 'Saki and Rie Fu - You & Me', 'Sasanomaly - Takarabako', 'SCANDAL - Shunkan Sentimental', 'Scott Mathew - Lithium flower', 'Seira Kagami - Never',
'Serena - Anataga Ireba OK!', 'Shimokawa Mikuni - All the Way', 'Shinsei Kamattechan - My War', 'Shiritsu Ebisu Chugaku - Butterfly Effect', 'Shoko Naganawa - Sorairo Days',
'Shoko Nakagawa - RAY OF LIGHT', 'Shonan No Kaze - Grand Blue', 'Shota Aoi - Harmony', 'Shuka Saitou - Papapa', 'SID - Enamel', 'SID - Monochrome no kiss', 'SID - Rain', 
'SID - Uso', 'SIM - EXiSTENCE', 'SiM – The Rumbling', 'Skirt and PUNPEE - ODDTAXI', 'Sky Peace - Ame ga Furu kara Niji ga Deru', 'Sora Amamiya - Tsuki Akari', 
'Sora tob sakana - Flash', 'Sora tob sakana - New Stranger', 'Sphere  - Kasukana Hisokana Tashikana Mirai', "SPYAIR - I'm a Believer", 'SPYAIR - Imagination',
'SPYAIR - Sakuramitsutsuki', 'Starlight Kukugumi - Hoshi no Dialogue', 'Stereopony - Hitohira No Hanabira', 'STEREOPONY - Tsukiakari no Michishirube', 
'Stray Kids - TOP', 'SUEMITSU & THE SUEMITH - Allegro Cantabile', 'Sukima Switch - Ah Yeah!!', 'Sukima Switch - Eureka', 'Sukima Switch - Golden Time Lover', 'SUPER BEAVER - Rashisa',
'Supercell - My Dearest', 'Survive Said The Prophet - found & lost', 'Survive Said The Prophet - Mukanjyo', 'Survive Said The Prophet - Red', 
'Susumu Hirasawa - The girl in Byakkoya', 'Susumu Hirasawa - Yume no Shima Shinen Kouen', 'Sweet Arms - I swear', 'Tacica - Halo', 'Tacica - Hatsunetsu', 
'Taiiku Okazaki - Shiokaze', 'Tainaka Sachi - disillusion', 'Takuma Terashima - Nameless story', 'Takuro Yoshida - Jun', 'Taneda Risa - Wareta Ringo', 
'Tanizawa Tomofumi - Kimi ni todoke', 'Tatsuhisha Suzuki - Bokura no Diary', 'Tatsuhisha Suzuki - Soldier In The Space', 'Tatsuhisha Suzuki - Taiyou ga Kureta Kisetsu', 
'Tatsuo Kamon - Yuke! Yuke! Kawaguchi Hiroshi!!', 'The Du - Crazy Noisy Bizarre Town', 'The Dying Breed - My World Down', 'The Oral Cigarettes - Hey Kids',
'The peggies - Kimi no Sei', 'The Seatbelts - Ask DNA', 'The Seatbelts - The real folk blues', 'The Yatou - B.B', 'Theatre Brook - Uragiri no yuuyake', 
'TK - Katharsis', 'TK - Signal', 'TK - Unravel', 'Tomatsu Haruka - Courage', 'Tomofumi Tanizawa - Sawakaze', 'Tomoko Kawase - Lonely in Gorgeous', 'Toshiyuki Toyonaga - The day you laugh', 
'TRUE - Hiryu no Kishi', 'TRUE - Sincerely', 'Trustrick - Answer', 'Ultra Tower - Kibou no uta', 'UNICORN - Feel So Moon', 'UNISON SQUARE GARDEN - Catch up, latency', 
'UNISON SQUARE GARDEN - Haru ga Kite Bokura', 'UNISON SQUARE GARDEN - Phantom Joke', 'UNISON SQUARE GARDEN - Sugar song to bitter step', 'UVERworld - Boku no Kotoba de wa nai Kore wa Bokutachi no Kotoba', 
'UVERworld - ODD FUTURE', 'UVERworld - ROB THE FRONTIER', 'UVERworld - Touch off', 'Vickeblanka - Black Catcher', 'Vickeblanka - Black Rover', 'vistlip - Yoru', 
'Void Chords feat LIO - Flare', 'Wacci - Kirameki', 'Wataru Hatano - You Only Live Once', 'WEAVER - Kuchizuke Diamond', 'Who-ya extended - Vivid Vice', 
'Wotaku ni Koi wa Muzukashii OP FullAMV Lyrics Fiction   Sumika', 'YES - Roundabout', 'YOASOBI - Kaibutsu', 'YOASOBI - Yasashii Suisei', 
"Yoko Takahashi - A cruel angel's thesis", 'Yoshida Kiyoshi - The Tree Song', 'Yoshiki Nakajima - Sake to Ikura to 893 to Musume', 'Yousei Teikoku - Kuusou Mesorogiwi', 
'Yu Gi Oh Full Theme Song', 'Yu Takahashi - Hikari no hahen', 'Yui - Again', 'Yui Horie - Immoralist', 'Yuiko Oohara -  Zero Centimeters', 'Yuiko Oohara - Iwanai Kedo ne',
'Yuka Iguchi - Little Charm Fang', 'Yukana - Koi wa Mizuiro', 'YUKI - Flag wo Tatero', 'YUKI - Sayonara Bystander', 'Yuki Saito - Kanashimi Yo Konnichiwa',
'YURiKA - Kyoumen no nami', 'YURiKA - Le zoo', 'YURiKA - Marble', 'Yuuki Aoi - Los Los Los', 'Yuuki Ozaki - Trigger', 'Yuya Matsushita - Trust Me', 'YUZU - Reason', 
'ZAQ - Braver', 'ZAQ - Caste Room', 'ZAQ - Gekijyouron', 'ZAQ - Last Proof', 'ZAQ - Serendipity', 'ZAQ - Seven Doors', 'ZAQ - Sparkling Daydream', 'ZAQ - Voice', 
'Ziyoou-vachi - Kaen', 'Ziyou Vachi - Half', 'österreich - Munou' ]



var search = ""
var correct = 0;
var wrong = 0;

$(function(){
      
      $( "#autoC" ).autocomplete({
        source: availablesingers,
         focus: function (event, ui) {
              this.value = ui.item.value;
          },
          minLength: 0
      }).bind("focus", function() {
              $(this).autocomplete("search", "");
      });
      
      $('.autoTrigger').click(function(){
        $( "#autoC" ).trigger('focus');
      })
      
      
  });


var input = document.getElementById("autoC"); 
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      validate(e);
    }
});

function validate(e) {
    var text = e.target.value;
    checkanswer(text)
    document.getElementById("autoC").value = ""
}

function checkanswer(text){
    if (search != "") {
        if (text.toLowerCase() == search.toLowerCase()) {
            correct += 1;
            document.getElementById("correction").innerHTML = 'You are correct!'
            document.getElementById("autoC").value = ""
        }
        else {
            wrong += 1;
            document.getElementById("correction").innerHTML = 'You are wrong!'
            document.getElementById("autoC").value = ""
        }
    }
    console.log(correct,wrong)
}

function revealanswer(){
    if (document.getElementById('showanswer').innerHTML == search) {
        document.getElementById('otherbutton').innerHTML = 'Show the correct answer'
        document.getElementById('showanswer').innerHTML = ''
    }
    else {
        document.getElementById('showanswer').innerHTML = search
        document.getElementById('otherbutton').innerHTML = 'Hide the correct answer'
    }
}