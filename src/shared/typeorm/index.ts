import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password', // Coloque sua senha real aqui
  database: 'postgres', // Especifica o nome do banco de dados correto
  entities: ['./dist/modules/**/typeorm/entities/*.js'],
  migrations: ['./dist/shared/typeorm/migrations/*.js'],
  cli: {
    migrationsDir: './dist/shared/typeorm/migrations',
  },
})
  .then(connection => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  })
  .catch(error => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
