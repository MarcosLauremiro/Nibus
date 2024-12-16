import { configureStore } from "@reduxjs/toolkit";
import collapsedReducer from "./collapsed/CollapsedSlice";
import userReducer from "./user/UserSlice";
import companyReducer from "./company/CompanySlice";

export const store = configureStore({
    reducer: {
        collapseSlice: collapsedReducer,
        userSlice: userReducer,
        companySlice: companyReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;