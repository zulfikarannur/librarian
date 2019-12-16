import { DataTypes, Model, UUIDV4 } from 'sequelize';

import { DATABASE } from '../configs/database';

export class User extends Model {
    public id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    createdAt: {
        type: DataTypes.TIME
    },
    id: {
        autoIncrementIdentity: true,
        defaultValue: UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
    },
    name: {
        type: DataTypes.STRING
    },
    updatedAt: {
        type: DataTypes.TIME
    }
}, {
    sequelize: DATABASE,
    tableName: 'users',
    timestamps: true
});
