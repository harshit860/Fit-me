import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {set_user} from './../redux/action'


class Login_page extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            login_type_flag: false,
            login_user_auth: false,
            email: "",
            password: ""
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        var check_flag = false;
        console.log(email,password)

        if(this.state.login_type_flag) {
            for(var i = 0; i < this.props.trainers.length; i++) {
                if(email === this.props.trainers[i].trainer_email && password === this.props.trainers[i].password) {
                    this.setState({
                        login_user_auth: true
                    })
                    check_flag = true;
                    break;
                }
                else{
                    this.setState({
                        login_user_auth: false
                    })
                    check_flag = false;
                }
            }
            if(!check_flag) {
                alert("Wrong Credentials");
            }
        }
        else {
            for(var j = 0; j < this.props.gym_members.length; j++) {
                if(email === this.props.gym_members[j].email && password === this.props.gym_members[j].password) {
                    this.setState({
                        login_user_auth: true
                    })
                    this.props.set(j);
                    check_flag = true;
                    break;
                }
                else{
                    this.setState({
                        login_user_auth: false
                    })
                }
                check_flag = false;
            }
            if(!check_flag) {
                alert("Wrong Credentials");
            }
        }
        // this.props.gym_members.map((a,i)=>{

        // })

        // this.props.trainers.map(el => {
        //     console.log(el) 
        //     if(email === el.trainer_name && password === el.password) {
        //         this.setState({
        //             login_user_auth: true
        //         })
        //     }
        //     else{
        //         this.setState({
        //             login_user_auth: false
        //         })
        //         alert("Wrong Credentials");
        //     }
        // })

        // if(email === this.state.email && password === this.state.password) {
        //     this.setState({
        //         login_user_auth: true
        //     })
        // }
        // else{
        //     this.setState({
        //         login_user_auth: false
        //     })
        //     alert("Wrong Credentials");
            
        // }
    }

    render() {
        return(
            <div className="container">
                <div>
                    <Link to="/">
                        <img src="fit.png" alt="Logo" height="130px" className="ml-3"/>
                    </Link>
                    
{/* Info Page Trial button */}
                    
                    {/* <p  className="text-right" style={{marginTop: "-20px"}}>
                        <Link to="/infopage">Info page</Link>
                    </p> */}
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <div >
                            <p>Login Page</p>
                            <label className="col-xl-1 ">Trainer</label>
                            <input type="checkbox" className="col-xl-1 cont" value={ this.state.login_type_flag } onClick = {() => {this.setState({ login_type_flag : !this.state.login_type_flag })}}></input>
                        </div>
                        

                    </div>
                    <div className="card-body border">
                        <form onSubmit = {(event) => this.handleSubmit(event)}>
                            <input 
                                type="text"
                                placeholder="Enter email"
                                required
                                name="email"
                                className="cont"
                            />
                            <br />
                             <input 
                                type="password"
                                placeholder="Enter password"
                                required
                                className="cont"
                                name="password"
                            />
                            <br/>
                            {this.state.login_type_flag && this.state.login_user_auth ? <Redirect to="/infopage"/> : null}
                            {this.state.login_type_flag === false && this.state.login_user_auth === true ? <Redirect to="/routinepage"/> : null}
                            {this.state.login_type_flag ? <input 
                                type="submit"
                                value="Login as a Trainer"
                                className="btn btn-dark register-btn"
                            /> : <input 
                                type="submit"
                                value="Login as a User"
                                className="btn btn-dark register-btn"
                            />}
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        trainers : state.trainers,
        gym_members : state.gym_members
    };
}

const mapDispatchToProps = (dispatch) => {
    // console.log(state)
    return {
      
       set:(val)=>dispatch(set_user(val))
    };
}

export default connect(
    mapStateToProps,
   mapDispatchToProps
)(Login_page);