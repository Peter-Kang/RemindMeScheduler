# ScheduleTimer
Reminder App

Prerequisite:
yarn
Docker

# Starting
```
yarn run start
```

# Stopping
```
yarn stop
```

# Debug into image
```
docker run -it <image-name> sh
```

# important
https://github.com/denoland/deno/issues/6966 
There is a issue with deno -watch on docker. 
A manual touch or refresh is needed on the files in the docker container after updating and it will detect the change.