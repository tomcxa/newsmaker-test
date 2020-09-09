import {
    ADD_NEWS,
    SUCCESS_NEWS,
    DELETE_NEWS
} from '../types'

export const addNews = (news) => (
    {
        type: ADD_NEWS,
        payload: news
    }
)

export const deleteNews = (id) => (
    {
        type: DELETE_NEWS,
        payload: id
    }
)

export const successNews = (id) => (
    {
        type: SUCCESS_NEWS,
        payload: id
    }
)