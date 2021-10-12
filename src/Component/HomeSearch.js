import React, { Component } from 'react'


class HomeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Location: "",
            Name: ""
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value });
    }
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "#107570"
        };
        const formstyle = {
            width: "59%"
        }
        return (
            <>
                <input type="text" 
                id="inputPassword6" 
                className="form-control w-75  mb-3"
                aria-describedby="passwordHelpInline" 
                    name="Name"
                    onChange={this.handleChange}
                    value={this.state.Name}
                    placeholder="Search a Service"
                />
                <div className="d-flex ">
                    <input type="text"
                        id="inputPassword6"
                        style={formstyle}
                        className="form-control "
                        aria-describedby="passwordHelpInline"
                        name="Location"
                        onChange={this.handleChange}
                        value={this.state.Location}
                        placeholder="Search a Location" />
                    <button type="button" style={mystyle} class="btn px-3 ml-2 ">Search</button>

                </div>
            </>
        );
    }
}

export default HomeSearch;