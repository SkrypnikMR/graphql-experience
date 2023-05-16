FROM node:14-alpine as angular-builder
WORKDIR /app
COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install --legacy-peer-deps
COPY . .
RUN ng build --configuration=production

FROM nginx:1.17.1-alpine
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY --from=angular-builder /app/dist/angular /usr/share/nginx/html
EXPOSE ${ANGULAR_PORT}
CMD envsubst '${ANGULAR_PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'
