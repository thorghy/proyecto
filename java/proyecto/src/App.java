import java.util.Scanner;

/**
 * @author Héctor García Menéndez
 * @version 1.0
 */
public class App {
    public static void main(String[] args) throws Exception {
        Scanner teclado = new Scanner(System.in);

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
            System.out.println();
            System.out.println("Introduzca opción...");
            
            resp = teclado.nextInt();

            switch (resp) {
                case 1:
                    addUsuario();
                    break;
                case 2:
                    removeUsuario();
                    break;
                case 3:
                    addEvento();
                    break;
                case 4:
                    removeEvento();
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

    public static void addUsuario() {

    }

    public static void removeUsuario() {

    }

    public static void addEvento() {

    }

    public static void removeEvento() {

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
