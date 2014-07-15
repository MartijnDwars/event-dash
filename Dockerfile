# Base our container on the official nginx container
FROM nginx

# Add this folder to the webroot in the container
ADD ./app /usr/local/nginx/html