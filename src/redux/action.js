// import { type } from "os";
// import firebase from './../config/fbConfig';

const add_user = (user) =>(
    {
     type:"add_user",
     user
    }
)

const flow = (firedata) =>(
    {
        type:"flow",
        firedata
    }
)

const set_user = (user_index) =>(
    // console.log("in set user"),
    {
        type:"set_user",
        user_index

    }
)
const update_regime = (regime_info) =>(
    // console.log("in update"),
    // console.log(regime_info),
    {
        type:"update",
        regime_info
    }
)
const logout = () =>(
    // console.log("in logout"),
    {
        type:"logout_me"
    }
)
export {add_user, set_user, update_regime,logout,flow};
