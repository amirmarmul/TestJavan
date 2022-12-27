import User, { Gender } from '../../domain/User';

export default function UpdateUser(
    id: string,
    name: string,
    gender: Gender,
    { userRepository }: any
) {
    const user = new User(id, name, gender);
    return userRepository.update(user);
}
