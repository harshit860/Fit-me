// import { add_user, set_user } from './action'

var fire_data = JSON.parse(window.localStorage.getItem('data'))
if (fire_data == null) {
    fire_data = {

        trainers: [
            { trainer_name: "Trainer_1", trainer_email: "trainer1@fitme.com", password: "fitme1111" },
            { trainer_name: "Trainer_2", trainer_email: "trainer2@fitme.com", password: "fitme2222" },
            { trainer_name: "Trainer_3", trainer_email: "trainer3@fitme.com", password: "fitme3333" }
        ],
        login: false,
        index: 0,
        check: "harshit",
        user: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            phone_number: 0,
            gender: "",
            age: 0,
            height: 0,
            weight: 0,
            trainer: '',
            excercise_1: false,
            excercise_2: false,
            excercise_3: false,
            excercise_4: false,
            excercise_5: false,
            diet_1: false,
            diet_2: false,
            diet_3: false,
            diet_4: false,
            diet_5: false,
            weight_2: 0,
            today_date: '',
            chart_flag: false,
            regime: []
        },// state.user or fire_data user is basically the current routine page user
        gym_members: [

        ]
    }
}



const reducer = (state = fire_data, action) => {
    if (action.type === "add_user") {
        var obj = {
            gym_members: action.user,//this actions add the users from register page
            check: state.check,
            trainers: state.trainers,
            user: state.user,
            index: state.index,
            login: false
        }
        window.localStorage.setItem('data', JSON.stringify(obj))
        return obj

    }
    if (action.type === "flow") {
        var obj1 = {
            gym_members: action.firedata,//this actions add the users from register page
            check: state.check,
            trainers: state.trainers,
            user: state.user,
            index: state.index,
            login: state.login
        }
        window.localStorage.setItem('data', JSON.stringify(obj1))
        return obj1

    }
    if (action.type === "set_user") {

        var obj2 = {
            user: state.gym_members[action.user_index], // this sets the user on routine page
            gym_members: state.gym_members,
            check: state.check,
            trainers: state.trainers,
            index: action.user_index,
            login: true
        }
        window.localStorage.setItem('data', JSON.stringify(obj2))
        return obj2

    }
    if (action.type === "update") {

        var obj3 = {
            user: state.gym_members[state.index],
            gym_members: action.regime_info,
            index: state.index,
            check: state.check,
            trainers: state.trainers,
            login: state.login
        }
        window.localStorage.setItem('data', JSON.stringify(obj3))
        console.log(state.gym_members[state.index])
        return obj3;
    }
    if (action.type === "logout_me") {
        console.log("in logut")
        var obj4 = {
            user: state.user,
            gym_members: state.gym_members,
            index: state.index,
            check: state.check,
            trainers: state.trainers,
            login: false
        }
        window.localStorage.setItem('data', JSON.stringify(obj4))
        return obj4;

    }
    return state;
}

export default reducer;
//export default reducer will provide the data to store and provider will make the data available across the app using store