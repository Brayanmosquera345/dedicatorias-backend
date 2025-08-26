# 🎶 API - Generador de Dedicatorias Interactivas
## 🌟 Descripción

Backend desarrollado con **NestJS** y **Prisma** que permite gestionar dedicatorias personalizadas.  
La API facilita:

- Guardar dedicatorias con mensaje, canción y fondo.  
- Consultar canciones desde la **API de Deezer**.  
- Buscar imágenes en **Pexels** o usar una URL personalizada.  
- Generar un **ID único** para cada dedicatoria y acceder mediante una URL compartible.  

Documentación de los endpoints disponible en:  
👉 [http://localhost:3000/docs](http://localhost:3000/docs) (Swagger UI)

---

## 🛠️ Stack tecnológico

- **Framework:** [NestJS](https://nestjs.com)  
- **ORM:** [Prisma](https://www.prisma.io/)  
- **Base de datos:** PostgreSQL (Supabase)  
- **APIs externas:**  
  - Deezer (canciones)  
  - Pexels (imágenes)  
- **Documentación:** Swagger + Swagger UI  

---

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install
````

---

## 🚀 Ejecución

```bash
# Desarrollo
pnpm run start:dev

# Producción
pnpm run start:prod
```

La aplicación estará disponible en:
👉 `http://localhost:3000`



## 🧩 Dependencias clave

```json
"@nestjs/axios": "^4.0.1",
"@nestjs/config": "^4.0.2",
"@nestjs/swagger": "^11.2.0",
"@prisma/client": "^6.14.0",
"pexels": "^1.4.0",
"class-validator": "^0.14.2",
"class-transformer": "^0.5.1"
```
