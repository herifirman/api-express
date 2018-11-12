const Sequelize = require("sequelize")
const db = require ("../database/db")

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrenment: true
        },
        nama_depan: {
            type : Sequelize.STRING
        },
        nama_belakang: {
            type : Sequelize.STRING
        },
        email: {
            type : Sequelize.STRING
        },
        password: {
            type : Sequelize.STRING
        },
        buat: {
            type : Sequelize.DATE,
            defaultValue : Sequelize.NOW
        }
    },
        {
            timestamps: false
        }
)