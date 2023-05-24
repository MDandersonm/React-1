import React from "react";
import { Address, Restaurant } from "../../model/restaurant";

interface OwnProps {
  //타입이름
  info: Restaurant;
  changeAddress(adress: Address): void; //함수일때 (입력):리턴타입
}

const Store: React.FC<OwnProps> = ({ info, changeAddress }) => {
  const handleClick = () => {
    changeAddress({
      city: "Seoul",
      detail: "haha",
      zipCode: 121,
    });
  };
  return (
    <div>
      {info.address.city}
      {info.name}
      <button onClick={handleClick}>Change Address</button>
    </div>
  );
};

export default Store;
