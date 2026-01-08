import CamisetaDetalle from "./CamisetaDetalle";

export default{
    title: "Components/CamisetaDetalle",
    component: CamisetaDetalle,
    // tags: ["autodocs"],
}


export const Barcelona = {
  args: {
    camisetaProp: {
      nombre: "Camiseta Barcelona",
      descripcion: "Camiseta de la actual temporada del FC Barcelona",
      precio: "39,99",
      categoria: "Liga Española",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_zDH7TEVKz0tl_q35gyBSFkXXM2ZzuFm-g&s"
  }
}
};

export const RealMadrid = {
  args: {
    camisetaProp: {
      nombre: "Camiseta Real Madrid",
      descripcion: "Primera equipación",
      precio: "39.99",
      categoria: "Liga Española",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yfO3dzQuDS-ghcPgz6OaYGRNEERlevGT3g&s"
  }
}
};