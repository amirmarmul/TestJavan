export default abstract class DeviceRepository {

    abstract find(): any;
    abstract findOne(id: string): any;
}