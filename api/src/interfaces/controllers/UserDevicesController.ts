import AttactUserDevice from "../../app/usecases/AttachUserDevice";
import GetUserDevices from "../../app/usecases/GetUserDevices";
import RevokeUserDevice from "../../app/usecases/RevokeUserDevice";

export default {

    async create(req: any, res: any) {

        const { userId } = req.params;

        const { deviceId } = req.body;

        const services = req.services; 

        const userDevice = await AttactUserDevice(userId, deviceId, services);

        return res.send(userDevice);
    },

    async get(req: any, res: any) {

        const { userId } = req.params;

        const services = req.services; 

        const userDevices = await GetUserDevices(userId, services);

        return res.send(userDevices);
    },

    async delete(req: any, res: any) {

        const { userId, deviceId } = req.params;

        console.log(req.params);

        const services = req.services; 

        await RevokeUserDevice(userId, deviceId, services);

        return res.status(204).send();
    },
}