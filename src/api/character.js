const URL = "https://rickandmortyapi.com/api/character/"
// Creation of the asyncronus functions that will make the requests to the API
export async function getCharacterApi(){
    try{
        const request = await fetch (`${URL}`);
        const response = await request.json();
        return response.results;
    }catch(err){
        throw Error (err)
    }
}

export async function getCharacterByIdApi(id){
    try{
        const request = await fetch (`${URL}${id}`);
        const response = await request.json();
        return response;
    }catch(err){
        throw Error(err)
    }
}

export async function getEpisodeName(url){
    try{
        const request = await fetch(url);
        const response = await request.json();
        return response.name
    }catch(err){
        throw Error(err)
    }
}