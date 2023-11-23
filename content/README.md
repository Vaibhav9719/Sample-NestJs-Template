# NestJS Base Project

> This is an ever-evolving, very opinionated architecture and dev environment for new node projects using [NestJS](https://nestjs.com). Questions, feedback, and for now, even bikeshedding are welcome. 😄

## Getting started

```bash
# 1. Clone the repository or click on "Use this template" button.
git clobe git@git.mantralabsglobal.com:mantra/base-projects/backend/node-js.git

# 2. Enter your newly-cloned folder.
cd "Node Js"

# 3. Create Environment variables file.
cp .env.example .env

# 3. Install dependencies. (Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install)
yarn
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change configurations in `.env`
- [ ] Clean up the README.md file

And, enjoy :)


### Development
```bash
# 4. Run development server and open http://localhost:3000
yarn start:dev

# 5. Read the documentation linked below for "Setup and development".
```

### Build

To build the App, run

```bash
yarn build:prod
```

And you will see the generated file in `dist` that ready to be served.

## Features

<dl>
  <dt><b>Quick scaffolding</b></dt>
  <dd>Create modules, services, controller - right from the CLI!</dd>

  <dt><b>Instant feedback</b></dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes are reflected instantaneously.</dd>

  <dt><b>JWT Authentication</b></dt>
  <dd>Installed and configured JWT authentication.</dd>

  <dt><b>Next generation Typescript</b></dt>
  <dd>Always up to date typescript version.</dd>

  <dt><b>Industry-standard routing</b></dt>
  <dd>It's natural to want to add pages (e.g. /about`) to your application, and routing makes this possible.</dd>

  <dt><b>Environment Configuration</b></dt>
  <dd>development, staging and production environment configurations</dd>

  <dt><b>Swagger Api Documentation</b></dt>
  <dd>Already integrated API documentation. To see all available endpoints visit http://localhost:3000/documentation</dd>

  <dt><b>Linter</b></dt>  
  <dd>eslint + prettier = ❤️</dd>
</dl>

## Documentation

This project includes a `docs` folder with more details on:

1.  [Setup and development](https://git.mantralabsglobal.com/mantra/base-projects/backend/node-js/-/wikis/deployment)
1.  [Architecture](https://git.mantralabsglobal.com/mantra/base-projects/backend/node-js/-/wikis/architecture)
1.  [Naming Cheatsheet](https://git.mantralabsglobal.com/mantra/base-projects/backend/node-js/-/wikis/naming-cheatsheet)
1.  [Linting and Formatting](https://git.mantralabsglobal.com/mantra/base-projects/backend/node-js/-/wikis/linting-and-formatting)
