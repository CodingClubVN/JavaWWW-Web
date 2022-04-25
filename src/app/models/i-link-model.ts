export interface ILink {
  name: string;
  url: string;
  icon?: string;
  subMenu?: ILink[];
  subMenu2?: ILink[];
}