import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const ToDo = sequelize.define("todo_list", 
{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }



})