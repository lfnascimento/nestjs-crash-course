import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [{id: 1, name: 'Luis'}, {id: 2, name: 'Fernando'}, {id: 3, name: 'Luis'}, {id: 4, name: 'Dustin'}];

    findAll(name?: string): User[] {
        if(name) {
            return this.users.filter(user => user.name === name)
        } else {
            return this.users;
        }
    }

    findById(id: number): User {
        const user = this.users.find(user => user.id === id);
        if(!user) {
            throw new NotFoundException;
        }
        return user;
    }

    createUser(createUserDto: CreateUserDto): User {
        const newUser = { id: Date.now(), ...createUserDto };
        this.users.push(newUser);

        return newUser;
    }
}
