# TODO App

Todo App with a GraphQL API, where you can create workspaces (i.e. work, personal life, gym, etc) and create todo items.
CRUD of workspaces and todoItems is available.
The relationship between a workspace and todo items is one-to-many.

This has been a training in graphql and nestjs-query/graphql

## Installation

```bash
$ npm install
```

## Running the app

```bash
# database
$ docker-compose up -d

# development
$ npm start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

Tests where not part of the scope of this training.
Anyway if for some reason someone (even me) continue working from this repo, here the test commands

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
