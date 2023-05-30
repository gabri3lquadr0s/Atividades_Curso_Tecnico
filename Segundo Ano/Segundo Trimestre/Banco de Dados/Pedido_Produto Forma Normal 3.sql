CREATE TABLE pedido(
    id_pedido_pk VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_pedido_pk)
);

CREATE TABLE cliente(
    nome_cliente_pk VARCHAR(50) NOT NULL,
    PRIMARY KEY (nome_cliente_pk)
);

CREATE TABLE pedido_cliente(
    id_pedido_fk VARCHAR(50) NOT NULL,
    nome_cliente_fk VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_pedido_fk) REFERENCES pedido (id_pedido_pk),
    FOREIGN KEY (nome_cliente_fk) REFERENCES cliente (nome_cliente_pk)
);

CREATE TABLE produto(
    id_produto_pk VARCHAR(10) NOT NULL,
    nome_produto VARCHAR(50) NOT NULL,
    categoria_produto VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_produto_pk)
);

CREATE TABLE pedido_produto(
    id_pedido_fk VARCHAR(10) NOT NULL,
    id_produto_fk VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_pedido_fk) REFERENCES pedido (id_pedido_pk),
    FOREIGN KEY (id_produto_fk) REFERENCES produto (id_produto_pk)
);

INSERT INTO pedido (id_pedido_pk)
VALUES ('1')

INSERT INTO cliente (nome_cliente_pk)
VALUES ('Arthur')

INSERT INTO pedido_cliente (id_pedido_fk, nome_cliente_fk)
VALUES ('1', 'Arthur')

INSERT INTO produto (id_produto_pk, nome_produto, categoria_produto)
VALUES ('1', 'arroz', 'comida')

INSERT INTO pedido_produto (id_pedido_fk, id_produto_fk)
VALUES ('1','1')

SELECT * FROM pedido
SELECT * FROM cliente
SELECT * FROM pedido_cliente
SELECT * FROM produto
SELECT * FROM pedido_produto
