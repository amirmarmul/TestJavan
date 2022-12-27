export default function GetDevice(
    id: string, 
    { deviceRepository }: any
) {
    return deviceRepository.findOne(id);
}
