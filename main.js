var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: "./assets/produto1.jpg",
        inStock: false,
        details: ["80% cotton", "20% plyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/produto1.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/portfolio_destaque.jpg'
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    }
})