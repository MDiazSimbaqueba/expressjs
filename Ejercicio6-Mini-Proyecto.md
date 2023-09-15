# Mini-Proyecto Concentrador Análisis y Diseño SQL

## Diagrama relacional
<div>
    <img align="center" src="https://i.ibb.co/W5vDDqp/Diagrama-sin-t-tulo-Ejercicio6-sistemadeventas-drelacional.jpg" alt="Ejercicio6-sistemadeventas-drelacional" border="0"/>
</div>

## Diagrama entidad-relación
<div>
    <img align="center" src="https://i.ibb.co/CHT0f1b/Diagrama-sin-t-tulo-Ejercicio6-sistemadeventas-MER.jpg" alt="Diagrama-sin-t-tulo-Ejercicio6-sistemadeventas-MER" border="0"/>
</div>

## Crear las tablas en PostgreSQL
    CREATE TABLE clientes(
        id_cliente SERIAL PRIMARY KEY,
        nombre VARCHAR(40) NOT NULL,
        apellidos VARCHAR(40) NOT NULL,
        email VARCHAR(40) NOT NULL,
        telefono VARCHAR(15)NOT NULL,
        direccion VARCHAR(20) NOT NULL,
        cod_postal VARCHAR(6) NOT NULL,
        barrio VARCHAR(30) NOT NULL
    )

    CREATE TABLE productos(
        sku_producto SERIAL PRIMARY KEY,
        nombre VARCHAR(40) NOT NULL,
        descripcion VARCHAR(40) NOT NULL,
        precio INT NOT NULL
    )

    CREATE TABLE ventas(
        id_venta SERIAL PRIMARY KEY,
        id_cliente INT NOT NULL,
        sku_producto INT NOT NULL,
        cantidad INT NOT NULL,
        FOREIGN KEY(id_cliente) REFERENCES clientes(id_cliente),
        FOREIGN KEY(sku_producto) REFERENCES productos(sku_producto)
    )

## Poblar la base de datos (puede ser con pocos registros)
    INSERT INTO clientes(
        nombre,
        apellidos,
        email,
        telefono,
        direccion,
        cod_postal,
        barrio
    ) VALUES(
        'Lucia',
        'Alvarez',
        'lucia@gmail.com',
        '316897834',
        'cra 7',
        '11111',
        'candelaria'
    )

    INSERT INTO productos(
        nombre,
        descripcion,
        precio
    )VALUES(
        'arroz',
        'Blanco bulto',
        33000
    )

    INSERT INTO ventas VALUES(
        6,
        3,
        2,
        6
    )

## Generar las siguientes queries (consultas) a la base de datos:

### ID de los clientes de la Ciudad de Monterrey
    SELECT id_cliente FROM clientes WHERE barrio = 'Alqueria' (Adaptado a mi pais)

### ID y descripción de los productos que cuesten menos de 15 pesos
    SELECT sku_producto, descripcion FROM productos WHERE precio < 8000 (Adaptado a mi pais)

### ID y nombre de los clientes, cantidad vendida, y descripción del producto, en las ventas en las cuales se vendieron más de 10 unidades.
    SELECT clientes.id_cliente, clientes.nombre, ventas.cantidad, productos.descripcion
    FROM clientes
    INNER JOIN ventas
    ON clientes.id_cliente = ventas.id_cliente
    INNER JOIN productos
    ON ventas.sku_producto = productos.sku_producto
    WHERE ventas.cantidad > 3

### ID y nombre de los clientes que no aparecen en la tabla de ventas (Clientes que no han comprado productos)
    

### ID y nombre de los clientes que han comprado todos los productos de la empresa.

### ID y nombre de cada cliente y la suma total (suma de cantidad) de los productos que ha comprado. Pista: (https://www.postgresqltutorial.com/postgresql-sum-function/).

### ID de los productos que no han sido comprados por clientes de Guadalajara.

### ID de los productos que se han vendido a clientes de Monterrey y que también se han vendido a clientes de Cancún.

### Nombre de las ciudades en las que se han vendido todos los productos.