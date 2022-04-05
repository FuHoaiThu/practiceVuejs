export default {
    namespaced: true,
    state: {
        cart: []
    },
    getters: {
        productInCart(state, getters, rootState) {
            return state
                .cart
                .map(productInCart => {
                    let product = rootState
                        .products.products
                        .find(product => product.id == productInCart.id)
                    return {title: product.title, price: product.price, quantity: productInCart.quantity}
                })
        },
        totalProductsInCart(state, getters) {
            let total = 0;
            getters
                .productInCart
                .forEach(productInCart => {
                    total += productInCart.price * productInCart.quantity
                })
            return total.toFixed(2)
        }
    },
    actions: {
        addProductToCart({
            state,
            getters,
            commit,
            rootState,
            rootGetters
        }, product) {
            // if(product.inventory > 0) {
            if (rootGetters['products/productIsInStock'](product)) {
                // product in cart?
                let productInCart = state
                    .cart
                    .find(item => item.id === product.id)
                //TH1: not: add new product in cart, quantity = 1
                if (!productInCart) {
                    commit('pushProductInCart', product.id)//Th2: Yes: increase quantity)
                } else {
                    commit('increaseQuantity', productInCart)
                }
                // decrease product iventory
                commit('products/decreaseProductInventory', product, {root: true})
            }
        }
    },
    mutations: {
        pushProductInCart(state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },
        increaseQuantity(state, productInCart) {
            productInCart.quantity++
        },
    }
}