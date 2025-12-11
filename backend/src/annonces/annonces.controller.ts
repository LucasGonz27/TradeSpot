import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { AnnoncesService } from './annonces.service';
import { CreateAnnonce } from './dto/create-annonce.dto';
import { UpdateAnnonce } from './dto/update-annonce.dto';

@Controller('ApiTradeSpot/annonces')
export class AnnoncesController {
    constructor(private readonly AnnoncesService: AnnoncesService){}

    @Get('/all')
    @ApiOkResponse({ 
        description: "Liste de toutes les annonces récupérée avec succès"
    })
    GetAllAnnonces(){
        return this.AnnoncesService.GetAllAnnonces();
    }

    @Get('/:id')
    @ApiOkResponse({ 
        description: "L'annonce a été récupérée avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "L'annonce avec cet ID n'existe pas"
    })
    GetAnnonceById(@Param('id', ParseIntPipe) id: number){
        return this.AnnoncesService.GetAnnonceById(id)
    }

    @Delete('/:id')
    @ApiOkResponse({ 
        description: "L'annonce a été supprimée avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "L'annonce avec cet ID n'existe pas"
    })
    DeleteAnnonce(@Param('id', ParseIntPipe) id: number){
        return this.AnnoncesService.DeleteAnnonce(id)
    }

    @Post('/create')
    @ApiCreatedResponse({ 
        description: "L'annonce a été créée avec succès",
        type: CreateAnnonce
    })
    @ApiNotFoundResponse({ 
        description: "L'utilisateur ou la voiture spécifiée n'existe pas"
    })
    CreateAnnonce(@Body() data: CreateAnnonce){
        return this.AnnoncesService.CreateAnnonce(data)
    }

    @Put('/update/:id')
    @ApiOkResponse({ 
        description: "L'annonce a été modifiée avec succès",
        type: UpdateAnnonce
    })
    @ApiNotFoundResponse({ 
        description: "L'annonce avec cet ID n'existe pas"
    })
    UpdateAnnonce(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateAnnonce){
        return this.AnnoncesService.UpdateAnnonce(id, data)
    }

}
