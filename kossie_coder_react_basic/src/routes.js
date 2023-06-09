/* eslint-disable import/no-anonymous-default-export */
import Event from "./pages/01_Event";
import Event2 from "./pages/02_Event2";
import User from "./pages/12_User";
import UseState from "./starCoding/01_useState";
import UseEffect from "./starCoding/02_UseEffect";
import UseRef from "./starCoding/03_UseRef";
import UseRefFocus from "./starCoding/04_UseRefFocus";
import UseContext from "./starCoding/05_UseContext";
import UseMemo from "./starCoding/06_UseMemo";
import UseMemo2 from "./starCoding/07_UseMemo2";
import UseCallback from "./starCoding/08_UseCallback";
import UseCallback2 from "./starCoding/09_UseCallback2";
import UseReducer from "./starCoding/10_UseReducer";
import UseReducer2 from "./starCoding/11_UseReducer2";
import Fetch from "./starCoding/12_Fetch";
import CustomHooks from "./starCoding/13_CustomHooks";
import CustomHooks2 from "./starCoding/14_CustomHooks2";
import Redux1 from "./redux/01_lifeCoding";
import Redux2 from "./redux/02_lifeCoding2";
import lifeCodingReduxToolkit from "./reduxToolkit/01_lifeCodingReduxToolkit";
import lifeCodingReduxToolkit2 from "./reduxToolkit/02_lifeCodingReduxToolkit2";
import lifeCodingReduxToolKitThunk from "./reduxToolkit/03_lifeCodingReduxToolKitThunk";
import MuiRoutes from "./MuiRoutes";
import EcmaRoutes from "./EcmaRoutes";

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
  {
    path: "/useMemo",
    component: UseMemo,
  },
  {
    path: "/useMemo2",
    component: UseMemo2,
  },
  {
    path: "/useCallback",
    component: UseCallback,
  },
  {
    path: "/useCallback2",
    component: UseCallback2,
  },
  {
    path: "/useReducer",
    component: UseReducer,
  },
  {
    path: "/useReducer2",
    component: UseReducer2,
  },
  {
    path: "/fetch",
    component: Fetch,
  },
  {
    path: "/customHooks",
    component: CustomHooks,
  },
  {
    path: "/customHooks2",
    component: CustomHooks2,
  },
  {
    path: "/redux1",
    component: Redux1,
  },
  {
    path: "/redux2",
    component: Redux2,
  },
  {
    path: "/reduxtoolkit1",
    component: lifeCodingReduxToolkit,
  },
  {
    path: "/reduxtoolkit2",
    component: lifeCodingReduxToolkit2,
  },
  {
    path: "/reduxtoolkit3",
    component: lifeCodingReduxToolKitThunk,
  },
  ...MuiRoutes,
  ...EcmaRoutes
];
