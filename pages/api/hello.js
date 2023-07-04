import {createPool} from 'mysql2/promise';

const db = createPool({
  host: 'ls-f4353aa95cfa241d9550924e8496068af95245d7.czyahyrs8b5y.eu-central-1.rds.amazonaws.com', // Cambia esto si tu base de datos está en un host diferente
  user: 'dbmasteruser', // Reemplaza con el nombre de usuario de tu base de datos
  password: 'OAbP746a', // Reemplaza con la contraseña de tu base de datos
  database: 'BRYAN_BAC', // Reemplaza con el nombre de tu base de datos
});

export default async function handler(req, res) {
  const [rows] = await db.query("Select * from personas");
  return res.status(200).json(rows)
}
