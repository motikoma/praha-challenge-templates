import { StarWarsApiService } from "../StarWarsApiService";

export const getStarWarsCharacterType = async (starWarsApiService: StarWarsApiService, id: number): Promise<string> => {
    const name = await starWarsApiService.getStarWarsCharacterName(id);

    if(name === "Luke Skywalker") return "JEDI" // id=1
    if(name === "C-3PO") return "ROBOT" // id=2

    return "UNKNOWN" 
};