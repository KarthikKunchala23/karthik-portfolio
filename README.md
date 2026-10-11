# Karthik Kunchala — React Portfolio

A responsive, dark-themed React portfolio for an AWS DevOps & Platform Engineer. Built with React, Vite, Lucide icons, and plain CSS. Designed for static hosting on Amazon S3 behind CloudFront.

## Prerequisites

- Node.js 20+ and npm
- AWS CLI configured for your account
- An S3 bucket for static hosting (private bucket recommended when using CloudFront OAC)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for S3

```bash
npm run build
```

The static site is generated in `dist/`.

## Deploy to a private S3 origin

Create the S3 bucket and CloudFront distribution with Terraform (recommended), then upload the built assets:

```bash
aws s3 sync dist/ s3://YOUR_BUCKET/ \
  --exclude index.html \
  --cache-control "public,max-age=31536000,immutable"

aws s3 cp dist/index.html s3://YOUR_BUCKET/index.html \
  --content-type "text/html" \
  --cache-control "public,max-age=60,must-revalidate"

aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/" "/index.html"
```

Do not enable S3 public access for this setup. Configure CloudFront Origin Access Control (OAC) to read the bucket. The website should be accessed through the CloudFront URL or your custom domain.

## Personalize before publishing

Edit `src/main.jsx`:

- Replace the placeholder GitHub profile and project links with your actual GitHub URLs.
- Verify certification names and update them to match your current credential status.
- Review the project descriptions so they accurately reflect what you have implemented.
- Add a downloadable resume only if you want to publish it.

The app currently uses the email and LinkedIn profile included in the profile configuration. Update them if needed.

## Security notes

- Keep the S3 bucket private and block all public access.
- Use CloudFront OAC, HTTPS, and a TLS certificate for your custom domain.
- Do not add AWS credentials, API keys, or other secrets to frontend code. Anything bundled into a React app is public.
- For GitHub Actions, use OIDC with a narrowly scoped IAM role instead of long-lived access keys.
- Use immutable caching for fingerprinted build assets and short caching for `index.html`.

## Build validation

```bash
npm run build
```
