FROM nginx

# Install Node.js
RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

# copy package.json
COPY package.json package.json

# Copy content
COPY content/ content/

# install
CMD npm install
CMD npm run build

# move dest files
CMD mv dist/* /usr/share/nginx/html

EXPOSE 80
