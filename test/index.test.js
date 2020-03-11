const {
    syncWithLocalStorage,
    syncWithSessionStorage
} = require('../index.js')

const user = {
    name: 'Henk',
    surname: 'Surname'
}

describe('Syncs with localStorage', () => {
    test('Inits item in localStorage', () => {
        const storage = window.localStorage
        const person = syncWithLocalStorage('person', user)
        const item = JSON.parse(storage.getItem('person'))

        expect(item).toEqual(person)
    })

    test('Updates item in localStorage', () => {
        const storage = window.localStorage
        const person = syncWithLocalStorage('person', user)

        person.name = 'Test'

        const item = JSON.parse(storage.getItem('person'))

        expect(item).toEqual(person)
    })

    test('Gets property from localStorage', () => {
        const person = syncWithLocalStorage('person', user)
        const { name } = person

        expect(name).toBeTruthy()
    })
})

describe('Syncs with sessionStorage', () => {
    test('Inits item in sessionStorage', () => {
        const storage = window.sessionStorage
        const person = syncWithSessionStorage('person', user)
        const item = JSON.parse(storage.getItem('person'))

        expect(item).toEqual(person)
    })

    test('Updates item in sessionStorage', () => {
        const storage = window.sessionStorage
        const person = syncWithSessionStorage('person', user)

        person.name = 'Test'

        const item = JSON.parse(storage.getItem('person'))

        expect(item).toEqual(person)
    })
})