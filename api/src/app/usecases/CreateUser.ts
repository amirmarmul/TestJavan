import User from '../../domain/User';

export default function CreateUser(
    name: string,
    { userRepository }: any
) {
    const id = new Date().getTime().toString();
    const user = new User(id, name);
    return userRepository.save(user);
}