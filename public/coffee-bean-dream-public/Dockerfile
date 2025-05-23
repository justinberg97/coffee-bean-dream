# --- Build Stage ---
FROM node:20-alpine AS build

WORKDIR /app

# Copy Angular project's package.json and package-lock.json
COPY public/coffee-bean-dream-public/package.json ./package.json
COPY public/coffee-bean-dream-public/package-lock.json ./package-lock.json

# Install Angular CLI globally and project dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the rest of the Angular application files
COPY public/coffee-bean-dream-public/ .

# Build the Angular application for production
RUN ng build --configuration=production

# --- Nginx Serve Stage ---
FROM nginx:alpine

# Copy custom Nginx configuration
COPY public/coffee-bean-dream-public/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular app from the build stage to Nginx's web root
COPY --from=build /app/dist/coffee-bean-dream-public/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]