import { Table, Tooltip } from 'antd';
import Background from 'Containers/Background';
import React from 'react';
import { ConvertUTCToLocalString, IsValidDate } from 'tools/datetime';
import { Box } from 'UIKit/grid';

const TABLE_COLUMNS = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: 50
  },
  {
    title: 'AgentId',
    dataIndex: 'agentId',
    key: 'agentId',
    width: 200
  },
  {
    title: 'Device_ID',
    dataIndex: 'device_ID',
    key: 'device_ID',
    ellipsis: {
      showTitle: false
    },
    render: value => (
      <Tooltip placement="topLeft" title={value}>
        {value}
      </Tooltip>
    )
  },
  {
    title: 'Device_Name',
    dataIndex: 'device_Name',
    key: 'device_Name'
  },
  {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform'
  },
  {
    title: 'Push_Token',
    dataIndex: 'push_Token',
    key: 'push_Token',
    ellipsis: {
      showTitle: false
    },
    render: value => (
      <Tooltip placement="topLeft" title={value}>
        {value}
      </Tooltip>
    )
  },
  // {
  //   title: 'Token_Type',
  //   dataIndex: 'token_Type',
  //   key: 'token_Type'
  // },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: 'updatedAt',
    dataIndex: 'updatedAt',
    key: 'updatedAt'
  }
];

function getSubscribersList(list) {
  let res = list.map(x => ({
    ...x,
    createdAt: ConvertUTCToLocalString(x.createdAt),
    updatedAt: IsValidDate(x.updatedAt)
      ? ConvertUTCToLocalString(x.updatedAt)
      : '-'
  }));
  return res;
}

const SubscribersTable = ({ subscribersList }) => {
  return (
    <Box px="5px" width={[600, 750, 1000, 1000, 1200]}>
      <Table
        columns={TABLE_COLUMNS}
        dataSource={getSubscribersList(subscribersList)}
        pagination={{
          pageSize: 10
        }}
      />
    </Box>
  );
};

export default SubscribersTable;
