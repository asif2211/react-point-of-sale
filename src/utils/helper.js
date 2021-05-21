export const InputData = [
  {
    type: "text",
    name: "fname",
    label: "First Name",
    to: "/",
    submenu: [],
    icon: "fa fa-tachometer",
  },
  {
    type: "text",
    name: "lname",
    label: "Last Name",
    to: "/customer",
    submenu: [],
    icon: "fa fa-user",
  },
  {
    type: "text",
    name: "email",
    label: "Email",
    to: "/",
    submenu: [],
    icon: "icon fa-list-alt",
  },
  {
    type: "text",
    name: "phone",
    label: "Phone",
    to: "/",
    submenu: [],
    icon: "fa fa-arrow-circle-down",
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    to: "/",
    submenu: [],
    icon: "fa fa-bar-chart",
  },
  {
    type: "text",
    name: "city",
    label: "City",
    to: "/",
    submenu: [],
    icon: "fa fa-shopping-cart",
  },
  {
    type: "number",
    name: "state",
    label: "State/Province",
    to: "/",
    submenu: [],
    icon: "fa fa-handshake-o",
  },
  {
    type: "number",
    name: "zip",
    label: "Zip",
    to: "/",
    submenu: [],
    icon: "fa fa-dollar",
  },
  {
    type: "text",
    name: "country",
    label: "Country",
    to: "/",
    submenu: [],
    icon: "fa fa-handshake-o",
  },
  {
    type: "text",
    name: "company",
    label: "Company",
    to: "/",
    submenu: [],
    icon: "fa fa-id-card-o",
  },
  {
    type: "text",
    name: "comments",
    label: "Comments",
    to: "/",
    submenu: [],
    icon: "fa fa-power-off",
  },
  {
    type: "number",
    name: "store",
    label: "Store",
    to: "/",
    submenu: [],
    icon: "fa fa-power-off",
  },
  {
    type: "number",
    name: "credit",
    label: "Credit",
    to: "/",
    submenu: [],
    icon: "fa fa-power-off",
  },
];
export const ItemData = [
  {
    type: "text",
    name: "name",
    label: "Item Name",
    to: "/",
    submenu: [],
    icon: "fa fa-tachometer",
  },
  {
    type: "text",
    name: "barcode_name",
    label: "barcode name",
    to: "/customer",
    submenu: [],
    icon: "fa fa-user",
  },
  {
    type: "select",
    name: "email",
    label: "Email",
    to: "/",
    submenu: [],
    icon: "icon fa-list-alt",
  },
  {
    type: "text",
    name: "phone",
    label: "Phone",
    to: "/",
    submenu: [],
    icon: "fa fa-arrow-circle-down",
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    to: "/",
    submenu: [],
    icon: "fa fa-bar-chart",
  },
  {
    type: "text",
    name: "city",
    label: "City",
    to: "/",
    submenu: [],
    icon: "fa fa-shopping-cart",
  },
  {
    type: "number",
    name: "state",
    label: "State/Province",
    to: "/",
    submenu: [],
    icon: "fa fa-handshake-o",
  },
  {
    type: "number",
    name: "zip",
    label: "Zip",
    to: "/",
    submenu: [],
    icon: "fa fa-dollar",
  },
  {
    type: "text",
    name: "country",
    label: "Country",
    to: "/",
    submenu: [],
    icon: "fa fa-handshake-o",
  },
  {
    type: "text",
    name: "company",
    label: "Company",
    to: "/",
    submenu: [],
    icon: "fa fa-id-card-o",
  },
  {
    type: "text",
    name: "comments",
    label: "Comments",
    to: "/",
    submenu: [],
    icon: "fa fa-power-off",
  },
  {
    type: "number",
    name: "store",
    label: "Store",
    to: "/",
    submenu: [],
    icon: "fa fa-power-off",
  },
  {
    type: "number",
    name: "credit",
    label: "Credit",
    to: "/",
    submenu: [],
    icon: "fa fa-power-off",
  },
];
export const categoryData = [
  {
    type: "text",
    name: "categoryName",
    label: "First Name",
    to: "/",
    submenu: [],
    icon: "fa fa-tachometer",
  },
];
export const supplier_Data = [
  {
    type: "text",
    name: "supplier",
    label: "First Name",
    to: "/",
    submenu: [],
    icon: "fa fa-tachometer",
  },
];
export const manufacturer_Data = [
  {
    type: "text",
    name: "manuName",
    label: "First Name",
    to: "/",
    submenu: [],
    icon: "fa fa-tachometer",
  },
];
export const parent_Data = [
  {
    type: "text",
    name: "parentName",
    label: "First Name",
    to: "/",
    submenu: [],
    icon: "fa fa-tachometer",
  },
];
export const formatCurrency = (num) => {
  return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
};
// search for category
export const Searching = (selectors, search) => {
  if (search === "") {
    return selectors.category;
  } else {
    return selectors.category.filter(
      (c) =>
        c.categoryName.toLowerCase().indexOf(search) > -1 ||
        c.parent.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  }
};
