
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
console.log(text1.slice(42128,42135))
var arrayclubs = JSON.parse(text1)
var text2 = readTextFile('leaguenames.txt')
var arrayleagues = JSON.parse(text2)
var text3 = readTextFile('leagueplayers.txt')
var arrayplayers = JSON.parse(text3)

console.log(arrayclubs)
console.log(arrayleagues)
console.log(arrayplayers)
