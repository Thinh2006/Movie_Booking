import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookingChairs: [],
    bookedChairs: []
};

const movieBookingSlice = createSlice({
    name: "movieBooking",
    initialState,
    reducers: {
        setBookingChair: (state, action) => {
            const index = state.bookingChairs.findIndex(
                (chair) => chair.soGhe === action.payload.soGhe
            );

            if (index !== -1) {
                state.bookingChairs.splice(index, 1);
            } else {
                state.bookingChairs.push(action.payload);
            }
        },
        setBookedChairs: (state) =>{
            state.bookedChairs = [...state.bookedChairs, ...state.bookingChairs]
            state.bookingChairs = []
        }
    },
    extraReducers: () => {},
});

export const { reducer: movieBookingReducer, actions: movieBookingaction } =
    movieBookingSlice;
