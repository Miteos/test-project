import React from 'react'

export default function DataTable() {
    return(
        <table className="styled-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Points</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Dom</td>
                <td>6000</td>
            </tr>
            <tr className="active-row">
                <td>Melissa</td>
                <td>5150</td>
            </tr>
            </tbody>
        </table>
    )
}
