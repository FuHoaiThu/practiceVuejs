import shop from '@/api/shop'
export default {
    namespaced: true,
    state: {
        products: [],
    },
    getters: {
        availableProducts(state, getters) {
            return state
                .products
                .filter(product => product.inventory > 0)
        },
        productIsInStock(state, getters) {
            return ((product) => {
                return product.inventory > 0
            })
        }
    },
    actions: {
        // fetchProduct(context) {     shop.getProducts(products => {
        // context.commit('setProduct', products)     }) }
        fetchProduct({commit}) {
            shop.getProducts(product => {
                commit('setProduct', product)
            })
        }
    },
    mutations: {
        setProduct(state, products) {
            state.products = products
        },
        decreaseProductInventory(store, product) {
            product.inventory--
        }
    }
}
