import { Customer } from "../../context/models/Customer.model";
import { GridColumnProps, GridProps, Grid } from "../../components/Grid";

export function CustomerGrid() {
    const columns: GridColumnProps[] = [
        { key: 'id', dataIndex: 'id', title: 'Client #' },
        { key: 'name', dataIndex: 'name', title: 'Name' },
        { key: 'lastname', dataIndex: 'lastname', title: 'Last Name' },
        { key: 'age', dataIndex: 'age', title: 'Age' }
    ];
    const data: Customer[] = [{ id: 1, name: 'Nelson', lastname: 'Rivera', age: 26 }];
    const gridProps: GridProps = { columns: columns, dataSource: data, loading: false };
    return <Grid {...gridProps}></Grid>;
}