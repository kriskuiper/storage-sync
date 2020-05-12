const {
    syncWithLocalStorage,
    syncWithSessionStorage
} = require('../src/index.js')

const user = {
    name: 'Henk',
    surname: 'Surname'
}

const initialUsers = [
    {
        name: 'User one',
        surname: 'First'
    },
    {
        name: 'User two',
        surname: 'Second'
    }
]

describe('Syncs object with localStorage', () => {
    test('Inits object in localStorage', () => {
        const storage = window.localStorage
        const person = syncWithLocalStorage('person', user)
        const item = JSON.parse(storage.getItem('person'))

        expect(item).toEqual(person)
    })

    test('Updates object in localStorage', () => {
        const storage = window.localStorage
        const person = syncWithLocalStorage('person', user)

        person.name = 'Test'

        const item = JSON.parse(storage.getItem('person'))

        expect(item).toEqual(person)
    })

    test('Gets object property from localStorage', () => {
        const person = syncWithLocalStorage('person', user)
        const { name } = person

        expect(name).toBeTruthy()
    })
})

describe('Syncs object with sessionStorage', () => {
    test('Inits object in sessionStorage', () => {
        const storage = window.sessionStorage
        const person = syncWithSessionStorage('person', user)
        const item = JSON.parse(storage.getItem('person'))

        expect(item).toEqual(person)
    })

    test('Updates object in sessionStorage', () => {
        const storage = window.sessionStorage
        const person = syncWithSessionStorage('person', user)

        person.name = 'Test'

        const item = JSON.parse(storage.getItem('person'))

        expect(item).toEqual(person)
    })
})

describe('Syncs array with localStorage', () => {
    test('Inits array in localStorage', () => {
        const storage = window.localStorage
        const users = syncWithLocalStorage('users', initialUsers)
        const usersInStorage = JSON.parse(storage.getItem('users'))

        expect(users).toEqual(usersInStorage)
    })
})