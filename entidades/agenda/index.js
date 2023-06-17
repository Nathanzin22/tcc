const AgendaDao = require('./agendadao');
const Agenda = require('./agenda');

// Criando uma instância do AgendaDao
const agendaDao = new AgendaDao();

// Criando um novo usuário
const agenda = new Agenda('2020/04/05', '02:00', 0 , 1 , 1 );

// Salvando o usuário no banco de dados
agendaDao.salvar(agenda);

// Editando um usuário existente
const agendaEditado = new Agenda('2023/03/01', '01:00', 0 , 1 , 1);
agendaDao.editar(agendaEditado);

// Buscando um usuário pelo ID
agendaDao.buscar( 1 );
