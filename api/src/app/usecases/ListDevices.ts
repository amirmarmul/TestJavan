export default function ListDevices(
    { deviceRepository }: any
) {
    return deviceRepository.find();
}
