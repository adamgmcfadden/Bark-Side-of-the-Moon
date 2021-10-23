import { useReducer } from "react";
import {
  ADD_TO_DONATION,
} from "./actions";

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TO_DONATION:
      return {
      donation: state
      };

    default:
      return state;
  }
};

export function useDonationReducer(initialState) {
  return useReducer(reducer, initialState)
}