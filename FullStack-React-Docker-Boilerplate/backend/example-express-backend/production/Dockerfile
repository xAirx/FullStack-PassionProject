# Multi-Stage
# Stage 1: build
FROM node:16-alpine as build

WORKDIR /backend/example-express-backend/

COPY . .

RUN npm i && npm run build

# Stage 2: prod
FROM node:16-alpine as prod

WORKDIR /app

RUN chown -R node:node /backend/example-express-backend/

USER node

COPY --chown=node:node --from=build /backend/example-express-backend/dist /backend/example-express-backend/dist

COPY --chown=node:node --from=build /backend/example-express-backend/package*.json /backend/example-express-backend//

RUN npm install --only=prod

CMD [ "npm", "start" ]