export interface Prestation {
    reference: string;
    title: string;
    price: number;
    duration: number;
  } 

export interface Category {
    reference: string;
    title: string;
    prestations: Prestation[];
  }