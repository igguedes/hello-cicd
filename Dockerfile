FROM node:18-alpine

WORKDIR /app

COPY . .
COPY ./.env.production ./.env 

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start:prod"]