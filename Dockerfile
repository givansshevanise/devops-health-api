FROM node:20-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


FROM node:20-alpine AS runner

WORKDIR /app

RUN apk upgrade --no-cache && \
    rm -rf /usr/local/lib/node_modules/npm \
           /usr/local/bin/npm \
           /usr/local/bin/npx \
           /opt/yarn-v* \
           /usr/local/lib/node_modules/corepack \
           /usr/local/bin/corepack

COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
COPY src ./src

EXPOSE 3000

CMD ["node", "src/index.js"]
