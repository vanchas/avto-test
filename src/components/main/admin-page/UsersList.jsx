import React from 'react';

function UsersList(props) {
    return (
        <div>
            <h4 className="text-center">Данные по пользователям</h4>
            <table className="table">
                <thead>
                <tr>
                    <th>№</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                {props.users.data.map((u, i) => (
                    <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{u.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;