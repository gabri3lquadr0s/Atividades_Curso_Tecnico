programa
{
	
	funcao inicio()
	{
		media()
	}
	funcao media(){
		inteiro n, novoNumero, i
		real soma = 0, resultado

		faca{
			escreva("Digite quantos números você quer digitar\n")
			leia(n)
		}enquanto(n < 2)
		
		para(i = 1; i <= n; i++){
			escreva("Digite um número")
			leia(novoNumero)
			soma = soma + novoNumero
		}
		resultado = soma/n
		escreva(resultado)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 374; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */