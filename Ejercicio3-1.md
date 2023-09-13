# EJERCICIO TIENDA DE HARDWARE
### Un negocio quiere llevar el control de piezas que emplean en el día a día y los proveedores que suministran estas. De cada proveedor conocemos su nombre, dirección, ciudad, provincia y un código de proveedor que será único para cada uno de ellos. Nos interesa llevar un control de las piezas que nos suministra cada proveedor. Es importante conocer la cantidad de las diferentes piezas que nos suministra y en qué fecha lo hace. Tenga en cuenta que un mismo proveedor nos puede suministrar una pieza con el mismo código en diferentes fechas. El diseño de la base de datos debe permitir almacenar un histórico con todas las fechas y las cantidades que nos ha proporcionado un proveedor. Una misma pieza puede ser suministrada por diferentes proveedores. De cada pieza conocemos un código que será único, nombre, color, precio y categoría. Pueden existir varias categorías y para cada categoría hay un nombre y un código de categoría único. Una pieza solo puede pertenecer a una categoría.

## Modelo Entidad-Relación
<div>
  <img align="center" src="https://i.ibb.co/Kxr684C/Ejercicio3-Negocio-Piezas.jpg" alt="Ejercicio3-Negocio-Piezas" border="0"> />
</div>

## Query
CREATE TABLE IF NOT EXISTS proveedores(
	id_proveedor SERIAL PRIMARY KEY,
	nombre VARCHAR(40) NOT NULL,
	direccion VARCHAR(25) NOT NULL,
	ciudad VARCHAR(40) NOT NULL,
	provincia VARCHAR(40) NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias(
	id_categoria SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL
);

CREATE TABLE IF NOT EXISTS partes(
	id_parte SERIAL PRIMARY KEY,
	nombre VARCHAR(35) NOT NULL,
	color VARCHAR(20) NOT NULL,
	precio NUMERIC(10,2) NOT NULL,
	id_categoria INT NOT NULL,
	FOREIGN KEY (id_categoria)
	REFERENCES categories(id_categoria)
);

CREATE TABLE IF NOT EXISTS orden_compra(
	id_orden SERIAL PRIMARY KEY,
	cantidad INT NOT NULL,
	fecha DATE NOT NULL,
	hora TIME WITH TIME ZONE NOT NULL,
	id_proveedor INT NOT NULL,
	id_parte INT NOT NULL,
	FOREIGN KEY (id_proveedor)
	REFERENCES providers(id_proveedor),
	FOREIGN KEY (id_parte)
	REFERENCES parts(id_parte)
);