import User, { Gender } from '../../domain/User';

export default function CreateUser(
    name: string,
    gender: Gender,
    { userRepository }: any
) {
    const id = new Date().getTime().toString();
    const user = new User(id, name, gender);
    return userRepository.save(user);
}