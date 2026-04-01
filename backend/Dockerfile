# Multi-stage build : pourquoi deux stages ?
# Stage 1 (builder) : installe TOUTES les dependances (y compris jest/eslint)
#   et execute les tests. Si un test echoue, le build s arrete ici —
#   aucune image corrrompue ne peut etre deployee en production.
# Stage 2 (production) : repart d une image vierge node:18-alpine.
#   Seules les dependances de production sont copiees. Les outils de test
#   ne sont jamais embarques -> image ~5x plus petite, surface d attaque reduite.
# Pourquoi node:18-alpine ?
#   Alpine Linux est minimaliste (~5 Mo vs ~900 Mo pour Debian).
#   Moins de paquets installes = moins de vulnerabilites potentielles.

# -- Stage 1 : Build et Test ------------------------------------------
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test

# -- Stage 2 : Production ---------------------------------------------
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/server.js ./
EXPOSE 3000
CMD ["node", "server.js"]
