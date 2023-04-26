import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todo", "root", "password", {
    dialect: "mysql",
    host: "localhost"
})