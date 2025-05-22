
Directory structure:
└── bachidze-relation-user-post--nestjs/
    ├── README.md
    ├── eslint.config.mjs
    ├── nest-cli.json
    ├── package.json
    ├── tsconfig.build.json
    ├── tsconfig.json
    ├── .prettierrc
    ├── src/
    │   ├── app.controller.spec.ts
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── main.ts
    │   ├── posts/
    │   │   ├── isValidUSerid.guard.ts
    │   │   ├── posts.controller.ts
    │   │   ├── posts.module.ts
    │   │   ├── posts.service.ts
    │   │   ├── dto/
    │   │   │   ├── create-post.dto.ts
    │   │   │   └── update-post.dto.ts
    │   │   └── schema/
    │   │       └── post.schema.ts
    │   └── users/
    │       ├── user.interface.ts
    │       ├── users.controller.ts
    │       ├── users.module.ts
    │       ├── users.service.ts
    │       ├── dto/
    │       │   ├── create-user.dto.ts
    │       │   └── update-user.dto.ts
    │       └── schema/
    │           └── user.schema.ts
    └── test/
        ├── app.e2e-spec.ts
        └── jest-e2e.json




This is a simple NestJS-based RESTful API demonstrating a one-to-many relationship between Users and Posts using MongoDB, `class-validator`, and `class-transformer`.




Each user can have multiple posts. Posts reference the user by MongoDB ObjectId.

## 🚀 Technologies Used

- **NestJS** – Progressive Node.js framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **class-validator** – DTO validation
- **class-transformer** – Request/response transformation

## 🧠 Core Features

- Create users with validation
- Create posts linked to users
- Header-based user ID validation before creating a post
- Reusable DTOs with validation logic
- MongoDB object ID checks

## 📌 API Endpoints

### Users

- `POST /users` – Create a user  
- `GET /users` – Get all users  
- `GET /users/:id` – Get user by ID  

### Posts

- `POST /posts` – Create post  
  - Requires `userId` in the request header
  - Validates user ID before saving
- `GET /posts` – Get all posts  

## 🔐 Post Creation Flow

To create a post, you must provide a valid MongoDB User ID in the `userId` header.  
If the header is missing or the user does not exist, the request will be rejected.

### Example Request

```http
POST /posts
Headers:
  userId: 664d12fc7a1f9c34a73184bc
Body:
{
  "title": "My First Post",
  "content": "This is the body of the post."
}



