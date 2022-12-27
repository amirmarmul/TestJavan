import GetDevice from '../../app/usecases/GetDevice';
import ListDevices from '../../app/usecases/ListDevices';

export default {

    async list(req: any, res: any, next: any) {
        
        const services = req.services;

        const users = await ListDevices(services);

        return res.send(users);
    },

    async get(req: any, res: any) {

        const deviceId = req.params.deviceId;

        const services = req.services; 

        const user = await GetDevice(deviceId, services);

        return res.send(user);
    },
}