CREATE TABLE usuarios(
    nome VARCHAR (100),
    matricula INT,
    curso VARCHAR(100)
);

INSERT INTO usuarios(nome, curso, matricula) VALUES(
    "Joao Vitor",
    "Bacharelado em Ciencia e Tecnologia",
    172027
);

/* selecionando com condição*/

SELECT * FROM usuarios WHERE matricula = 172027;
SELECT * FROM usuarios WHERE nome = "Joao Vitor";
SELECT * FROM usuarios WHERE curso = "Bacharelado em Ciencia e Tecnologia";


INSERT INTO usuarios(nome, curso, matricula) VALUES(
    "Joao Vitor Rodrigues Pessoa",
    "Ciencia e Tecnologia",
    17
);

/* deletando registros */

DELETE FROM usuarios WHERE matricula = 172027;

/* atualizando na tabela */

UPDATE usuarios SET matricula = 172027 WHERE nome = "Joao Vitor Rodrigues Pessoa";


/* criando models com sequilize */

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.sync()

/* criando novo registro pelo sequilize */

Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "xaxaxaxaxaxaxax"
})

/*biblioteca body parser */