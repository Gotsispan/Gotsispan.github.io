
function readTextFile(file) {
    file = 'https://raw.githubusercontent.com/Gotsispan/Gotsispan.github.io/main/Football%20Manager/' + file
    var rawFile = new XMLHttpRequest();
    var txt = '';
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                txt = allText;
            }
        }
    }
    rawFile.send(null);
    return txt
}


var text1 = readTextFile('leagueclubs.txt')
var arrayclubs = JSON.parse(text1)
var text2 = readTextFile('leaguenames.txt')
var arrayleagues = JSON.parse(text2)
var text3 = readTextFile('leagueplayers.txt')
var arrayplayers = JSON.parse(text3)

//name:0,position:1,overall:2,value:3,wage:4,age:5,height:6,weight:7,nationality:8,team:9,league:10

function find_players(arr){
    var playerlist = []
    var playersolo = []
    var truee = true 
    
    for (i=0; i<arrayplayers.length; i++) {
        for (j=0; j<arrayplayers[i].length; j++) {
            for (k=0; k<arrayplayers[i][j].length; k++) {
                playersolo = []
                truee = (arr[0] == '' || arrayplayers[i][j][k][0].includes(arr[0])) 
                && (arr[1] == 'Any' || arrayplayers[i][j][k][1].includes(arr[1]))
                && (eval(arrayplayers[i][j][k][2]) >= arr[2][0] && eval(arrayplayers[i][j][k][2]) <= arr[2][1]) 
                && (eval(arrayplayers[i][j][k][3]) >= arr[3][0] && eval(arrayplayers[i][j][k][3]) <= arr[3][1]) 
                && (eval(arrayplayers[i][j][k][4]) >= arr[4][0] && eval(arrayplayers[i][j][k][4]) <= arr[4][1]) 
                && (eval(arrayplayers[i][j][k][5]) >= arr[5][0] && eval(arrayplayers[i][j][k][5]) <= arr[5][1]) 
                && (eval(arrayplayers[i][j][k][6]) >= arr[6][0] && eval(arrayplayers[i][j][k][6]) <= arr[6][1]) 
                && (arr[7] == 'Any' || arrayplayers[i][j][k][8] == 'https://cdn.sofifa.net/flags/' + arr[7] + '.png') 
                && (arr[8] == 'Any' || arrayclubs[i][j] == arr[8]) 
                && (arr[9] == 'Any' || arrayleagues[i] == arr[9]) 
                if(truee) {
                    for (m=0; m<arrayplayers[i][j][k].length; m++) {
                        playersolo.push(arrayplayers[i][j][k][m])
                    }
                    playersolo.push(arrayclubs[i][j])
                    playersolo.push(arrayleagues[i])
                    playerlist.push(playersolo)
                }
            }
        }
    }
    return playerlist
}

function findplayers() {
    array = ['','Any',[0,99],[0,100000000],[0,50],[100,200],[0,200],'Any','Any','Any']
    array[0] = document.getElementById("name").value
    array[1] = document.getElementById("position").value
    array[2][0] = document.getElementById("overlow").value
    array[2][1] = document.getElementById("overhigh").value
    array[3][0] = document.getElementById("pricelow").value*1000
    array[3][1] = document.getElementById("pricehigh").value*1000
    array[4][0] = document.getElementById("agelow").value
    array[4][1] = document.getElementById("agehigh").value
    array[5][0] = document.getElementById("heightlow").value
    array[5][1] = document.getElementById("heighthigh").value
    array[6][0] = document.getElementById("weightlow").value
    array[6][1] = document.getElementById("weighthigh").value
    array[7] = document.getElementById("nation").value
    array[8] = document.getElementById("team").innerText
    array[9] = document.getElementById("league").innerText
    console.log(array)
    console.log(find_players(array))
}

//console.log(find_players(['Man','LM',[0,99],[0,100000000],[0,85],[150,200],[0,200],'gr','Any','Any']))