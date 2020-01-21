import React, { Component } from 'react';
import './styles.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { add_user } from './../redux/action';
// import { isDate } from 'util';
import firebase from './../config/fbConfig'
// import { copyFile } from 'fs';
const db = firebase.firestore()
const userlist = db.collection('userlist')

let tip = "";

class Register_page extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            regime: [],
            track: 'Start gym',
            count: 0,
            login_now: false
        }
    }
    firecall = () => {
        var valuepass = []
        db.collection('userlist').add(this.state)
        userlist
            .get()
            .then(res => {
                //let temp = []
                res.forEach(doc => {
                    valuepass.push(doc.data());
                })
                console.log(valuepass)
                var ans = valuepass.sort();
                console.log(ans)
                this.props.addusr(ans)
            }

            )

    }

    handleChange(e) {
        e.preventDefault();
        var day_date = new Date().getDate();
        var day_hours = new Date().getHours();
        var hour_minutes = new Date().getMinutes();
        var a = 'Date:' + day_date + ' Time:' + day_hours + ':' + hour_minutes;
        this.setState({
            [e.target.name]: e.target.value,
            flag_display: true,
            today_date: a,
            login_now: false
        })
        console.log(this.state.last_name)

        let new_user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            phone_number: this.state.phone_number,
            gender: this.state.gender,
            age: this.state.age,
            height: this.state.height,
            weight: this.state.weight,
            trainer: this.state.trainer,
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
            chart_flag: false
        }

        if (this.state.flag_display === false) {
            console.log("waiting")
        }
        else {
            console.log("now here")
        }
        console.log(new_user)
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(e.name[password].value)
        // for(var i = 0; i < this.props.users.length; i++) {
        //     if(this.props.users[i].email === this.state.email) {
        //         alert("Already Registered");
        //         break;
        //     }
        // }
        if(this.state.weight !== 0){
            this.setState({
                login_now: true
            })
            this.firecall();
        }
        else{
            alert("All Fields are requied")
        }
    }

    render() {
            
        return (
            <div className="container">
                <div>
                    <Link to="/">
                        <img src="fit.png" alt="Logo" height="130px" className="ml-3" />
                    </Link>
                    <p className="text-right" style={{ marginTop: "-20px" }}>
                        <Link to="/loginpage">LOGIN</Link>
                    </p>

                    {/* Info Page Trial button */}

                    {/* <p  className="text-right" style={{marginTop: "-20px"}}>
                        <Link to="/infopage">Info page</Link>
                    </p> */}

                    {/* Routine Page Trial button */}

                    {/* <p  className="text-right" style={{marginTop: "-20px"}}>
                        <Link to="/routinepage">Routine page</Link>
                    </p> */}


                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <p className="text-left text-muted">Hello, New User</p>
                        <p>REGISTER PAGE</p>
                    </div>
                    <div className="card-body ">
                        <form>
                            <input
                                type="text"
                                placeholder="First name"
                                name="first_name"
                                required
                                className="name cont"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                required
                                name="last_name"
                                className="name cont"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <br />
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                name="email"
                                className="cont"
                                onChange={(e) => this.handleChange(e)}
                                // onChange={(e) => this.handleEmail(e)}
                            />
                            <br />
                            <input
                                type="password"
                                placeholder="Create Password"
                                required
                                name="password"
                                className="cont"
                                onChange={(e) => this.handleChange(e)}
                                // onChange={(e) => this.handlePassword(e)}
                            />
                            {tip}
                            <br />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                required
                                name="phone_number"
                                className="cont"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <br />
                            <select className="select bg-white cont" name="gender" required onSelect={() => { console.log("im selected") }} onChange={(e) => this.handleChange(e)}>
                                <option className="text-muted" value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <br />
                            <input
                                type="number"
                                placeholder="Age"
                                required
                                name="age"
                                className="cont"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <br />
                            <input
                                type="number"
                                placeholder="Height (in cms)"
                                required
                                name="height"
                                className="cont"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <br />
                            <input
                                type="number"
                                placeholder="Weight (in Kgs)"
                                required
                                name="weight"
                                className="cont"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <br />
                            <button
                                className="btn btn-dark register-btn"
                                onClick={(e) => this.handleSubmit(e)}>
                                Submit
                            </button>
                        </form>
                        {this.state.login_now ? <Redirect to="/loginpage" /> : null}
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        users: state.gym_members
    };
}

const mapDispatchToProps = (dispatch) => {
    //console.log(disptach)
    return {
        addusr: (user_pass) => dispatch(add_user(user_pass))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register_page);


