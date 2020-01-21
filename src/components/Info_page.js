import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import {set_user,logout} from './../redux/action'
import './styles.css'
// import { fromBits } from 'long';

class Info_page extends Component {
    constructor(props){
        super(props)
        this.state = {
            gender_flag: false,
            user_flag: false,
            gender: "",
            user: ""
        }
    }

    handleGender(e) {
        e.preventDefault();
        console.log(e.target.value);
        if(e.target.value !== ""){
            this.setState({
                gender_flag: true,
                gender: e.target.value,
            })
        }
        else{
            this.setState({
                gender_flag: false,
                gender: ""
            })
        }
    }

    handleTrainer(e) {
        e.preventDefault();
        console.log(e.target.value);
        if(e.target.value !== "") {
            this.setState({
                user_flag: true,
                user: e.target.value,
            })
        }
        else {
            this.setState({
                user_flag: false,
                user: ""
            })
        }
    }

    render(){
        
        console.log(this.props.users)
        var user_list = [];
        var username = [];
        var unique = [];
        this.props.users.forEach(el => username.push(el.first_name));
        var set1 = new Set(username);
        set1.forEach((values => unique.push(values)));
        console.log(set1.values());
        console.log(unique)
        if(this.state.gender_flag === false && this.state.user_flag === false) {
            user_list = this.props.users.map((elem,index) => {
                // const url_add = "/userdashboard/" + elem.first_name;
                return   <Link to="/userdashboard" ><div onClick={()=>this.props.set(index)} className="d-flex user_touch info" ><span className="col-1 border">{index+1}</span>
                <span className="col-2 border">{elem.first_name}</span>
                <span className="col-1 border">{elem.age}</span>
                <span className="col-1 border">{elem.gender}</span>
                <span className="col-1 border">{elem.weight}</span>
                <span className="col-2 border">{elem.today_date}</span>
                <span className="col-2 border">{elem.track}</span>
                <span className="col-2 border">{elem.user = this.props.trainers[Math.floor(Math.random() * (3 - 0 ) ) + 0].trainer_name}</span>
                </div></Link>
            })
            // console.log(this.props.filter((elem,index) => {elem.gender === "female"}));
        }
        else if(this.state.gender_flag === true && this.state.user_flag === false){
            user_list = this.props.users.map((elem,index) => {
                if(elem.gender === this.state.gender){
                    const url_add = "/userdashboard/" + elem.first_name;
                    return   <Link to = {url_add} ><div onClick={()=>this.props.set(index)} className="d-flex user_touch" ><span className="col-1 border">{index+1}</span>
                    <span className="col-2 border">{elem.first_name}</span>
                    <span className="col-1 border">{elem.age}</span>
                    <span className="col-1 border">{elem.gender}</span>
                    <span className="col-1 border">{elem.weight}</span>
                    <span className="col-2 border">{elem.today_date}</span>
                    <span className="col-2 border">{elem.track}</span>
                    <span className="col-2 border">{elem.user = this.props.trainers[Math.floor(Math.random() * (3 - 0) ) + 0].trainer_name}</span>
                    </div></Link>
                }
            })
        }
        else if(this.state.gender_flag === false && this.state.user_flag === true){
            user_list = this.props.users.map((elem,index) => {
                if(elem.first_name === this.state.user){
                    const url_add = "/userdashboard/" + elem.first_name;
                    return   <Link to = {url_add} ><div onClick={()=>this.props.set(index)} className="d-flex user_touch" ><span className="col-1 border">{index+1}</span>
                    <span className="col-2 border">{elem.first_name}</span>
                    <span className="col-1 border">{elem.age}</span>
                    <span className="col-1 border">{elem.gender}</span>
                    <span className="col-1 border">{elem.weight}</span>
                    <span className="col-2 border">{elem.today_date}</span>
                    <span className="col-2 border">{elem.track}</span>
                    <span className="col-2 border">{elem.user = this.props.trainers[Math.floor(Math.random() * (3 - 0) ) + 0].trainer_name}</span>
                    </div></Link>
                }
            })
        }
        else if(this.state.gender_flag === true && this.state.user_flag === true){
            user_list = this.props.users.map((elem,index) => {
                if(elem.first_name === this.state.user && elem.gender === this.state.gender){
                    const url_add = "/userdashboard/" + elem.first_name;
                    return   <Link to = {url_add} ><div onClick={()=>this.props.set(index)} className="d-flex user_touch" ><span className="col-1 border">{index+1}</span>
                    <span className="col-2 border">{elem.first_name}</span>
                    <span className="col-1 border">{elem.age}</span>
                    <span className="col-1 border">{elem.gender}</span>
                    <span className="col-1 border">{elem.weight}</span>
                    <span className="col-2 border">{elem.today_date}</span>
                    <span className="col-2 border">{elem.track}</span>
                    <span className="col-2 border">{elem.user = this.props.trainers[Math.floor(Math.random() * (3 - 0) ) + 0].trainer_name}</span>
                    </div></Link>
                }
            })
        }

        return(
            <div className="container">
                <div className="pb-4">
                    <Link to="/">
                        <img src="fit.png" alt="Logo" height="130px" className="ml-3"/>
                    </Link>
                    <p  className="text-right" style={{marginTop: "-20px"}}>
                        <Link to="/">
                        <button onClick={()=>this.props.logoutuser()} className="btn btn-danger">LOGOUT</button> 
                            {window.history.forward()}
                        </Link>
                    </p>
                    <p className="text-center pb-3 ">LIST OF ALL GYM MEMBERS WITH BASIC INFORMATION</p>
                    <div className="float-right ml-2">
                        <select className="btn btn-dark" onChange = {(e) => this.handleGender(e)}>
                            <option value="">GENDER</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="float-right">
                        {/* <select className="btn btn-dark">
                            <option value="">TRAINER</option>
                            <option value="xyz">XYZ</option>
                            <option value="abc">ABC</option>
                        </select> */}
                        <select className="btn btn-dark" onChange = {(e) => this.handleTrainer(e)}>
                            <option value="">Find by Name</option>
                            {unique.map((el,index) => {
                                return <option value={el} key={index}>{el}</option>
                            })}
                        </select>
                    </div>
                </div>
                <hr/>
                <div className=" text-center heading_info" >
                    <div className="d-flex">
                        <span className="col-1 border info">SNo.</span>
                        <span className="col-2 border">NAME</span>
                        <span className="col-1 border infono">AGE</span>
                        <span className="col-1 border infono">GENDER</span>
                        <span className="col-1 border">WEIGHT</span>
                        <span className="col-2 border infono">DATE</span>
                        <span className="col-2 border">TRACK</span>
                        <span className="col-2 border">TRAINER</span>
                    </div>
                    <div className="info">
                      {user_list}
                      {/* {trainer_list} */}
                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) =>{
    // console.log(state)
    return{
            users : state.gym_members,
            trainers : state.trainers
    }
}
const mapDispatchToProps = (dispatch) =>{
    // console.log(dispatch)
    return{
            set:(val)=>dispatch(set_user(val)),
            logoutuser:()=>dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info_page);