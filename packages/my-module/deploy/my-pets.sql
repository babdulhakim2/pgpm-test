-- Deploy: my-pets
-- made with <3 @ constructive.io

create schema my_pets;

create table my_pets.pets (
  id serial primary key,
  name text not null,
  age int not null
);