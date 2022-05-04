import {ImageDTO} from "./imageDTO";

export class ProductModel{
  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
  fuelType: string | undefined;
  bodyType: string | undefined;
  createdDate: Date | undefined;
  updatedDate: Date | undefined;
  imageDTOs: ImageDTO[] | undefined;
}
