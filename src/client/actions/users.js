import api from "../utils/api";
import {FETCH_USERS} from "./types";

export const fetchUsers = () => async dispatch => {
    const res = await api.get('/users')

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}

