import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * @author Héctor García Menéndez
 * @version 1.4
 */

public class App {
    /* ===== COLORES DE TEXTO ===== */

    public static final String ANSI_RESET = "\u001B[0m";

    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_BLUE = "\u001B[34m";
    public static final String ANSI_PURPLE  = "\u001B[35m";

    /**
     * Contardor del ID de eventos
     * Sirve para tener un contador de los IDs usados para crear eventos
     */
    static int contadorIdEvento = 0;

    /**
     * Contardor del ID de galerias
     * Sirve para tener un contador de los IDs usados para crear galerias
     */
    static int contadorIdGaleria = 0;
    
    /**
     * Main
     * Programa principal
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        Scanner teclado = new Scanner(System.in);

        /**
         * Hashmap de usuarios
         * Llave: email
         * Valor: Usuario
         */
        HashMap<String, Usuario> usuarios = new HashMap<>();

        /**
         * Hashmap de eventos
         * Llave: idEvento
         * Valor: Evento
         */
        HashMap<Integer, Evento> eventos = new HashMap<>();

        /**
         * ArrayList de favoritos
         */
        ArrayList<Favorito> favoritos = new ArrayList<>();

        Evento evento1 = new Evento(8, "28-11-2025", "Show de jirafas", "Gijón", "Visita un show de jirafas en Gijón");
        eventos.put(evento1.getId(), evento1);

        Usuario usuario1 = new Usuario("nombreDeUsuaio1", "usuario1@gmail.com", "contraseña123");
        usuarios.put(usuario1.getEmail(), usuario1);

