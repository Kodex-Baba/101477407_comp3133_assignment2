# frontend/Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
