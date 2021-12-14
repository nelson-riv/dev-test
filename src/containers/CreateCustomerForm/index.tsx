import React from 'react';
import { Form, Input, Button, InputNumber, PageHeader } from 'antd';
import './index.css';

export const CreateCustomerForm = () => {
    const [form] = Form.useForm();

    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Customer"
                subTitle="Create new Customer"
            />
            <Form
                form={form}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            >
                <Form.Item label="Name" name="customerName">
                    <Input placeholder="Customer Name" />
                </Form.Item>
                <Form.Item label="Last Name" name="customerLastname">
                    <Input placeholder="Customer Last Name" />
                </Form.Item>
                <Form.Item label="Age">
                    <InputNumber min={1} max={10} onChange />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 4, offset: 4 }}>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};