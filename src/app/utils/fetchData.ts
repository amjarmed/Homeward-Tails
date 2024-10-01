
/* This file is used to fetch data from online json files */

interface PetInfo {
  id: number
  name: string,
  species: string,
    birthYear: string;
  description: string,
  photo: string
}

export const fetchData= async (): Promise<PetInfo[]> => {
  const res = await fetch('https://learnwebcode.github.io/pet-adoption-data/pets.json')
  const data = await res.json().then((data) => data)

  
  return data
}