import {createPool} from 'mysql2/promise';

const db = createPool({
  host: 'ls-02e56ccb10b1ad6a44e7dcf6f063d5398100a8ab.cokew61rfnye.us-east-2.rds.amazonaws.com', // Cambia esto si tu base de datos está en un host diferente
  user: 'dbmasteruser', // Reemplaza con el nombre de usuario de tu base de datos
  password: '-aPa0-kLq1yMA:=k2B:^NOC{wg`edTRI', // Reemplaza con la contraseña de tu base de datos
  database: 'bd_prueba', // Reemplaza con el nombre de tu base de datos
});

export default async function handler(req, res) {
  const [rows] = await db.query("Select * from prT");
  return res.status(200).json(rows)
}
