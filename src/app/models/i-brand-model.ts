import { IImageDTO } from "./i-imageDTO";

export interface IBrandModel {
  id?: number;
  name: string;
  country: string;
  founderYear: number;
  description: string;
  imageDTOs?: IImageDTO[];
}
