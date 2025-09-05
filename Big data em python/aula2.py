#A área do retângulo
base = float(input("Digite a base do retângulo:" ))
altura = float(input("Digite a altura do retângulo:" ))
area = base * altura
print(f"A área do rentângulo é: {area}")

#Area do quadrado
lado = float(input("Digite o valor da altura"))
area = float(lado*lado)
print(f"A área do quadrado é: {area}")


#Desconto no pytohon
produto = float(input("Digite o valor do produto: "))
desconto = float(input("Digite o valor do desconto (em porcentagem): "))
calculo = produto - (produto*desconto)/100
desconto = (produto*desconto)/100
print(f"O valor do produto foi de: {calculo} reais e o valor do desconto foi de: {desconto} reais")

#O raio da circunfêrencia
pi = 3.14
raio = float(input("Digite o raio da circunferência: "))
area = pi * (raio * raio)
print (f"A area de circunferência é:{area}")

#Idade miníma 
nome = (input("Digite o seu nome"))
idade = float(input("Digita a sua idade"))
if idade >= 17: 
  print(f"Acesso liberado{nome}")
else:
    print(f"Acesso negado para{nome}")

#Salario de dev
dev = (input("Digite seu nome: "))
salario = float(input("Informe seu salário: "))
if salario <= 3000:
   print(f"Você é programador junior {dev}")

elif salario > 3000 and salario <=6000:
   print(f"Você é programador pleno {dev}")
elif salario > 6000 and salario <=15000:
   print(f"Você é programador Sênior {dev}")
else:
   print(f"Você é gerente de projetos {dev}")

#IMC
nome = (input("Digite o seu nome: "))
peso = float(input("Digite o seu peso: "))
altura = float(input("Digite a sua altura: "))
imc = peso/(altura**2)

if imc <= 18.5:
  print("Você está com classificação de MAGREZA")
elif imc >= 18.5 and imc <= 24.9:
   print("Você está com classificação de NORMAL")
elif imc >= 25.0 and imc <= 29.9:
   print("Você está com classificação de SOBREPESO")
elif imc >= 30.0 and imc <= 39.9:
   print("Você está com classificação de OBESIDADE")
elif imc > 40:
   print("Você está com classificação de OBESIDADE GRAVE")

#Listas
numeros = [1,2,3]
print(numeros[0])
print(numeros[1])
print(numeros[2])
print(numeros)

listafrutas = ["Maçã", "Banana", "Pera","Uva","Morango","Manga"]
print(listafrutas[0])
print(listafrutas[1])
print(listafrutas[2])
print(listafrutas)

listavazia = []
listavazia.append("Olá ")
listavazia.append("Mundo! ")
print(listavazia)
