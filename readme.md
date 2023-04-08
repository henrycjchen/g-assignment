## Install the app
```bash
$ pnpm i
```

## prepare mongodb
make sure you have `mongodb with port 27017` at your current server/computer

- create dbname: gradual
- create collections:
  - create collection `users`, and import data from './mock-mongodb-data/gradual/users.json'
  - create collection `channels`, and import data from './mock-mongodb-data/gradual/channels.json'

## Running the app
```bash
$ pnpm run start -r
```