import React, { Component } from 'react'
import { FaSearch } from "react-icons/fa";



class VideoSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Location: "",
            Name: "",
            
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value });
    }
    render() {
        const mystyle = {
            
            width: "35%",
            borderradius: "0px"
        };
       
        
        return (
            <>
                <div className="d-flex">
                <input type="text" 
                id="inputPassword6" 
                style ={mystyle}
                className="form-control mt-1"
                aria-describedby="passwordHelpInline" 
                    name="Name"
                    onChange={this.handleChange}
                    value={this.state.Name}
                    placeholder="Search a Service"
                />
                
                    <input type="text"
                        id="inputPassword6"
                        
                        className="form-control ml-2 mt-1"
                        aria-describedby="passwordHelpInline"
                        style ={mystyle}

                        name="Location"
                        onChange={this.handleChange}
                        value={this.state.Location}
                        placeholder="Search a Location  " />
                        <button type="button" class="btn btn-border mt-1 ml-1 btn-info">Search <FaSearch className="ml-1" /></button>

                        </div>

        
            </>
        );
    }
}

export default VideoSearch;