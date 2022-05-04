FROM node:16-slim as builder

WORKDIR /opt/app

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:16-slim

ENV TZ=Europe/Madrid

WORKDIR /opt/app

COPY --from=builder /opt/app/build ./build
COPY package*.json ./
RUN npm install --production

EXPOSE 80
CMD ["npm", "start"]