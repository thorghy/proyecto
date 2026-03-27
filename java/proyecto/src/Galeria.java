
/**
 * @author Héctor García Menéndez
 * @version 1.0
 */
public class Galeria {
    /* ATRIBUTOS */
    private int id;
    private String titulo;
    private int idEvento;

    /* GETTERS */
    public int getId() {
        return id;
    }
    public String getTitulo() {
        return titulo;
    }
    public int getIdEvento() {
        return idEvento;
    }

    /* SETTERS */
    public void setId(int id) {
        this.id = id;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public void setIdEvento(int idEvento) {
        this.idEvento = idEvento;
    }
    
    /* CONSTRUCTOR */
    public Galeria(int id, String titulo, int idEvento) {
        this.id = id;
        this.titulo = titulo;
        this.idEvento = idEvento;
    }

    /* MÉTODOS */
    @Override
    public String toString() {
        return "ID: " + id +
        "\nTitulo: " + titulo +
        "\nID Evento: " + idEvento;
    }
}
