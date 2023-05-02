import { MongoClient } from "mongodb"
import { config } from "dotenv"
config()

function TimeRegister() {
  const local = new Date()
  const day = local.getDate()
  const month = local.getMonth() + 1
  const year = local.getFullYear()
  const hour = local.getHours()
  const minute = local.getMinutes()

  month < 10 ? `0${month}` : month

  return `${day}/${month}/${year}  ${hour}:${minute}`
}

export const insertMongo = async (
  insert_nome: string,
  insert_cpf: string,
  insert_host: string
) => {
  const insert_stamp = TimeRegister()
  const client: MongoClient = new MongoClient(
    process.env.INSERT_MONGO as string
  )
  await client.connect()
  const obj = {
    NOME: insert_nome,
    CPF: insert_cpf,
    STAMP: insert_stamp,
    HOST: insert_host,
  }
  client.db("myDb").collection("Dados").insertOne(obj)
}
