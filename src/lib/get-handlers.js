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
        get(targetValue, prop, recievingValue) {
            console.log({
                targetValue,
                prop,
                recievingValue
            })
        },
        set(targetValue, prop, newValue) {
            console.log('Setting in storage')

            targetValue[prop] = newValue

            setItem(name, targetValue)

            return true
        }
    }
}