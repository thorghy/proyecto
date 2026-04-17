function getColor({categoria}) {
    console.log(categoria)
    const categoriasColor = new Map([
        ["musica", "rosa"],
        ["cine", "azul"],
        ["teatro", "azul"],
        ["exposiciones", "naranja"]
    ]);

    let color = "gris"; // color por defecto
    if (categoriasColor.has(categoria.toLowerCase())) {
        color = categoriasColor.get(categoria.toLowerCase());
    }

    return color;
}

export default getColor;