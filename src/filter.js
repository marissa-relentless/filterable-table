import React from "react";

export default class Filter extends React.Component {


    render() {
        const { name, onUpdate, displayName, value, options } = this.props;
        return (
            <select
                name={name}
                onChange={e => {
                    onUpdate(name, e.target.value);
                }}
                value={value}
            >
                <option value="">{displayName}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }
}
