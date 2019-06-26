import React from "react";

export default class Table extends React.Component{

    constructor( props ){
        super(props);
        this.state = {
            entries: this.props.entries,
            fields: this.props.fields
        }
    }

    render(){
        return <h1>Table goes here</h1>;
    }


}