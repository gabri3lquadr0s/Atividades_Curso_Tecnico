CREATE TABLE empresa(
    nome VARCHAR(50) NOT NULL,
    cnpj_pk VARCHAR(14) NOT NULL,
    regiao_atendida VARCHAR(50) NOT NULL,
    PRIMARY KEY (cnpj_pk)
);

CREATE TABLE parada(
    id_pk VARCHAR(15) NOT NULL,
    localizacao VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_pk)
);

CREATE TABLE terminal(
    id_pk VARCHAR(12) NOT NULL,
    localizacao VARCHAR(100) NOT NULL,
    empresa_fk VARCHAR(14) NOT NULL,
    PRIMARY KEY (id_pk),
    FOREIGN KEY (empresa_fk) REFERENCES empresa (cnpj_pk)
);

CREATE TABLE linha(
    nome_linha VARCHAR(50) NOT NULL,
    id_pk VARCHAR(12) NOT NULL,
    regiao VARCHAR(30) NOT NULL,
    paradas_fk VARCHAR(200) NOT NULL,
  	empresa_fk VARCHAR(14) NOT NULL,
    PRIMARY KEY (id_pk),
    FOREIGN KEY (paradas_fk) REFERENCES parada (id_pk),
  	FOREIGN KEY (empresa_fk) REFERENCES empresa (cnpj_pk)
);

CREATE TABLE onibus(
    id_pk VARCHAR(12) NOT NULL,
    linha_fk VARCHAR(12) NOT NULL,
    placa VARCHAR(7) NOT NULL,
    localizacao_atual VARCHAR(100) NOT NULL,
    preco_passagem VARCHAR(5) NOT NULL,
    empresa_dona_fk VARCHAR(14) NOT NULL,
    horario_saida VARCHAR(5) NOT NULL,
    adaptado_para_cadeirante VARCHAR(3) NOT NULL,
    terminal_fk VARCHAR(12) NOT NULL,
    PRIMARY KEY (id_pk),
    FOREIGN KEY (linha_fk) REFERENCES linha (id_pk),
    FOREIGN KEY (empresa_dona_fk) REFERENCES empresa (cnpj_pk),
    FOREIGN KEY (terminal_fk) REFERENCES terminal (id_pk)
);

CREATE TABLE usuario(
    nome VARCHAR(50) NOT NULL,
    cpf_pk VARCHAR(15) NOT NULL,
    horario_marcado VARCHAR(5),
    lugares_marcados VARCHAR(300),
    lista_onibus_fk VARCHAR(12),
    PRIMARY KEY (cpf_pk),
    FOREIGN KEY (lista_onibus_fk) REFERENCES onibus (id_pk) 
);

INSERT INTO parada (id_pk, localizacao)
VALUES ('896513513322469', '-27.682522580467573, -48.71048573143034')

INSERT INTO empresa (nome, cnpj_pk, regiao_atendida)
VALUES ('Lotur', '88541230697102', 'Grande Florianópolis')

INSERT INTO terminal (id_pk, localizacao, empresa_fk)
VALUES ('452103698712', '-27.688328945448887, -48.714679174518764', '88541230697102')

INSERT INTO linha (nome_linha, id_pk, regiao, paradas_fk, empresa_fk)
VALUES ('Alto Aririu', '802149637411', 'Palhoça', '896513513322469', '88541230697102')

INSERT INTO onibus (id_pk, linha_fk, placa, localizacao_atual, preco_passagem, empresa_dona_fk, horario_saida, adaptado_para_cadeirante, terminal_fk)
VALUES ('554103697123', '802149637411', 'ABC1234', '-27.681548621234434, -48.708434068528646', '4,90', '88541230697102', '07:30', 'Sim', '452103698712')

INSERT INTO usuario (nome, cpf_pk, horario_marcado, lugares_marcados, lista_onibus_fk)
VALUES ('Marcos', '21413062014', '8:30', '-27.6790947537959, -48.69189728230757', '554103697123')

SELECT * FROM empresa
SELECT * FROM parada
SELECT * FROM linha
SELECT * FROM terminal
SELECT * FROM onibus
SELECT * FROM usuario