import {IOrderDetailDTO} from "./i-order-detail-DTO";

export class IOrderModel {
  total ?: number;
  status ?: string;
  address ?: string;
  orderDetails ?: IOrderDetailDTO[];
}
