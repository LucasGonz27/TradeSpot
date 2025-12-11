import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { VoituresService } from './voitures.service';
import { CreateVoiture } from './dto/create-voitures.dto';
import { UpdateVoiture } from './dto/update-voitures.dto';


@Controller('ApiTradeSpot/voitures')
export class VoituresController {
    constructor(private readonly VoituresService: VoituresService){}

    @Get('/all')
    @ApiOkResponse({ 
        description: "Liste de toutes les voitures récupérée avec succès"
    })
    GetAllVoitures(){
        return this.VoituresService.GetAllVoitures();
    }

    @Get('/:id')
    @ApiOkResponse({ 
        description: "La voiture a été récupérée avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "La voiture avec cet ID n'existe pas"
    })
    GetVoitureById(@Param('id', ParseIntPipe) id: number){
        return this.VoituresService.GetVoitureById(id);
    }

    @Delete('/:id')
    @ApiOkResponse({ 
        description: "La voiture a été supprimée avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "La voiture avec cet ID n'existe pas"
    })
    DeleteVoiture(@Param('id', ParseIntPipe) id: number){
        return this.VoituresService.DeleteVoiture(id);
    }

    @Put('/update/:id')
    @ApiOkResponse({ 
        description: "La voiture a été modifiée avec succès",
        type: UpdateVoiture
    })
    @ApiNotFoundResponse({ 
        description: "La voiture avec cet ID n'existe pas"
    })
    UpdateVoiture(@Body() data: UpdateVoiture, @Param('id', ParseIntPipe) id: number){
        return this.VoituresService.UpdateVoiture(id, data);
    }

    @Post('create')
    @ApiCreatedResponse({ 
        description: "La voiture a été créée avec succès",
        type: CreateVoiture
    })
    CreateVoiture(@Body() data: CreateVoiture){
        return this.VoituresService.CreateVoiture(data)
    }
}
