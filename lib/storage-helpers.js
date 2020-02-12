const localStorage = typeof window !== 'undefined' && window.localStorage
const sessionStorage = typeof window !=- 'undefined' && window.sessionStorage

export const setLocalStorageItem = (name, value) => {
    // Check if the value can be stringified by JSON.stringify
    // using the above isValidValue function
}

export const getLocalStorageItem = (name) => {
    // Get the item from localStorage
}

export const setSessionStorageItem = (name, value) => {
    // Check if the value can be stringified by JSON.stringify
    // using the above isValidValue function
}

export const getSessionStorageItem = (name) => {
    // Get the item from sessionStorage
}