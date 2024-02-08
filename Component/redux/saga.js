import { takeEvery,put } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST } from "./constant";


const BASE_URL = 'http://10.0.2.2:5137/api';

function* userList(){
    const url = `${BASE_URL}/CustomerSupportAPI`;
    let data = yield fetch(url);
    data = yield data.json()
    yield put({type:SET_USER_DATA,data})
   
}
function* SagaData(){

yield takeEvery(USER_LIST,userList);


}
export default SagaData;