const URL = "https://api.jikan.moe/v4/"

export async function getDetails(id){
    try{
        const request = await fetch (`${URL}characters/${id}`);
        const response = await request.json();
        return response;
    }catch(err){
        throw Error(err)
    }
}