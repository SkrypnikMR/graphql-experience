FROM node:14-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
ENV PORT ${BACKEND_PORT}
EXPOSE ${BACKEND_PORT}
CMD ["npm", "run", "start:prod"]