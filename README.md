# Movies Manager

## Tech environment
Database : mongodb
Back-side : Node.js / Express.js
Front-side : Angular 9 / Material 9

## Run the project

### Install mongoDB on docker 
Install docker
copy the data form url  https://datasets.imdbws.com/title.basics.tsv.gz
unzip the data file 

run command : docker run -d -p 27017-27019:27017-27019  --name mongodbca mongo

run command : docker cp title.basics.tsv/data.tsv mongodbca:/tmp/data.tsv

run command : docker exec -it mongodbca bash

run command on docker bash :  mongoimport --db canal --collection movies  --type tsv --file /tmp/data.tsv --headerline

### Install back side
The server will run on port 3000

npm install 
npm run start 

### Install front side
npm install 
npm run start 

