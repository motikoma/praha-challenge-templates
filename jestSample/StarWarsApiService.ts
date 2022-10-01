import axios from "axios";

export class StarWarsApiService {
    constructor() {}

    public async getStarWarsCharacterName(id: number): Promise<string> {
        try {
            const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
            return data.name;
        }catch (error) {
            throw new Error("データ取得に失敗しました");
        }
    }
} 