export interface Animal {
  id: number,
  name: string,
  height: string,
  mass: number,
  continent: string
}

export const emptyAnimal: Animal = {
  id: null,
  name: '',
  height: '',
  mass: 0,
  continent: ''
}
