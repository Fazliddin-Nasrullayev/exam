create database exam 



create table master_class(
    id serial primary key,
    dictator  varchar(255) not null,
    job varchar(255) not null default 'coder',
    phone varchar(255) not null default '+998935313705',
    time varchar(255) not null default '15:00',
    date varchar(255) not null default '22/02/2022',
    event varchar(255) not null default 'offline',
    description varchar  not null default 'master_class',
    link varchar(255) not null default 'https://youtu.be/qvR9DwNdLlM',
    subcategory_id int references subcategory(subcategory_id),
    status varchar(255) not null default 'waiting',
    image varchar(255) not null
);

create table category(
    category_id serial primary key,
    category_name varchar(255) not null default 'programming'
);

create table subcategory(
    subcategory_id serial primary key,
    subcategory_name varchar(255) not null default 'programming',
    sc_id int references category(category_id)  on delete cascade
);

create table admin(
    admin_id serial primary key,
    admin_name varchar(255) not null,
    admin_password varchar(255) not null
);