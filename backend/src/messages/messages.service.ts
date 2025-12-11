import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MessagesService {
    constructor(private prisma: PrismaService) {}

    async GetAllMessages(){
        return this.prisma.messages.findMany()
    }

    async GetMessageById(id: number){
        const messageExist = await this.prisma.messages.findUnique({
            where: {id}
        })
        if (!messageExist){
            throw new NotFoundException("L'id associé à ce message n'existe pas !")
        }
        return messageExist
    }

    async DeleteMessage(id: number){
        const messageExist = await this.prisma.messages.findUnique({
            where: {id}
        })
        if (!messageExist){
            throw new NotFoundException("L'id associé à ce message n'existe pas, on ne peut pas le supprimer !")
        }
        return this.prisma.messages.delete({
            where: {id}
        })
    }

    async UpdateMessage(id: number, data){
        const messageExist = await this.prisma.messages.findUnique({
            where: {id}
        })
        if (!messageExist){
            throw new NotFoundException("L'id associé à ce message n'existe pas, on ne peut pas le modifier !")
        }
        return this.prisma.messages.update({
            where: {id},
            data
        })
    }

    async CreateMessage(data){
        const conversationExist = await this.prisma.conversations.findUnique({
            where: { id: data.id_conversation }
        })
        if (!conversationExist) {
            throw new NotFoundException("L'id conversation spécifié n'existe pas !")
        }
        const envoyeurExist = await this.prisma.users.findUnique({
            where: { id: data.id_envoyeur }
        })
        if (!envoyeurExist) {
            throw new NotFoundException("L'id envoyeur spécifié n'existe pas !")
        }

        return this.prisma.messages.create({
            data
        })
    }

    async GetMessagesByConversation(id_conversation: number){
        const conversationExist = await this.prisma.conversations.findUnique({
            where: { id: id_conversation }
        })
        if (!conversationExist) {
            throw new NotFoundException("L'id conversation spécifié n'existe pas !")
        }
        return this.prisma.messages.findMany({
            where: { id_conversation }
        })
    }
}
