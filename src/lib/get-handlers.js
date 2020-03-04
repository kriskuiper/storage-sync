import {
    getLocalStorageItem,
    setLocalStorageItem,
    getSessionStorageItem,
    setSessionStorageItem
} from './storage-helpers.js.js'

export default (storageName, name) => {
    if (!storageName) throw new ReferenceError('Storage name is not defined')
    if (!name) throw new ReferenceError(`You should give a name to the value you want to pass into ${storageName}`)

    // All checks completed, we can now continue
    const getItem = storageName === 'localStorage'
        ? getLocalStorageItem : getSessionStorageItem
    const setItem = storageName === 'localStorage'
        ? setLocalStorageItem : setSessionStorageItem

    return {
        get(defaultValue, prop) {
            const item = getItem(name)

            if (item && prop) {
                return item[prop]
            } else if (item) {
                return item
            }

            return defaultValue
        },
        set(defaultValue, prop, newValue) {
            defaultValue[prop] = newValue

            setItem(name, defaultValue)

            return true
        }
    }
}