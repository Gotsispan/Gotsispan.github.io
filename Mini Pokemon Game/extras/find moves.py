
from re import A
from turtle import end_fill


f = open("moves.js", "r")
text = f.read()
legal_moves = []
for i in range(len(text)-3):
    if (text[i] == '"' or text[i] == "'") and text[i+1].isdigit() and (text[i+1]+text[i+2]+text[i+3]) not in legal_moves:
        legal_moves.append(text[i+1]+text[i+2]+text[i+3])
f.close()
f2 = open("calculatedamage.js")
text = f2.read()
for i in range(len(text)-3):
    if (text[i] == '"' or text[i] == "'") and text[i+1].isdigit() and (text[i+1]+text[i+2]+text[i+3]) not in legal_moves:
        legal_moves.append(text[i+1]+text[i+2]+text[i+3])
print(legal_moves)
f2.close()

f3 = open("pokemonlist.txt", "r")
Lines = f3.readlines()
arrayy = ""
for line in range(len(Lines)):
    counter = 0
    word = ""
    for i in range(len(Lines[line])):
        if Lines[line][i] == ',':
            counter = counter + 1
        if counter == 1 and Lines[line][i] != ',':
            word = word + Lines[line][i]
        if counter > 1: 
            break
    if 'Mega' in word:
        print('haha')
    else:
        arrayy = arrayy + '"' + word + '",'
f3.close()
print(arrayy)