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
                seqUser.uid,
                seqUser.name,
                seqUser.gender,
                seqUser.parent,
            );
        })
    }

    async findOne(id: string) {
        const seqUser = await this.model.findOne({ where: { uid: id } });
        
        return new User(
            seqUser.uid, 
            seqUser.name,
            seqUser.gender,
            seqUser.parent,
        );
    }

    async save(entity: User) {
        const { id, name, gender } = entity;

        const seqUser = await this.model.create({ uid: id, name, gender });
        
        await seqUser.save();

        return new User(
            seqUser.uid, 
            seqUser.name,
            seqUser.gender,
            seqUser.parent,
        )
    }

    async update(entity: User) {
        const seqUser = await this.model.findOne({ where: { uid: entity.id } });

        if (!seqUser) return false;

        const { name, gender } = entity;

        await seqUser.update({ name, gender });

        return new User(
            seqUser.uid,
            seqUser.name,
            seqUser.gender,
            seqUser.parent,
        )
    }

    async remove(id: string) {
        const seqUser = await this.model.findOne({ where: { uid: id } });

        if (seqUser) {
            return seqUser.destroy();
        }

        return false;
    }

    async attachMember(user: User, member: User) {

        const seqUser = await this.model.findOne({ where: { uid: member.id } });

        if (!seqUser) return false;

        await seqUser.update({ parent: user.id });

        return new User(
            seqUser.uid,
            seqUser.name,
            seqUser.gender,
            seqUser.parent,
        )
    }

    async revokeMember(user: User, member: User) {

        const seqUser = await this.model.findOne({ where: { uid: member.id } });

        if (!seqUser) return false;

        await seqUser.update({ parent: null });

        return new User(
            seqUser.uid,
            seqUser.name,
            seqUser.gender,
            seqUser.parent,
        )
    }

    async findMembers(id: string) {
        const seqUsers = await this.model.findAll({ where: { parent: id }});

        return seqUsers.map((seqUser: any) => {
            return new User(
                seqUser.uid,
                seqUser.name,
                seqUser.gender,
                seqUser.parent,
            );
        })
    }
}