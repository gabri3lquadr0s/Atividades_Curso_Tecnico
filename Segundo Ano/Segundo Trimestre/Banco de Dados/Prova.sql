CREATE TABLE cliente(
    cpf VARCHAR(15) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (cpf)
);

CREATE TABLE email_aluno(
    email VARCHAR(50) NOT NULL,
    cpf_fk VARCHAR(15) NOT NULL,
    PRIMARY KEY (email),
    FOREIGN KEY (cpf_fk) REFERENCES cliente (cpf)
);

CREATE TABLE pagamento(
    numero_cartao VARCHAR(15),
    tipo VARCHAR(10),
    pin_cartao VARCHAR(5),
    PRIMARY KEY (numero_cartao)
);

CREATE TABLE cliente_pagamento(
    cpf_fk VARCHAR(15) NOT NULL,
    numero_cartao_fk VARCHAR(15),
    FOREIGN KEY (cpf_fk) REFERENCES cliente (cpf),
    FOREIGN KEY (numero_cartao_fk) REFERENCES pagamento (numero_cartao)
);

CREATE TABLE funcionario(
    cpf VARCHAR(15) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    rua VARCHAR(50) NOT NULL,
    bairro VARCHAR(30) NOT NULL,
    cidade VARCHAR(30) NOT NULL,
    salario VARCHAR(10) NOT NULL,
    email_institucional VARCHAR(50) NOT NULL,
    PRIMARY KEY (cpf)
);

CREATE TABLE departamento(
    id_departamento VARCHAR(5) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    PRIMARY KEY (id_departamento)
);

CREATE TABLE funcionario_departamento(
    id_departamento_fk VARCHAR(5) NOT NULL,
    cpf_fk VARCHAR(15) NOT NULL,
    FOREIGN KEY (id_departamento_fk) REFERENCES departamento (id_departamento),
    FOREIGN KEY (cpf_fk) REFERENCES funcionario (cpf)
);

CREATE TABLE curso(
    id_curso VARCHAR(10) NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    valor VARCHAR(10) NOT NULL,
    duracao_horas VARCHAR(5),
    PRIMARY KEY (id_curso)
);

CREATE TABLE categoria_curso(
    categoria VARCHAR(30) NOT NULL,
    id_curso_fk VARCHAR(10) NOT NULL,
    PRIMARY KEY (categoria),
    FOREIGN KEY (id_curso_fk) REFERENCES curso (id_curso)
);

INSERT INTO cliente (cpf, nome)
VALUES('1234567890','Marcos Silva'),
	  ('0987654321','Castro Alves'),
      ('7890123456','Renato Russo')
      
INSERT INTO pagamento (numero_cartao, tipo, pin_cartao)
VALUES('121212121212','Débito','345'),
      ('767676767676','Crédito','017'),
      ('454545454545','Crédito','908')
      
INSERT INTO cliente_pagamento (cpf_fk, numero_cartao_fk)
VALUES('1234567890','121212121212'),
      ('0987654321','767676767676'),
      ('7890123456','454545454545')
      
INSERT INTO funcionario (cpf, nome, rua, bairro, cidade, salario, email_institucional)
VALUES('8978943133', 'João Silva', 'Rua Rendeiras', 'Campinas', 'São José', '1200', 'joao.silva@empresa.org.br'),
      ('1235664367', 'Carlos Mano', 'Rua Aleatoria', 'Ribeirão da Ilha', 'Florianópolis', '3100', 'carlos.mano@empresa.org.br'),
      ('4567898567', 'Roberto Alberto', 'Rua do Centro', 'Centro', 'Florianópolis', '2000', 'roberto.alberto@empresa.org.br')
  
INSERT INTO email_aluno (email, cpf_fk)
VALUES('marcos.silva34@mail.com', '1234567890'),
	  ('alvescastro@mail.com','0987654321'),
      ('renatinhodalegiao@mail.com','7890123456')
      
INSERT INTO departamento (id_departamento, nome, descricao)
VALUES('1','Vendas','A gente vende curso'),
	  ('2','Cordenação de Curso', 'Cuidamos dos cursos'),
      ('3','Diretoria', 'A gente manda no pessoal')
      
INSERT INTO funcionario_departamento (id_departamento_fk, cpf_fk)
VALUES('1','8978943133'),
      ('2','1235664367'),
      ('3','4567898567')
      
INSERT INTO curso (id_curso, titulo, descricao, valor, duracao_horas)
VALUES('1','Java','Aprender Java e Frameworks Rápido','127,90','100'),
      ('2','PHP','Aprender a desenvolver web com PHP','89,59','110'),
      ('3','C++','Você vai sofrer com C++','310,99','200')
      
INSERT INTO categoria_curso (categoria, id_curso_fk)
VALUES('Cursos em Java', '1'),
      ('Web','2'),
      ('Backend','3')
      
SELECT * FROM cliente
SELECT * FROM pagamento
SELECT * FROM cliente_pagamento
SELECT * FROM email_aluno
SELECT * FROM funcionario
SELECT * FROM departamento
SELECT * FROm funcionario_departamento
SELECT * FROM curso
SELECT * FROM categoria_curso

