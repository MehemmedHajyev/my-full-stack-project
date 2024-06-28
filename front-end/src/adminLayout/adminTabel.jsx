import  { useState } from 'react';
import { Table, Input, Popconfirm, Form, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AdminTabel = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John Brown',
      email: 'john.brown@example.com',
      role: 'Admin',
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'jim.green@example.com',
      role: 'User',
    },
  ]);

  const [editingKey, setEditingKey] = useState('');
  const [form] = Form.useForm();

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ name: '', email: '', role: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const addNew = () => {
    const newData = {
      key: Date.now().toString(),
      name: '',
      email: '',
      role: '',
    };
    setDataSource([...dataSource, newData]);
    edit(newData);
  };

  const deleteRecord = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '30%',
      editable: true,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: '20%',
      editable: true,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <Space size="middle">
            <Button disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Button>
            <Popconfirm
          
              title="Sure to delete?"
              onConfirm={() => deleteRecord(record.key)}
            >
              <Button type="dashed">Delete</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'email' ? 'email' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            <Input />
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  return (
    <Form form={form} component={false}>
      <Button
        onClick={addNew}
        type="primary"
        style={{ marginBottom: 16 }}
        icon={<PlusOutlined />}
      >
        Add a row
      </Button>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={dataSource}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default AdminTabel;
