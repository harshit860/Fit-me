import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {update_regime,logout} from './../redux/action';
import { Bar } from 'react-chartjs-2';
import firebase from './../config/fbConfig'
const db = firebase.firestore()
const userlist = db.collection('userlist')


const weight_stats = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    datasets: [
      {
        label: "Your this month track",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(74,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      }
    ]
};
 
class Routine_page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: this.props.gym_user.first_name,
            last_name: this.props.gym_user.last_name,
            email: this.props.gym_user.email,
            password: this.props.gym_user.password,
            phone_number: this.props.gym_user.phone_number,
            gender: this.props.gym_user.gender,
            age: this.props.gym_user.age,
            height: this.props.gym_user.height,
            weight: this.props.gym_user.weight,
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
            weight_out:0,
            today_date:'', 
            chart_flag: false,
            track:'',
            count:0
        }

    }
    handleCheck = (e) => {
        console.log(this.state.count)
        var day_date = new Date().getDate();
        var day_hours = new Date().getHours();
        var hour_minutes = new Date().getMinutes();
        var a = 'Date:'+day_date+' Time:'+day_hours+':'+hour_minutes;
        if(this.state.count===0)
        {
            // console.log("im here")
        this.setState({
            [e.target.name]: !this.state[e.target.name],
            today_date:a,
            count:this.state.count+1,
            track:"Unfit"
        })
        }
        else if(this.state.count<=5 && this.state.count>0)
        {
            console.log("im here 1")
            console.log(this.state.count)
            this.setState({
                [e.target.name]: !this.state[e.target.name],
                today_date:a,
                count:this.state.count+1,
                track:"Intermediate"
            })
        }
        else if(this.state.count>5)
        {
            this.setState({
                [e.target.name]: !this.state[e.target.name],
                today_date:a,
                count:this.state.count+1,
                track:"Getting fitter"
            })
        }
        // console.log(this.state)


    }
    handleWeight = (e) => {
        this.setState({
            [e.target.name]: Number(e.target.value)
        }) 
    }
    handleChart = () => {
        // console.log("Inside Chart");
        this.setState({
            chart_flag: !this.state.chart_flag
        })
        if(this.state.chart_flag === false)
        {
            console.log(weight_stats.datasets[0].data.push(this.state.weight));
        }
        
        // console.log(this.state.chart_flag);    
        // console.log(weight_stats.datasets[0].data);
        // console.log(this.state)
    }
    firecall = ()=>{
        alert("Your entry is submitted")
        var valuepass=[]
        db.collection('userlist').add(this.state)
        userlist
        .get()
        .then(res=>{
            //let temp = []
            res.forEach(doc => {
                valuepass.push(doc.data());
            })
            console.log(valuepass)
            var ans = valuepass.sort();
            console.log(ans)
            this.props.update_regime(ans)
            }
            
        )
    
    }


    render() {
        
        // var a=this.state.weight
        console.log(this.props.indx)
        return (
            <div className="container">
                <div className="">
                    <Link to="/">
                        <img src="fit.png" alt="Logo" style={{height:"130px"}}></img>
                    </Link>
                    <p className="text-right" style={{ marginTop: "-20px" }}>
                        <Link to="/">
                           <button onClick={()=>this.props.logoutuser()} className="btn btn-danger">LOGOUT</button> 
                            {window.history.forward()}
                        </Link>
                    </p>
                    <p className="text-center pb-3  font-weight-bold" style={{ marginTop: "-40px" }}>REGIME ROUTINE</p>
                </div>
                <div style={{ fontSize: "12px" }} className="text-center">
                    <span className="col-3" style = {{fontSize:"18px"}} > {"Name: "+this.props.gym_user.first_name}</span>
                    <span className="col-1" style = {{fontSize:"18px"}} > {"Weight: "+this.props.gym_user.weight}</span>
                    <span className="col-1" style = {{fontSize:"18px"}} > {"Height: "+this.props.gym_user.height}</span>
                    <span className="col-3" style = {{fontSize:"18px"}} > {"Gender: "+this.props.gym_user.gender}</span>
                    <span className="col-4" style = {{fontSize:"18px"}} > {"Contact No: "+this.props.gym_user.phone_number}</span>
                </div>
                <hr />
                <div className="row text-center" style={{ fontSize: "15px" }}>

                    <p className="col-10 text-right">TRAINER : {"Trainer_1"}</p>
                    <p className="col-xl-2">Weight loss or Weight gain: {-(Number(this.props.gym_user.weight)-Number(this.state.weight_out))/2}</p>
                    <div className="col-5  offset-2">
                        <div className="row ml-4"><h5 >Excercise Cycle</h5></div>
                        <div className="row">
                            <h6>Excercise-Assigned</h6>
                            <h6 className="ml-5 ">Completed</h6>
                        </div>
                        <div className="row ml-2">
                            <p>Excercise-1</p>
                            <input type="checkbox" className="ml-5 border" name="excercise_1" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row ml-2">
                            <p>Excercise-2</p>
                            <input type="checkbox" className="ml-5 border" name="excercise_2" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row ml-2">
                            <p>Excercise-3</p>
                            <input type="checkbox" className="ml-5 border" name="excercise_3" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row ml-2">
                            <p>Excercise-4</p>
                            <input type="checkbox" className="ml-5 border" name="excercise_4" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row ml-2">
                            <p>Excercise-5</p>
                            <input type="checkbox" className="ml-5 border" name="excercise_5" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row offset-7">
                            <label className="mt-3"><h6>Weight-In: </h6></label>
                            <input type="number" className="ml-3 col-xl-5 rounded " value={this.state.weight} />
                        </div>
                        <div className="row offset-7">
                            <label className="mt-3"><h6>Weight-Out: </h6></label>
                            <input type="number" name="weight_out" className="rounded col-xl-5" onChange={(e) => this.handleWeight(e)} />
                        </div>



                    </div>
                    <div className="col-5 float-right">
                        <div className="row ml-5"><h5 >Diet Cycle</h5></div>
                        <div className="row">
                            <h6>Diet-Assigned</h6>
                            <h6 className="ml-5 ">Diet-Consumed</h6>
                        </div>
                        <div className="row ml-2">
                            <p>Diet-1</p>
                            <input type="checkbox" className="ml-5 border" name="diet_1" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row ml-2">
                            <p>Diet-2</p>
                            <input type="checkbox" className="ml-5 border" name="diet_2" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row ml-2">
                            <p>Diet-3</p>
                            <input type="checkbox" className="ml-5 border" name="diet_3" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row ml-2">
                            <p>Diet-4</p>
                            <input type="checkbox" className="ml-5 border" name="diet_4" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        <div className="row ml-2">
                            <p>Diet-5</p>
                            <input type="checkbox" className="ml-5 border" name="diet_5" onChange={(e) => this.handleCheck(e)} />
                        </div>
                        {/* <button >Update</button> */}


                    </div>
                    <button className="col-xl-4 offset-4 btn btn-success" onClick={()=>this.firecall()}>Update</button>
                    <button className="col-xl-4 offset-4 btn btn-success mt-2" onClick= {() => this.handleChart()}>Check Progess</button>
                </div>

                {/* Track Progess */}
                {this.state.chart_flag ? <div>
                    <Bar ref="chart" data={weight_stats} />
                </div> : null}
               
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        check1: state.check,
        gym_user:state.user,
        indx:state.index
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        update_regime:(val)=>dispatch(update_regime(val)),
        logoutuser:()=>dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routine_page);