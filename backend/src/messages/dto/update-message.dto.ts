import { IsString, IsBoolean, IsOptional } from "class-validator";
import { ApiProperty, ApiSchema } from "@nestjs/swagger";

@ApiSchema({ description: "Schéma de mise à jour d'un message (modification du contenu ou marquer comme lu)" })
export class UpdateMessage {

    @ApiProperty({
        description: "Le contenu du message",
        example: "Message modifié",
        type: String,
        required: false
    })
    @IsOptional()
    @IsString({
        message: "Le champ 'contenu' doit être une chaîne de caractères !"
    })
    contenu: string

    @ApiProperty({
        description: "Indique si le message a été lu",
        example: true,
        type: Boolean,
        required: false
    })
    @IsOptional()
    @IsBoolean({
        message: "Le champ 'lu' doit être un booléen !"
    })
    lu: boolean

}

