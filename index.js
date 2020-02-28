import getHandlers from './lib/get-handlers.js'

const isValidValue = (value) => {
    return typeof value === 'object' 
        || typeof value === 'array'
}

/**
 * @description Syncs an object literal to sessionStorage
 * @param {string} name Name of the value in sessionStorage
 * @param {*} value Value that should be synced with sessionStorage
 */
export const syncWithSessionStorage = (name, value) => {
    if (isValidValue(value)) {
        return new Proxy(value, getHandlers('sessionStorage', name))
    }

    throw new TypeError('Value should be of type object or array.')
}

/**
 * @description Syncs an object literal to localStorage
 * @param {string} name Name of the value in localStorage
 * @param {object | array} value Value that should be synced with localStorage
 */
export const syncWithLocalStorage = (name, value) => {
    if (isValidValue(value)) {
        return new Proxy(value, getHandlers('localStorage', name))
    }

    throw new TypeError('Value should be of type object or array.')
}