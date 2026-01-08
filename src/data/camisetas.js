import camisetaLiverpool from "../assets/camisetaLiverpool.jpg";
import camisetaUnited from "../assets/camisetaUnited.jpg";
import camisetaArsenal from "../assets/camisetaArsenal.jpg";

const camisetas =  [
    {
        id: 1,
        nombre: "Camiseta Elche",
        descripcion: "Camiseta de la actual temporada del Elche CF",
        precio: "29,99",
        categoria: "Liga Española",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzqX7NAVrWaQ0m4SF3ah_yUx3AuQpRqzU6g&s"
    },
    {
        id: 2,
        nombre: "Camiseta Barcelona",
        descripcion: "Camiseta de la actual temporada del FC Barcelona",
        precio: "39,99",
        categoria: "Liga Española",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_zDH7TEVKz0tl_q35gyBSFkXXM2ZzuFm-g&s"
    },
    {
        id: 3,
        nombre: "Camiseta Madrid",
        descripcion: "Camiseta de la actual temporada del Real Madrid CF",
        precio: "39,99",
        categoria: "Liga Española",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yfO3dzQuDS-ghcPgz6OaYGRNEERlevGT3g&s"
    },
    {
        id: 4,
        nombre: "Camiseta Atlético",
        descripcion: "Camiseta de la actual temporada del Atlético de Madrid",
        precio: "39,99",
        categoria: "Liga Española",
        imagen: "https://urbanvibesx.com/cdn/shop/files/Camiseta-futbol-es-1_-equipacion-del-Atletico-de-Madrid-24-25.jpg?v=1724498145"
    },
    {
        id: 5,
        nombre: "Camiseta Liverpool",
        descripcion: "Camiseta de la actual temporada del Liverpool FC",
        precio: "39,99",
        categoria: "Liga Inglesa",
        imagen: camisetaLiverpool
    },
    {
        id: 6,
        nombre: "Camiseta United",
        descripcion: "Camiseta de la actual temporada del Manchester United FC",
        precio: "39,99",
        categoria: "Liga Inglesa",
        imagen: camisetaUnited
    },
    {
        id: 7,
        nombre: "Camiseta Arsenal",
        descripcion: "Camiseta de la actual temporada del Arsenal FC",
        precio: "39,99",
        categoria: "Liga Inglesa",
        imagen: camisetaArsenal
    },
    {
        id: 8,
        nombre: "Camiseta City",
        descripcion: "Camiseta de la actual temporada del Manchester City FC",
        precio: "39,99",
        categoria: "Liga Inglesa",
        imagen: "https://elitefootballstore.com/wp-content/uploads/2022/12/34fe430b-scaled.jpg"
    },
    {
        id: 9,
        nombre: "Camiseta Milan",
        descripcion: "Camiseta de la actual temporada del Milan CF",
        precio: "39,99",
        categoria: "Liga Italiana",
        imagen: "https://camisfutgol.com/wp-content/uploads/2025/05/2526-AC-Milan-Home-S-4XL-2-600x600-1.webp"
    },
    {
        id: 10,
        nombre: "Camiseta Juventus",
        descripcion: "Camiseta de la actual temporada de la Juventus",
        precio: "39,99",
        categoria: "Liga Italiana",
        imagen: "https://urbanvibesx.com/cdn/shop/files/Camiseta-Juventus-Primera-Equipacion-24-25.jpg?v=1724411138"
    },
    {
        id: 11,
        nombre: "Camiseta Inter",
        descripcion: "Camiseta de la actual temporada del Inter CF",
        precio: "39,99",
        categoria: "Liga Italiana",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7JR_CgpqmP6TLUG09HsVPf3bN4mee1ljQ&s"
    },
    {
        id: 12,
        nombre: "Camiseta Napoli",
        descripcion: "Camiseta de la actual temporada del Napoli CF",
        precio: "35,99",
        categoria: "Liga Italiana",
        imagen: "https://urbanvibesx.com/cdn/shop/files/Camiseta-Scc-Napoli-Primera-Equipacion-24-25.jpg?v=1724502505"
    },
    {
        id: 13,
        nombre: "Camiseta Bayern",
        descripcion: "Camiseta de la actual temporada del Bayern de Munich",
        precio: "39,99",
        categoria: "Liga Alemana",
        imagen: "https://sportpalace.es/wp-content/uploads/2025/01/c0a3a687-scaled.jpeg"
    },
    {
        id: 14,
        nombre: "Camiseta Dortmund",
        descripcion: "Camiseta de la actual temporada del Borussia Dortmund",
        precio: "39,99",
        categoria: "Liga Alemana",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNMn4KZMQ5Qucc69Wvk-f-g0HcJtD-ei4ig&s"
    },
    {
        id: 15,
        nombre: "Camiseta Hamburgo",
        descripcion: "Camiseta de la actual temporada del Hamburgo",
        precio: "29,99",
        categoria: "Liga Alemana",
        imagen: "https://madrid-shop.com/wp-content/uploads/2025/07/Camiseta-Hamburgo-Primera-Equipacion-2025-26.webp"
    },
    {
        id: 16,
        nombre: "Camiseta Frankfurt",
        descripcion: "Camiseta de la actual temporada del Eintracht de Frankfurt",
        precio: "35,99",
        categoria: "Liga Alemana",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35-SVLZnlARss3k8U5O9CKUWH01Jt80UMyg&s"
    },
    {
        id: 17,
        nombre: "Camiseta PSG",
        descripcion: "Camiseta de la actual temporada del Paris Saint Germain",
        precio: "39,99",
        categoria: "Liga Francesa",
        imagen: "https://urbanvibesx.com/cdn/shop/files/Camiseta-Paris-Saint-Germain-Primera-Equipacion-24-25.jpg?v=1724362738"
    },
    {
        id: 18,
        nombre: "Camiseta Marsella",
        descripcion: "Camiseta de la actual temporada del Olympique Marsella",
        precio: "35,99",
        categoria: "Liga Francesa",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RhoUFFyGmljUTQ6SfZ_EK0u4hvVTawk30g&s"
    },
    {
        id: 19,
        nombre: "Camiseta Lyon",
        descripcion: "Camiseta de la actual temporada del Olympique Lyon",
        precio: "35,99",
        categoria: "Liga Francesa",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUl8uSwe_ubsdQEKkgRiVRk2BPuqugTtGqWw&s"
    },
    {
        id: 20,
        nombre: "Camiseta Monaco",
        descripcion: "Camiseta de la actual temporada del Monaco",
        precio: "35,99",
        categoria: "Liga Francesa",
        imagen: "https://sportpalace.es/wp-content/uploads/2024/06/d12686e0-scaled.jpeg"
    },
    {
        id: 21,
        nombre: "Camiseta Sporting",
        descripcion: "Camiseta de la actual temporada del Sporting de Lisboa",
        precio: "35,99",
        categoria: "Liga Portuguesa",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAbuyn_vLXscBtqGoRUdme2f3sn43TQHXig&s"
    },
    {
        id: 22,
        nombre: "Camiseta Ajax",
        descripcion: "Camiseta de la actual temporada del Ajax de Amsterdam",
        precio: "35,99",
        categoria: "Liga Holandesa",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR6ugoJ52e18-CZXdWdDM6jKThwZ8ihuH1w&s"
    },
    {
        id: 23,
        nombre: "Camiseta Galatasaray",
        descripcion: "Camiseta de la actual temporada del Galatasaray",
        precio: "35,99",
        categoria: "Liga Turca",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJjmRA7xY4AfOs2pobQZjY1Qmo9ZSfNitIw&s"
    },
    {
        id: 24,
        nombre: "Camiseta Celtic",
        descripcion: "Camiseta de la actual temporada del Celtic de Glasgow",
        precio: "35,99",
        categoria: "Liga Escocesa",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReORUOjw2jGpyJ7hyGHwkPRfnRrpmhShum0Q&s"
    },
];

export default camisetas;