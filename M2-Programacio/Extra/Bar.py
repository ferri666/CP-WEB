f=open("input.txt")

D = 0
A = 0
M = 0
I = 0
C = 0

for l in f:

    if l[0]== 'D':
       d = l.split(" ")
       D = float(d[1])
    elif l[0]== 'A':
       a = l.split(" ")
       A = float(a[1])
    elif l[0]== 'M':
       m = l.split(" ")
       M = float(m[1])
    elif l[0]== 'I':
       i = l.split(" ")
       I = float(i[1])
    elif l[0] == 'C':
       c = l.split(" ")
       C = float(c[1])
    if l[0]=='N':
       print("WHAT")