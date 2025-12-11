import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { CreateMessage } from './dto/create-message.dto';
import { UpdateMessage } from './dto/update-message.dto';

@Controller('ApiTradeSpot/messages')
export class MessagesController {
    constructor(private readonly MessagesService: MessagesService){}

    @Get('/all')
    @ApiOkResponse({ 
        description: "Liste de tous les messages récupérée avec succès"
    })
    GetAllMessages(){
        return this.MessagesService.GetAllMessages();
    }

    @Get('/conversation/:id_conversation')
    @ApiOkResponse({ 
        description: "Liste des messages de la conversation récupérée avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "La conversation avec cet ID n'existe pas"
    })
    GetMessagesByConversation(@Param('id_conversation', ParseIntPipe) id_conversation: number){
        return this.MessagesService.GetMessagesByConversation(id_conversation)
    }

    @Get('/:id')
    @ApiOkResponse({ 
        description: "Le message a été récupéré avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "Le message avec cet ID n'existe pas"
    })
    GetMessageById(@Param('id', ParseIntPipe) id: number){
        return this.MessagesService.GetMessageById(id)
    }

    @Delete('/:id')
    @ApiOkResponse({ 
        description: "Le message a été supprimé avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "Le message avec cet ID n'existe pas"
    })
    DeleteMessage(@Param('id', ParseIntPipe) id: number){
        return this.MessagesService.DeleteMessage(id)
    }

    @Post('/create')
    @ApiCreatedResponse({ 
        description: "Le message a été créé avec succès",
        type: CreateMessage
    })
    @ApiNotFoundResponse({ 
        description: "La conversation ou l'envoyeur spécifié n'existe pas"
    })
    CreateMessage(@Body() data: CreateMessage){
        return this.MessagesService.CreateMessage(data)
    }

    @Put('/update/:id')
    @ApiOkResponse({ 
        description: "Le message a été modifié avec succès",
        type: UpdateMessage
    })
    @ApiNotFoundResponse({ 
        description: "Le message avec cet ID n'existe pas"
    })
    UpdateMessage(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateMessage){
        return this.MessagesService.UpdateMessage(id, data)
    }
}
