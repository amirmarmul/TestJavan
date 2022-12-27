import AttachUserDevice from "../../app/usecases/AttachUserDevice";
import GetUserDevices from "../../app/usecases/GetUserDevices";
import RevokeUserDevice from "../../app/usecases/RevokeUserDevice";

export default {

    async create(req: any, res: any) {

        const { userId } = req.params;

        const { deviceId } = req.body;

        const services = req.services; 

        const userDevice = await AttachUserDevice(userId, deviceId, services);

        return res.json(userDevice);
    },

    async get(req: any, res: any) {

        const { userId } = req.params;

        const services = req.services; 

        const userDevices = await GetUserDevices(userId, services);

        return res.json(userDevices);
    },

    async delete(req: any, res: any) {

        const { userId, deviceId } = req.params;

        const services = req.services; 

        await RevokeUserDevice(userId, deviceId, services);

        return res.status(204).json();
    },
}