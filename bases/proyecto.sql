create table usuario (
    idUsuario int,
    nombre varchar2(30),
    email varchar2(35),
    userPassword varchar2(40),
    
    constraint pk_usuario primary key(idUsuario)
);

create table evento (
    idEvento int,
    fecha date,
    titulo varchar2(50),
    ubicacion varchar2(30),
    descripcion varchar2(300),
    
    constraint pk_evento primary key(idEvento)
);

create table galeria (
    idGaleria int,
    titulo varchar2(50),
    idEvento int,
    
    constraint pk_galeria primary key(idGaleria),
    constraint fk_galEvento foreign key(idEvento) references evento(idEvento)
);

create table imagen (
    idImagen int,
    titulo varchar2(40),
    imagen number(6),
    idGaleria int,
    
    constraint pk_imagen primary key(idImagen),
    constraint fk_imgGaleria foreign key(idGaleria) references galeria(idGaleria)
);

create table favorito (
    idUsuario int,
    idEvento int,
    
    constraint fk_favUsuario foreign key(idUsuario) references usuario(idUsuario),
    constraint fk_favEvento foreign key(idEvento) references evento(idEvento)
);