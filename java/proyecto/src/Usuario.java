/**
 * @author Héctor García Menéndez
 * @version 1.1
 */
public class Usuario {
    /* ATRIBUTOS */
    private String nombre;
    private String email;
    private String password;

    /* GETTERS */
    public String getNombre() {
        return nombre;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    
    /* SETTERS */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
 
    /* CONSTRUCTOR */
    public Usuario(String nombre, String email, String password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    
    /* MÉTODOS */
    public String toString() {
        return 
        "Nombre de usuario: " + nombre +
        "\nEmail: " + email;
    }
}
