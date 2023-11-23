import { SET_CART_DROPDOWN, DELETE_ALL_ITEMS } from "./index";

export const addDropDownProducts = (data) => (dispatch, getState) => {
  const state = getState();
  const productsArray = state.shoppingCart;

  const existingProduct = productsArray.find(
    (product) => product._id === data._id
  );

  if (existingProduct) {
    const updatedProductsArray = productsArray.map((product) =>
      product._id === data._id
        ? {
            ...product,
            quantity: product.quantity + 1,
            finalPrice: (product.quantity + 1) * product.prices.price,
          }
        : product
    );

    dispatch({
      type: SET_CART_DROPDOWN,
      payload: updatedProductsArray,
    });
  } else {
    const updatedProductsArray = [
      ...productsArray,
      {
        ...data,
        quantity: 1,
        finalPrice: data.prices.price,
      },
    ];

    dispatch({
      type: SET_CART_DROPDOWN,
      payload: updatedProductsArray,
    });
  }
};

export const decreaseQuantity = (item) => (dispatch, getState) => {
  const state = getState();
  const productsArray = state.shoppingCart;

  const existingProduct = productsArray.find(
    (product) => product._id === item._id
  );

  if (existingProduct) {
    if (existingProduct.quantity > 1) {
      const updatedProductsArray = productsArray.map((product) =>
        product._id === item._id
          ? {
              ...product,
              quantity: product.quantity - 1,
              finalPrice: (product.quantity - 1) * product.prices.price,
            }
          : product
      );

      dispatch({
        type: SET_CART_DROPDOWN,
        payload: updatedProductsArray,
      });
    } else {
      const updatedProductsArray = productsArray.filter(
        (product) => product._id !== item._id
      );

      dispatch({
        type: SET_CART_DROPDOWN,
        payload: updatedProductsArray,
      });
    }
  }
};
export const increaseQuantity = (item, quantityVal) => (dispatch, getState) => {
  const state = getState();
  const productsArray = state.shoppingCart;

  const existingProduct = productsArray.find(
    (product) => product._id === item._id
  );

  if (existingProduct) {
    const updatedProductsArray = productsArray.map((product) =>
      product._id === item._id
        ? {
            ...product,
            quantity:
              (quantityVal !== undefined ? quantityVal : 1) + product.quantity,
            finalPrice:
              ((quantityVal !== undefined ? quantityVal : 1) +
                product.quantity) *
              product.prices.price,
          }
        : product
    );

    dispatch({
      type: SET_CART_DROPDOWN,
      payload: updatedProductsArray,
    });
  } else {
    const newProduct = {
      ...item,
      quantity: quantityVal !== undefined ? quantityVal : 1,
      finalPrice:
        (quantityVal !== undefined ? quantityVal : 1) * item.prices.price,
    };

    dispatch({
      type: SET_CART_DROPDOWN,
      payload: [...productsArray, newProduct],
    });
  }
};

export const removeDropDownProducts = (data) => (dispatch, getState) => {
  const state = getState();
  const productsArray = state.shoppingCart;

  const updatedProductsArray = productsArray.filter(
    (product) => product._id !== data._id
  );

  dispatch({
    type: SET_CART_DROPDOWN,
    payload: updatedProductsArray,
  });
};

export const deleteAllProducts = () => ({
  type: DELETE_ALL_ITEMS,
});
