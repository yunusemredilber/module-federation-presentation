# Module Federation Presentation

Presentation URL: [https://yunusemredilber.github.io/module-federation-presentation](https://yunusemredilber.github.io/module-federation-presentation/#/)

The repo contains the presentation and demo apps for the Module Federation talk.

![Presentation Demo Screenshot](./public/presentation-demo-screenshot.png)

## Demo Apps

### 1. Development

Start the development server for all applications in `./apps` directory:

```sh
pnpm dev
```

### 2. Production

Build all applications in `./apps` directory:

```sh
pnpm build
```

Serve the static files in root directory with [`serve`](https://www.npmjs.com/package/serve) tool:

> Use `BASE_URL` env variable to set the base url for the apps while building.

```sh
pnpm serve
```

Visit `http://localhost:3000/apps/example-page/dist/index.html` to see the production build.

> You may want to adjust and execute `pnpm inject-base` script to inject the base url tag if you serve the application within a subdirectory. _(eg: GitHub Pages)_

## Presentation

- `index.html` - The presentation content using [reveal.js](https://revealjs.com/).
- `public/*` - The images and styles for the presentation.
