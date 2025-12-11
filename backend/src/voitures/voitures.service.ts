import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class VoituresService {
    constructor(private prisma: PrismaService) {}

    async GetAllVoitures(){
        return this.prisma.voitures.findMany()
    }

    async GetVoitureById(id : number){

        const idVoitureExist = await this.prisma.voitures.findUnique({
            where: { id }
        })

        if (!idVoitureExist){
            throw new NotFoundException("L'id associé à cet voiture n'existe pas ! ")
        }

        return idVoitureExist
    }

    async CreateVoiture(data){
        return this.prisma.voitures.create({
            data
        })
    }

    async DeleteVoiture(id: number){

        const idVoitureExist = await this.prisma.voitures.findUnique({
            where: { id }
        })

        if (!idVoitureExist){
            throw new NotFoundException("L'id associé à cet voiture n'existe pas, on ne peut pas le supprimer ! ")
        }

        return this.prisma.voitures.delete({
            where: { id }
        })
    }

        async UpdateVoiture(id: number, data){

            const idVoitureExist = await this.prisma.voitures.findUnique({
                where: { id }
            })
    
            if (!idVoitureExist){
                throw new NotFoundException("L'id associé à cet voiture n'existe pas, on ne peut pas le modifier ! ")
            }

            return this.prisma.voitures.update({
                where: {id},
                data
            })


        }
    }

