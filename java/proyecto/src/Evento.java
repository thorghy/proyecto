import java.util.ArrayList;

/**
 * @author Héctor García Menéndez
 * @version 1.0
 */
public class Evento {
    /* ATRIBUTOS */
    private int id;
    private String fecha;
    private String titulo;
    private String ubicacion;
    private String descripcion;
    private ArrayList<Galeria> galerias;

    /* GETTERS */
    public int getId() {
        return id;
    }
    public String getFecha() {
        return fecha;
    }
    public String getTitulo() {
        return titulo;
    }
    public String getUbicacion() {
        return ubicacion;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public ArrayList<Galeria> getGalerias() {
        return galerias;
    }

    /* SETTERS */
    public void setId(int id) {
        this.id = id;
    }
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public void setGalerias(ArrayList<Galeria> galerias) {
        this.galerias = galerias;
    }
    
    /* CONSTRUCTOR */
    public Evento(int id, String fecha, String titulo, String ubicacion, String descripcion,
            ArrayList<Galeria> galerias) {
        this.id = id;
        this.fecha = fecha;
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.galerias = galerias;
    }

    /* MÉTODOS */

}