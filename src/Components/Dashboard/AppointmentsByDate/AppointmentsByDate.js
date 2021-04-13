import React from 'react';

const AppointmentsByDate = ({ appointmentsDate }) => {
    return (
        <div>
            <h1>Total appointments {appointmentsDate.length}</h1>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointmentsDate.map(app => <li>{app.name}</li>)
                    }
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default AppointmentsByDate;