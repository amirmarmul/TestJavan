export default async function GetUserMembers(
    id: string, 
    { userRepository }: any
) {
    const user = await userRepository.findOne(id);

    return userRepository.findMembers(user.id);
}
