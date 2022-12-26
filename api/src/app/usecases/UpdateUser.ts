import User from '../../domain/User';

export default function UpdateUser(
    id: string,
    name: string, 
    { userRepository }: any
) {
    const user = new User(id, name);
    return userRepository.update(user);
}
