import React from "react";
import {Link} from 'react-router-dom';
import './styles.css'
import { connect } from 'react-redux';
import firebase from './../config/fbConfig'
import {flow,logout} from './../redux/action'
const db = firebase.firestore()
const userlist = db.collection('userlist')  

class Home_page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login_flag: false
        }
    }
    firecall = ()=>{
        console.log("im in fire")
        var valuepass=[]
     
        userlist
        .get()
        .then(res=>{
            //let temp = []
            res.forEach(doc => {
                valuepass.push(doc.data());
                // console.log(doc.data())
            })
            // console.log(valuepass)
            var ans = valuepass
            // console.log(ans)
            this.props.flowdata(ans)
            }
            
        )
        .catch(err=>console.log(err))
    }
    render(){
    //   this.firecall()
        return(
            <div className="container-fluid">
                <div className="row col-xl-12">
                    <div className="col-xl-1" >
                        <img src="fit.png" alt="Logo" height="130px" className="ml-3" ></img>
                    </div>
                    <div className="col-xl-7">    
                        <p className="text-success mt-5  text_size" >
                            FITNESS + NUTRITION 
                        </p> 
                    </div>
                    {this.props.login_flag ?
                     (<div className=" col-xl-4 mt-2 row">
                        <p style={{fontSize:"23px"}} className="mt-1 text-dark">{"Welcome: "+this.props.gym_user.first_name}</p>
                        <Link to="/routinepage" >
                                <div >
                                    <p style={{fontSize:"23px"}}  className="btn text-success ">ROUTINE</p>
                                </div>
                        </Link>
                        <div >
                        <Link to="/">
                           <p style={{fontSize:"23px"}} onClick={()=>this.props.logoutuser()} className=" btn text-danger">LOGOUT</p> 
                            {/* {window.history.forward()} */}
                        </Link>
                    </div>
                    
                    </div>
                        ) : 
                      ( <div className=" col-xl-4 mt-2">
                      <Link to="/loginpage" onClick={()=>this.firecall()} className="btn text-success float-right">
                          <p  className="text_size1">
                              LOGIN
                          </p>
                      </Link>
                      <Link to="/registerpage" className="btn ml-4 text-success float-right">
                          <p className="text_size1">
                              REGISTER
                          </p>
                      </Link>
                  </div >)}
                    
                </div>
     
                <div className="bgimage">
                    {/* <img height="100%" width="100%" src=""></img> */}
                    <Link to="/registerpage"  className="mtop  btn col-xl-3 col-lg-3 col-md-4 text-white  border-white rounded">
                        <div>
                            <h4 >
                                JOIN US
                            </h4>   
                        </div>
                    </Link>
                </div>
                <div className="accordion col-12 text-center buttonarrange" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link text-success " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            WHAT WE DO & HOW WE DO, TO MAKE YOU ACHIEVE WHAT YOU DESERVE
                            </button>
                        </h2>
                        </div>
    
                        <div id="collapseOne" className="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                        Going to the gym every day can help improve your cardiovascular system, strengthen your muscles, help you maintain your weight, boost your mental health and decrease the odds that you'll develop other health conditions.
    
                        Exercising daily strengthens your heart and allows it to pump more efficiently with less strain. It also keeps your blood pressure and blood sugar levels in the normal range and keeps your cholesterol levels in check. Plus, it may help manage the symptoms of depression and anxiety.
    
                        Daily gym workouts may also lower your risk of developing certain conditions such as type 2 diabetes, metabolic syndrome and osteoporosis.
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row py-5 text-center">
                    <div className="col-4 full">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="card-img-top" alt="Beginner Level"/>
                            <div className="card-body">
                                <h5 className="card-title text-success">GYM</h5>
                                <p className="card-text">BEGINNER LEVEL</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">"No pain, no gain. Shut up and train.”
                                </li>
                                <li className="list-group-item">“Train insane or remain the same.”</li>
                                <li className="list-group-item">“Push yourself because no one else is going to do it for you.”</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="card-img-top" alt="Medium Level"/>
                            <div className="card-body">
                                <h5 className="card-title text-success">GYM + CARDIO</h5>
                                <p className="card-text">MEDIOCRE LEVEL</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">QUATERLY PACKAGES</li>
                                <li className="list-group-item">HALF-YEARLY PACKAGES</li>
                                <li className="list-group-item">YEARLY-PACKAGES</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="card-img-top" alt="Extreme Package"/>
                            <div className="card-body">
                                <h5 className="card-title text-success">GYM + CARDIO + EXTREME</h5>
                                <p className="card-text">EXTREME LEVEL</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Get Off Your Butt! "Sometimes you just need brutal honesty to get you moving!"</li>
                                <li className="list-group-item">Sweat is Fat Crying" Think of this while you're sweating it out and you won't be able to fight the laughter!"</li>
                                <li className="list-group-item">Sore Today, Strong Tomorrow. "The true sign of a killer workout."</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleSlidesOnly" className="carousel slide container" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="crousal1" height="500"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="crousal2" height="500"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="crousal3"/>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div className="row py-3 ml-5">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="Testimonial 1" className="col-2" height="200"/>
                        <p className="col-8"></p>
                    </div>
                </div> */}
                <footer className="py-3">
                    <p>
                        <a className="btn btn-primary col-4 bg-white text-success" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">ABOUT</a>
                        <button className="btn btn-primary col-4 bg-white text-success" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">CONTACT</button>
                        <button className="btn btn-primary col-4 bg-white text-success" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">CHECK BOTH</button>
                        </p>
                        <div className="row">
                            <div className="col">
                                <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    Gym and Fitness was founded in 2002 as a family owned and operated business. The Gym and Fitness founders didn’t want it to be just another gym equipment retailer - they wanted to be the best in the industry and set their minds to doing so! Since its birth, Gym and Fitness has grown into one of Australia’s largest online fitness equipment retailers having helped over 50,000 customers live longer, happier and healthier lives.
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="collapse multi-collapse" id="multiCollapseExample2">
                                <div className="card card-body">
                                    <ul>
                                        <li>
                                        Address:
                                        Keas 69 Str.
                                        15234, Chalandri
                                        Athens,
                                        Greece
                                        </li>
                                        <li>
                                        +30-2106019311 (landline)
                                        +30-6977664062 (mobile phone)
                                        +30-2106398905 (fax)
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                </footer>
            </div>  
        );
    };
}

const mapStateToProps = (state) =>{
    return{
        login_flag:state.login,
     gym_user:state.gym_members[state.index]
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        flowdata:(val)=>dispatch(flow(val)),
        logoutuser:()=>dispatch(logout())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home_page);