import React, { Component } from "react";
import Form from "../components/Form";
import Wrapper from "../components/Wrapper";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        results: ""
    };

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <Wrapper>
                <Form />
                <Results />
            </Wrapper>
        )
    }
}

export default Search