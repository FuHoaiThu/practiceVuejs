<template>
    <div>
        <h1>
            Product Cart
        </h1>
        <ul>
            <li v-for="(product, index) in cart" :key="index">{{product.title}}
                {{product.price}}
                {{product.quantity}}</li>
        </ul>
        <p>Total: {{total}}</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('cart',{
            cart: 'productInCart',
            total: 'totalProductsInCart'
        }),
        // cart() {
        //     return this.$store.getters.productInCart
        // },
        // total() {
        //     return this.$store.getters.totalProductsInCart
        // }
    }
}
</script>