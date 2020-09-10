import { users } from '../users'

export const findUser = (value) => {
    for (let user of users) {
        if (JSON.stringify(user, ['name', 'password']) === JSON.stringify(value)) {
            return user
        }
    }
    return null
}