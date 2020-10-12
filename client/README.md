#Scarabble Client

### Dockerized React,Redux application

<p>
  <img src="public/docker.png" width="200" height="200">
  <img src="public/reactJS.png" width="200" height="200">
  <img src="public/redux.png" width="200" height="200">
</p>



### Prerequisites

* Docker
* or NodeJS > 12.0

> Installing any one of them can run the project, Docker is preferred :)

#### Through Docker

1. Install docker desktop
..... [Mac](https://docs.docker.com/docker-for-mac/install/)
   ..... [Windows](https://docs.docker.com/docker-for-windows/install/)
2. Start Docker from applications
3. Navigate to client folder in terminal
4. Run following commands
```Bash
docker build --tag scrabble-client-image:1.0 .
```

. is important in above command.
docker build creates an image of project environment where it was created

```Bash
docker run -p 3000:3000 -d scrabble-client-image:1.0
```

docker run will run that project-environment/container

5. Hit `localhost:3000` in browser to see react pages

#### Through NodeJS

1. [Install NodeJS](https://nodejs.org/en/download/) 12 or above
2. Tets `node -v` in terminal to see if its properly installed
3. Navigate to client folder of the project and run following commands in terminal

```Bash
npm install
```

```Bash
npm start
```

4. Open browser and hit `localhost:3000` to seee react pages


> UX is borrowed from code pen screens

##### Scripts

For prettier code :D
``` bash
npm format
```
For producution build
```bash
npm build
```

