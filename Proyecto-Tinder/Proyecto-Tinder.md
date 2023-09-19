# Tinder para habilidades Personales

## Diagrama relacional y Entidad Relación
<div>
    <img align="center" src="https://i.ibb.co/SfFD3sw/ER-Proyecto-Tinder.jpg" alt="ER-Proyecto-Tinder" border="0"/>
</div>

## Migraciones
### CREACION DE TABLAS POR SEQUELIZE
    TABLA HABILIDADES
    npx sequelize-cli model:generate --name habilidades --attributes nombre:string, descripcion:string

    TABLA CONFIR_ANTICIPO
    npx sequelize-cli model:generate --name confir_anticipo --attributes fecha_evento:date,lugar:string, hora:string

    TABLA CLIENTES
    npx sequelize-cli model:generate --name clientes --attributes nombre:string, ciudad:string, telefono:string, id_cotizacion:integer

    TABLA ANTICIPO
    npx sequelize-cli model:generate --name anticipo --attributes valor_anticipo:integer, id_cliente:integer

    TABLA CUENTA
    npx sequelize-cli model:generate --name cuenta --attributes nombre_banco:string, id_anticipo:integer, id_confir_anticipo:integer

    TABLA PERSONAS
    npx sequelize-cli model:generate --name personas --attributes nombre:string, apellido:string, celular:string, id_cuenta:integer, id_habilidad:integer

    TABLA COTIZACION
    npx sequelize-cli model:generate --name cotizacion --attributes horas_trabajo:string, valor_contrato:integer, id_confir_anticipo:integer, id_persona:integer

## MVC

## TABLAS SQL GUIA
    CREATE TABLE clientes(
        id_cliente SERIAL PRIMARY KEY,
        nombre VARCHAR(40) NOT NULL,
        ciudad VARCHAR(15) NOT NULL,
        telefono VARCHAR(10) NOT NULL
    )

    ALTER TABLE clientes
    ADD COLUMN id_cotizacion INT NOT NULL;

    ALTER TABLE clientes
    ADD CONSTRAINT id_cotizacion
    FOREIGN KEY(id_cotizacion) REFERENCES cotizacion(id_cotizacion);

    CREATE TABLE habilidades(
        id_habilidad SERIAL PRIMARY KEY,
        nombre VARCHAR(40),
        descripcion VARCHAR(60)
    )

    CREATE TABLE anticipo(
        id_anticipo SERIAL PRIMARY KEY,
        valor_anticipo INT NOT NULL,
        id_cliente INT NOT NULL,
        FOREIGN KEY(id_cliente) REFERENCES clientes(id_cliente)
    )

    CREATE TABLE cuenta(
        num_cuenta SERIAL PRIMARY KEY,
        nombre_banco VARCHAR(40),
        id_anticipo INT NOT NULL,
        id_confir_anticipo INT NOT NULL,
        FOREIGN KEY(id_anticipo) REFERENCES anticipo(id_anticipo),
        
    )

    ALTER TABLE cuenta
    ADD COLUMN id_confir_anticipo INT NOT NULL;

    ALTER TABLE cuenta
    ADD CONSTRAINT id_confir_anticipo
    FOREIGN KEY(id_confir_anticipo) REFERENCES confir_anticipo(id_confir_anticipo);


    CREATE TABLE personas(
        id_persona SERIAL PRIMARY KEY,
        nombre VARCHAR(20) NOT NULL,
        apellido VARCHAR(20) NOT NULL,
        edad INT NOT NULL,
        celular VARCHAR(15) NOT NULL,
        id_habilidad INT NOT NULL,
        num_cuenta INT NOT NULL,
        FOREIGN KEY(id_habilidad) REFERENCES habilidades(id_habilidad),
        FOREIGN KEY(num_cuenta) REFERENCES cuenta(num_cuenta)
    )

    CREATE TABLE confir_anticipo(
        id_confir_anticipo SERIAL PRIMARY KEY,
        fecha_evento DATE,
        lugar VARCHAR(40),
        hora INT
    )

    CREATE TABLE cotizacion(
        id_cotizacion SERIAL PRIMARY KEY,
        horas_trabajo INT NOT NULL,
        valor_contrato INT NOT NULL,
        id_confir_anticipo INT NOT NULL,
        id_persona INT NOT NULL,
        FOREIGN KEY(id_confir_anticipo) REFERENCES confir_anticipo(id_confir_anticipo),
        FOREIGN KEY(id_persona) REFERENCES personas(id_persona)
    )