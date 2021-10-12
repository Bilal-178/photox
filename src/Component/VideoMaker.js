import VideoSearch from "./SubComponent/VideoSearch"


function VideoMaker() {
    this.state={
        serviceName:"",
        Location:"",
        filterLoction:"",
        type:"",
        range:""
    }
    return (
        <div>
        <div className="container-fluid mt-3 backcolor">
        <div className="container my-auto">
            <div className="d-felx ">
            <VideoSearch  />

            </div>
            <div className="mt-4 d-flex">
            <h2 className="font-weight my-auto" > Searches For:</h2>
            <h3 className="ml-3 my-auto">Video makers in johar town, Lahore</h3>

            </div>
            <div className="row">
            <div className="col-sm-3">
            <div className="back-info p-2">
            <h5 className="text-white fonty"> Filter</h5>

            

            </div>

            </div>

            </div>
        </div>


        </div>
        </div>
    )
}

export default VideoMaker