import {IOrderDetailDTO} from "./i-order-detail-DTO";
import { IUserModel } from "./i-user-model";

export class IOrderModel {
  id?: number;
  total ?: number;
  status ?: string;
  address ?: string;
  orderDetails ?: IOrderDetailDTO[];
  user?: IUserModel;
  createDate?: number;
  modifiedDate?: number;
}
