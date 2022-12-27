import User from './User';

export default abstract class UserRepository {

    abstract find(): any;
    abstract findOne(id: string): any;
    abstract save(entity: User): any;
    abstract update(entity: User): any;
    abstract remove(id: string): any;
    abstract attachMember(user: User, member: User): any;
    abstract revokeMember(user: User, member: User): any;
    abstract findMembers(id: string): any;
}