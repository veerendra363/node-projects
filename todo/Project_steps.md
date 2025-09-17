### Initializing the project

mkdir todo
cd todo
npm init -y --> creates the pakcage.json file

1. Core dependencies: npm install express bcrypt jsonwebtoken dotenv
    express → Web framework  
    bcrypt → Hash passwords  
    jsonwebtoken (JWT) → Auth  
    dotenv → Environment variables  
2. PostgreSQL + ORM: npm install pg sequelize pg-hstore
    pg → PostgreSQL driver  
    sequelize + pg-hstore → ORM for SQL 
3. Logging: npm install morgan winston 
4. Dev dependencies: npm install nodemon --save-dev (Auto-reload in dev)