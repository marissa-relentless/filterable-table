import React from "react";

export default class Table extends React.Component {

    render() {
        const { fields, entries } = this.props;
        const headerCells = fields.map(field => {
            return (
                <th key={field.name}>
                    <span>{field.displayName}</span>
                </th>
            );
        });
        const rows = entries.map(entry => {
            const tds = fields.map(field => {
                return (
                    <td key={field.name}>
                        <span>{entry[field.name]}</span>
                    </td>
                );
            });
            return <tr key={entry.id}>{tds}</tr>;
        });
        return (
            <table>
                <thead>
                    <tr>{headerCells}</tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
