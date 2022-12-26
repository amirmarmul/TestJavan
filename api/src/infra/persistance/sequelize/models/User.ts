module.exports = (sequelize: any, DataTypes: any) => {

    sequelize.define('user', {
        uid: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
    }, {
        timestamps: false,
    });
};
