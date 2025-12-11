import { IsString, IsEnum, IsNumber, IsBoolean, IsNotEmpty, IsDate, IsOptional, MaxLength } from "class-validator";
import { ApiProperty, ApiSchema } from "@nestjs/swagger";
import { voitures_boite_vitesse, voitures_carburant, voitures_couleur, voitures_etat, voitures_norme_critair, voitures_type_vehicule, voitures_marque } from "generated/prisma/enums";


@ApiSchema({ description: "Schéma de création d'une voitrue (Pour créé l'annonce : modèle, couleur, année...)" })
export class CreateVoiture{

   
    @ApiProperty({
        description : "Marque de la voiture",
        example : "BMW",
        enum : voitures_marque
    })
    @IsEnum(voitures_marque, {
        message: "La marque doit être de type ENUM !"
    })
    marque : voitures_marque
    
    
    @ApiProperty({
        description: "Modèle de la voiture",
        example : "RS3",
        type : String
    })
    @IsString({
        message : "Le champs 'modèle' doit être une chaîne de caractère !"
    })
    modele : String  


    
    @ApiProperty({
        description: "L'année de la voiture",
        example: "1998",
        type: Date
    })
    @IsDate({
        message: "Le champs 'annee' doit être de type date !" 
    })
    annee : number    
    
    @ApiProperty({
        description: "Le kilométrage de la voiture",
        example: "12000",
        type: Number
    })
    @IsNumber({},{
        message: "Le champs 'kilométrage' doit être un nombre !"
    })
    kilometrage : number


    @ApiProperty({
        description : "Le carburant utilisé par la voiture",
        example: "Essence",
        enum : voitures_carburant
    })
    @IsEnum(voitures_carburant,{
        message: "Le champs 'carburant' doit être de type enum !"
    })
    carburant : voitures_carburant


    @ApiProperty({
        description: "le type de boite de vitesse de la voiture",
        example: "Manuel",
        enum: voitures_boite_vitesse
    })
    @IsEnum(voitures_boite_vitesse,{
        message: "le champs 'boite de vitesse' doit être de type enum"
    })
    boite_vitesse : voitures_boite_vitesse

    @ApiProperty({
        description: "Le nombre de portes de la voiture",
        example: 5,
        type: Number,
    })
    @IsNumber({}, {
        message: "Le champs 'portes' doit être un nombre !"
    })
    portes : number

    @ApiProperty({
        description: "Le nombre de places de la voiture",
        example: 5,
        type: Number,
    })
    @IsNumber({}, {
        message: "Le champs 'places' doit être un nombre !"
    })
    places : number

    @ApiProperty({
        description: "La couleur de la voiture",
        example: "Rouge",
        enum: voitures_couleur
    })
    @IsEnum(voitures_couleur, {
        message: "Le champs 'couleur' doit être de type enum !"
    })
    couleur : voitures_couleur

    @ApiProperty({
        description: "Le nombre de chevaux de la voiture",
        example: 150,
        type: Number
    })
    @IsNumber({}, {
        message: "Le champs 'chevaux' doit être un nombre !"
    })
    chevaux : number

    @ApiProperty({
        description: "Le nombre de chevaux fiscaux de la voiture",
        example: 7,
        type: Number
    })
    @IsNumber({}, {
        message: "Le champs 'chevaux fiscaux' doit être un nombre !"
    })
    chevaux_fiscaux : number

    @ApiProperty({
        description: "Le type de véhicule",
        example: "Berline",
        enum: voitures_type_vehicule
    })
    @IsEnum(voitures_type_vehicule, {
        message: "Le champs 'type de vehicule' doit être de type enum !"
    })
    type_vehicule : voitures_type_vehicule

    @ApiProperty({
        description: "La norme Crit'Air du véhicule",
        example: "un",
        enum: voitures_norme_critair
    })
    @IsEnum(voitures_norme_critair, {
        message: "Le champs 'norme critair' doit être de type enum !"
    })
    norme_critair : voitures_norme_critair

    @ApiProperty({
        description: "Indique si la voiture est un première main",
        example: true,
        type: Boolean,
    })
    @IsBoolean({
        message: "Le champs 'premiere main' doit être un booléen !"
    })
    premiere_main : Boolean

    @ApiProperty({
        description: "L'état de la voiture",
        example: "Bon",
        enum: voitures_etat,
        required: false
    })
    @IsEnum(voitures_etat, {
        message: "Le champs 'etat' doit être de type enum !"
    })
    etat : voitures_etat

}