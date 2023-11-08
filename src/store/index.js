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

const rootReducer = combineReducers({
  cartDropDown: cartDropDownReducer,
  loginDropDown: loginDropDownReducer,
  user: UserReducer,
  ModalBackDrop: modalBackDropReducer,
  notification: NotificationReducer,
  categories: CategoriesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
