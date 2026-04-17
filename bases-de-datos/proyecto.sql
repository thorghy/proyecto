create table usuarios (
    idUsuario int,
    nombre varchar2(30),
    email varchar2(35),
    userPassword varchar2(40),
    
    constraint pk_usuario primary key(idUsuario)
);

create table eventos (
    idEvento int,
    fecha date,
    titulo varchar2(50),
    ubicacion varchar2(30),
    descripcion varchar2(300),
    
    constraint pk_evento primary key(idEvento)
);

create table galerias (
    idGaleria int,
    titulo varchar2(50),
    idEvento int,
    
    constraint pk_galeria primary key(idGaleria),
    constraint fk_galEvento foreign key(idEvento) references eventos(idEvento)
);

create table imagenes (
    idImagen int,
    titulo varchar2(40),
    imagen varchar2(50),
    idGaleria int,
    
    constraint pk_imagen primary key(idImagen),
    constraint fk_imgGaleria foreign key(idGaleria) references galerias(idGaleria)
);

create table favoritos (
    idUsuario int,
    idEvento int,
    
    constraint pk_favoritos primary key(idUsuario, idEvento),
    constraint fk_favUsuario foreign key(idUsuario) references usuarios(idUsuario),
    constraint fk_favEvento foreign key(idEvento) references eventos(idEvento)
);

insert into eventos values(1, '01-01-2026', 'Baile Salmantino de Año Nuevo', 'Mieres del Camino', 'Los salmantinos de Mieres celebran el año nuevo con un novedoso baile en la plaza del ayuntamiento.');
insert into eventos values(2, '12-01-2026', 'Cocina de Mazapán con curry', 'Oviedo', 'Aprende a cocinar mazapán con curry junto a actividades interactivas. Ideal para todas las edades.');
insert into eventos values(3, '24-01-2026', 'Concierto de una silla', 'Gijón', 'Escucha a una silla cantar. Parte del Silla World Tour 2026.');
insert into eventos values(4, '05-06-2026', '1º Campeonato de petanca y escalope de Asturias', 'Gijón', 'Primera de edición del nuevo e innovador campeonato de petanca y escalope. Precio entrada: 10€. La entrada es un ticket de una rifa para ganar un escalope.');
insert into eventos values(5, '15-06-2026', 'Piruetas robóticas', 'Avilés', 'Diseña y construye un robot capaz de realizar piruetas con precisión milimétrica.');
insert into eventos values(6, '25-06-2026', 'Día de la rúcula', 'Villaviciosa', 'Celebración anual del día de la rúcula. Rúcula gratis.');
insert into eventos values(7, '28-03-2026', 'Real Sporting vs Deportivo La Coruña', 'Estadio el Molinón, Gijón', 'SIN DESCRIPCION');
insert into eventos values(8, '23-06-2026', 'Hoguera de San Juan 2026', null, 'SIN DESCRIPCION');
insert into eventos values(9, '16-07-2026', 'Boombastic Asturias 2026', 'Llanera', 'SIN DESCRIPCION');
insert into eventos values(10, '01-04-2026', 'Estreno: Super Mario Galaxy: La película', null, 'SIN DESCRIPCION');
insert into eventos values(11, '10-08-2026', 'Concierto La Oreja De Van Gogh Gijón', 'Gijón Life', 'SIN DESCRIPCION');
insert into eventos values(12, '20-12-2025', 'Concierto Fito y Fitipaldis', 'Palacio de Deportes, Gijón', 'SIN DESCRIPCION');
insert into eventos values(13, '12-02-2026', 'Carnaval 2026', null, 'SIN DESCRIPCION');

insert into usuarios values(1, 'hector', 'hector@hector.es', 'h3ct0r');
insert into usuarios values(2, 'misterqueso', 'quesoparmesano@gmail.com', 'quesolover123'); 
insert into usuarios values(3, 'petancayescalope', 'soporte@petancayescalope.es', 'contraseña');

insert into galerias values(1, 'Galería del baile salamantino', 1);
insert into galerias values(2, 'Galería de la cocina de mazapán con curry', 2);
insert into galerias values(3, 'Galería del concierto de la silla esa', 3);

insert into imagenes values(1, 'imagen de una baile', 'baile.jpg', 1);
insert into imagenes values(2, 'alguien bailando', 'bailando.jpg', 1);
insert into imagenes values(3, 'salamanca', 'salamanca.jpg', 1);

insert into imagenes values(4, 'foto de un mazapán', 'mazapán.jpg', 2);
insert into imagenes values(5, 'foto de el curry', 'curry.jpg', 2);
insert into imagenes values(6, 'imagen de un mazapán con curry', 'mazapanycurry.jpg', 2);

insert into imagenes values(7, 'silla cantando', 'silla_cantando.jpg', 3);
insert into imagenes values(8, 'silla bailando', 'silla_bailando.jpg', 3);
insert into imagenes values(9, 'escenario del concierto', 'escenario.jpg', 3);

insert into favoritos values(1, 1);
insert into favoritos values(1, 2);
insert into favoritos values(1, 6);

insert into favoritos values(2, 2);
insert into favoritos values(2, 1);
insert into favoritos values(2, 4);

insert into favoritos values(3, 2);
insert into favoritos values(3, 3);
insert into favoritos values(3, 5);

/* VISTA 1 */
create view historialGalerias as
select galerias.titulo
from galerias, eventos
where eventos.fecha < '28-02-2026' 
    and eventos.idEvento = galerias.idEvento;

/* VISTA 2 */
create view favoritosUsuario1 as
select eventos.titulo
from favoritos, eventos
where eventos.idEvento = favoritos.idEvento 
    and favoritos.idUsuario = 1;

/* VISTA 3 */
create view imgGalEvento as
select imagenes.titulo
from imagenes, galerias
where imagenes.idGaleria = galerias.idGaleria 
    and galerias.idEvento = 2;

/* VISTA 4 */
create view favsUsuario2Posteriores as
select eventos.titulo
from eventos, favoritos
where eventos.fecha > '28-02-2026'
    and eventos.idEvento = favoritos.idEvento
    and favoritos.idUsuario = 2;
