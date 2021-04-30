export enum Region {
  kanto,
  jotho,
  hoen
}

export interface Pokemon {
  name: string,
  url: string,
  urlImage: string,
    types: [
      {
        type: {
          name: string,
          url: string
        }
      }
    ]
}
