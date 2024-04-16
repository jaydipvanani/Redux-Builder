import { call, put } from "redux-saga/effects";
import { delete_user, get_user, post_user, update_user } from "../../user/api/api";
import { type } from "@testing-library/user-event/dist/type";
import { DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from "../../user/action/action";

function* handle_get_user(action) {
    try {
        let { data, status } = yield call(get_user, action)

        if (status == 200) {
            yield put({ type: GET_USER_SUCCESS, data })
        }
        else {
            yield put({ type: GET_USER_ERROR, data })

        }
    }
    catch (err) {
        yield put({ type: GET_USER_ERROR, err });
    }

}

function* handle_post_user(action) {
    try {
        let { data, status } = yield call(post_user, action)

        if (status == 200 || status == 201) {
            yield put({ type: POST_USER_SUCCESS, data })
        }
        else {
            yield put({ type: POST_USER_ERROR, data })

        }
    }
    catch (err) {
        yield put({ type: POST_USER_ERROR, err });
    }

}

function* handle_delete_user(action) {
    // console.log(action, "action from manage");
    try {

        let { data, status } = yield call(delete_user, action)

        if (status == 200) {
            yield put({ type: DELETE_USER_SUCCESS, data })
        } else {
            yield put({ type: DELETE_USER_ERROR, data })
        }

    } catch (err) {
        yield put({ type: DELETE_USER_ERROR, err })
    }
}

function* handle_update_user(action) {
    console.log(action,"update action manage");
    try {
        let {data, status} = yield call(update_user, action)
        console.log(status);
        if (status == 200) {
            yield put({ type: UPDATE_USER_SUCCESS, data })
        } else {
            yield put({ type: UPDATE_USER_ERROR, data })
        }
    } catch (err) {
        yield put({ type: UPDATE_USER_ERROR, err });
    }

}

export { handle_get_user, handle_post_user, handle_delete_user, handle_update_user }