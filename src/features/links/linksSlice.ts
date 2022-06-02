import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
//import { RootState } from "../../app/store";

const linksSlice = createSlice({
    name: "links",
    initialState: {
        loading: "",
        error: "",
        data: []
    },
    reducers:{

    }
});

/*export const fetchLinks = createAsyncThunk("links/getLinks", async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const items = state.Links.items;


    const response = await fetch("");
    if (!response.ok)
        throw Error(response.statusText);
    const json = await response.json();
    return json;
});*/

/*export const fetchLinks = createAsyncThunk("links/getLinks", endpoint => {
    return fetch(endpoint)
    .then(response => {
        if(!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(json => json);
});*/
