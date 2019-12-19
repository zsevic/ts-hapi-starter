# ts-hapi-starter
> Minimal Hapi/TypeScript boilerplate

### :wrench: Setup

```bash
git clone https://github.com/zsevic/ts-hapi-starter
cd ts-hapi-starter
cp .env.sample .env # change values after copying
npm i
npm run dev
```

### :construction_worker: Build

```bash
npm run build
npm start
```

### :rotating_light: Testing

```bash
npm test
```

### :arrow_right: Usage

```
GET /api/authors
POST /api/authors
GET /api/authors/{authorId}/posts
GET /api/posts
POST /api/posts
```

### :package: Technologies used
* Node.js, TypeScript, Hapi, TypeORM, SQLite