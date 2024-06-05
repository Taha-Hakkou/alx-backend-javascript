/// <reference types="./crud" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };
const newRowID: RowID = CRUD.insertRow(row);
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
