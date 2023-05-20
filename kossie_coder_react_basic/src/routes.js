/* eslint-disable import/no-anonymous-default-export */
import Event from "./pages/01_Event";
import Event2 from "./pages/02_Event2";
import User from "./pages/12_User";
import UseState from "./starCoding/01_useState";
import UseEffect from "./starCoding/02_UseEffect";
import UseRef from "./starCoding/03_UseRef";
import UseRefFocus from "./starCoding/04_UseRefFocus";
import UseContext from "./starCoding/05_UseContext";
export default [
  {
    path: "/event",
    component: Event,
  },

  {
    path: "/event2",
    component: Event2,
  },
  {
    path: "/users/:id",
    component: User,
  },
  {
    path: "/useState",
    component: UseState,
  },
  {
    path: "/useEffect",
    component: UseEffect,
  },
  {
    path: "/useRef",
    component: UseRef,
  },
  {
    path: "/focus",
    component: UseRefFocus,
  },
  {
    path: "/useContext",
    component: UseContext,
  },
];
