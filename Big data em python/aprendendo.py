nome = "Daniel"
sobrenome = " Luiz"
print (nome + sobrenome) 

y = 5
z = 2

print (y + z)

a = 3
b = 4.
c = "bom dia"

print (type(a))
print (type(b))
print (type(c))

R = int(2)
S = int(2)
T = int("2")

print (R,S,T)

x = 5
 
def funcao(): 
    x = 3
    print ("O valor da variável local é:", x)
funcao()
print ("O valor da variável global é:", x)

nome = input ("Digite o seu nome: ")
print ("Olá", nome)          

nota1 =  float(input ("Digite a nota1: "))
nota2 =  float(input ("Digite a nota2: "))
media = ((nota1+nota2)/2)
print (f"Olá, aluno {nome}")
print (f"sua média é {media}")

nome = "Gabriel"
pesquisa = "abri"

print (pesquisa in nome) 
print ("jonas" in nome) 
print ("z" not in nome) 
  