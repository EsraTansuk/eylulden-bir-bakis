export interface SubMenu {
  _id: string;
  name: string;
  link: string;
  icon?: string;
  menuOrder: number;
  menuTarget: "_self" | "_blank";
}

export interface MenuModel {
  _id: string;
  name: string;
  link: string;
  icon?: string;
  menuOrder: number;
  menuTarget: "_self" | "_blank";
  subMenus?: SubMenu[];
}

