import { UserService } from '../Users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../Users/hash.service';
export declare class AuthService {
    private userService;
    private hashService;
    private jwtService;
    constructor(userService: UserService, hashService: HashService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
