import { createSlice } from "@reduxjs/toolkit";

interface CollapsedState {
    isCollapsed: boolean;
}

const initialState: CollapsedState = {
    isCollapsed: false,
}

const collapsedSlice = createSlice({
    name: 'collapsed',
    initialState,
    reducers: {
        toggleCollapsed(state) {
            state.isCollapsed = !state.isCollapsed;
        },
    },
})

export const { toggleCollapsed } = collapsedSlice.actions;
export default collapsedSlice.reducer;