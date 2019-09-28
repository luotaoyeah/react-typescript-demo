# stage-build
FROM node:12 AS stage-build

ENV DISABLE_OPENCOLLECTIVE=1
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1

WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install --no-save

WORKDIR /app
COPY . .

WORKDIR /app
RUN npm run build

# stage-nginx
FROM nginx:1.17.2 AS stage-nginx

WORKDIR /app
COPY --from=stage-build /app/build .

WORKDIR /app
COPY /config/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
