import UserDevice from '../../domain/UserDevice';

export default async function AttactUserDevice(
    userId: string,
    deviceId: string, 
    { userRepository, userDeviceRepository, deviceRepository }: any
) {
    const user = await userRepository.findOne(userId);

    const device = await deviceRepository.findOne(deviceId);
    
    const userDevice = new UserDevice(
        user.id,
        String(device.id),
    )

    return userDeviceRepository.save(userDevice);
}
