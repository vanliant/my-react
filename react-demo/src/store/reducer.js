const num = 100

// const increase = {
//     type:'ADD'
// }

// const decrease = {
//     type:'REDUCE'
// }

const reducer = (state = num ,action) => {
    switch (action.type) {
        case "ADD":
            return state += 100;
        case "REDUCE":
            return state -= 100;
        default:
            return state;
    }
}

export default reducer