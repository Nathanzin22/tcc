const pool = require('../../db/dbconexão');

class AgendaDao {
  async salvar(agenda) {
    const query = 'INSERT INTO agendas (data, horario, disponibilidade, user_id) VALUES ($1, $2, $3, $4)';
    const values = [agenda.data, agenda.horario, agenda.disponibilidade,  agenda.user_id,];

    try {
      await pool.query(query, values);
      console.log('Usuário salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  }

 /*  async deletar(data) {
    const query = 'DELETE FROM agendas WHERE data = $1';
    const values = [data];

    try {
      await pool.query(query, values);
      console.log('Usuário deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    } */
 /*  } */

  async editar(agenda) {
    const query = 'UPDATE agendas SET data = $1, horario = $2,disponibilidade = $3, user_id = $4 WHERE data = $1';
    const values = [agenda.data, agenda.horario, agenda.disponibilidade,  agenda.user_id];

    try {
      await pool.query(query, values);
      console.log('Usuário editado com sucesso!');
    } catch (error) {
      console.error('Erro ao editar usuário:', error);
    }
  }

  async buscar(user_id) {
    const query = 'SELECT * FROM agendas WHERE user_id = $1';
    const values = [user_id];

    try {
      const result = await pool.query(query, values);
      const agenda = result.rows[0];
      console.log('Usuário encontrado:', agenda);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  }
}

module.exports = AgendaDao;
