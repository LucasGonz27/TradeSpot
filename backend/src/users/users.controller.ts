import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';

@Controller('ApiTradeSpot/users')
export class UsersController {
    constructor(private readonly UsersService: UsersService){}

    @Get('/all')
    @ApiOkResponse({ 
        description: "Liste de tous les utilisateurs récupérée avec succès"
    })
    GetAllUsers(){
        return this.UsersService.GetAllUsers();
    }

    @Get('/:id')
    @ApiOkResponse({ 
        description: "L'utilisateur a été récupéré avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "L'utilisateur avec cet ID n'existe pas"
    })
    GetUserById(@Param( 'id', ParseIntPipe) id: number){
        return this.UsersService.GetUserById(id);
    }

    @Delete('/:id')
    @ApiOkResponse({ 
        description: "L'utilisateur a été supprimé avec succès"
    })
    @ApiNotFoundResponse({ 
        description: "L'utilisateur avec cet ID n'existe pas"
    })
    DeleteUser(@Param('id', ParseIntPipe) id: number){
        return this.UsersService.DeleteUser(id);
    }

    @Post('/create')
    @ApiCreatedResponse({ 
        description: "L'utilisateur a été créé avec succès",
        type: CreateUser
    })
    CreateUser(@Body() data: CreateUser){
        return this.UsersService.CreateUser(data);
    }

    @Put('/update/:id')
    @ApiOkResponse({ 
        description: "L'utilisateur a été modifié avec succès",
        type: UpdateUser
    })
    @ApiNotFoundResponse({ 
        description: "L'utilisateur avec cet ID n'existe pas"
    })
    UpdateUser(@Body() data: UpdateUser, @Param('id', ParseIntPipe) id: number){
        return this.UsersService.UpdateUser(id, data);
    }
}

