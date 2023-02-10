import {APPS} from '../../app/shared/APPS.js';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
//import { baseUrl } from '../../app/shared/baseUrl';
//import { mapImageURL } from '../../utils/mapImageURL';

// export const fetchCampsites =createAsyncThunk(
//     'campsites/fetchCampsites',
//     async ()=>{
//         const response = await fetch(baseUrl+'campsites');
//         if(!response.ok){
//             return Promise.reject('Unable to fetch, status: '+ response.status);
//         }
//         const data = await response.json();
//         return data;
//     }
// );

const initialState = {};
//const initialState = { 
//    appsArray: [],
//  isLoading: true,
//     errMsg: ''
//};

const appsSlice = createSlice( {
    name: 'apps', 
    initialState,
    reducers: {},
    
} );
// extraReducers:{
//     [fetchCampsites.pending]: (state)=>{
//         state.isLoading = true;
//     },
//     [fetchCampsites.fulfilled]: (state,action)=>{
//         state.isLoading = false;
//         state.errMsg = '';
//         state.campsitesArray = mapImageURL(action.payload);
//     },
//     [fetchCampsites.rejected]: (state,action)=>{
//         state.isLoading = false;
//         state.errMsg = action.error? action.error.message : 'Fetch failed';
//     }
export const appsReducer = appsSlice.reducer;

export const selectAllApps = ()=>{
    return APPS;
};
// export const selectAllApps = (state)=>{
//     return state.apps.appsArray;
// };

// export const selectRandomCampsite = ()=>{
//     return CAMPSITES[Math.floor(CAMPSITES.length*Math.random())];
// };

export const selectAppById = (id)=>{
    return APPS.find(app => app.id === parseInt(id));
};
// export const selectAppById = (id)=>(state)=>{
//     return state.apps.appsArray.find(app => app.id === parseInt(id));
// };

// export const selectFeaturedApp = (state) => {
//     return {featuredItem: state.apps.appsArray.find(
//             app => app.featured),
//             isLoading: state.apps.isLoading,
//             errMsg: state.apps.errMsg }
// };