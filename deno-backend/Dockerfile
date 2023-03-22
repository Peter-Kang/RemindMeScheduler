# deno
FROM denoland/deno:latest
# set working directory
WORKDIR /app
# prefer not to run as root
USER deno
# copy all files from current directory to working dir
COPY . .

RUN ["deno","cache", "Webserver.ts"]
# these are passed as deno arguments when run with docker
CMD ["run","-A", "--allow-net","--watch=.","Webserver.ts"]
#CMD ["run", "--watch", "--allow-env", "--allow-net", "--allow-read", "--allow-write", "Webserver.ts"]
# default port exposure
EXPOSE 8000