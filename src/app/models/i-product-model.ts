import { IBrandModel } from "./i-brand-model";
import { ICategoryDTOModel } from "./i-category-dto-model";
import { IImageDTO } from "./i-imageDTO";

export class IProductModel {
  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
  fuelType: string | undefined;
  bodyType: string | undefined;
  createdDate: Date | undefined;
  updatedDate: Date | undefined;
  imageDTOs: IImageDTO[] | undefined;
  brandDTO?: IBrandModel;
  categoryDTO?: ICategoryDTOModel;
}
