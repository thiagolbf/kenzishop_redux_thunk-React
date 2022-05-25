const initialState = [
  {
    name: "Star Wars: Jedi Fallen Order",
    price: 259.1,
    image:
      "https://images.kabum.com.br/produtos/fotos/sync_mirakl/259446/Star-Wars-Jedi-Fallen-Order-Ps5_1635365951_g.jpg",
  },
  {
    name: "Elden Ring",
    price: 339.89,
    image:
      "https://cdn.awsli.com.br/969/969638/produto/144696409/70d09f14fc.jpg",
  },
  {
    name: "Returnal",
    price: 279.65,
    image: "https://m.media-amazon.com/images/I/71EdhuxHshL._AC_SX342_.jpg",
  },
  {
    name: "Demon's Souls",
    price: 299.35,
    image: "https://m.media-amazon.com/images/I/81f8vt8oJbL._AC_SX425_.jpg",
  },
  {
    name: "Deathloop",
    price: 339.49,
    image:
      "https://cdn.awsli.com.br/600x1000/1605/1605600/produto/121489073d34142f47d.jpg",
  },
  {
    name: "Ghost of Tsushima Director's Cut",
    price: 270.5,
    image:
      "https://images.kabum.com.br/produtos/fotos/181720/jogo-ghost-of-tsushima-versao-do-diretor-ps5_1626783392_g.jpg",
  },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
