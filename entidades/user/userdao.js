const pool = require('../../db/dbconexão');

class UserDao {
  async salvar(usuario) {
    const query = 'INSERT INTO users (nome, cpf, email, profissao, telefone) VALUES ($1, $2, $3, $4, $5)';
    const values = [usuario.nome, usuario.cpf, usuario.email, usuario.profissao, usuario.telefone];

    try {
      await pool.query(query, values);
      console.log('Usuário salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  }

  async deletar(cpf) {
    const query = 'DELETE FROM users WHERE cpf = $1';
    const values = [cpf];

    try {
      await pool.query(query, values);
      console.log('Usuário deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  }

  async editar(usuario) {
    const query = 'UPDATE users SET nome = $1, cpf= $2, email = $3, profissao = $4 WHERE telefone = $5';
    const values = [usuario.nome, usuario.cpf, usuario.email, usuario.profissao, usuario.telefone];

    try {
      await pool.query(query, values);
      console.log('Usuário editado com sucesso!');
    } catch (error) {
      console.error('Erro ao editar usuário:', error);
    }
  }

  async buscar(cpf) {
    const query = 'SELECT * FROM users WHERE cpf = $1';
    const values = [cpf];

    try {
      const result = await pool.query(query, values);
      const usuario = result.rows[0];
      console.log('Usuário encontrado:', usuario);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  }
}

module.exports = UserDao;
