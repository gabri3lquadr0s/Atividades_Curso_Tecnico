CREATE TABLE navio(
    id_navio VARCHAR(10) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    tamanho VARCHAR(10) NOT NULL,
    capacidade_carregamento INT NOT NULL,
    PRIMARY KEY (id_navio)
);

CREATE TABLE container(
    id_container VARCHAR(10) NOT NULL,
    mercadoria VARCHAR(30) NOT NULL,
);

CREATE TABLE funcionario(
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    salario FLOAT NOT NULL,
    cargo VARCHAR(20) NOT NULL
    PRIMARY KEY (cpf)
);

CREATE TABLE departamento(
    id_departamento VARCHAR(3) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    PRIMARY KEY (id_departamento)
);

CREATE TABLE navio_container(
    id_container_fk VARCHAR(10) NOT NULL,
    id_navio_fk VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_container_fk) REFERENCES container (id_container),
    FOREIGN KEY (id_navio_fk) REFERENCES navio (id_navio)
);

CREATE TABLE funcionario_departamento(
    cpf_fk VARCHAR(11) NOT NULL,
    id_departamento VARCHAR(3) NOT NULL,
    FOREIGN KEY (cpf_fk) REFERENCES funcionario (cpf),
    FOREIGN KEY (id_departamento) REFERENCES departamento (id_departamento)
);