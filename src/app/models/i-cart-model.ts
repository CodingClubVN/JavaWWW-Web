import {IProductModel} from "./i-product-model";
import {IBrandModel} from "./i-brand-model";
import {ICategoryDTOModel} from "./i-category-dto-model";

export class ICartModel {
  id?: string;
  product ?: IProductModel;
  productDTO?: IProductModel;
  brandDTO?: IBrandModel;
  categoryDTO?: ICategoryDTOModel;
  quantity?: number;
  createDate?: Date;
  modifiedDate ?: string;
}
