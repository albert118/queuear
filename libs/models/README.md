# Prisma lib

on using prisma with docker,

https://github.com/prisma/prisma/issues/21241

building this lib copies the relevant contents to dist
the dist content is then picked up by the docker build process
this lib's build task is a dependency of the apps
