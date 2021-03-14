var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/img/green_socks.jpg",
    inStock: true,
    details: ["80% cotton", "20% cotton", "gender neutral"],
    variants: [
      {
        variantId: 2234,
        color: "green",
        image: "./assets/img/green_socks.jpg",
      },
      {
        variantId: 2235,
        color: "blue",
        image: "./assets/img/blue_socks.png",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(image) {
      this.image = image;
    }
  }
});