import React, { memo } from "react";
import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="table-responsive">
      <table {...getTableProps()} className="table" role="grid">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className={column.className} style={column.style}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length ? (
            rows.map((row, i) => {
              prepareRow(row);
              return <Rows {...{ row }} key={i} />;
            })
          ) : (
            <tr>
              <td className="text-center" colSpan={headerGroups?.[0]?.headers?.length || 13}>
                {"There is no data to show you right now!"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const Rows = memo(({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      return (
        <td {...cell.getCellProps()} className={cell.column.className}>
          {cell.render("Cell")}
        </td>
      );
    })}
  </tr>
));

export default Table;
