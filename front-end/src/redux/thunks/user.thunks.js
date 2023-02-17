import { createAsyncThunk } from "@reduxjs/toolkit";
import Requestbase from "../../utils/Request";

export const getUserById =  createAsyncThunk('users/getUserById', async (id) => {
    try {
        const res = await Requestbase.get(`api/users/:${id}`);
        return await res.data;
    }
    catch(error){
        alert(error);
    }
})