module.exports = (sequelize: any, DataTypes: any) => {

    sequelize.define('user_device', {
        userId: {
            type: DataTypes.STRING
        },
        deviceId: {
            type: DataTypes.STRING
        },
    }, {
        timestamps: false,
    });
};
