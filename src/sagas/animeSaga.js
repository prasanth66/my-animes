import {call , put , takeEvery } from 'redux-saga/effects'
// https://cors-anywhere.herokuapp.com/

let apiUrl = " https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/search/anime?q=";

async function getApi(payload) {
    apiUrl = " https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/search/anime?q=";
    console.log(payload)
    apiUrl = await payload.text.length>0?apiUrl+payload.text:apiUrl+"naruto";
    apiUrl = await payload.offset!=undefined ? apiUrl+"&page="+payload.offset:apiUrl+"&page=1";
   
    return fetch(apiUrl,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*",
           'accept':'application/json',
            'content-type':'application/json'
        },
    }).then(response => {
        console.log(response);
         if (!response.ok) {
       return response.text().then(result => Promise.reject(new Error(result)));
    }
        return response.json();
    })
    
    .catch((error) => {throw error})
}


function* fetchAnimes(action){
    try{
        const animes = yield call(getApi,action.payload);
        yield put({type:"GET_ANIMES_SUCCESS",animes:animes});
    }catch(e){
        console.log(e);
        yield put({type:"GET_ANIMES_FAILED",message: e.message});
    }
}

function* animeSaga(){
    yield takeEvery("GET_ANIMES_REQUESTED",fetchAnimes);
}

export default animeSaga ;