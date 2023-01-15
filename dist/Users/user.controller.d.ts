import { UserService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserByUsername(req: any): Promise<import("../schema/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    registerUser(createUserDto: CreateUserDto): Promise<import("../schema/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
