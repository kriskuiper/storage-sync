import getHandlers from './lib/get-handlers.js'

/**
 * @description Syncs an object literal to sessionStorage
 * @param {string} name Name of the value in sessionStorage
 * @param {*} value Value that should be synced with sessionStorage
 */
export const syncWithSessionStorage = (name, value) => {
    return new Proxy(value, getHandlers('sessionStorage', name))
}

/**
 * @description Syncs an object literal to localStorage
 * @param {string} name Name of the value in localStorage
 * @param {*} value Value that should be synced with localStorage
 */
export const syncWithLocalStorage = (name, value) => {
    return new Proxy(value, getHandlers('localStorage', name))
}