
Relation-User-Post API (NestJS + MongoDB)
ეს არის RESTful API, რომელიც ქმნის User და Post მოდელებს შორის ურთიერთობას. ყოველი პოსტი ეკუთვნის ერთ იუზერს.

ტექნოლოგიები


NestJS

  MongoDB + Mongoose

  class-validator

  class-transformer

  Validation Guards


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



 User

  POST /users – იუზერის შექმნა (უნიკალური Email)

  GET /users – ყველა იუზერის წამოღება

  GET /users/:id – კონკრეტული იუზერის ნახვა

  PATCH /users/:id – იუზერის განახლება

  DELETE /users/:id – იუზერის წაშლა


Posts

  POST /posts – პოსტის შექმნა (მხოლოდ სწორი userId header-ით)

  GET /posts – ყველა პოსტის ნახვა (მათ შორის იუზერის დეტალები populate)

  GET /posts/:id – პოსტის ნახვა ID-ით (დამუშავება საჭირო)

  PATCH /posts/:id – განახლება (დამუშავება საჭირო)

  DELETE /posts/:id – წაშლა (დამუშავება საჭირო)


 Validation Guard

    isValidUserId – ამოწმებს userId Header-ს სწორ ფორმატზე და გადასცემს request.userId-ს Controller-ში.


    როგორ გავუშვათ ?

    cd relation
    npm install
    npm run start:dev


    MONGO_URI=your_mongodb_connection_string(აქ თქვენი მონგოს ლინკი ჩაწერეთ)
