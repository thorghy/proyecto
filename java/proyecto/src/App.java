import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * @author Héctor García Menéndez
 * @version 1.1
 */
public class App {

    static int contadorIDEvento = 0;
    public static void main(String[] args) throws Exception {
        Scanner teclado = new Scanner(System.in);

        HashMap<String, Usuario> usuarios = new HashMap<>();
        HashMap<Integer, Evento> eventos = new HashMap<>();

        int resp;
        do {
            System.out.println("----- MENÚ -----");
            System.out.println("1. Añadir usuario");
            System.out.println("2. Eliminar usuario");
            System.out.println("3. Añadir evento");
            System.out.println("4. Eliminar evento");
            System.out.println("5. Añadir galería");
            System.out.println("6. Eliminar galerería");
            System.out.println("7. Añadir favorito");
            System.out.println("8. Eliminar favorito");
            System.out.println("9. Salir");
            System.out.println();
            System.out.println("Introduzca opción...");
            
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
                    eventos = addEvento(teclado, eventos, contadorIDEvento);
                    break;
                case 4:
                    eventos = removeEvento(teclado, eventos);
                    break;
                case 5:
                    addGaleria();
                    break;
                case 6:
                    removeGaleria();
                    break;
                case 7:
                    addFavorito();
                    break;
                case 8:
                    removeFavorito();
                    break;
                case 9:
                    System.out.println("Saliendo...");
                    break;
                default:
                    // CUANDO LA OPCION NO ES VALIDA
                    break;
            }

            System.out.println();
        } while (resp != 9);
    }

    public static HashMap<String, Usuario> addUsuario(Scanner teclado, HashMap<String, Usuario> usuarios) {
        System.out.println("- - - Creación de usuario - - -");

        System.out.println("Introduzca el nombre del usuario...");
        String nombre = teclado.nextLine();

        System.out.println("Introduzca el email del usuario...");
        String email = teclado.nextLine();

        System.out.println("Introduzca la contraseña del usuario...");
        String password = teclado.nextLine();

        Usuario usuario = new Usuario(nombre, email, password);

        if (usuarios.containsKey(email)) {
            System.out.println("El usuario ya existe.");
        } else {
            usuarios.put(email, usuario);
            System.out.println("Usuario creado correctamente.");
        }

        return usuarios;
    }

    public static HashMap<String, Usuario> removeUsuario(Scanner teclado, HashMap<String, Usuario> usuarios) {
        if (usuarios.isEmpty()) {
            System.out.println("No hay usuarios para eliminar.");
            return usuarios;
        }

        System.out.println("- - - Borrado de usuario - - -");

        System.out.println("Introduzca correo del usuario que desea eliminar...");
        String email = teclado.nextLine();

        if (usuarios.containsKey(email)) {
            usuarios.remove(email);
            System.out.println("Usuario eliminado correctamente.");
        } else {
            System.out.println("El usuario no existe.");
        }

        return usuarios;
    }

    public static HashMap<Integer, Evento> addEvento(Scanner teclado, HashMap<Integer, Evento> eventos, int contadorIDEvento) {
        System.out.println("- - - Creación de evento - - -");

        System.out.println("Introduzca la fecha...");
        String fecha = teclado.nextLine();

        System.out.println("Introduzca el título...");
        String titulo = teclado.nextLine();

        System.out.println("Introduzca la ubicación...");
        String ubicacion = teclado.nextLine();

        System.out.println("Introduzca la descripción...");
        String descripcion = teclado.nextLine();

        Evento evento = new Evento(contadorIDEvento, fecha, titulo, ubicacion, descripcion);

        if (eventos.containsKey(evento.getId())) {
            System.out.println("El evento ya existe.");
        } else {
            eventos.put(evento.getId(), evento);
            System.out.println("Evento creado correctamente");
            contadorIDEvento++;
        }
        return eventos;
    }

    public static HashMap<Integer, Evento> removeEvento(Scanner teclado, HashMap<Integer, Evento> eventos) {
        if (eventos.isEmpty()) {
            System.out.println("No hay eventos para eliminar.");
            return eventos;
        }

        for (Map.Entry<Integer, Evento> evento : eventos.entrySet()) {
            System.out.println(evento.getKey() + ": " + evento.getValue().getTitulo());
        }

        System.out.println("Introduzca el ID del evento que desea eliminar...");
        int id = teclado.nextInt();
        teclado.nextLine();
        
        if (eventos.containsKey(id)) {
            eventos.remove(id);
            System.out.println("Evento eliminado correctamente");
        } else System.out.println("El evento no existe");

        return eventos;
    }

    public static void addGaleria() {

    }

    public static void removeGaleria() {

    }

    public static void addFavorito() {

    }

    public static void removeFavorito() {

    }
}
