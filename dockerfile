FROM debian

COPY . /usr/src/app/
WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get -y install curl

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get  -y install nodejs
RUN npm install

EXPOSE 8000
CMD [ "npm", "start" ]