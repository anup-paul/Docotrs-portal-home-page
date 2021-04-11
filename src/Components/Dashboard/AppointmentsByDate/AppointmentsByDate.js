import React from 'react';

const AppointmentsByDate = ({appointmentsDate}) => {
    return (
        <div>
            <h1>Total appointments {appointmentsDate.length}</h1>
            {
                appointmentsDate.map(app => <li>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;