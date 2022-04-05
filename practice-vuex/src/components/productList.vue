<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="(product, index) in products" :key="index">
                {{product.title}}
                {{product.price}}
                <button @click="addToCart(product)" :disabled="!productIsInStock(product)">Add to class</button>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        computed: {
            ...mapState('products', {
                products: state => state.products
            }),
            ...mapGetters('products', {productIsInStock: 'productIsInStock'})
            // products () {     return this.$store.getters.availableProducts },
            // productIsInStock() {     return this.$store.getters.productIsInStock }
        },
        methods: {
            ...mapActions({fetchProduct: 'products/fetchProduct', addToCart: 'cart/addProductToCart'}),
            // addToCart(product) {     this         .$store
            // .dispatch('addProductToCart', product) }
        },
        created() {
            // this     .$store     .dispatch('fetchProduct')
            this.fetchProduct()
        }
    }
</script>