import React from 'react';

function AdminRequestsList({data}) {
    return (
        <div>
        <h4 className="text-center">Данные по запросам</h4>
        <table className="table">
            <thead>
            <tr>
                <th>№</th>
                <th>result</th>
                <th>query</th>
                <th>datetime</th>
            </tr>
            </thead>
            <tbody>
            {data.map((d, i) => (
                <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{d.result}</td>
                    <td>{d.query}</td>
                    <td>{d.datetime}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default AdminRequestsList;