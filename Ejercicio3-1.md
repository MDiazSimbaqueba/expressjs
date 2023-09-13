# EJERCICIO TIENDA DE HARDWARE
### Un negocio quiere llevar el control de piezas que emplean en el día a día y los proveedores que suministran estas. De cada proveedor conocemos su nombre, dirección, ciudad, provincia y un código de proveedor que será único para cada uno de ellos. Nos interesa llevar un control de las piezas que nos suministra cada proveedor. Es importante conocer la cantidad de las diferentes piezas que nos suministra y en qué fecha lo hace. Tenga en cuenta que un mismo proveedor nos puede suministrar una pieza con el mismo código en diferentes fechas. El diseño de la base de datos debe permitir almacenar un histórico con todas las fechas y las cantidades que nos ha proporcionado un proveedor. Una misma pieza puede ser suministrada por diferentes proveedores. De cada pieza conocemos un código que será único, nombre, color, precio y categoría. Pueden existir varias categorías y para cada categoría hay un nombre y un código de categoría único. Una pieza solo puede pertenecer a una categoría.

## Modelo Entidad-Relación
<div>
  <img align="center" src="" />
</div>

## Query
<!-- CREATE TABLE IF NOT EXISTS providers (
	provider_code SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	address VARCHAR(25) NOT NULL,
	city VARCHAR(40) NOT NULL,
	province VARCHAR(40) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
	category_code SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL
);

CREATE TABLE IF NOT EXISTS parts (
	part_code SERIAL PRIMARY KEY,
	name VARCHAR(35) NOT NULL,
	color VARCHAR(20) NOT NULL,
	price NUMERIC(10,2) NOT NULL,
	category_code INT NOT NULL,
	
	FOREIGN KEY (category_code)
	REFERENCES categories(category_code)
);

CREATE TABLE IF NOT EXISTS purchase_order (
	order_id SERIAL PRIMARY KEY,
	amount INT NOT NULL,
	date DATE NOT NULL,
	time TIME WITH TIME ZONE NOT NULL,
	
	provider_code INT NOT NULL,
	part_code INT NOT NULL,
	
	FOREIGN KEY (provider_code)
	REFERENCES providers(provider_code),
	
	FOREIGN KEY (part_code)
	REFERENCES parts(part_code)
); -->