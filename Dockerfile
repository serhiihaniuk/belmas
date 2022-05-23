FROM node:14 as build

WORKDIR /usr/src/bns

COPY . .

RUN npm install
RUN npm install gulp
RUN npm install -g gulp
RUN npm link gulp

RUN npm run build

FROM node:14

WORKDIR /usr/src/bns

COPY --from=build /usr/src/bns/server ./server
COPY --from=build /usr/src/bns/dist ./server/dist

EXPOSE 3000

CMD ["node", "./server/server.js"]
