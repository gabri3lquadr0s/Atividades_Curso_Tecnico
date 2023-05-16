CREATE TABLE empresa(
    id_empresa_pk VARCHAR(13) NOT NULL,
    rua_empresa VARCHAR(100) NOT NULL,
    bairro_empresa VARCHAR(100) NOT NULL,
    cidade_empresa VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_empresa_pk)
);

CREATE TABLE empregado(
    id_empregado_pk VARCHAR(10) NOT NULL,
    nome_empregado VARCHAR(50) NOT NULL,
    horas_semanais VARCHAR(4) NOT NULL,
    PRIMARY KEY (id_empregado_pk)
);

CREATE TABLE empresa_empregado(
    id_empresa_fk VARCHAR(13) NOT NULL,
    id_empregado_fk VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_empresa_fk) REFERENCES empresa (id_empresa_pk),
    FOREIGN KEY (id_empregado_fk) REFERENCES empregado (id_empregado_pk)
);