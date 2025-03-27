FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN corepack enable
RUN pnpm install
#RUN npm ci --only=production

COPY . .

EXPOSE 3355
CMD [ "npm", "run", "start" ]

