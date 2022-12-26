import CreateUser from '../../app/usecases/CreateUser';
import DeleteUser from '../../app/usecases/DeleteUser';
import GetUser from '../../app/usecases/GetUser';
import ListUsers from '../../app/usecases/ListUsers';
import UpdateUser from '../../app/usecases/UpdateUser';

export default {

    async list(req: any, res: any, next: any) {
        
        const services = req.services;

        const users = await ListUsers(services);

        return res.send(users);
    },

    async create(req: any, res: any) {

        const { name } = req.body;

        const services = req.services; 

        const user = await CreateUser(name, services);

        return res.send(user);
    },

    async get(req: any, res: any) {

        const userId = req.params.userId;

        const services = req.services; 

        const user = await GetUser(userId, services);

        return res.send(user);
    },

    async update(req: any, res: any) {

        const userId = req.params.userId;

        const { name } = req.body;

        const services = req.services; 

        const user = await UpdateUser(userId, name, services);

        return res.send(user);
    },

    async delete(req: any, res: any) {

        const userId = req.params.userId;

        const services = req.services; 

        await DeleteUser(userId, services);

        return res.status(204).send();
    },
}