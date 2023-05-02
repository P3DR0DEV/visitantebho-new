import { Schema, model } from "mongoose"

const visitorSchema = new Schema({
  STAMP: {
    type: String,
  },
  HOST: {
    type: String,
  },
  NOME: {
    type: String,
  },
  CPF: {
    type: String,
  },
})

export const Visitor = model("", visitorSchema, "Dados")
