export default function GetUser(
    id: string, 
    { userRepository }: any
) {
    return userRepository.findOne(id);
}
