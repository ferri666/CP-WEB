print("INSERTE IBAN:")
x=input()
long=len(x)

codis= {
    "0":"EEUU",
    "380":"Bulgaria",
    "50":"Inglaterra",
    "539":"Irlanda",
    "560":"Portugal",
    "70":"Noruega",
    "759":"Venezuela",
    "850":"Cuba",
    "890":"India"
}

total = 0

def check_nationality(x,codis):
    for c in codis.keys():
        if (c == x[0] or c == x[:2] or c==x[:3]):
            return codis[c]
    return "Desconocido"
if (long != 8 and long != 13):
    print("NO")
else:
    it = 1
    for c in x:
        if (it==long):
            num = 10 - (total%10)
            if (int(c)==num):
                print("SÍ ", end="")
                if (long==13):
                    print(check_nationality(x, codis))
            else:
                print("NO")
            break
        if ((it%2==1 and long == 8) or (it%2==0 and long==13)):
            total += int(c) * 3
        else:
            total += int(c)
        it +=1