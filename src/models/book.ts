import { DataTypes, Model, UUIDV4 } from 'sequelize';

import { DATABASE } from '../configs/database';

import { User } from './user';

export class Book extends Model {
    public id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Book.init({
    author: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.TIME
    },
    id: {
        autoIncrementIdentity: true,
        defaultValue: UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
    },
    page: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    publisher: {
        allowNull: false,
        type: DataTypes.STRING
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    updatedAt: {
        type: DataTypes.TIME
    },
    userId: {
        references: {
            key: 'id',
            model: User
        },
        type: DataTypes.UUID
    },
    year: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}, {
    sequelize: DATABASE,
    tableName: 'books',
    timestamps: true
});

Book.belongsTo(User, {
    foreignKey: 'userId'
});

User.hasMany(Book, {
    foreignKey: 'userId'
});
