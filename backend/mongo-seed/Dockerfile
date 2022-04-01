FROM mongo

#The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>

# Docker creates layers for each command COPY/ADD (and some others, you need to read documentation). In build time docker will see to the changes, if in some layer will detected change all below layers will be rebuild.

# For example, assume we have like this Dockerfile:

#  WORKDIR /app
#  COPY . /app
#  RUN npm install

# And we will change source code very frequently, then docker will execute npm install for each change. It's very bad and not efficient. Because for each little change you will reinstall whole nodejs packages (and if you not using volume or cache it will take loooong time).

# In this case:

#  WORKDIR /app
#  COPY package.json /app
#  RUN npm install
#  COPY . /app


#So if you set:
#WORKDIR /mongo-seed
#and do
#COPY . .
#
#It will copy everything in the current folder, to /tmp


COPY init.json /init.json
CMD mongoimport --host mongodb --db admin --collection TodoAppData --drop --type json --file /init.json --jsonArray -u admin -p password --authenticationDatabase admin