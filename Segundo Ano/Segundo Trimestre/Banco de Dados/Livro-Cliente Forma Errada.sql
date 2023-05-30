CREATE TABLE livro(
    isbn_pk VARCHAR(13) NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    genero VARCHAR(20) NOT NULL,
    autor VARCHAR(50) NOT NULL,
    editora VARCHAR(50),
    ano_publicacao VARCHAR(4),
    livraria VARCHAR(100) NOT NULL,
    PRIMARY KEY (isbn_pk)
);

CREATE TABLE cliente(
    id_pk VARCHAR(15) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    livro_reserva VARCHAR(100) NOT NULL,
    data_nascimento VARCHAR(8) NOT NULL,
    dados_pagamento VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_pk)
);