import os
os.system('cls||clear')

legal_pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill",
"Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidorina","Nidoqueen","Nidorino",
"Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio",
"Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout",
"Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong",
"Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee",
"Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew","Chikorita","Bayleef","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown",
"Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo",
"Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop",
"Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-oh","Celebi","Treecko","Grovyle","Sceptile","Torchic","Combusken",
"Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf",
"Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja",
"Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle",
"Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon",
"Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo",
"Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail",
"Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","KyogrePrimal Kyogre","Groudon",
"GroudonPrimal Groudon","Rayquaza","Jirachi","DeoxysNormal Forme","DeoxysAttack Forme","DeoxysDefense Forme","DeoxysSpeed Forme","Turtwig","Grotle","Torterra","Chimchar","Monferno",
"Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos",
"Shieldon","Bastiodon","Burmy","WormadamPlant Cloak","WormadamSandy Cloak","WormadamTrash Cloak","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos",
"Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny",
"Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke",
"Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade",
"Probopass","Dusknoir","Froslass","Rotom","RotomHeat Rotom","RotomWash Rotom","RotomFrost Rotom","RotomFan Rotom","RotomMow Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran",
"Regigigas","GiratinaAltered Forme","GiratinaOrigin Forme","Cresselia","Phione","Manaphy","Darkrai","ShayminLand Forme","ShayminSky Forme","Arceus","Victini","Snivy","Servine","Serperior",
"Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour",
"Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr",
"Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin",
"Sandile","Krokorok","Krookodile","Darumaka","DarmanitanStandard Mode","DarmanitanZen Mode","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga",
"Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna",
"Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed",
"Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal",
"Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino",
"Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","TornadusIncarnate Forme","TornadusTherian Forme","ThundurusIncarnate Forme","ThundurusTherian Forme",
"Reshiram","Zekrom","LandorusIncarnate Forme","LandorusTherian Forme","Kyurem","KyuremBlack Kyurem","KyuremWhite Kyurem","KeldeoOrdinary Forme","KeldeoResolute Forme","MeloettaAria Forme",
"MeloettaPirouette Forme","Genesect","Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder",
"Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","FlabΓ©bΓ©","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","MeowsticMale","MeowsticFemale",
"Honedge","Doublade","AegislashBlade Forme","AegislashShield Forme","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher",
"Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant",
"PumpkabooAverage Size","PumpkabooSmall Size","PumpkabooLarge Size","PumpkabooSuper Size","GourgeistAverage Size","GourgeistSmall Size","GourgeistLarge Size","GourgeistSuper Size",
"Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Diancie","HoopaHoopa Confined","HoopaHoopa Unbound","Volcanion"]
legal_pokemonnew = []

for i in legal_pokemon:
    legal_pokemonnew.append(i.lower())


f3 = open("mamamama.txt", "r")
Lines = f3.readlines()
arrayy = ""
for i in range(3,len(Lines[2])-1):
    print(Lines[2][i])
for line in range(len(Lines)):
    counter = 0
    word = ""
    for i in range(len(Lines[line])-4):
        word = word + Lines[line][i]
        if Lines[line][i+1] == '.' and Lines[line][i+2] == 'p' and Lines[line][i+3] == 'n' and Lines[line][i+4] == 'g':
            break
    word = word[6:len(word)]
    arrayy = arrayy + '"' + word + '",'
f3.close()


sprites_pokemon = ["abomasnow-f","abomasnow-mega","abomasnow","abra","absol-mega","absol","accelgor","aegislash-blade","aegislash","aerodactyl-mega","aerodactyl","aggron-mega",
"aggron","aipom-f","aipom","alakazam-f","alakazam-mega","alakazam","alcremie-caramelswirl","alcremie-gmax","alcremie-lemoncream","alcremie-matchacream",
"alcremie-mintcream","alcremie-rainbowswirl","alcremie-rubycream","alcremie-rubyswirl","alcremie-saltedcream","alcremie","alomomola","altaria-mega",
"altaria","amaura","ambipom-f","ambipom","amoonguss","ampharos-mega","ampharos","anorith","appletun-gmax","appletun-shiny","appletun","applin","araquanid",
"arbok","arcanine-hisui","arcanine","arceus-bug","arceus-dark","arceus-dragon","arceus-electric","arceus-fairy","arceus-fighting","arceus-fire","arceus-flying",
"arceus-ghost","arceus-grass","arceus-ground","arceus-ice","arceus-normal","arceus-poison","arceus-psychic","arceus-rock","arceus-steel","arceus-water","arceus",
"archen","archeops","arctovish-shiny","arctovish","arctovolt","arctozolt-shiny","arctozolt","argalis","arghonaut-f","arghonaut","ariados","armaldo","aromatisse",
"aron","arrokuda","articuno-galar","articuno","astrolotl","audino-mega","audino","aurorus","aurumoth","avalugg-hisui","avalugg","axew","azelf","azumarill","azurill",
"bagon","baltoy","banette-mega","banette","barbaracle","barboach","barraskewda","basculegion-f","basculegion","basculin-bluestriped","basculin-whitestriped","basculin",
"bastiodon","bayleef","beartic","beautifly-f","beautifly","beedrill-mega","beedrill","beheeyem","beldum","bellossom","bellsprout","bergmite","bewear","bibarel-f","bibarel",
"bidoof-f","bidoof","binacle","bisharp","blacephalon","blastoise-gmax","blastoise-mega","blastoise","blaziken-f","blaziken-mega","blaziken","blipbug-shiny","blipbug","blissey",
"blitzle","boldore","boltund","bonsly","bouffalant","bounsweet","braixen","brattler","braviary-hisui","braviary","breezi","breloom","brionne","bronzong","bronzor","bruxish","budew",
"buizel","bulbasaur","buneary","bunnelby","burmy-plant","burmy-sandy","burmy-trash","burmy","butterfree-f","butterfree-gmax-shiny","butterfree-gmax","butterfree","buzzwole","cacnea",
"cacturne-f","cacturne","caimanoe","calyrex-ice","calyrex-shadow","calyrex","camerupt-f","camerupt-mega","camerupt","carbink","caribolt","carkol-shiny","carkol","carnivine","carracosta"
,"carvanha","cascoon","castform-rainy","castform-snowy","castform-sunny","castform","caterpie","cawdet","cawmodore","celebi","celesteela","centiskorch-gmax","centiskorch-shiny",
"centiskorch","chandelure","chansey","charizard-gmax","charizard-megax","charizard-megay","charizard","charjabug","charmander","charmeleon","chatot","cherrim-overcast"
"cherrim-sunshine","cherrim","cherubi","chesnaught","chespin","chewtle","chikorita","chimchar","chimecho","chinchou","chingling","chromera","cinccino","cinderace-gmax","cinderace","clamperl","clauncher","clawitzer","claydol","clefable",
"clefairy","cleffa","clobbopus","cloyster","coalossal-gmax","coalossal","cobalion","cofagrigus","colossoil-f","colossoil","combee-f","combee","combusken-f","combusken","comfey","conkeldurr",
"copperajah-gmax-shiny","copperajah-gmax","copperajah-shiny","copperajah","coribalis","corphish","corsola-galar-shiny","corsola-galar","corsola","corviknight-gmax","corviknight",
"corvisquire-shiny","corvisquire","cosmoem","cosmog","cottonee","crabominable","crabrawler","cradily","cramorant-gorging-shiny","cramorant-gorging","cramorant-gulping","cramorant-shiny",
"cramorant","cranidos","crawdaunt","cresselia","croagunk-f","croagunk","crobat","croconaw","crucibelle-mega","crucibelle","crustle","cryogonal","cubchoo","cubone","cufant-shiny","cufant",
"cupra","cursola","cutiefly","cyclohm-f","cyclohm","cyndaquil","darkrai","darmanitan-galar","darmanitan-galarzen","darmanitan-standard","darmanitan-zen","darmanitan","dartrix",
"darumaka-galar-shiny","darumaka-galar","darumaka","decidueye-hisui","decidueye","dedenne","deerling-autumn","deerling-spring","deerling-summer","deerling-winter","deerling",
"deino","delcatty","delibird","delphox","deoxys-attack","deoxys-defense","deoxys-rs","deoxys-speed","deoxys","dewgong","dewott","dewpider","dhelmise","dialga-origin","dialga",
"diancie-mega","diancie","diggersby","diglett-alola","diglett","ditto","dodrio-f","dodrio","doduo-f","doduo","donphan-f","donphan","dorsoil","dottler","doublade","dracovish-shiny",
"dracovish","dracozolt-shiny","dracozolt","dragalage","dragalge","dragapult-shiny","dragapult","dragonair","dragonite","drakloak-shiny","drakloak","drampa","drapion","dratini",
"drednaw-gmax-shiny","drednaw-gmax","drednaw-shiny","drednaw","dreepy-shiny","dreepy","drifblim","drifloon","drilbur","drizzile-shiny","drizzile","drowzee","druddigon","dubwool-shiny",
"dubwool","ducklett","dugtrio-alola","dugtrio","dunsparce","duohm","duosion","duraludon-gmax","duraludon","durant","dusclops","dusknoir","duskull","dustox-f","dustox","dwebble","eelektrik",
"eelektross","eevee-gmax-shiny","eevee-gmax","eevee-starter-f","eevee-starter","eevee","egg-manaphy","egg","eiscue-noice","eiscue","ekans","eldegoss-shiny","eldegoss","electabuzz","electivire",
"electrelk","electrike","electrode-hisui","electrode","elekid","elgyem","embirch","emboar","emolga","empoleon","enamorus-therian","enamorus","entei","equilibra","escavalier","espeon","espurr",
"eterntus-eternamax-shiny","eternatus-eternamax","eternatus-shiny","eternatus","excadrill","exeggcute","exeggutor-alola","exeggutor","exploud","falinks-shiny","falinks","farfetch'd-galar","farfetchd-galar","farfetchd","fawnifer","fearow","feebas","fennekin","feraligatr","ferroseed","ferrothorn","fidgit-f","fidgit","finneon-f","finneon","flaaffy","flabebe-blue","flabebe-orange","flabebe-white","flabebe-yellow","flabebe","flapple-gmax","flapple-shiny","flapple","flarelm-f","flarelm","flareon","fletchinder","fletchling","floatoy","floatzel","floette-blue","floette-eternal","floette-eternalflower","floette-orange","floette-white","floette-yellow","floette","florges-blue","florges-orange","florges-white","florges-yellow","florges","flygon","fomantis","foongus","forretress","fraxure","frillish-f","frillish","froakie","frogadier","froslass","frosmoth-shiny","frosmoth","furfrou","furret","gabite-f","gabite","gallade-mega","gallade","galvantula","garbodor-gmax","garbodor","garchomp-f","garchomp-mega","garchomp","gardevoir-mega","gardevoir","gastly","gastrodon-east","gastrodon-west","gastrodon","genesect-burn","genesect-chill","genesect-douse","genesect-shock","genesect","gengar-gmax-shiny","gengar-gmax","gengar-mega","gengar","geodude-alola","geodude","gible-f","gible","gigalith","girafarig-f","girafarig","giratina-altered","giratina-origin","giratina","glaceon","glalie-mega","glalie","glameow","glastrier","gligar-f","gligar","gliscor","gloom-f","gloom","gogoat","golbat-f","golbat","goldeen-f","goldeen","golduck","golem-alola","golem","golett","golisopod","golurk","goodra-hisui","goodra","goomy","gorebyss","gossifleur","gothita","gothitelle","gothorita","gourgeist-large","gourgeist-small","gourgeist-super","gourgeist","granbull","grapploct","graveler-alola","graveler","greedent","greninja-ash","greninja","grimer-alola","grimer","grimmsnarl-gmax","grimmsnarl","grookey-shiny","grookey","grotle","groudon-primal","groudon","grovyle","growlithe-hisui","growlithe","grubbin","grumpig","gulpin-f","gulpin","gumshoos","gurdurr","guzzlord","gyarados-f","gyarados-mega","gyarados","gyrados-mega","hakamoo","happiny","hariyama","hatenna","hatterene-gmax","hatterene","hattrem","haunter","hawlucha","haxorus","heatmor","heatran","heliolisk","helioptile","heracross-f","heracross-mega","heracross","herdier","hippopotas-f","hippopotas","hippowdon-f","hippowdon","hitmonchan","hitmonlee","hitmontop","honchkrow","honedge","hooh","hoopa-mega","hoopa-unbound","hoopa","hoothoot","hoppip","horsea","houndoom-f","houndoom-mega","houndoom","houndour","huntail","hydreigon","hypno-f","hypno","igglybuff","illumise","impidimp","incineroar","indeedee-f","indeedee","infernape","inkay","inteleon-gmax","inteleon","ivysaur","jangmo-o","jangmoo","jellicent-f","jellicent","jigglypuff","jirachi","jolteon","joltik","jumbao","jumpluff","justyke","jynx","kabuto","kabutops","kadabra-f","kadabra","kakuna","kangaskhan-mega","kangaskhan","karrablast","kartana","kecleon","keldeo-resolute","keldeo","kerfluffle-f","kerfluffle","kingdra","kingler-gmax","kingler","kirlia","kitsunoh-f","kitsunoh","klang","kleavor","klefki","klink","klinklang","koffing","komala","kommoo","krabby","kricketot-f","kricketot","kricketune-f","kricketune","krillowatt-f","krillowatt","krilowatt-f","krilowatt","krokorok","krolowatt","krookodile","kubfu","kyogre-primal","kyogre","kyurem-black","kyurem-white","kyurem","lairon","lampent","landorus-therian","landorus","lanturn","lapras-gmax-shiny","lapras-gmax","lapras","larvesta","larvitar","latias-mega","latias","latios-mega","latios","leafeon","leavanny","ledian-f","ledian","ledyba-f","ledyba","lickilicky","lickitung","liepard","lileep","lilligant-hisui","lilligant","lillipup","linoone-galar-shiny","linoone-galar","linoone","litleo","litten","litwick","lombre","lopunny-mega","lopunny","lotad","loudred","lucario-mega","lucario","ludicolo-f","ludicolo","lugia","lumineon-f","lumineon","lunala","lunatone","lurantis","luvdisc","luxio-f","luxio","luxray-f","luxray","lycanroc-dusk","lycanroc-midday","lycanroc-midnight","lycanroc","machamp-gmax","machamp","machoke","machop","magby","magcargo","magearna-original","magearna-pokeball","magearna","magikarp-f","magikarp","magmar","magmortar","magnemite","magneton","magnezone","makuhita","malaconda","malamar","mamoswine-f","mamoswine","manaphy","mandibuzz","manectric-mega","manectric","manetric-mega","mankey","mantine","mantyke","maractus","mareanie","mareep","marenie","marill","marowak-alola","marowak-alolan","marowak","marshadow","marshtomp","masquerain","mawile-mega","mawile","medicham-f","medicham-mega","medicham","meditite-f","meditite","meganium-f","meganium","melmetal-gmax","melmetal","meloetta-aria","meloetta-pirouette","meloetta","meltan","meowstic-f","meowstic","meowth-alola","meowth-galar","meowth-gmax","meowth","mesprit","metagross-mega","metagross","metang","metapod","mew","mewtwo-megax","mewtwo-megay","mewtwo","miasmaw","miasmite","mienfoo","mienshao","mightyena","milcery","milotic-f","milotic","miltank","mimejr","mimikyu-busted","mimikyu","minccino","minior-blue","minior-green","minior-indigo","minior-meteor","minior-orange","minior-red","minior-violet","minior-yellow","minior","minun","misdreavus","mismagius","missingno","mollux","moltres-galar","moltres","monferno","monohm","morelull","morgrem","morpeko-hangry-shiny","morpeko-hangry","morpeko-shiny","morpeko","mothim","mrmime-galar","mrmime","mrrime","mudbray","mudkip","mudsdale","muk-alola","muk","mumbao","munchlax","munna","murkrow-f","murkrow","musharna","naganadel","natu","naviathan","necrozma-dawnwings","necrozma-duskmane","necrozma-ultra","necrozma","necturine","necturna","nickit","nidoking","nidoqueen","nidoranf","nidoranm","nidorina","nidorino","nihilego","nincada","ninetales-alola","ninetales","ninjask","noctowl","nohface","noibat","noivern","nosepass","numel-f","numel","nuzleaf-f","nuzleaf","obstagoon-shiny","obstagoon","octillery-f","octillery","oddish","omanyte","omastar","onix","oranguru","orbeetle-gmax","orbeetle","oricorio-pau","oricorio-pompom","oricorio-sensu","oricorio","oshawott","overqwil","pachirisu-f","pachirisu","pajantom","palkia-origin","palkia","palossand","palpitoad","pancham","pangoro","panpour","pansage","pansear","paras","parasect","passimian","patrat","pawniard","pelipper","perrserker","persian-alola","persian","petilil","phanpy","phantump","pheromosa","phione","pichu-spikyeared","pichu","pidgeot-mega","pidgeot","pidgeotto","pidgey","pidove","pignite","pikachu-alola","pikachu-belle","pikachu-cosplay","pikachu-f","pikachu-gmax-shiny","pikachu-gmax","pikachu-hoenn","pikachu-kalos","pikachu-libre","pikachu-original","pikachu-partner","pikachu-phd","pikachu-popstar","pikachu-rockstar","pikachu-sinnoh","pikachu-starter-f","pikachu-starter","pikachu-unova","pikachu-world","pikachu","pikipek","piloswine-f","piloswine","pincurchin-shiny","pincurchin","pineco","pinsir-mega","pinsir","piplup","plasmanta","pluffle","plusle","poipole","pokestarblackbelt-prop","pokestarblackbelt","pokestarblackdoor-prop","pokestarblackdoor","pokestarbrycenman-prop","pokestarbrycenman","pokestarf00-prop","pokestarf00","pokestarf002-prop","pokestarf002","pokestargiant-2","pokestargiant-prop","pokestargiant","pokestargiant2-prop","pokestargiant2","pokestarhumanoid-prop","pokestarhumanoid","pokestarmonster-prop","pokestarmonster","pokestarmt-prop","pokestarmt","pokestarmt2-prop","pokestarmt2","pokestarsmeargle","pokestarspirit-prop","pokestarspirit","pokestartransport-prop","pokestartransport","pokestarufo-2","pokestarufo-prop","pokestarufo-propu2","pokestarufo","pokestarufo2-prop","pokestarufo2","pokestarwhitedoor-prop","pokestarwhitedoor","politoed-f","politoed","poliwag","poliwhirl","poliwrath","polteageist-antique","polteageist-chipped","polteageist","ponyta-galar-shiny","ponyta-galar","ponyta","poochyena","popplio","porygon","porygon2","porygonz","primarina","primeape","prinplup","privatyke","probopass","protowatt-f","protowatt","psyduck","pumpkaboo-large","pumpkaboo-small","pumpkaboo-super","pumpkaboo","pupitar","purrloin","purugly","pyroak-f","pyroak","pyroar-f","pyroar","pyukumuku","quagsire-f","quagsire","quilava","quilladin","qwilfish-hisui","qwilfish","raboot-shiny","raboot","raichu-alola","raichu-f","raichu","raikou","ralts","rampardos","rapidash-galar-shiny","rapidash-galar","rapidash","raticate-alola","raticate-f","raticate","rattata-alola","rattata-alolan","rattata-f","rattata","rayquaza-mega","rayquaza","rebble","regice","regidrago","regidragon","regieleki","regigigas","regirock","registeel","relicanth-f","relicanth","remoraid","reshiram","reuniclus","revenankh-f","revenankh","rhydon-f","rhydon","rhyhorn-f","rhyhorn","rhyperior-f","rhyperior","ribombee","rillaboom-gmax","rillaboom-shiny","rillaboom","riolu","rockruff","roggenrola","rolycoly","rookidee","roselia-f","roselia","roserade-f","roserade","rotom-fan","rotom-frost","rotom-heat","rotom-mow","rotom-wash","rotom","rowlet","rufflet","runerigus-shiny","runerigus","sableye-mega","sableye","salamence-mega","salamence","salandit","salazzle","samurott-hisui","samurott","sandaconda-gmax","sandaconda-shiny","sandaconda","sandile","sandshrew-alola","sandshrew","sandslash-alola","sandslash","sandygast","sawk","sawsbuck-autumn","sawsbuck-spring","sawsbuck-summer","sawsbuck-winter","sawsbuck","scatterbug","sceptile-mega","sceptile","scizor-f","scizor-mega","scizor","scolipede","scorbunny-shiny","scorbunny","scrafty","scraggy","scratchet-f","scratchet","scyther-f","scyther","seadra","seaking-f","seaking","sealeo","seedot","seel","seismitoad","sentret","serperior","servine","seviper","sewaddle","sharpedo-mega","sharpedo","shaymin-land","shaymin-sky","shaymin","shedinja","shelgon","shellder","shellos-east","shellos-west","shellos","shelmet","shieldon","shiftry-f","shiftry","shiinotic","shinx-f","shinx","shroomish","shuckle","shuppet","sigilyph","silcoon","silicobra-shiny","silicobra","silvally-bug","silvally-dark","silvally-dragon","silvally-electric","silvally-fairy","silvally-fighting","silvally-fire","silvally-flying","silvally-ghost","silvally-grass","silvally-ground","silvally-ice","silvally-poison","silvally-psychic","silvally-rock","silvally-steel","silvally-water","silvally","simipour","simisage","simisear","sinistea-antique","sinistea-chipped","sinistea","sirfetchd","sizzlipede","skarmory","skiddo","skiploom","skitty","skorupi","skrelp","skuntank","skwovet","slaking","slakoth","sliggoo-hisui","sliggoo","slowbro-galar","slowbro-mega","slowbro","slowking-galar","slowking","slowpoke-galar","slowpoke","slugma","slurpuff","smeargle","smogecko","smoguana","smokomodo","smoochum","snaelstrom","sneasel-f","sneasel-hisui-f","sneasel-hisui","sneasel","sneasler","snivy","snom-shiny","snom","snorlax-gmax","snorlax","snorunt","snover-f","snover","snubbull","snugglow","sobble-shiny","sobble","solgaleo","solosis","solotl","solrock","spearow","spectrier","spewpa","spheal","spinarak","spinda","spiritomb","spoink","spritzee","squirtle","stakataka","stantler","staraptor-f","staraptor","staravia-f","staravia","starly-f","starly","starmie","staryu","steelix-f","steelix-mega","steelix","steenee","stonjourner-shiny","stonjourner","stoutland","stratagem","stufful","stunfisk-galar-shiny","stunfisk-galar","stunfisk","stunky","substitute","sudowoodo-f","sudowoodo","suicune","sunflora","sunkern","surskit","swablu","swadloon","swalot-f","swalot","swampert-mega","swampert","swanna","swellow","swinub","swirlix","swirlpool","swoobat","syclant-f","syclant","syclar","sylveon","tactite","taillow","talonflame","tangela","tangrowth-f","tangrowth","tapubulu","tapufini","tapukoko","tapulele","tauros","teddiursa","tentacool","tentacruel","tepig","terrakion","thievul","throh","thundurus-therian","thundurus","thwackey-shiny","thwackey","timburr","tirtouga","togedemaru","togekiss","togepi","togetic","tomohawk-f","tomohawk","torchic","torkoal","tornadus-therian","tornadus","torracat","torterra","totodile","toucannon","toxapex","toxel","toxicroak-f","toxicroak","toxtricity-gmax","toxtricity-lowkey","toxtricity","tranquill","trapinch","treecko","trevenant","tropius","trubbish","trumbeak","tsareena","turtonator","turtwig","tympole","tynamo","typenull","typhlosion-hisui","typhlosion","tyranitar-mega","tyranitar","tyrantrum","tyrogue","tyrunt","umbreon","unfezant-f","unfezant","unown-a","unown-b","unown-c","unown-d","unown-e","unown-em","unown-f","unown-g","unown-h","unown-i","unown-j","unown-k","unown-l","unown-m","unown-n","unown-o","unown-p","unown-q","unown-qm","unown-r","unown-s","unown-t","unown-u","unown-v","unown-w","unown-x","unown-y","unown-z","unown","ursaluna","ursaring-f","ursaring","urshifu-gmax","urshifu-rapidstrike","urshifu-rapidstrikegmax","urshifu","uxie","vanillish","vanillite","vanilluxe","vaporeon","venipede","venomicon-epilogue","venomicon","venomoth","venonat","venusaur-f","venusaur-gmax","venusaur-mega-f","venusaur-mega","venusaur","vespiquen","vibrava","victini","victreebel","vigoroth","vikavolt","vileplume-f","vileplume","virizion","vivillon-fancy","vivillon-pokeball","vivillon","volbeat","volcanion","volcarona","volkraken","volkritter","voltorb-hisui","voltorb","voodoll","voodoom-f","voodoom","vullaby","vulpix-alola","vulpix","wailmer","wailord","walrein","wartortle","watchog","weavile-f","weavile","weedle","weepinbell","weezing-galar","weezing","whimsicott","whirlipede","whiscash","whismur","wigglytuff","wimpod","wingull","wishiwashi-school","wishiwashi-solo","wishiwashi","wobbuffet-f","wobbuffet","woobat","wooloo-shiny","wooloo","wooper-f","wooper","wormadam-plant","wormadam-sandy","wormadam-trash","wormadam","wurmple","wynaut","wyrdeer","xatu-f","xatu","xerneas-neutral","xerneas","xurkitree","yamask-galar","yamask","yamper","yanma","yanmega","yungoos","yveltal","zacian-crowned-shiny","zacian-crowned","zacian","zamazenta-crowned-shiny","zamazenta-crowned","zamazenta","zangoose","zapdos-galar","zapdos","zarude-dada","zarude","zebstrika","zekrom","zeraora","zigzagoon-galar","zigzagoon","zoroark-hisui","zoroark","zorua-hisui","zorua","zubat-f","zubat","zweilous","zygarde-10","zygarde-complete","zygarde"]

mistakes = []

for i in legal_pokemonnew:
    if i not in sprites_pokemon:
        mistakes.append(i)

print(mistakes)

