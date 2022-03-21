# Dependency installation stage.
FROM node:16-alpine AS dependencies

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /frontend/fullstack-react-docker-boilerplate/

COPY package.json package-lock.json ./

RUN npm ci

# React app build stage.
FROM node:alpine AS runner

WORKDIR /frontend/fullstack-react-docker-boilerplate/

COPY . .

COPY --from=dependencies ./frontend/fullstack-react-docker-boilerplate/node_modules ./frontend/fullstack-react-docker-boilerplate/node_modules

ENTRYPOINT ["npm", "run", "start"]
