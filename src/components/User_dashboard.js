import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { update_regime,logout } from './../redux/action';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

const diet_stats = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    datasets: [
      {
        label: "Diet Track",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "red",
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
        data: [5,6,7,8,9,5,6,7,8,9]
      },
      {
        label: "Workout Track",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "blue",
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
        data: [15,16,9,11,12,5,6,7,8,9,15,16,9,11,12]
      },
      {
        label: "Overall Track",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "Yellow",
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
        data: [12,11,9,16,15,7,8,9,15,16,9,11,9,16,15,7,8,9,15]
      }
    ]
};

class User_dasboard extends Component {
    constructor(props){
        super(props);

        console.log(this.props.gym_user);
    }
    render() {
        // console.log(JSON.parse(window.localStorage.getItem('data')));
        return (
            <div className="container-fluid">
                <div>
                    <Link to="/">
                        <img src="fit.png" alt="Logo" height="130px" className="ml-3"/>
                    </Link>
                    <p  className="text-right" style={{marginTop: "-20px"}}>
                        <Link to="/">
                        <button onClick={()=>this.props.logoutuser()} className="btn btn-success">LOGOUT</button> 
                            {window.history.forward()}
                        </Link>
                    </p>
                </div> 
                <nav className="nav nav-pills flex-column flex-sm-row mt-5" >
                    <p className="flex-sm-fill text-sm-center nav-link">User Name: {this.props.gym_user.first_name}</p>
                    <p className="flex-sm-fill text-sm-center nav-link">Weight: {this.props.gym_user.weight}</p>
                    <p className="flex-sm-fill text-sm-center nav-link">Height: {this.props.gym_user.height}</p>
                    <p className="flex-sm-fill text-sm-center nav-link">Contact Number: {this.props.gym_user.phone_number}</p>
                    <p className="flex-sm-fill text-sm-center nav-link">Track-Status: {this.props.gym_user.track}</p>
                </nav>
                <div>
                    <button className="btn text-success flex-sm-fill text-sm-center nav-link">{this.props.gym_user.diet_1}</button>
                </div>
               
                <div className="row">
                    <div className="col-4">
                        <div class="card pb-5" style={{width: "18rem"}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyN367yKgvGa9rtsHFQNJc9DSIIlm5lFywc7wWhNjteE-xRuC-" class="card-img-top" alt="Profile Pic" height="200" width="150" />
                            <div class="card-body">
                                <h5 class="card-title">{this.props.gym_user.first_name} Routine</h5>
                                {/* <p class="card-text">Diet Plans</p> */}
                            </div>
                            <ul class="list-group list-group-flush text-center">
                                <li class="list-group-item">Diet Plans</li>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "45%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                </div>
                                <li class="list-group-item">Workout Plans</li>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">55%</div>
                                </div>
                                <li class="list-group-item">Track Complete Progress</li>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">35%</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="col-8" id="">
                        <Line ref="chart" data={diet_stats} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  console.log(state.user)
    return {
        check1: state.check,
        gym_user: state.gym_members[state.index],
        index: state.index
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        update_regime:(val) => dispatch(update_regime(val)),
        logoutuser:() => dispatch(logout())
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(User_dasboard)