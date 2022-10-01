import { StarWarsApiService } from "../StarWarsApiService";

const getStarWarsCharacterType = async (starWarsApiService: StarWarsApiService, id: number): Promise<string> => {
    const name = await starWarsApiService.getStarWarsCharacterName(id);

    if(name === "Luke Skywalker") return "JEDI"
    if(name === "C-3PO") return "ROBOT"

    return "UNKNOWN" 
};