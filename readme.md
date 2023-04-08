## Install the app

```bash
$ npx pnpm i
```

## prepare mongodb

make sure you have `mongodb with port 27017` at your current server/computer

- create dbname: `gradual`
- create collections:
  - create collection `users`, and import data from './mock-mongodb-data/gradual/users.json'
  - create collection `channels`, and import data from './mock-mongodb-data/gradual/channels.json'

## Running the app

```bash
$ npx pnpm run start -r
```

backend will start at `localhost:3000`

> you can edit the port at `packages/backend/conf/env.ts`

frontend will start at `localhost:5566`

> you can edit the port at `packages/frontend/conf/env.ts`