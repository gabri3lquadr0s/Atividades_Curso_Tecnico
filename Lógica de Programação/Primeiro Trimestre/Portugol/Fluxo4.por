programa
{
	
	funcao inicio()
	{
		primos()
	}
	funcao primos(){
		inteiro digito, numero = 2, quantidade = 0
		escreva("Escreva um digito\n")
		leia(digito)
		enquanto(numero < digito){
			inteiro divisor = 0, candidato = 1
			enquanto(candidato <= numero){
				se(numero % candidato == 0){
					divisor++
					candidato++
				}
				senao{
					candidato++
				}
			}
			se(divisor == 2){
				quantidade++
				numero++
			}
			senao{
				numero++
			}
		}
	escreva("A quantidade de primos é "+quantidade)
}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 510; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */