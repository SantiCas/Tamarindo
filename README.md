# 🌴 Tamarindo — Family Activity Voting App

App de votación familiar para decidir qué actividades hacer durante las vacaciones en Tamarindo, Costa Rica.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Firebase Firestore** (votos en tiempo real, compartidos entre dispositivos)
- **Vercel** (deploy)

## Setup

### 1. Clonar el repo

```bash
git clone https://github.com/tu-usuario/Tamarindo.git
cd Tamarindo
npm install
```

### 2. Configurar Firebase

1. Ir a [Firebase Console](https://console.firebase.google.com)
2. Crear un proyecto nuevo (o usar uno existente)
3. Agregar una app Web al proyecto
4. Copiar las credenciales
5. Crear Firestore Database en modo **test** (o con reglas adecuadas)

Copiar `.env.local.example` a `.env.local` y completar con tus credenciales:

```bash
cp .env.local.example .env.local
```

### 3. Firestore Security Rules

En la consola de Firebase → Firestore → Rules, usar estas reglas para empezar:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /votes/{activityId} {
      allow read, write: if true;
    }
  }
}
```

### 4. Correr localmente

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

1. Push al repo de GitHub
2. Ir a [vercel.com](https://vercel.com) → Import Project → elegir el repo
3. Agregar las variables de entorno de Firebase en la configuración del proyecto
4. Deploy 🚀

## Agregar actividades

Las actividades están en [`data/activities.ts`](./data/activities.ts). Cada actividad tiene:

- `title` — Nombre de la actividad
- `description` — Descripción corta
- `coverImage` — URL de imagen de portada
- `infoLink` — Link para ver más info
- `contact` — Teléfono, email o WhatsApp
- `location` — Lugar
- `distance` — Distancia desde la casa
- `category` — aventura | playa | gastronomía | cultura | relax
