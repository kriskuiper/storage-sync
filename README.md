# Web storage sync
Using JS Proxy to sync an object literal with local- or sessionStorage.

## Installation
Use your package manager to install the package.

```bash
npm install web-storage-sync

# OR

yarn add web-storage-sync
```

## Usage
1. Syncing objects with a storage (works the same in both cases)
```js
import { syncWithLocalStorage } from 'web-storage-sync'

// Automatically sets the object in localStorage under 'person' key
const person = syncWithLocalStorage('person', {
    firstName: 'Firstname',
    lastName: 'Lastname'
})

// When adding or changing a property,
// the object is directly synced with localStorage:
person.age = 20

console.log(JSON.parse(localStorage.getItem('person')))
// > { firstName: 'Firstname', lastName: 'Lastname', age: 20 }
```

## Contributing
Found an issue or have a feature request? Open an issue and we'll discuss if it's worth fixing or adding it. Please make sure to update tests accordingly before creating a Pull Request.

## Wishlist
* [ ] Also be able to sync arrays

## License
Unless stated otherwise, license is MIT.
