// src/store/registrationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {StatusEnum, API_BASE_URL} from '../utils/constants';

export const registerUser = createAsyncThunk('registration/registerUser', async (formData) => {
  console.log(`${API_BASE_URL}/auth/register`)
  const response = await axios.post(`${API_BASE_URL}/auth/register`, {
    "firstName": formData.firstName,
    "lastName": formData.lastName,
    "email": formData.email,
    "phone": formData.phone,
    "password": formData.password,
});
  console.log(response.data)
  const data = response.data;
  return data;
});

const initialState = {
    firstName: '',
    lastName: '',
    email: '', 
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    agreedToTerms: false,

    firstNameError: '',
    lastNameError: '',
    emailError: '', 
    passwordError: '',
    confirmError: '',
    phoneError: '',
    registrationStatus: StatusEnum.IDLE,
    registrationError: null,
  }; 
const registrationSlice = createSlice({
  name: 'registration',
  initialState: initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    toggleAgreement: (state) => {
      state.agreedToTerms = !state.agreedToTerms;
    },
    resetRegistration: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registrationStatus = StatusEnum.PENDING;
        state.registrationError = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registrationStatus = StatusEnum.APPROVED;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registrationStatus = StatusEnum.REJECTED;
        state.registrationError = action.error.message;
      });
  },
});

export const { updateField, toggleAgreement, resetRegistration } = registrationSlice.actions;

export default registrationSlice.reducer;
