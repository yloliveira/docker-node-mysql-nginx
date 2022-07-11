FROM nginx:1.23.0-alpine

COPY nodeapp.conf /etc/nginx/conf.d/
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.disabled