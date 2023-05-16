FROM node:lts-alpine as builder
WORKDIR /app
COPY . .

RUN npm install -g tsc
RUN npm install
RUN npm run build

FROM nginx:1.17.1-alpine
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE ${PORT}
CMD envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'

