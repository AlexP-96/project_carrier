import React from 'react';
import {
    Table,
} from '@gravity-ui/uikit';

type Item = { id: number, text: string };

const data: Item[] = [
    {
        id: 1,
        text: 'Hello',
    },
    {
        id: 2,
        text: 'World',
    },
];
const columns = [
    { id: 'id' },
    { id: 'text' },
];

function MainTable() {

    return (
        <Table
            data={data}
            columns={columns}
        />
    );
}

export default MainTable;

