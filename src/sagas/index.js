import {all} from 'redux-saga/effects';
import animeSaga from './animeSaga';


export default function* rootSaga(){
    yield all([
        animeSaga(),
    ])
}