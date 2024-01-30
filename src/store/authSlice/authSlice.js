
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://quizzie-server.cyclic.app";

  //signup user
  export const signupUser = createAsyncThunk(
    "signupUser",
    async (data,{rejectWithValue})=>{
        try{
        const response = await axios.post(`${baseUrl}/auth/signup`,data);
        const result = await response.data;
        console.log(result,response);
        if(response.status===200){
            console.log("success",result);
            return result;
        }
        }catch(err){
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
  )


  //login user
 export const loginUser = createAsyncThunk(
    "loginUser",
    async(data,{rejectWithValue})=>{
        try{
            const response = await axios.post(`${baseUrl}/auth/login`,data);
            const result = await response.data;
            console.log(result,response);
            if(response.status===200){
                console.log("success",result);
                return result;
            }
        }catch(err){
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
  )


  //logout user
  export const logoutUser = createAsyncThunk(
    "logoutUser", async(data,{rejectWithValue})=>{
        try{
            const response = await axios.post(`${baseUrl}/auth/logout`,
            { headers: { authorization: `Bearer ${data.token}` } }
            );
            const result = await response.data;
            console.log(result,response);
            if(response.status===200){
                console.log("success",result);
                return result;
            }
        }catch(err){
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
  )


const authSlice = createSlice({
    name: "auth",
    initialState:{
        user:null,
        token:null,
        error:"",
        loading:false,
        isAuthenticated:false,
        isRegistered:false,
        isLoggedIn:false,
    },
    extraReducers:(builder)=>{
        builder

        .addCase(signupUser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(signupUser.fulfilled,(state,action)=>{
            state.loading = false;
            console.log("48",action.payload);
            state.user = action.payload;
            state.isRegistered = true;
            state.isAuthenticated = true;
        })
        .addCase(signupUser.rejected,(state,action)=>{
            state.loading = false;
            console.log("54",action.payload);
            state.error = action.payload;
        })
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            console.log("86",action.payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
            console.log("88",state.user,state.token);
            state.isLoggedIn = true;
            state.isAuthenticated=true;
            state.loading = false;

        })
        .addCase(loginUser.rejected,(state,action)=>{
            console.log("92",action.payload);
            state.error = action.payload;
            state.loading = false;

        })

        .addCase(logoutUser.pending,(state)=>{
            state.loading = true;
        })

        .addCase(logoutUser.fulfilled,(state,action)=>{
            console.log("122",action.payload);
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
            state.isAuthenticated=false;
            state.loading = false;

        })

        .addCase(logoutUser.rejected,(state,action)=>{
            console.log("132",action.payload);
            state.error = action.payload;
            state.loading = false;

        })
        
    },
    reducers:{
        register(state){
            state.isRegistered = true;
        },
        login(state){
                
             state.isLoggedIn = true;
        
        },
        logout(state){
            state.user=null;
            state.token=null;
            state.isLoggedIn = false;

        },
        showSignup(state){
            state.isRegistered=false;
        },
        showLogin(state){
            state.isRegistered=true;
            // state.isLoggedIn=false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;



// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;



