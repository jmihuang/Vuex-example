import api from '../../api/shop';

const state = {
    lessons: [],
    cart: []
}


const getters = {
    cartLength(state) {
        return state.cart.length;
    },
    cartTotal(state) {
        return state.cart
            .reduce((acc, lesson) => {
                return acc + lesson.price
            }, 0)
    },
    isLessonInCart(state) {
        console.log(lesson);
    }
}

const mutations = {
    setToData(state, rs) {
        state.lessons = rs;
    },
    addToCart(state, lesson) {
        state.cart.push(lesson);
    }
}

const actions = {
    productApi({ commit }, payload) {
        api.getProducts((rs) => {
            commit('setToData', rs);
        });
    }
}

export default {
    state,
    mutations,
    getters,
    actions,
}