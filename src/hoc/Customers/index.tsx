import React from 'react';
import { CreateCustomerForm } from '../../containers/CreateCustomerForm';

import { CustomerGrid } from '../../containers/CustomerGrid';

export function Customers(): JSX.Element {

    return (<div>
        <CreateCustomerForm />
        <CustomerGrid />
    </div>);
}