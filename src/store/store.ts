import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkmode/darkModeSlice";
import collapsedReducer from "./collapsed/CollapsedSlice";

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        collapseSlice: collapsedReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;