# Vick Vásquez Jiménez

- **Framework**: [Next.js](https://beta.nextjs.org/)
- **API**: [JSON Server](https://www.npmjs.com/package/json-server)
- **Styling**: [CSS Modules](https://beta.nextjs.org/docs/styling/css-modules)
- **Analytics**: [Google Analytics](https://analytics.google.com/analytics/web/)


## Running Locally

```bash
git clone https://github.com/vickvasquez/portfolio.git
pnpm install
pnpm dev
```

### Run API
Replace the content of each file inside the data folder with your personal data. And then run:

```bash
pnpm start:api
```

## Deploy in Netlify

1.- Run server api on local `pnpm api:start`
2.- Run ngrok to api in local
3.- Set nrok url in env vars in netlify