import { IsString, IsEnum, IsNumber, IsNotEmpty, IsOptional, MaxLength, Min } from "class-validator";
import { ApiProperty, ApiSchema } from "@nestjs/swagger";
import { annonces_statut } from "generated/prisma/enums";

@ApiSchema({ description: "Schéma de mise à jour d'une annonce (modification du titre, description, prix, ville, code postal, statut)" })
export class UpdateAnnonce {

    @ApiProperty({
        description: "Le titre de l'annonce",
        example: "BMW RS3 en excellent état",
        type: String,
        required: false
    })
    @IsOptional()
    @IsString({
        message: "Le champ 'titre' doit être une chaîne de caractères !"
    })
    @MaxLength(150, {
        message: "Le champ 'titre' ne doit pas dépasser 150 caractères !"
    })
    titre: string

    @ApiProperty({
        description: "La description détaillée de l'annonce",
        example: "Véhicule en excellent état, bien entretenu, toutes révisions faites. Première main...",
        type: String,
        required: false
    })
    @IsOptional()
    @IsString({
        message: "Le champ 'description' doit être une chaîne de caractères !"
    })
    description: string

    @ApiProperty({
        description: "Le prix de la voiture en euros",
        example: 25000,
        type: Number,
        required: false
    })
    @IsOptional()
    @IsNumber({}, {
        message: "Le champ 'prix' doit être un nombre !"
    })
    @Min(0, {
        message: "Le prix doit être supérieur ou égal à 0 !"
    })
    prix: number

    @ApiProperty({
        description: "La ville où se trouve le véhicule",
        example: "Paris",
        type: String,
        required: false
    })
    @IsOptional()
    @IsString({
        message: "Le champ 'ville' doit être une chaîne de caractères !"
    })
    @MaxLength(150, {
        message: "Le champ 'ville' ne doit pas dépasser 150 caractères !"
    })
    ville: string

    @ApiProperty({
        description: "Le code postal de la ville",
        example: "75001",
        type: String,
        required: false
    })
    @IsOptional()
    @IsString({
        message: "Le champ 'code postal' doit être une chaîne de caractères !"
    })
    @MaxLength(10, {
        message: "Le champ 'code postal' ne doit pas dépasser 10 caractères !"
    })
    code_postal: string

    @ApiProperty({
        description: "Le statut de l'annonce",
        example: "Active",
        enum: annonces_statut,
        required: false
    })
    @IsOptional()
    @IsEnum(annonces_statut, {
        message: "Le champ 'statut' doit être de type enum !"
    })
    statut: annonces_statut

}

