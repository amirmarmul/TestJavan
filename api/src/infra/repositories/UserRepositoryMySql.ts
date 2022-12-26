import sequelize from '../persistance/sequelize/sequelize';
import User from '../../domain/User';
import UserRepository from '../../domain/UserRepository';

export default class extends UserRepository {
    private db; 
    private model;

    constructor() {
        super();

        this.db = sequelize;
        this.model = this.db.model('user');
    }

    async find() {
        const seqUsers = await this.model.findAll();

        return seqUsers.map((seqUser: any) => {
            return new User(
                seqUser.id,
                seqUser.name,
            );
        })
    }

    async findOne(id: string) {
        const seqUser = await this.model.findByPk(id);

        return new User(
            seqUser.id, 
            seqUser.name,
        );
    }

    async save(entity: User) {
        const { id, name } = entity;

        const seqUser = await this.model.create({ id, name });
        
        await seqUser.save();

        return new User(
            seqUser.id, 
            seqUser.name,
        )
    }

    async update(entity: User) {
        const seqUser = await this.model.findByPk(entity.id);

        if (!seqUser) return false;

        const { name } = entity;

        await seqUser.update({ name });

        return new User(
            seqUser.id,
            seqUser.name,
        )
    }

    async remove(id: string) {
        const seqUser = await this.model.findByPk(id);

        if (seqUser) {
            return seqUser.destroy();
        }

        return false;
    }
}