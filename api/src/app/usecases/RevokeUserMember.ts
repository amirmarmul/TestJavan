export default async function RevokeUserMember(
    userId: string,
    memberId: string, 
    { userRepository }: any
) {
    const user = await userRepository.findOne(userId);

    const member = await userRepository.findOne(memberId);

    return userRepository.revokeMember(user, member);
}
