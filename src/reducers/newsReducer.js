import { nanoid } from 'nanoid'

import {
    ADD_NEWS,
    DELETE_NEWS,
    SUCCESS_NEWS,
} from '../actions/types'

const initialState = [
    {   
        id: nanoid(),
        title: 'News',
        success: false,
        text: 'asdaksjdjasdkajsdk jaskldjkasjdka sjd jaskjdkajsdjaj askskdkaksdk askdj jjjsjjsjs',
        date: '22.07.2020'
    },
    {   
        id: nanoid(),
        title: 'News2',
        success: true,
        text: 'asdaksjdjasdkajsdk jaskldjkasjdka sjd jaskjdkajsdjaj askskdkaksdk askdj jjjsjjsjs',
        date: '22.07.2020'
    },
    {   
        id: nanoid(),
        title: 'News3',
        success: false,
        text: 'asdaksjdjasdkajsdk jaskldjkasjdka sjd jaskjdkajsdjaj askskdkaksdk askdj jjjsjjsjs',
        date: '22.07.2020'
    }
]

const newsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_NEWS:
            return [
                ...state,
                { id: nanoid(), success: false, date: Date.now(), ...payload }
            ];
        case DELETE_NEWS:
            return state.filter(news => news.id !== payload);
        case SUCCESS_NEWS:
            return state.map(news => {
                if (news.id === payload) {
                    return { ...news, success: true }
                }
                return news
            });
        default:
            return state;
    }
}

export default newsReducer