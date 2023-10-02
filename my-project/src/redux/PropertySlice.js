import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = []

 export const PropertyThunk = createAsyncThunk('PropertyThunk', async () => {
    const property = await (await ( fetch('public_api.json'))).json();
    return property;
  })

  export const PropertySlice = createSlice({
    name:'property',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(PropertyThunk.fulfilled,(state,action)=>{
          console.log([...action.payload])
            return [...action.payload]
        });
    }
  })

  export const {} = PropertySlice.actions;

  export default PropertySlice.reducer;