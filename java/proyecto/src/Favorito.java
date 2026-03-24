
/**
 * @author Héctor García Menéndez
 * @version 1.0
 */
public class Favorito {
    /* ATRIBUTOS */
    private String email;
    private int idEvento;

    /* GETTERS */
    public String getEmail() {
        return email;
    }
    public int getIdEvento() {
        return idEvento;
    }
    
    /* SETTERS */
    public void setEmail(String email) {
        this.email = email;
    }
    public void setIdEvento(int idEvento) {
        this.idEvento = idEvento;
    }
    
    /* CONSTRUCTOR */
    public Favorito(String email, int idEvento) {
        this.email = email;
        this.idEvento = idEvento;
    }

    /* MÉTODOS */
}
