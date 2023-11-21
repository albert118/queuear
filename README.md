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

## 📌 Getting started

To start the development server run,

```sh
nx serve queuear
```

Open your browser and navigate to <http://localhost:4200/>. Happy coding!

## 👀 Examples

_TODO_

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

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

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.
