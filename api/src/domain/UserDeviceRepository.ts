import UserDevice from './UserDevice';

export default abstract class UserRepository {

    abstract findByUserId(id: string): any;
    abstract save(entity: UserDevice): any;
    abstract remove(entity: UserDevice): any;
}