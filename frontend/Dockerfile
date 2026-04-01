FROM nginx:alpine

# Pourquoi nginx:alpine ?
# L image officielle nginx:alpine est minimaliste (~25 Mo contre ~190 Mo pour nginx:latest).
# Elle suffit largement pour servir des fichiers statiques et faire du reverse-proxy.
# Moins de paquets installes = moins de vulnerabilites potentielles.

# Remplace la configuration Nginx par defaut par la notre.
# Notre nginx.conf gere le reverse-proxy vers le backend pour les routes /api/*.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie le fichier HTML dans le dossier servi par Nginx.
COPY index.html /usr/share/nginx/html/

EXPOSE 80

# daemon off : Nginx tourne au premier plan (obligatoire pour Docker).
# Sans cette option, Nginx se mettrait en arriere-plan et le conteneur s arrete immediatement.
CMD ["nginx", "-g", "daemon off;"]
