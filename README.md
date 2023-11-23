# Queuear

> A solution to "who's turn is it anyways?" and "how many devs does it take to deploy a test build?"

<p align="center">
    <a href="https://github.com/albert118/queuear/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="Queuear is released under the MIT license" />
    </a>
    <a href="https://github.com/albert118/queuear/blob/master/README.md">
        <img src="https://badges.aleen42.com/src/eslint.svg" alt="Queuear uses ESLint" />
    </a>
    <a href="https://github.com/albert118/queuear/blob/master/queuear/README.md">
        <img src="https://badges.aleen42.com/src/react.svg" alt="Queuear is built with React" />
    </a>
    <a href="https://github.com/albert118/queuear/blob/master/Dockerfile">
        <img src="https://badges.aleen42.com/src/docker.svg" alt="Queuear is deployed using Docker" />
    </a>
</p>

## 👑 Features

_TODO_

## 📌 Getting started

To start the development server run,

```sh
nx serve queuear
```

Open your browser and navigate to <http://localhost:4200/>. Happy coding!

To preview the production server run,

```sh
nx run queuear:build:production
nx run queuear:serve:production
```

Likewise visit <http://localhost:4200/> again.

## 👀 Examples

![Alt text](image.png)

## Running tasks

To execute tasks with Nx use the following syntax:

```sh
nx <target> <project> <...options>
```

You can also run multiple targets:

```sh
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```sh
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Production Deployment

- TODO: https://stackoverflow.com/questions/67746885/prisma-client-did-not-initialize-yet-please-run-prisma-generate-and-try-to-i

```sh
nx run queuear:docker-build
docker run -p 4200:4200 -it queuear
```
