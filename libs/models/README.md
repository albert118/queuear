# Prisma lib

Building this lib copies the relevant contents to the `dist` directory.
This artifact is then picked up by the docker build process task.

This also generates a README with a quick intro to the Prisma client, see the [node_modules](../../node_modules/@prisma/client/README.md)

<details>
    <summary>
        On using prisma with docker
    </summary>
    [Read more about it here](https://github.com/prisma/prisma/issues/21241)
</details>


## Database seeding aka. Initial migration

The database is automatically seeded using the `seed.js` script. This
can be run with Nx,

```sh
nx run models:seed
```

## Adding tables and running a migration

Update the `schema.prisma` file with the new model(s). Optionally, autoformat and autocomplete the relations with,

```sh
nx run models:format
```

Then when the schema is finished run,

```sh
nx run models:migrate
```

[Read more here](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding)

## Related reading and docs

[A NextJs REST example](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes)

[An example with NestJs and Nx](https://github.com/nrwl/nx-recipes/tree/main/nestjs-prisma#nx--nestjs--prisma)

[Schema modelling](https://medium.com/swlh/nx-model-with-prisma-68ad1bf90379)
