import { nanoid } from 'nanoid'

export const users = [
    {   
        id: nanoid(),
        name: 'user',
        password: 'user',
        isAdmin: false,
    },
    {
        id: nanoid(),
        name: 'admin',
        password: 'admin',
        isAdmin: true,
    }
]