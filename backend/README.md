# Internal Tools API

## Technologies

- Langage: TypeScript
- Framework: NestJS
- ORM: Prisma
- Base de données: PostgreSQL
- Documentation API: Swagger / OpenAPI
- Conteneurisation: Docker & Docker Compose
- Port API: 3001 (configurable)

---

## Quick Start

### 1. Lancer PostgreSQL + pgAdmin

Depuis la racine du projet :

```bash
docker compose up -d --build
```

# Structure global du repo
internal-tools-management/
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── prisma/
│   │   ├── tools/
│   │   │   ├── dto/
│   │   │   ├── types/
│   │   │   ├── tools.controller.ts
│   │   │   ├── tools.service.ts
│   │   │   └── tools.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── Dockerfile
├── data/
│   └── postgres/
│       └── init.sql
├── docker-compose.yml
└── .env

# Config pgAdmin

## 1 connexion
http://localhost:8081
Email    : admin@example.com
Password : admin

## 2 Ajouter le serveur PostgreSQL
Onglet General
- Name: Internal Tools DB

Onglet Connection
- Host name/address: postgres
- Port: 5432
- Maintenance database: internal_tools
- Username: tools_user
- Password: tools_password

# Installation
```bash
git clone git@github.com:figura01/alt-s3-j1-api-internal-tools-management.git
cd alt-s3-j1-api-internal-tools-management
```
## Install backend dependencies:
```bash
cd backend
npm install
```

## 2 Créer les 2 fichier .env

Configuration: Variables d'environnement
## Racine du projet .env

```env
POSTGRES_USER=tools_user
POSTGRES_PASSWORD=tools_password
POSTGRES_DB=internal_tools

PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=admin
```
- Ou copier le .env.exemple et renommer en .env et renseigner les différentes variables

## Backend backend/.env
```bash
cd backend
```

``` env
DATABASE_URL="postgresql://tools_user:tools_password@postgres:5432/internal_tools"
PORT=3000
NODE_ENV=development
```
- Ou copier le .env.exemple et renommer en .env et renseigner les différentes variables

# 3. Execution
A la racine du repos
```bash
docker compose up -d --build
```

API:
http://localhost:3001

Swagger:
http://localhost:3001/api/docs

pgAdmin:
http://localhost:8081

# Architecture backend
Controller → gestion HTTP
Service → logique métier
Prisma → accès base de données
DTOs → validation et typage des entrées
Types → réponses API typées

# Fonctionnalités implémentées
Endpoints: 
  GET /api/tools
    - pagination
    - filtres
    - tri
  
  GET /api/tools/:id
  - détail complet d’un outil
  - métriques d’utilisation
  - coût mensuel total
  
  POST /api/tools
  - création d’un outil
  - validation métier
  
  PUT /api/tools/:id
  - mise à jour partielle
  - validation des données

## Documentation Swagger / OpenAPI

La documentation interactive de l’API est disponible via Swagger UI :

```text
http://localhost:3001/api/docs

Elle permet de :
- consulter tous les endpoints disponibles ;
- visualiser les schémas DTO de validation ;
- tester directement les routes depuis le navigateur ;
- vérifier les exemples de requêtes et de réponses ;
- consulter les erreurs possibles : 400, 404, 500.