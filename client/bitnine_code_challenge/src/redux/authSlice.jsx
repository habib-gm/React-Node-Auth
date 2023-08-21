// authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { StatusEnum, API_BASE_URL } from "../utils/constants";

export const login = createAsyncThunk('auth/login', async (formData) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        "email": formData.email,
        "password": formData.password
    });
    console.log(response)
    
    if(formData.rememberMe){ 
      localStorage.setItem('token', response.data.token);
    }
    const data = response.data;
    return data;
});

export const logout = () => (dispatch) => {
  // Clear token from local storage
  localStorage.removeItem('token');
  dispatch(logout());
};

const initialState = {
  isAuthenticated: localStorage.getItem('token') != null,
  authStatus: StatusEnum.IDLE,
  token: null,

  email: "",
  password:"",
  rememberMe: false,
  emailError: "",
  passwordError: "",
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateField: (state, action) =>{
      const {field, value} = action.payload;
      state[field] = value;
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.error = '';
    },
    resetLogin: () =>{
      return initialState;
    }
  },

  extraReducers: (builder) =>{
    builder
    .addCase(login.pending, (state)=>{
      state.authStatus = StatusEnum.PENDING;
      state.error = null;
    })
    .addCase(login.fulfilled, (state, action)=>{
      if(action.payload.token){
        state.authStatus = StatusEnum.APPROVED;
        state.token = action.payload;
        state.isAuthenticated = true;
      }else{
        state.authStatus = StatusEnum.IDLE;
      }
    })
    .addCase(login.rejected, (state, action)=>{
      state.authStatus = StatusEnum.REJECTED;
      state.error = action.error.message;
    })
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(login.pending, (state) => {
  //       state.registrationStatus = 'LOADING';
  //       state.registrationError = null;
  //     })
  //     .addCase(login.fulfilled, (state) => {
  //       state.registrationStatus = 'SUCCESS';
  //     })
  //     .addCase(login.rejected, (state, action) => {
  //       state.registrationStatus = 'FAILED';
  //       state.registrationError = action.error.message;
  //     });
  // },
});

export const { updateField, logoutAction, resetLogin } = authSlice.actions;
export default authSlice.reducer;
