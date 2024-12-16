import { createSlice } from '@reduxjs/toolkit';

interface CompanyState {
    Company: [{
        id: string;
        cnpj: string;
        companyName: string;
        fantasyname: string;
        email: string;
        rntrc: string;
        stateRegistration: string;
        postalCode: string;
        road: string;
        city: string;
        state: string;
        number: string;
        owner: {
            id: string;
            name: string;
            email: string;
            cpf: string;
            phone: string;
            password: string;
            isActive: boolean;
            createdAt: string;
            updatedAt: string;
            deletedAt: string;
        }
    }];
}

const initialState: CompanyState = {
    Company: [{
        id: '',
        cnpj: '',
        companyName: '',
        fantasyname: '',
        email: '',
        rntrc: '',
        stateRegistration: '',
        postalCode: '',
        road: '',
        city: '',
        state: '',
        number: '',
        owner: {
            id: '',
            name: '',
            email: '',
            cpf: '',
            phone: '',
            password: '',
            isActive: false,
            createdAt: '',
            updatedAt: '',
            deletedAt: ''
        }
    }]
};

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setCompany(state, action) {
            state.Company = action.payload;
        },
    },
})

export const { setCompany } = companySlice.actions;
export default companySlice.reducer;
