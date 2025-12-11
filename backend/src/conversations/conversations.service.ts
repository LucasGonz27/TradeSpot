import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ConversationsService {
    constructor(private prisma: PrismaService) {}

    async GetAllConversations(){
        return this.prisma.conversations.findMany()
    }

    async GetConversationById(id: number){
        const conversationExist = await this.prisma.conversations.findUnique({
            where: {id}
        })
        if (!conversationExist){
            throw new NotFoundException("L'id associé à cette conversation n'existe pas !")
        }
        return conversationExist
    }

    async DeleteConversation(id: number){
        const conversationExist = await this.prisma.conversations.findUnique({
            where: {id}
        })
        if (!conversationExist){
            throw new NotFoundException("L'id associé à cette conversation n'existe pas, on ne peut pas la supprimer !")
        }
        return this.prisma.conversations.delete({
            where: {id}
        })
    }

    async UpdateConversation(id: number, data){
        const conversationExist = await this.prisma.conversations.findUnique({
            where: {id}
        })
        if (!conversationExist){
            throw new NotFoundException("L'id associé à cette conversation n'existe pas, on ne peut pas la modifier !")
        }
        return this.prisma.conversations.update({
            where: {id},
            data
        })
    }

    async CreateConversation(data){
        const annonceExist = await this.prisma.annonces.findUnique({
            where: { id: data.id_annonce }
        })
        if (!annonceExist) {
            throw new NotFoundException("L'id annonce spécifié n'existe pas !")
        }
        const vendeurExist = await this.prisma.users.findUnique({
            where: { id: data.id_vendeur }
        })
        if (!vendeurExist) {
            throw new NotFoundException("L'id vendeur spécifié n'existe pas !")
        }

        const acheteurExist = await this.prisma.users.findUnique({
            where: { id: data.id_acheteur }
        })
        if (!acheteurExist) {
            throw new NotFoundException("L'id acheteur spécifié n'existe pas !")
        }

        if (data.id_vendeur === data.id_acheteur) {
            throw new NotFoundException("Le vendeur et l'acheteur ne peuvent pas être la même personne !")
        }

        return this.prisma.conversations.create({
            data
        })
    }
}
