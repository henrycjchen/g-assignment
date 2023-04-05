import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
}
