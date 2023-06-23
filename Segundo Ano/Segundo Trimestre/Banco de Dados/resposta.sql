CREATE TABLE computadores(
    id_computador VARCHAR(3) NOT NULL,
    processador VARCHAR(20) NOT NULL,
    ram VARCHAR(10) NOT NULL,
    placa_de_video VARCHAR(20) NOT NULL,
    armazenamento VARCHAR(5) NOT NULL,
    PRIMARY KEY (id_computador)
);

CREATE TABLE clientes(
    id_cliente VARCHAR(5) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_cliente)
);

CREATE TABLE clientes_email(
    email VARCHAR(50) NOT NULL,
    id_cliente_fk VARCHAR(10) NOT NULL,
    PRIMARY KEY (email),
    FOREIGN KEY (id_cliente_fk) REFERENCES clientes (id_cliente)
);

CREATE TABLE aluguel(
    id_pedido VARCHAR(10) NOT NULL,
    data_pedido DATE NOT NULL,
    valor MONEY NOT NULL,
    id_computador_fk VARCHAR(3) NOT NULL,
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (id_computador_fk) REFERENCES (id_computador)
);

CREATE TABLE aluguel_cliente(
    id_pedido_fk VARCHAR(10) NOT NULL,
    id_cliente_fk VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_cliente_fk) REFERENCES clientes (id_cliente),
    FOREIGN KEY (id_pedido_fk) REFERENCES aluguel (id_pedido)
);

/*Sugestões de tabelas adicionais: software, funcionarios, compra de componentes, etc.*/