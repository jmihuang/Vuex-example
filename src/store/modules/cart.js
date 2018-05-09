import api from '../../api/shop';

const state = {
    lessons: [],
    cartlist: []
}


const getters = {
    courses(state) {
        return state.lessons.courses;
    },
    cartLength(state) {
        return state.cartlist.length;
    },
    cartTotal(state) {
        return state.cartlist
            .reduce((acc, lesson) => {
                return acc + lesson.price
            }, 0)
    },
    isLessonInCart(state) {
        return function () {
            console.log(lesson);
        };
        // return (lesson) => {
        //     console.log(lesson);
        //     return state.cartlist.
        //         findIndex((el) => {
        //             return el.id === lesson.id;
        //         }) !== -1;
        // };
    },
}

const mutations = {
    setToData(state, rs) {
        state.lessons = rs;
    },
    addToCart(state, lesson) {
        state.cartlist.push(lesson);
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