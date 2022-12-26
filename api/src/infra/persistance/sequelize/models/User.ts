module.exports = (sequelize: any, DataTypes: any) => {

    sequelize.define('user', {
        
        name: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
    }, {
        // 
    });
};
