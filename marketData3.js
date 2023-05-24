var ahoyMarketplace = new Vue({
    el: '#marketplace-ahoy-app',
    data: {
        products: [
            {
                id: 1,
                name: 'Ahoy Defaultz Stickers',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 10.99,
                image: './images/Ahoy-Indie-Media-DEFAULT-COVER-A-8.jpg',
                stripeBuyUrl: 'https://buy.stripe.com/test_cN26rKb2B64jaYM144'
            },
            {
                id: 2,
                name: 'Live from the Garage',
                description: 'Compliation Recordings from the Ahoy Garage Featuring Samuel Dyaln Witch',
                price: 5,
                image: './images/productImages/product_sk_1.png',
                stripeBuyUrl: 'https://buy.stripe.com/test_cN26rKb2B64jaYM144'
            },
            {
                id: 3,
                name: 'The Original Ahoy Sticker',
                description: 'Perfectly equal on all sides. Thick, durable vinyl protects the stickers from scratching, rain & sunlight. Adorn your favorite laptop, water bottle, and/or bathroom stall. 5 Total per pack.',
                price: 5,
                image: './images/productImages/product_sk_2.png',
                stripeBuyUrl: 'https://buy.stripe.com/5kA5obd9xflCeJ28ww'
            },
            {
                id: 4,
                name: 'Ahoy ASZ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 132.99,
                image: './images/Ahoy-Indie-Media-DEFAULT-COVER-A-8.jpg',
                stripeBuyUrl: 'https://buy.stripe.com/test_cN26rKb2B64jaYM144'
            },
            {
                id: 5,
                name: 'Ahoy ASZ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 132.99,
                image: './images/Ahoy-Indie-Media-DEFAULT-COVER-A-8.jpg',
                stripeBuyUrl: 'https://buy.stripe.com/test_cN26rKb2B64jaYM144'
            },
            {
                id: 6,
                name: 'Ahoy ASZ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 132.99,
                image: './images/Ahoy-Indie-Media-DEFAULT-COVER-A-8.jpg',
                stripeBuyUrl: 'https://buy.stripe.com/test_cN26rKb2B64jaYM144'
            },
            {
                id: 7,
                name: 'Ahoy ASZ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 132.99,
                image: './images/Ahoy-Indie-Media-DEFAULT-COVER-A-8.jpg',
                stripeBuyUrl: 'https://buy.stripe.com/test_cN26rKb2B64jaYM144'
            },
            {
                id: 8,
                name: 'Ahoy ASZ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 132.99,
                image: './images/Ahoy-Indie-Media-DEFAULT-COVER-A-8.jpg',
                stripeBuyUrl: 'https://buy.stripe.com/test_cN26rKb2B64jaYM144'
            }
            // other products omitted for brevity
        ]
    },
    methods: {
        buyProduct: function(productId) {
            // redirect to the product's Stripe Buy URL
            var product = this.products.find(function(product) {
                return product.id === productId;
            });
            window.location.href = product.stripeBuyUrl;
        }
    }
});
