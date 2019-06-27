import React from "react";
import Table from "./table";
import Filter from "./filter";

export default class FilterableTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            fields: this.props.fields,
            entries: this.props.entries || [],
            filters: []
        };

        this.onFilterUpdate = this.onFilterUpdate.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    onFilterUpdate(name, value) {
        const { filters } = this.state;
        for (let filter of filters) {
            if (filter.name === name) {
                filter.value = value;
                this.setState({ filters });
                return;
            }
        }
        filters.push({ name, value });
        this.setState({ filters });
    }

    async loadData() {
        if (!Array.isArray(this.props.entries) && !this.props.dataEndpoint) {
            throw new Error(
                "No data was passed in and no data endpoint was set."
            );
        }
        // loading data
        if (this.props.dataEndpoint) {
            this.setState({ loading: true });
        }
    }

    render() {
        const { fields, filters, entries } = this.state;
        const { noFilteredRecordsMessage, noRecordsMessage } = this.props;
        const filteredEntries = entries.filter(entry => {
            for (let filter of filters) {
                //@todo: equal or includes?
                if (
                    filter.value &&
                    filter.value.toString() !== entry[filter.name].toString()
                ) {
                    return false;
                }
            }
            return true;
        });
        return (
            <>
                <div className="filterable-table-filters">
                    {fields.map(field => {
                        if (field.filterable) {
                            const filter = this.state.filters.find(
                                filter => filter.name === field.name
                            );
                            const value = filter ? filter.value : "";
                            return (
                                <Filter
                                    {...field}
                                    value={value}
                                    key={field.name}
                                    onUpdate={this.onFilterUpdate}
                                />
                            );
                        }
                        return null;
                    })}
                    <Table fields={fields} entries={filteredEntries} />
                    {entries.length === 0 && <p>{noRecordsMessage}</p>}
                    {entries.length !== 0 && filteredEntries.length === 0 && (
                        <p>{noFilteredRecordsMessage}</p>
                    )}
                </div>
            </>
        );
    }
}

FilterableTable.defaultProps = {
    noRecordsMessage: "There are no records to display",
    noFilteredRecordsMessage: "There are no records to display"
};