        int resp;
        do {
            lanzarInfo("< ========== MENÚ ========== >");
            lanzarInfo("1. Añadir usuario");
            lanzarInfo("2. Eliminar usuario");
            lanzarInfo("3. Añadir evento");
            lanzarInfo("4. Eliminar evento");
            lanzarInfo("5. Añadir galería");
            lanzarInfo("6. Eliminar galería");
            lanzarInfo("7. Añadir favorito");
            lanzarInfo("8. Eliminar favorito");
            lanzarInfo("9. Salir");
            System.out.println();

            pedirInput("Introduzca opción...");
            
            resp = teclado.nextInt();
            teclado.nextLine();

            switch (resp) {
                case 1:
                    usuarios = addUsuario(teclado, usuarios);
                    break;
                case 2:
                    usuarios = removeUsuario(teclado, usuarios);
                    break;
                case 3:
                    eventos = addEvento(teclado, eventos, contadorIdEvento);
                    break;
                case 4:
                    eventos = removeEvento(teclado, eventos);
                    break;
                case 5:
                    eventos = addGaleria(teclado, eventos);
                    break;
                case 6:
                    eventos = removeGaleria(teclado, eventos);
                    break;
                case 7:
                    favoritos = addFavorito(teclado, eventos, usuarios, favoritos);
                    break;
                case 8:
                    favoritos = removeFavorito(teclado, favoritos);
                    break;
                case 9:
                    lanzarCorrecto("Saliendo...");
                    break;
                default:
                    lanzarError("ERROR: Opción no válida. Introduzca una opción entre [1] y [8]. Introduzca [9] para salir.");
                    break;
            }

            System.out.println();
        } while (resp != 9);
    }

    /**
     * Añadadir usuario
     * Añade un usuario al HashMap usuarios
     * @param teclado input
     * @param usuarios HashMap
     * @return usuarios
     */
    public static HashMap<String, Usuario> addUsuario(Scanner teclado, HashMap<String, Usuario> usuarios) {
        lanzarInfo("========== Creación de usuario ==========");

        pedirInput("Introduzca el nombre del usuario...");
        String nombre = teclado.nextLine();
        pedirInput("Introduzca el email del usuario...");
        String email = teclado.nextLine();
        pedirInput("Introduzca la contraseña del usuario...");
        String password = teclado.nextLine();

        Usuario usuario = new Usuario(nombre, email, password);

        if (usuarios.containsKey(email)) {
            lanzarError("ERROR: El usuario ya existe.");
        } else {
            usuarios.put(email, usuario);
            lanzarCorrecto("Usuario creado correctamente.");
        }

        return usuarios;
    }

    /**
     * Borrar usuario
     * Borrar un usuario del HashMap usuarios
     * @param teclado input
     * @param usuarios HashMap
     * @return usuarios
     */
    public static HashMap<String, Usuario> removeUsuario(Scanner teclado, HashMap<String, Usuario> usuarios) {
        lanzarInfo("========== Borrado de usuario ==========");

        // Ver si hay usuarios
        if (usuarios.isEmpty()) {
            lanzarError("ERROR: No hay usuarios para eliminar.");
            return usuarios;
        }

        pedirInput("Introduzca correo del usuario que desea eliminar...");
        String email = teclado.nextLine();

        if (!usuarios.isEmpty() && usuarios.containsKey(email)) {
            usuarios.remove(email);
            lanzarCorrecto("Usuario eliminado correctamente.");
        } else {
            lanzarError("ERROR: El usuario no existe.");
        }

        return usuarios;
    }

    /**
     * Añadir evento
     * Añade un evento al HashMap eventos
     * @param teclado input
     * @param eventos HashMap
     * @param contadorIDEvento contador de los IDs usados
     * @return eventos
     */
    public static HashMap<Integer, Evento> addEvento(Scanner teclado, HashMap<Integer, Evento> eventos, int contadorIDEvento) {
        lanzarInfo("========== Creación de evento ==========");
        pedirInput("Introduzca la fecha...");
        String fecha = teclado.nextLine();
        pedirInput("Introduzca el título...");
        String titulo = teclado.nextLine();
        pedirInput("Introduzca la ubicación...");
        String ubicacion = teclado.nextLine();
        pedirInput("Introduzca la descripción...");
        String descripcion = teclado.nextLine();

        Evento evento = new Evento(contadorIdEvento, fecha, titulo, ubicacion, descripcion);
        eventos.put(evento.getId(), evento);
        lanzarCorrecto("Evento creado correctamente");

        contadorIdEvento++;
        return eventos;
    }

    /**
     * Borrar evento
     * Borra un evento del HashMap eventos
     * @param teclado input
     * @param eventos HashMap
     * @return eventos
     */
    public static HashMap<Integer, Evento> removeEvento(Scanner teclado, HashMap<Integer, Evento> eventos) {
        lanzarInfo("========== Borrado de evento ==========");

        if (eventos.isEmpty()) {
            lanzarError("ERROR: No hay eventos para eliminar.");
            return eventos;
        }

        // Mostrar eventos
        mostrarEventos(eventos);
        pedirInput("Introduzca el ID del evento que desea eliminar...");
        int id = teclado.nextInt();
        teclado.nextLine();
        
        if (eventos.containsKey(id)) {
            eventos.remove(id);
            lanzarCorrecto("Evento eliminado correctamente");
        } else lanzarError("ERROR: El evento no existe");

        return eventos;
    }

    /**
     * Añadadir galeria
     * Añade una galeria a un evento
     * @param teclado input
     * @param eventos HashMap
     * @return eventos
     */
    public static HashMap<Integer, Evento> addGaleria(Scanner teclado, HashMap<Integer, Evento> eventos) {
        lanzarInfo("========== Creación de galería ==========");

        // Ver si hay eventos
        if (eventos.isEmpty()) {
            lanzarError("ERROR: No hay eventos disponibles.");
            return eventos;
        }

        // Mostrar eventos
        mostrarEventos(eventos);

        int idEvento = seleccionarEvento(teclado, eventos);
        if (idEvento == -1) return eventos;
        Evento evento = eventos.get(idEvento);

        // Introducir datos de la galerí
        pedirInput("Introduzca el título de la galería...");
        String titulo = teclado.nextLine();

        Galeria galeria = new Galeria(contadorIdGaleria, titulo, idEvento);
        HashMap<Integer, Galeria> galeriasEvento = evento.getGalerias();

        // Añadir galería a la colección de galerías
        galeriasEvento.put(galeria.getId(), galeria);
        lanzarCorrecto("Galería creada correctamente.");
        contadorIdGaleria++;

        return eventos;
    }

    /**
     * Borrar galeria
     * Borra una galeria de un evento
     * @param teclado input
     * @param eventos HashMap
     * @return eventos
     */
    public static HashMap<Integer, Evento> removeGaleria(Scanner teclado, HashMap<Integer, Evento> eventos) {
        lanzarInfo("========== Borrado de galería ==========");

        // Ver si hay eventos
        if (eventos.isEmpty()) {
            lanzarError("ERROR: No hay eventos disponibles.");
            return eventos;
        }

        // Mostrar eventos
        mostrarEventos(eventos);

        // Selección de evento. Si el evento no existe se sale de la opción
        int idEvento = seleccionarEvento(teclado, eventos);
        if (idEvento == -1) return eventos;
        Evento evento = eventos.get(idEvento);

        // Ver si hay galerías
        if (evento.getGalerias().isEmpty()) {
            lanzarError("ERROR: No hay galerías disponibles.");
            return eventos;
        }

        // Mostrar galerías
        mostrarGalerias(evento);

        // Selección de galería. Si la galería no existe se sale de la opción
        int idGaleria = seleccionarGaleria(teclado, evento);
        if (idGaleria == -1) return eventos;

        evento.getGalerias().remove(idGaleria);
        lanzarCorrecto("Galería eliminada correctamente.");

        return eventos;
    }

    /**
     * Añadir favorito
     * Añadir favorito al ArrayList de favoritos
     * @param teclado input
     * @param eventos HashMap
     * @param usuarios HashMap
     * @param favoritos ArrayList
     * @return favoritos
     */
    public static ArrayList<Favorito> addFavorito(Scanner teclado, HashMap<Integer, Evento> eventos, HashMap<String, Usuario> usuarios, ArrayList<Favorito> favoritos) {
        lanzarInfo("========== Creación de favoritos ==========");

        // Mostrar eventos
        mostrarEventos(eventos);

        // Mostrar usuarios
        mostrarUsuarios(usuarios);

        // Seleccionar evento y usuario
        int idEvento = seleccionarEvento(teclado, eventos);
        String idUsuario = seleccionarUsuario(teclado, usuarios);

        // Salir del método si no existe el evento o el usuario
        if (idUsuario.isEmpty() || idEvento == -1) return favoritos;

        // Añadir favorito
        Favorito favorito = new Favorito(idUsuario, idEvento);
        favoritos.add(favorito);
        lanzarCorrecto("Favorito creado correctamente.");

        return favoritos;
    }
    
    /**
     * Borrar favorito
     * Borra un favorito de la lista de favoritos
     * @param teclado input
     * @param favoritos ArrayList
     * @return favoritos
     */
    public static ArrayList<Favorito> removeFavorito(Scanner teclado, ArrayList<Favorito> favoritos) {
       lanzarInfo("========== Borrado de favoritos ==========");
       
        // Mostrar favoritos
        mostrarFavoritos(favoritos);

        // Seleccionar event
        pedirInput("Seleccione evento...");
        int idEvento = teclado.nextInt();
        teclado.nextLine();

        // Seleccionar usuario por email
        pedirInput("Seleccionar usuario (email)...");
        String idUsuario = teclado.nextLine();

        // Buscar si existe el favorito
        for (Favorito favorito : favoritos) {
            if (favorito.getIdEvento() == idEvento && favorito.getEmail().equals(idUsuario)) {
                favoritos.remove(favorito);
                lanzarCorrecto("Favorito eliminado correctamente.");
                return favoritos;
            }
        }
        lanzarError("ERROR: El favorito no existe.");
        return favoritos;
    }

    /**
     * Método para seleccionar un evento
     * @param teclado
     * @param eventos
     * @return idEvento identificador del evento, devuelve -1 si no existe 
     */
    public static int seleccionarEvento(Scanner teclado, HashMap<Integer, Evento> eventos) {
        // Selección de evento
        pedirInput("Introduzca el ID del evento que quiere seleccionar...");
        int idEvento = teclado.nextInt();
        teclado.nextLine();

        // Ver si existe el evento seleccionado
        if (!eventos.containsKey(idEvento))  {
            lanzarError("ERROR: El ID introducido no es correcto o no existe.");
            return -1;
        }
        return idEvento;
    }

    public static int seleccionarGaleria(Scanner teclado, Evento evento) {
        // Selección de galería
        pedirInput("Introduzca el ID de la galería que quiere seleccionar...");
        int idGaleria = teclado.nextInt();
        teclado.nextLine();

        // Ver si existe la galeria seleccionada
        if (!evento.getGalerias().containsKey(idGaleria))  {
            lanzarError("ERROR: El ID introducido no es correcto.");
            return -1;
        }
        return idGaleria;
    }

    public static String seleccionarUsuario(Scanner teclado, HashMap<String, Usuario> usuarios) {
        // Selección de usuario
        pedirInput("Introduzca el ID del usuario que quiere seleccionar...");
        String idUsuario = teclado.nextLine();

        // Ver si existe el usuario seleccionado
        if (!usuarios.containsKey(idUsuario))  {
            lanzarError("ERROR: El ID introducido no es correcto.");
            return "";
        }
        return idUsuario;
    }

    public static void mostrarEventos(HashMap<Integer, Evento> eventos) {
        lanzarTabla("----- Tabla de eventos (id: título) -----");

        eventos.forEach((clave,valor) -> lanzarTabla(clave + ": " + valor.getTitulo()));
       /*  for (Map.Entry<Integer, Evento> evento : eventos.entrySet()) {
            System.out.println(evento.getKey() + ": " + evento.getValue().getTitulo());
        }*/
    }

    public static void mostrarGalerias(Evento evento) {
        lanzarTabla("----- Tabla de galerías (id: título) -----");

        for (Map.Entry<Integer, Galeria> galeria : evento.getGalerias().entrySet()) {
            lanzarTabla(galeria.getKey() + ": " + galeria.getValue().getTitulo());
        }
    }

    public static void mostrarUsuarios(HashMap<String, Usuario> usuarios) {
        lanzarTabla("----- Tabla de usuarios email: nombre) -----");

        for (Map.Entry<String, Usuario> usuario : usuarios.entrySet()) {
            lanzarTabla(usuario.getKey() + ": " + usuario.getValue().getNombre());
        }
    }

    public static void mostrarFavoritos(ArrayList<Favorito> favoritos) {
        lanzarTabla("----- Tabla de favoritos (usuario: evento) -----");
        for (Favorito favorito : favoritos) {
            lanzarTabla("Usuario: " + favorito.getEmail() + " | " + "Evento: " + favorito.getIdEvento());
        }
    }

    public static void lanzarError(String e) {
        System.out.println(ANSI_RED + e + ANSI_RESET);
    }

    public static void lanzarCorrecto(String s) {
        System.out.println(ANSI_GREEN + s + ANSI_RESET);
    }

    public static void pedirInput(String s) {
        System.out.println(ANSI_YELLOW + s + ANSI_RESET);
    }

    public static void lanzarInfo(String s) {
        System.out.println(ANSI_BLUE + s + ANSI_RESET);
    }

    public static void lanzarTabla(String s) {
        System.out.println(ANSI_PURPLE + s + ANSI_RESET);
    }
    
    public static void lineaSeparar() {
        lanzarInfo("--------------------");
    }
}