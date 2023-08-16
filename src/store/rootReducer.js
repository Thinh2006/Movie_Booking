import { combineReducers } from "@reduxjs/toolkit";
import { movieBookingReducer } from "./Moviebooking/slice";

export const rootReducer = combineReducers({
    movieBooking: movieBookingReducer
})