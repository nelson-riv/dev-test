import React from 'react';
import { TableProps, Table } from "antd";
import { ColumnProps } from "antd/lib/table";

export interface GridColumnProps extends ColumnProps<any> {
    dataIndex?: Extract<keyof any, string>;
    key: string;
}
export interface GridProps extends TableProps<any> {
    column?: GridColumnProps[];
}

export function Grid(props: GridProps): JSX.Element {
    return <Table pagination={false} {...props} />;
}
