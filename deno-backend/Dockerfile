# deno
FROM denoland/deno:latest
# set working directory
WORKDIR /app
# prefer not to run as root
USER deno
# copy all files from current directory to working dir
COPY . .
# these are passed as deno arguments when run with docker
CMD [ "run","--allow-all","Webserver.ts"]
# There is an issue with runnign watch on docker and mac arm laptops"--watch=." 
# default port exposure
EXPOSE 8000
