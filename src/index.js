import React from "react";
import ReactDOM from "react-dom";
import FilterableTable from "./filterable-table";

const data = [
    { id: 1, name: "Steve", age: 20, job: "Developer" },
    { id: 2, name: "Gary", age: 30, job: "Manager" },
    { id: 3, name: "Greg", age: 20, job: "Developer" },
    { id: 4, name: "Jeb", age: 30, job: "Developer" },
    { id: 5, name: "Jeff", age: 20, job: "Manager" }
];

// Fields to show in the table, and what object properties in the data they bind to
const fields = [
    {
        name: "name",
        displayName: "Name",
        filterable: true,
        options: [{ label: 20, value: 20 }]
    },
    {
        name: "age",
        displayName: "Age",
        filterable: true,
        options: [{ label: 20, value: 20 }, { label: 30, value: 30 }]
    },
    {
        name: "job",
        displayName: "Occupation",
        filterable: true,
        options: [
            { label: "Developer", value: "Developer" },
            { label: "Manager", value: "Manager" }
        ]
    }
];

class App extends React.Component {
    render() {
        return <FilterableTable entries={data} fields={fields} />;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
