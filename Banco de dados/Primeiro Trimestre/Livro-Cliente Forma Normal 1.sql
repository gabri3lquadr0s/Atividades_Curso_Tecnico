CREATE TABLE livro(
    isbn_pk VARCHAR(13) NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    autor VARCHAR(50) NOT NULL,
    editora VARCHAR(50),
    ano_publicacao VARCHAR(4),
    /*Referente ao atributo livraria*/
    franquia_livraria VARCHAR(50) NOT NULL,
    secao_livraria VARCHAR(30) NOT NULL,
    prateleira_livraria VARCHAR(30) NOT NULL,
    /**/
    PRIMARY KEY (isbn_pk)
);

CREATE TABLE genero(
    isbn_pk_fk VARCHAR(13) NOT NULL,
    genero_pk VARCHAR(20) NOT NULL,
    FOREIGN KEY (isbn_pk_fk) REFERENCES livro (isbn_pk)
);

CREATE TABLE cliente(
    id_pk VARCHAR(15) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    data_nascimento VARCHAR(8) NOT NULL,
    email VARCHAR(50) NOT NULL,
    /*Referente ao atributo dados_pagamento*/
    numero_cartao VARCHAR(16) NOT NULL,
    dono_cartao VARCHAR(30) NOT NULL,
    cpf_dono VARCHAR(15) NOT NULL,
    codigo_seguranca VARCHAR(3) NOT NULL,
    /**/
    PRIMARY KEY (id_pk)
);

CREATE TABLE livro_reserva(
    codigo_reserva_pk VARCHAR(13) NOT NULL,
    id_pk_fk VARCHAR(15) NOT NULL,
    isbn_pk_fk VARCHAR(13) NOT NULL,
    PRIMARY KEY (codigo_reserva_pk),
    FOREIGN KEY (id_pk_fk) REFERENCES cliente (id_pk),
    FOREIGN KEY (isbn_pk_fk) REFERENCES livro (isbn_pk)
);
