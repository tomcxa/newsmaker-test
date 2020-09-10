import { nanoid } from 'nanoid'
import { users } from '../users'

import {
    ADD_NEWS,
    DELETE_NEWS,
    SUCCESS_NEWS,
} from '../actions/types'

const initialState = [
    {   
        id: nanoid(),
        creator: users[0].id,
        title: 'Центр Гамалеи представил журналу Lancet протокол исследования вакцины',
        success: true,
        text: 'Ранее сообщалось, что научный журнал Lancet предложил авторам исследования по российской вакцине "Спутник V" от коронавируса ответить на вопросы коллег, усомнившихся в выводах российских ученых.',
        date: Date.now()
    },
    {   
        id: nanoid(),
        creator: users[1].id,
        title: 'Мосбиржа: курс рубля падает',
        success: true,
        text: 'На момент открытия торгов Московской биржи 10 сентября курс доллара составил 75,36 рублей, а евро — 89,0725 рублей.',
        date: Date.now()
    },
    {   
        id: nanoid(),
        creator: users[0].id,
        title: 'Российская киноиндустрия будет представлена на международном кинорынке в Торонто',
        success: false,
        text: 'Компания «Роскино» при поддержке Министерства культуры создаст виртуальный стенд российского кино на фестивале TIFF Industry.',
        date: Date.now()
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