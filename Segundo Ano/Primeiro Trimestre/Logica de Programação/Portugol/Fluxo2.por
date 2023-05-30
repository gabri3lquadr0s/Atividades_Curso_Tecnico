programa
{
	
	funcao inicio()
	{
		eficiencia()
	}
	funcao eficiencia(){
		real litros, distancia, consumo
		escreva("Qual a distância percorrida?\n")
		leia(distancia)
		escreva("Quantos litros seu carro gastou?\n")
		leia(litros)
		consumo = distancia/litros
		escreva("A autonomia do seu veículo é de "+consumo+"Km/L")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 327; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */