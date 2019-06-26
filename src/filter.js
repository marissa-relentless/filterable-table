import React from 'react';

export default class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value || "",
            options: this.props.options || []
        }
    }

    render(){
        const {name, onFilterUpdate, displayName} = this.props;
        const { value, options } = this.state;
        return (
            <select name={name} onChange={onFilterUpdate}>
                <option value="" selected={"" === value}>{displayName}</option>
                { options.map( (option) => <option value="" selected={ option.value=== value}>{option.label}</option>) }
            </select>
        )
    }

    
}