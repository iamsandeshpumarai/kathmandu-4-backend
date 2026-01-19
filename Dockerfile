
# ---- Build Stage ----
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production
COPY . .

# ---- Production Stage ----
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app
ENV NODE_ENV=production
EXPOSE 8015
CMD ["node", "server.js"]