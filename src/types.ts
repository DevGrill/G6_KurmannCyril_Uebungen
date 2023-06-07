export interface Person {
  name: string;
  vorname: string;
}

export interface Frucht {
  name: string;
}

export interface Frucht2 extends Frucht {
  imgUrl: string;
}
