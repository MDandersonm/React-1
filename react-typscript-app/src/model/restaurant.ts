// let data={
//     name:'누나네 식당',
//     category: 'western',
//     address:{
//         city:'incheoni',
//         detail:'somewhere',
//         zipCode:23425634
//     },
//     menu :[{name:"rose paste", price:2000, category:"PASTA"},{name:"garlic steak", price:3000, category:"STEAK"},  ]
// }

/* 타입을 만드는 두가지 방법
type
interface
*/

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
};

//특정 타입을  빼주고싶을떄 Omit사용
export type AddressWithoutZip = Omit<Address, "zipCode">;

// ?사용  : 있을수도있고 없을수도있고  신경안쓰겠다는 의미
export type AddressWithoutZip2 = {
  city: string;
  detail: string;
  zipCode?: Number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[]; //객체의 array타입이라는말.
};

//특정 타입만 가져오고 싶을때
export type RestaurantOnlyCategor = Pick<Restaurant, "category">;

//어떤타입이 들어올지모를때 <T> 제네릭사용
export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
