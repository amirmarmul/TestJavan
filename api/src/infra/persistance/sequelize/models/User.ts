module.exports = (sequelize: any, DataTypes: any) => {

    sequelize.define('user', {
        uid: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        parent: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: false,
    });
};
