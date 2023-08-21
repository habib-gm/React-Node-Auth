// authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { StatusEnum, API_BASE_URL } from "../utils/constants";


export const verify = createAsyncThunk('forgotPassword/verify', async (formData) => {
    const response = await axios.post(`${API_BASE_URL}/auth/forgot`, 
    {
      "email": formData.email,
  }
    );
    const data = response.data;
    return data;
});


const initialState = {
  email: "",
  verifySent: false,
  verifyStatus: StatusEnum.IDLE,
  emailError: "",
  error: '',
};

const forgetPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    updateField: (state, action) =>{
      const {field, value} = action.payload;
      state[field] = value;
    },
    resetVerify: () =>{
      return initialState;
    }
  },
  extraReducers: (builder) =>{
    builder
    .addCase(verify.pending, (state)=>{
      state.verifyStatus = StatusEnum.PENDING;
      state.error = null;
    })
    .addCase(verify.fulfilled, (state, action)=>{
      state.verifyStatus = StatusEnum.APPROVED;
      state.verifySent = action.payload.sent;
    })
    .addCase(verify.rejected, (state, action)=>{
      state.verifyStatus = StatusEnum.REJECTED;
      state.error = action.error.message;
    })
  }
});

export const { updateField, resetVerify } = forgetPasswordSlice.actions;
export default forgetPasswordSlice.reducer;
