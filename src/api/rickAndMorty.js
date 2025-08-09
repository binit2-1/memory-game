const API_BASE = "https://rickandmortyapi.com/api";

export async function fetchCharacters(page = 1){
    try{
        const response = await fetch(`${API_BASE}/character?page=${page}`);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
}