import getTraps from './lib/get-traps'
import {
    setLocalStorageItem,
    setSessionStorageItem
} from './lib/storage-helpers'

const isValidValue = (value) => {
    return typeof value === 'object'
}

/**
 * @description Syncs an object literal to sessionStorage
 * @param {string} name Name of the value in sessionStorage
 * @param {*} value Value that should be synced with sessionStorage
 */
export const syncWithSessionStorage = (name, value) => {
    if (isValidValue(value)) {
        setSessionStorageItem(name, value)
        return new Proxy(value, getTraps('sessionStorage', name))
    }

    throw new TypeError(`Value should be of type object, value is now ${typeof value}.`)
}

/**
 * @description Syncs an object literal to localStorage
 * @param {string} name Name of the value in localStorage
 * @param {object | array} value Value that should be synced with localStorage
 */
export const syncWithLocalStorage = (name, value) => {
    if (isValidValue(value)) {
        setLocalStorageItem(name, value)
        return new Proxy(value, getTraps('localStorage', name))
    }

    throw new TypeError(`Value should be of type object, value is now ${typeof value}.`)
}