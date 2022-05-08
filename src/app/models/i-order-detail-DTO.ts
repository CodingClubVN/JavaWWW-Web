import {IProductModel} from "./i-product-model";

export class IOrderDetailDTO {
  product ?: IProductModel;
  quantity ?: number;
}
