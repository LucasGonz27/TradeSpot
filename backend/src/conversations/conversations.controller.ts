import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { ConversationsService } from './conversations.service';
import { CreateConversation } from './dto/create-conversation.dto';
import { UpdateConversation } from './dto/update-conversation.dto';

@Controller('ApiTradeSpot/conversations')
export class ConversationsController {
    constructor(private readonly ConversationsService: ConversationsService){}

    @Get('/all')
    @ApiOkResponse({ 
        description: "Liste de toutes les conversations récupérée avec succès"
    })
    GetAllConversations(){
        return this.ConversationsService.GetAllConversations();
    }

    @Get('/:id')
    @ApiOkResponse({ 
        description: "La conversation a été récupérée avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "La conversation avec cet ID n'existe pas"
    })
    GetConversationById(@Param('id', ParseIntPipe) id: number){
        return this.ConversationsService.GetConversationById(id)
    }

    @Delete('/:id')
    @ApiOkResponse({ 
        description: "La conversation a été supprimée avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "La conversation avec cet ID n'existe pas"
    })
    DeleteConversation(@Param('id', ParseIntPipe) id: number){
        return this.ConversationsService.DeleteConversation(id)
    }

    @Post('/create')
    @ApiCreatedResponse({ 
        description: "La conversation a été créée avec succès",
        type: CreateConversation
    })
    @ApiNotFoundResponse({ 
        description: "L'annonce, le vendeur ou l'acheteur spécifié n'existe pas"
    })
    CreateConversation(@Body() data: CreateConversation){
        return this.ConversationsService.CreateConversation(data)
    }

    @Put('/update/:id')
    @ApiOkResponse({ 
        description: "La conversation a été modifiée avec succès",
        type: UpdateConversation
    })
    @ApiNotFoundResponse({ 
        description: "La conversation avec cet ID n'existe pas"
    })
    UpdateConversation(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateConversation){
        return this.ConversationsService.UpdateConversation(id, data)
    }
}
