var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/img/green_socks.jpg",
    inStock: true,
    details: ["80% cotton", "20% cotton", "gender neutral"],
    variants: [
      {
        id: 2234,
        color: "green",
      },
      {
        id: 2235,
        color: "blue",
      },
    ]
  },
});