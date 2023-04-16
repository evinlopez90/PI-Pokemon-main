const { DataTypes } = require("sequelize")

 
module.exports = (Sequelize) => {
    Sequelize.define("types", {
     id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
     },
     name: {
        type: DataTypes.STRING,
        allowNull: false
     }
    },
    {timestamps: false}
    )
}