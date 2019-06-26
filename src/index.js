import React from 'react';
import ReactDOM from 'react-dom';
import FilterableTable from './filterable-table';

const data = [
	{ name: "Steve", age: 27, job: "Sandwich Eater" },
	{ name: "Gary", age: 35, job: "Falafeler" },
	{ name: "Greg", age: 24, job: "Jelly Bean Juggler" },
	{ name: "Jeb", age: 39, job: "Burrito Racer" },
	{ name: "Jeff", age: 48, job: "Hot Dog Wrangler" }
];

// Fields to show in the table, and what object properties in the data they bind to
const fields = [
	{ name: 'name', displayName: "Name", filterable: true, options: [] },
	{ name: 'age', displayName: "Age", filterable: true, options: [] },
	{ name: 'job', displayName: "Occupation", filterable: true, options:[] }
];

class App extends React.Component{
    render(){
        return <FilterableTable entries={data} fields={fields}/>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


