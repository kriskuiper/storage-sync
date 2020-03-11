# Storage sync
Using JS Proxy to sync an object literal with local- or sessionStorage.

## Installation
Use your package manager to install the package.

```bash
npm install storage-sync

# OR

yarn add storage-sync
```

## Usage
1. Syncing objects with a storage (works the same in both local- and sessionStorage)
```js
import { syncWithLocalStorage } from 'storage-sync'

// Automatically sets the object in localStorage under 'person' key
const localPerson = syncWithLocalStorage('person', {
    firstName: 'Firstname',
    lastName: 'Lastname'
})

// When adding or changing a property,
// the object is directly synced with localStorage:
localPerson.age = 20

console.log(JSON.parse(localStorage.getItem('person')))
// > { firstName: 'Firstname', lastName: 'Lastname', age: 20 }
```

## Contributing
Found an issue or have a feature request? Open an issue and we'll discuss if it's worth fixing or adding it. Please make sure to update tests accordingly before creating a Pull Request.

## License
Unless stated otherwise, license is MIT.
