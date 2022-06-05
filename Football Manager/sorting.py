import csv
import pprint

file = open('players_22.csv', encoding="utf8")
type(file)
csvreader = csv.reader(file)
header = []
header = next(csvreader)
rows = []
clubs = []
clublogos = []
leaguenames = []
leagueclubs = []
leagueplayers = []
playerinfo = []
for row in csvreader:
    player = []
    rows.append(row)
    #name:2,position:4,overall:5,value:7,wage:8,age:9,height:11,weight:12,face:105,nationality:109
    player.append(row[2])
    player.append(row[4])
    player.append(row[5])
    player.append(row[7])
    player.append(row[9])
    player.append(row[11])
    player.append(row[12])
    player.append(row[105])
    player.append(row[109])
    if row[15] not in leaguenames:
        leaguenames.append(row[15])
        leagueclubs.append([])
        leagueclubs[len(leagueclubs)-1].append([row[14],row[106]])
        leagueplayers.append([[]])
        leagueplayers[len(leagueplayers)-1][0].append(player)
    elif [row[14],row[106]] not in leagueclubs[leaguenames.index(row[15])]:
        leagueclubs[leaguenames.index(row[15])].append([row[14],row[106]])
        leagueplayers[leaguenames.index(row[15])].append([])
        leagueplayers[leaguenames.index(row[15])][leagueclubs[leaguenames.index(row[15])].index([row[14],row[106]])].append(player)
    else:
        leagueplayers[leaguenames.index(row[15])][leagueclubs[leaguenames.index(row[15])].index([row[14],row[106]])].append(player)

f1 = open("leaguenames.txt", "a")
f1.truncate(0)
f1.write('["')
for element in leaguenames:
    if element != leaguenames[len(leaguenames)-1]:
        f1.write(element + '","')
    else:
        f1.write(element)
f1.write('"]')    
f1.close()


f2 = open("leagueclubs.txt", "a",encoding='utf8')
f2.truncate(0)
text = pprint.pformat(leagueclubs)
text2 = ''
text2 = text2 + text[0]
for i in range(1,len(text)):
    if text[i] == "'" and (text[i+1] == ',' or text[i+1] == ']' or text[i-1] == ',' or text[i-1] == '['):
        text2 = text2 + '"'
    elif (text[i] != '\n') and (text[i] != ' ' or text2[len(text2)-1] != ','):
        text2 = text2 + text[i]


f2.write(text2)
f2.close()

f3 = open("leagueplayers.txt", "a",encoding='utf8')
f3.truncate(0)
text = pprint.pformat(leagueplayers)
print(text[0:100])
text3 = ''
text3 = text3 + text[0]
for i in range(1,len(text)):
    if text[i] == "'" and (text[i+1] == ',' or text[i+1] == ']' or text3[len(text3)-1] == ',' or text3[len(text3)-1] == '['):
        text3 = text3 + '"'
    elif (text[i] != '\n') and (text[i] != ' ' or text3[len(text3)-1] != ','):
        text3 = text3 + text[i]
f3.write(text3)
f3.close()

        






