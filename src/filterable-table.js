import React from "react";
import Table from "./table";
import Filter from './filter';

export default class FilterableTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            fields: this.props.fields,
            entries: this.props.entries || []
        };
    }

    componentDidMount(){
        this.loadData();
    }

    async loadData(){
        if (!Array.isArray(this.props.entries) && !this.props.dataEndpoint) {
			throw new Error("No data was passed in and no data endpoint was set.");
        }
        // loading data
        if ( this.props.dataEndpoint ){
            this.setState({loading: true});
        }

    }

    render(){
        const { fields, entries } = this.state;
        return (
            <>
                <div className="filterable-table-filters" >
                    { fields.map( field => {
                        if(field.filterable){
                            return <Filter {...field} ></Filter>
                        }
                        return null;
                    })}
                    <Table fields={fields} entries={entries}></Table>
                </div>
             
            </>
        )
    }
}

FilterableTable.defaultProps = {
    noRecordsMessage: "There are no records to display",
    noFilteredRecordsMessage: "There are no records to display",
};
