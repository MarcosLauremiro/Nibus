import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    user: {
        id?: string;
        name?: string;
        email?: string;
        cpf?: string;
        phone?: string;
        isActive?: boolean;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
    }
}

const initialState: UserState = {
    user: {
        id: '',
        name: '',
        email: '',
        cpf: '',
        phone: '',
        isActive: false,
        createdAt: '',
        updatedAt: '',
        deletedAt: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
    },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;