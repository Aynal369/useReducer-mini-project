import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionType } from "../state/productState/actionType";
import {
  initialState,
  productReducer,
} from "../state/productState/productReducer";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  useEffect(() => {
    dispatch({ type: actionType.START });
    axios
      .get("https://dummyjson.com/products")
      .then((res) =>
        dispatch({ type: actionType.SUCCESS, payload: res.data.products })
      )
      .catch(() => {
        dispatch({ type: actionType.ERROR });
      });
  }, []);
  const value = { state };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
