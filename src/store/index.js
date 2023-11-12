import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import cartDropDownReducer from "./CartDropDown";
import UserReducer from "./User";
import loginDropDownReducer from "./UserDropDown";
import modalBackDropReducer from "./ModalBackDrop";
import NotificationReducer from "./Notification";
import CategoriesReducer from "./Categories";
import CouponReducer from "./Coupons";
import ProductDropDownReducer from "./ProductDropDown";
import ShoppingCartReducer from "./ShoppingCartItems";
import menuDropDownReducer from "./MenuDropDown";

const rootReducer = combineReducers({
  cartDropDown: cartDropDownReducer,
  loginDropDown: loginDropDownReducer,
  user: UserReducer,
  ModalBackDrop: modalBackDropReducer,
  notification: NotificationReducer,
  categories: CategoriesReducer,
  coupons: CouponReducer,
  product: ProductDropDownReducer,
  shoppingCart: ShoppingCartReducer,
  menuDropDown: menuDropDownReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shoppingCart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
