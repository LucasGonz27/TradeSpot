import { IsString, IsEmail, IsEnum, IsNotEmpty, Length, MinLength, MaxLength, Matches } from "class-validator";
import { users_role } from "generated/prisma/enums";
import { ApiProperty , ApiSchema} from "@nestjs/swagger";

@ApiSchema({ description: "Schéma de création d'utilisateur (inscription d'un user : profil, téléphone, email, mot de passe, rôle)" })
export class CreateUser{

    @ApiProperty({
        description : "Prénom du user",
        example : "Toby",
        type : String
    })
    @IsNotEmpty({
        message : "Le champ 'prénom' est obligatoire !"
    })

    @IsString({
        message : "Le champ 'prénom' doit être une chaîne de caractère !"
    })
    @MaxLength(100, {
        message : "Le champ 'prénom' ne doit pas dépasser 100 caractères !"
    })
    prenom : string

    @ApiProperty({
        description : "Nom du user",
        example : "Garcia",
        type : String
    })
    @IsNotEmpty({
        message : "Le champ 'nom' est obligatoire !"
    })
    @IsString({
        message : "Le champ 'nom' doit être une chaîne de caractère !"
    })
    @MaxLength(100, {
        message : "Le champ 'nom' ne doit pas dépasser 100 caractères !"
    })
    nom : string    


    @ApiProperty({
        description : "Téléphone du user",
        example : "0623597830",
        type : String

    })
    @IsNotEmpty({
        message : "Le champ 'téléphone' est obligatoire !"
    })
    @IsString({
        message : "Le champ 'téléphone' doit être une chaîne de caractères !"
    })
    @Length(10,10, {
        message : "Le champ 'téléphone' doit contenir exactement 10 caractères !"
    })
    tel : string


    @ApiProperty({
        description : "Email du user",
        example : "toby.garcia@gmail.com",
        type : String

    })
    @IsNotEmpty({
        message : "Le champ 'email' est obligatoire !"
    })
    @IsEmail({}, {
        message : "Le champ 'email' doit être de type email !"
    })
    @MaxLength(150, {
        message : "Le champ 'email' ne doit pas dépasser 150 caractères !"
    })
    email : string



    @ApiProperty({
        description : "Mot de passe du user",
        example : "12345abc!@",
        type : String
    })
    @IsNotEmpty({
        message : "Le champ 'mot de passe' est obligatoire !"
    })
    @IsString({
        message : "Le champ 'mot de passe' doit être une chaîne de caractère !"
    })
    @MinLength(8, {
        message : "Le champs 'mot de passe' doit contenir au moins 8 caractères !"
    })
    @MaxLength(255, {
        message : "Le champs 'mot de passe' ne doit pas dépasser 255 caractères !"
    })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
        message : "Le champs 'mot de passe' doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial (@$!%*?&) !"
    })
    mdp : string

    @ApiProperty({
        description : "Le role du user",
        example : "USER",
        enum: users_role,
    })
    @IsNotEmpty({
        message : "Le champ 'rôle' est obligatoire !"
    })
    @IsEnum(users_role, {
        message : "Le champ 'rôle' doit être une valeur valide !"
    })
    role : users_role




}