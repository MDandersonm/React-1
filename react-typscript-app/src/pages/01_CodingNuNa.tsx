import React, { useState } from "react";
import BestMenu from "../components/01_CodingNuNa/BestMenu";
import Store from "../components/01_CodingNuNa/Store";
import { Address, Restaurant } from "../model/restaurant";
let data: Restaurant = {
  name: "누나네 식당",
  category: "western",
  address: {
    city: "incheoni",
    detail: "somewhere",
    zipCode: 23425634,
  },
  menu: [
    { name: "rose paste", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "STEAK" },
  ],
};

const showBestMenuName = (name:string) =>{
  return name

}


const CodingNuNa: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data); //  < > : generic  함수에들어가는 타입을 지정해줌.
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  return (
    <div>
      <Store info={myRestaurant} changeAddress={changeAddress}></Store>
      <BestMenu name="불고기피자" category="피자" price={1000} showBestMenuName={showBestMenuName}></BestMenu>
    </div>
  );
};

export default CodingNuNa;
