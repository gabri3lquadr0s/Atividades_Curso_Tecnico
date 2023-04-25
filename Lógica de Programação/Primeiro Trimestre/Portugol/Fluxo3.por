programa
{
	
	funcao inicio()
	{
		contadorPares()
	}
	funcao contadorPares(){
	inteiro digito, quantidade = 0, numero = 1
	escreva("Escreva um número\n")
	leia(digito)
	faca{
		se(numero % 2 == 0){
			quantidade++
			numero++
		}
		senao{
			numero++
		}
	}
	enquanto(numero <= digito)
	escreva("A quantidade de numeros pares é "+quantidade)
	
}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 349; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */