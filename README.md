# ts-hapi-starter
> Minimal Hapi/TypeScript boilerplate

## Getting started

### Setup

```bash
git clone https://github.com/zsevic/ts-hapi-starter
cd ts-hapi-starter
cp .env.sample .env # change values after copying
npm i
npm run dev
```

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Testing

```bash
npm test
```

### Migrations

```bash
npm run migration:generate <MIGRATION_NAME>
npm run migrate
npm run migrate:down
```

### Seeders

```bash
npm run seed:generate <SEEDER_NAME>
npm run seed
npm run seed:down
```

## Usage

```
GET /api/authors
POST /api/authors
GET /api/authors/{authorId}/posts
GET /api/posts
POST /api/posts
```

## API documentation

API documentation is generated using [hapi-swagger](https://www.npmjs.com/package/hapi-swagger) plugin at `/api-docs` endpoint

## :package: Technologies used
* Node.js, TypeScript, Hapi, TypeORM, SQLite