module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        // user_likes: DataTypes.INTEGER
    }, { tableName: 'users' });
    Users.associate = function (models) {
        Users.hasMany(models.Users_likes, { foreignKey: 'user_id' });
    };
    return Users;
};