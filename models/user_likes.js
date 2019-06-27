module.exports = (sequelize, DataTypes) => {
    const Users_likes = sequelize.define('Users_likes', {
        user_id: DataTypes.INTEGER,
        like: DataTypes.INTEGER
    }, { tableName: 'users_likes' });
    Users_likes.associate = function (models) {
        Users_likes.belongsTo(models.Users, { foreignKey: 'user_id' });
    };
    return Users_likes;
}
