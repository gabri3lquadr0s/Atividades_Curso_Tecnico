CREATE TABLE departamento(
    id_departamento VARCHAR(10) NOT NULL,
    nome_dp VARCHAR(30) NOT NULL
    localizacao VARCHAR(30) NOT NULL,
    PRIMARY KEY (id_departamento)
);

CREATE TABLE funcionario(
    id_funcionario VARCHAR(10) NOT NULL,
    nome_funcionario VARCHAR(50) NOT NULL,
    salario FLOAT NOT NULL,
    data_admissao DATE NOT NULL,
    PRIMARY KEY (id_funcionario),
);

CREATE TABLE projeto(
    id_projeto VARCHAR(10) NOT NULL,
    nome_projeto VARCHAR(50) NOT NULL,
    data_inicio DATE NOT NULL,
    data_conclusao NOT NULL,
    PRIMARY KEY (id_projeto)
);

CREATE TABLE habilidade(
    id_habilidade VARCHAR(10) NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_habilidade)
);

CREATE TABLE funcionario_habilidade(
    id_funcionario VARCHAR(10) NOT NULL,
    id_habilidade VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_funcionario) REFERENCES funcionario (id_funcionario),
    FOREIGN KEY (id_habilidade) REFERENCES habilidade (id_habilidade)
);

CREATE TABLE funcionario_departamento(
    id_funcionario VARCHAR(10) NOT NULL,
    id_departamento VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_funcionario) REFERENCES funcionario (id_funcionario),
    FOREIGN KEY (id_departamento) REFERENCES departamento (id_departamento)
);
