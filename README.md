# Books App
## Project Structure
.
└── backend
└── react-front
└── angular
└── telegram-bot

### `backend`

This is a NestJS application that uses GraphQL for interaction.

#### Installation and Running

```bash
cd backend
yarn install
yarn start
```

### `react-front`
This is a frontend application built with React that also uses GraphQL for interaction.

#### Installation and Running
```bash
cd react-front
yarn install
yarn start
```

`angular`

This is a frontend application built with Angular that also uses GraphQL for interaction.

#### Installation and Running
```bash
cd angular
yarn install
yarn start
```

`telegram-bot`

This is a Telegram bot managed by NestJS and nest-telegraf.


```bash
cd telegram-bot
yarn install
yarn start
```

## Docker

To run all project components in Docker, use Docker Compose.

```bash
docker-compose up -d --build
```

This application is managed by environment variables. You can find an example in the `.env.example` file.

```bash
#BACKEND
BACKEND_HOST=back_host
BACKEND_PORT=back_port
#DB
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=typeorm_host
TYPEORM_PORT=typeorm_port
TYPEORM_USERNAME=typeorm_username
TYPEORM_PASSWORD=typeorm_password
TYPEORM_DB=db_name
#FRONTEND
#ANGULAR
ANGULAR_PORT=angular_port
#REACT
REACT_APP_REACT_PORT=REACT_PORT
VITE_GRAPHQL_SERVER_URL="${BACKEND_HOST}:${BACKEND_PORT}/graphql"
#TELEGRAM_BOT
BOT_PORT=BOT_PORT
BOT_TOKEN=BOT_HOST


#AWS
DUCKDNS_DOMAIN=your-domain.com
DUCKDNS_TOKEN=your-duck-token
EMAIL=your@email.com

```