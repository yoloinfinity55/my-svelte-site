# My Svelte Site

A SvelteKit blog site with static site generation, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup

1. **Enable GitHub Pages** in your repository:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push to main branch** - The deployment will happen automatically when you push to the `main` branch.

### Manual Deployment (Alternative)

If you prefer to deploy manually, you can use the included deploy script:

```sh
npm run build
npm run deploy
```

This will build the site and deploy it to the `gh-pages` branch using the `gh-pages` package.

### Deployment URL

Once deployed, your site will be available at: `https://[username].github.io/my-svelte-site`

> The site uses `@sveltejs/adapter-static` for static site generation, which is optimized for GitHub Pages deployment.
