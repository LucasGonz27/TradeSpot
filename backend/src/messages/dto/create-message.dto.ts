import { IsNumber, IsString, IsNotEmpty } from "class-validator";
import { ApiProperty, ApiSchema } from "@nestjs/swagger";

@ApiSchema({ description: "Schéma de création d'un message (envoi d'un message dans une conversation)" })
export class CreateMessage {

    @ApiProperty({
        description: "L'identifiant de la conversation",
        example: 1,
        type: Number
    })
    @IsNotEmpty({
        message: "Le champ 'id_conversation' est obligatoire !"
    })
    @IsNumber({}, {
        message: "Le champ 'id_conversation' doit être un nombre !"
    })
    id_conversation: number

    @ApiProperty({
        description: "L'identifiant de l'utilisateur qui envoie le message",
        example: 1,
        type: Number
    })
    @IsNotEmpty({
        message: "Le champ 'id_envoyeur' est obligatoire !"
    })
    @IsNumber({}, {
        message: "Le champ 'id_envoyeur' doit être un nombre !"
    })
    id_envoyeur: number

    @ApiProperty({
        description: "Le contenu du message",
        example: "Bonjour, je suis intéressé par votre véhicule. Est-il toujours disponible ?",
        type: String
    })
    @IsNotEmpty({
        message: "Le champ 'contenu' est obligatoire !"
    })
    @IsString({
        message: "Le champ 'contenu' doit être une chaîne de caractères !"
    })
    contenu: string

}

