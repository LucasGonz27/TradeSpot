import { IsString, IsEmail, IsEnum, IsOptional, Length, MinLength, MaxLength, Matches } from "class-validator";
import { users_role } from "generated/prisma/enums";
import { ApiProperty , ApiSchema} from "@nestjs/swagger";

@ApiSchema({ description: "Schéma de modification d'utilisateur (modification d'un user : profil, téléphone, email, mot de passe, rôle)" })
export class UpdateUser{

    @ApiProperty({
        description : "Prénom du user",
        example : "Toby",
        type : String,
        required: false
    })
    @IsOptional()
    @IsString({
        message : "Le champ prénom doit être une chaîne de caractère !"
    })
    @MaxLength(100, {
        message : "Le champ prénom ne doit pas dépasser 100 caractères !"
    })
    prenom : string

    @ApiProperty({
        description : "Nom du user",
        example : "Garcia",
        type : String,
        required: false
    })
    @IsOptional()
    @IsString({
        message : "Le champ nom doit être une chaîne de caractère !"
    })
    @MaxLength(100, {
        message : "Le champ nom ne doit pas dépasser 100 caractères !"
    })
    nom : string    


    @ApiProperty({
        description : "Téléphone du user",
        example : "0623597830",
        type : String,
        required: false
    })
    @IsOptional()
    @IsString({
        message : "Le champ téléphone doit être une chaîne de caractères !"
    })
    @Length(10,10, {
        message : "Le champ téléphone doit contenir exactement 10 caractères !"
    })
    @Matches(/^\d{10}$/, {
        message : "Le champ téléphone doit contenir uniquement 10 chiffres !"
    })
    tel : string


    @ApiProperty({
        description : "Email du user",
        example : "toby.garcia@gmail.com",
        type : String,
        required: false
    })
    @IsOptional()
    @IsEmail({}, {
        message : "Le champ email doit être de type email !"
    })
    @MaxLength(150, {
        message : "Le champ email ne doit pas dépasser 150 caractères !"
    })
    email : string



    @ApiProperty({
        description : "Mot de passe du user",
        example : "12345abc!@",
        type : String,
        required: false
    })
    @IsOptional()
    @IsString({
        message : "Le champ mot de passe doit être une chaîne de caractère !"
    })
    @MinLength(8, {
        message : "Le mot de passe doit contenir au moins 8 caractères !"
    })
    @MaxLength(255, {
        message : "Le mot de passe ne doit pas dépasser 255 caractères !"
    })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
        message : "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial (@$!%*?&) !"
    })
    mdp : string

    @ApiProperty({
        description : "Le role du user",
        example : "USER",
        enum: users_role,
        required: false
    })
    @IsOptional()
    @IsEnum(users_role, {
        message : "Le champ rôle doit être une valeur valide !"
    })
    role : users_role




}