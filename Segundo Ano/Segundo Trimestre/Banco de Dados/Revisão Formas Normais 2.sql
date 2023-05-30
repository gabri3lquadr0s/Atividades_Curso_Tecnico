CREATE TABLE produto(
    id_produto VARCHAR(10) NOT NULL,
    nome_produto VARCHAR(50) NOT NULL,
    categoria VARCHAR(20) NOT NULL,
    preco_unitario FLOAT NOT NULL,
    PRIMARY KEY (id_produto)
);

CREATE TABLE cliente(
    id_cliente VARCHAR(10) NOT NULL,
    nome_cliente VARCHAR(50) NOT NULL,
    rua VARCHAR(50),
    numero_casa INT,
    bairro VARCHAR(20),
    cidade VARCHAR(20),
    estado VARCHAR(2),
    PRIMARY KEY (id_cliente)
);

CREATE TABLE telefone(
    telefone INT NOT NULL,
    id_cliente VARCHAR(10) NOT NULL,
    PRIMARY KEY (telefone),
    FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
);

CREATE TABLE pedido(
    id_pedido VARCHAR(10) NOT NULL,
    id_produto VARCHAR(10) NOT NULL,
    quantidade INT NOT NULL,
    data_pedido DATE NOT NULL,
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produto (id_produto),
);

CREATE TABLE pedido_cliente(
    id_pedido VARCHAR(10) NOT NULL,
    id_cliente VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido),
    FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
);

