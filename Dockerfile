FROM node:18 as base
ARG env
WORKDIR /webapps
COPY package.json /webapps
RUN yarn add env-cmd

FROM base AS builder
RUN yarn install
ADD . .
RUN yarn build:$env

FROM base AS runner
COPY --from=builder /webapps/.next/ /webapps/.next/
COPY --from=builder /webapps/public/ /webapps/public/
COPY --from=builder /webapps/.env /webapps/.env
RUN echo "#!/bin/sh\n" > /webapps/start.sh
RUN echo "yarn start:$env" >> /webapps/start.sh
RUN chmod +x /webapps/start.sh
RUN chown -R node:node /webapps
USER node
ENTRYPOINT [ "/webapps/start.sh" ]
