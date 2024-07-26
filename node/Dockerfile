FROM node:22

WORKDIR /usr/src/app

COPY package.json .
COPY docker_entrypoint.sh .

ENTRYPOINT [ "/usr/src/app/docker_entrypoint.sh" ]