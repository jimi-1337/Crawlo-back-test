import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    username: string;
    password: string;
}