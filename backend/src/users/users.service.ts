import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async GetAllUsers(){
        return this.prisma.users.findMany();
    }

    async GetUserById(id : number){
        const UserExist = await this.prisma.users.findUnique({
            where: { id }
        })

        if (!UserExist){
            throw new NotFoundException("L'id associé à cet user n'existe pas ! ");
        }
        return UserExist
    }

    async DeleteUser(id: number){
        const UserExist = await this.prisma.users.findUnique({
            where: {id}
        })

        if (!UserExist){
            throw new NotFoundException("L'id associé à cet user n'existe pas, il ne peut pas être supprimé ! ")
        }

        return this.prisma.users.delete({
            where: {id}
        })
    }

    async CreateUser(data){
        return this.prisma.users.create({
            data
    })
    }

    async UpdateUser(id: number, data){
        const UserExist = await this.prisma.users.findUnique({
            where: {id}
        })

        if (!UserExist){
            throw new NotFoundException("l'id associé a cet user n'existe pas, il ne peut pas être modifié !")
        }

        return this.prisma.users.update({
            where: {id},
            data
        })
    }
}
