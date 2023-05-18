/* eslint-disable import/no-anonymous-default-export */
import Event from "./pages/01_Event";
import Event2 from "./pages/02_Event2";
import User from "./pages/12_User";
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
];
