export default async function AttachUserMember(
    userId: string,
    memberId: string, 
    { userRepository }: any
) {
    const user = await userRepository.findOne(userId);

    const member = await userRepository.findOne(memberId);

    return userRepository.attachMember(user, member);
}
