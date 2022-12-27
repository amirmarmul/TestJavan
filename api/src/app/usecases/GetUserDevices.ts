export default async function GetUserDevices(
    id: string, 
    { userRepository, userDeviceRepository, deviceRepository }: any
) {
    const user = await userRepository.findOne(id);

    const userDevices = await userDeviceRepository.findByUserId(user.id);

    return await Promise.all(userDevices.map(async (userDevice: any) => {

        return await deviceRepository.findOne(userDevice.deviceId);
    }));
}
