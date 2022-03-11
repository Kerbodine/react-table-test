import React, { useMemo } from "react";
import { useTable } from "react-table";
import { TEMP_DATA } from "../data";
import { COLUMNS } from "./columns";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TEMP_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="w-full flex justify-center pt-16 text-gray-700">
      <table {...getTableProps}>
        <thead className="h-8 bg-gray-200 border-2 border-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="p-1 text-left" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-2 border-gray-200">
                {row.cells.map((cell) => {
                  return (
                    <td className="p-1" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
