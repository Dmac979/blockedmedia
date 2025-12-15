FROM node:18-slim

# Use existing node user
USER node
ENV HOME=/home/node
ENV PATH=/home/node/.local/bin:$PATH

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 7860

CMD ["npm", "start", "--", "-p", "7860"]
