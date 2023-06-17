const pool = require('./dbconexão');

async function createTables() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      cpf VARCHAR(11) NOT NULL,
      email VARCHAR(100) NOT NULL,
      profissao VARCHAR(100) NOT NULL,
      telefone VARCHAR(20) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS agendas (
      id SERIAL PRIMARY KEY,
      disponibilidade BOOLEAN NOT NULL,
      data DATE NOT NULL,
      horario TIME NOT NULL,
      user_id INTEGER REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS tags (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log('Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  }
}

createTables();
