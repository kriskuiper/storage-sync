const localStorage = typeof window !== 'undefined' && window.localStorage
const sessionStorage = typeof window !== 'undefined' && window.sessionStorage

export const setLocalStorageItem = (name, value) => {
    return localStorage.setItem(name, JSON.stringify(value))
}

export const getLocalStorageItem = (name) => {
    const item = localStorage.getItem(name)

    if (item) {
        return JSON.parse(item)
    }
}

export const setSessionStorageItem = (name, value) => {
    return sessionStorage.setItem(name, JSON.stringify(value))
}

export const getSessionStorageItem = (name) => {
    const item = sessionStorage.getItem(name)

    if (item) {
        return JSON.parse(item)
    }
}