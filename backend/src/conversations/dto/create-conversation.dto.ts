import { IsNumber, IsNotEmpty } from "class-validator";
import { ApiProperty, ApiSchema } from "@nestjs/swagger";

@ApiSchema({ description: "Schéma de création d'une conversation (création d'une conversation entre vendeur et acheteur pour une annonce)" })
export class CreateConversation {

    @ApiProperty({
        description: "L'identifiant de l'annonce concernée",
        example: 1,
        type: Number
    })
    @IsNotEmpty({
        message: "Le champ 'id_annonce' est obligatoire !"
    })
    @IsNumber({}, {
        message: "Le champ 'id_annonce' doit être un nombre !"
    })
    id_annonce: number

    @ApiProperty({
        description: "L'identifiant du vendeur (propriétaire de l'annonce)",
        example: 1,
        type: Number
    })
    @IsNotEmpty({
        message: "Le champ 'id_vendeur' est obligatoire !"
    })
    @IsNumber({}, {
        message: "Le champ 'id_vendeur' doit être un nombre !"
    })
    id_vendeur: number

    @ApiProperty({
        description: "L'identifiant de l'acheteur (personne intéressée par l'annonce)",
        example: 2,
        type: Number
    })
    @IsNotEmpty({
        message: "Le champ 'id_acheteur' est obligatoire !"
    })
    @IsNumber({}, {
        message: "Le champ 'id_acheteur' doit être un nombre !"
    })
    id_acheteur: number

}

