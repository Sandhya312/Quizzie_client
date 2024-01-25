
import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState:{
        isRegistered:false,
        isLoggedIn:false,
    },
    reducers:{
        register(state){
            state.isRegistered = true;
        },
        login(state){
                
             state.isLoggedIn = true;
        
        },
        logout(state){
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


