FROM node:16 as base

WORKDIR /usr/src/app

COPY . .


FROM base as test

RUN npm ci

ENV CI=true

RUN npm run test


FROM base as build

RUN npm ci --only=production

ENV REACT_APP_BACKEND_URL="http://localhost:3000"

CMD ["npm", "start"]

