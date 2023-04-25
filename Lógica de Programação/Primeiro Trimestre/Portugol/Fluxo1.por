programa
{
	funcao inicio()
	{
		transacao()
	}
	funcao transacao(){
		real preco, valorPago, diferenca
		escreva("Qual o preço a pagar\n")
		leia(preco)
		escreva("Qual o valor pago pelo cliente\n")
		leia(valorPago)
		se(preco > valorPago){
			diferenca = preco - valorPago
			escreva("Ainda falta "+diferenca+" para pagar")
		}
		senao se(preco == valorPago){
			escreva("Obrigado, e volte sempre")
		}
		senao se(preco < valorPago){
			diferenca = valorPago - preco
			escreva("Obrigado e volte sempre!\nSeu troco é de "+diferenca)
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 545; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */