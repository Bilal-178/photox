import Web from "../../src/Assets/Mask Group 138.png"
import HomeSearch from "./HomeSearch";

// import Card from "../Component/SubComponent/Card"
// import CardData from './SubComponent/CardData';

function Home() {
    return (
        <div>
            <div className="container-fluid p-0 m-0" style={{ backgroundColor: "#f7f7f7" }}>
                <div className="row">
                    <div className="col-sm-9 mx-auto">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 my-auto me-auto">
                                <img className="ms-auto img-fluid" src={Web} alt="" />

                            </div>
                            <div className="col-lg-6 col-md-12 mt-lg-5 me-auto">
                                <div className="d-flex mt-5 flex-column ">
                                    <h1>Find a Photographer Now!</h1>

                                    <p>You can find all your Photograpy needs on a Single Place!</p>
                                    <div className="col-auto p-0 mb-3">
                                        <HomeSearch />
                                        <p className="mt-2">Popular Catergories</p>
                                        <div className="d-flex">
                                            <button type="button" class="btn btn-outline-info py-0 bg-HSL btn-sm rounded-pill m-1"> Photographer</button>
                                          <NavLink to="/videoMaker"> <button type="button" class="btn btn-outline-info btn-sm rounded-pill m-1">Video Maker</button></NavLink>
                                            <button type="button" class="btn btn-outline-info btn-sm rounded-pill m-1">Drone Video</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bg-hsl">
                    <div className="container">
                        <button type="button" class="btn button-radius btn-info">FInd a Photograper</button>
                        <button type="button" class="btn button-radius btn-info">Find a Videomaker</button>
                        <button type="button" class="btn button-radius btn-info">Find a Drone Videomaker</button>

                        <h2 className="mt-3">Pro Photographer near you</h2>
                    </div>
                    <div className="container">

                        {/* <div className="row owl-margin d-flex">
                            {CardData.map((item) => (

                                <Card item={item} />
                            ))}
                        </div> */}

                    </div>
                </div>

            </div>

        </div>



    )
}

export default Home
