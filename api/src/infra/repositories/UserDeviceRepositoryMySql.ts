import sequelize from '../persistance/sequelize/sequelize';
import UserDevice from '../../domain/UserDevice';
import UserDeviceRepository from '../../domain/UserDeviceRepository';

export default class extends UserDeviceRepository {
    private db; 
    private model;

    constructor() {
        super();

        this.db = sequelize;
        this.model = this.db.model('user_device');
    }

    async findByUserId(id: string) {

        const seqUserDevices = await this.model.findAll({ where: { userId: id }});

        return seqUserDevices.map((seqUserDevice: any) => {
            return new UserDevice(
                seqUserDevice.userId,
                seqUserDevice.deviceId,
            );
        })
    }

    async save(entity: UserDevice) {
        const { userId, deviceId } = entity;

        const seqUserDevice = await this.model.create({ userId, deviceId });
        
        await seqUserDevice.save();

        return new UserDevice(
            seqUserDevice.userId, 
            seqUserDevice.deviceId,
        )
    }

    async remove(entity: UserDevice) {
        const { userId, deviceId } = entity;
        
        const seqUserDevice = await this.model.findOne({ where: { userId, deviceId } });

        if (seqUserDevice) {
            return seqUserDevice.destroy();
        }

        return false;
    }
}