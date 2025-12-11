import { ApiSchema } from "@nestjs/swagger";

@ApiSchema({ description: "Schéma de mise à jour d'une conversation (les conversations ne sont pas modifiables)" })
export class UpdateConversation {
    // Les conversations ne sont pas modifiables
}

