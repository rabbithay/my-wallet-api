CREATE DATABASE "my-wallet";

CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"token" TEXT NOT NULL
);


CREATE TABLE "transations" (
	"id" serial PRIMARY KEY,
	"value" integer NOT NULL,
	"description" TEXT NOT NULL,
	"date" DATE NOT NULL,
	"type" TEXT NOT NULL,
	"userId" integer NOT NULL
);


ALTER TABLE "transations" 
ADD CONSTRAINT "fk_transations" 
FOREIGN KEY ("userId") 
REFERENCES "users"("id");
