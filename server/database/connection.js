import { DB } from '../../config'
import Sequelize from 'sequelize'

let sequelize

if (DB.username && DB.password) {
  sequelize = new Sequelize(DB.database, DB.username, DB.password, {
    host: DB.host,
    dialect: 'postgres'
  });
} else {
  console.log('DB_USERNAME and/or DB_PASSWORD are not defined, skipping db connection')
}

export default sequelize
