import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnnoncesService {
    constructor(private prisma: PrismaService) {}

    async GetAllAnnonces(){
        return this.prisma.annonces.findMany()
    }

    async GetAnnonceById(id: number){
        const AnnonceIdExist = await this.prisma.annonces.findUnique({
            where: {id}
        })
        if (!AnnonceIdExist){
            throw new NotFoundException("L'id associé à cet annonce n'existe pas !")
        }
        return AnnonceIdExist
    }

    async DeleteAnnonce(id: number){
        const AnnonceIdExist = await this.prisma.annonces.findUnique({
            where: {id}
        })
        if (!AnnonceIdExist){
            throw new NotFoundException("L'id associé à cet annonce n'existe pas, on ne peut pas le supprimer !")
        }
        return this.prisma.annonces.delete({
            where: {id}
        })
    }

    async UpdateAnnonce(id: number, data){
        const AnnonceIdExist = await this.prisma.annonces.findUnique({
            where: {id}
        })
        if (!AnnonceIdExist){
            throw new NotFoundException("L'id associé à cet annonce n'existe pas, on ne peut pas le modifier !")
        }
        return this.prisma.annonces.update({
            where: {id},
            data
        })
    }

    async CreateAnnonce(data){
        // Vérification que l'utilisateur existe
        const utilisateurExist = await this.prisma.users.findUnique({
            where: { id: data.id_utilisateur }
        })
        if (!utilisateurExist) {
            throw new NotFoundException("L'id utilisateur spécifié n'existe pas !")
        }

        // Vérification que la voiture existe
        const voitureExist = await this.prisma.voitures.findUnique({
            where: { id: data.id_voiture }
        })
        if (!voitureExist) {
            throw new NotFoundException("L'id voiture spécifié n'existe pas !")
        }

        return this.prisma.annonces.create({
            data
        })
    }

  

    


}
