import { Idigimon } from "../Interfaces/interfaces";

 
 
 export const getDigimon = async () =>{
    const promise = await fetch('https://digimon-api.vercel.app/api/digimon/name/agumon')
    const data: Idigimon= await promise.json();
    return data
}

