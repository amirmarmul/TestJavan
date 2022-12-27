import AttachUserMember from "../../app/usecases/AttachUserMember";
import GetUserMembers from "../../app/usecases/GetUserMembers";
import RevokeUserMember from "../../app/usecases/RevokeUserMember";

export default {

    async create(req: any, res: any) {

        const { userId } = req.params;

        const { memberId } = req.body;

        const services = req.services; 

        const userDevice = await AttachUserMember(userId, memberId, services);

        return res.json(userDevice);
    },

    async get(req: any, res: any) {

        const { userId } = req.params;

        const services = req.services; 

        const userDevices = await GetUserMembers(userId, services);

        return res.json(userDevices);
    },

    async delete(req: any, res: any) {

        const { userId, memberId } = req.params;

        const services = req.services; 

        await RevokeUserMember(userId, memberId, services);

        return res.status(204).json();
    },
}