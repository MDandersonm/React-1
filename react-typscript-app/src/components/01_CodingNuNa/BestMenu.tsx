import React from 'react';
import { Menu } from '../../model/restaurant';

interface OwnProps extends Menu{
    // extends를 하면 아래 주석이 적용되는것
    // name: string;
    // price: number;
    // category: string;
    showBestMenuName(name:string):string //Menu에없는거 추가로 적어줌

 
}

//타입으로 했을때는 이렇게 쓴다.
type OwnProps2 = Menu &{
    // extends를 하면 아래 주석이 적용되는것
    // name: string;
    // price: number;
    // category: string;
    showBestMenuName(name:string):string //Menu에없는거 추가로 적어줌
}

//price를 props로 전달하지않을 경우 이렇게 작성
interface OwnProps3 extends Omit<Menu,'price'>{
    // extends를 하면 아래 주석이 적용되는것
    // name: string;
    // category: string;
    showBestMenuName(name:string):string //Menu에없는거 추가로 적어줌

 
}

const BestMenu:React.FC<OwnProps> = (props) => {
    return (
        <div>
            {props.name}<br></br>
            {props.category}<br></br>
            {props.price}
            
        </div>
    );
};

export default BestMenu;