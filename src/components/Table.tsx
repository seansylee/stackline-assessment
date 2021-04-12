import React, { useState, useEffect } from "react";
import "../styles/table.css";
import { itemSales } from "../actions/itemActionTypes";

type TableProps = {
  sales: itemSales[];
};

const sortByKeys: { [key: string]: string } = {
  // weekEnding already comes pre-sorted in ascending order.
  weekEnding: "descending",
  retailSales: "ascending",
  wholesaleSales: "ascending",
  unitsSold: "ascending",
  retailerMargin: "ascending",
};

// format data to display string correctly
const formatData = (type: string, data: number): string => {
  if (type === "weekEnding") {
    let date = data.toString().split("-");
    return `${date[1]}-${date[2]}-${date[0].slice(-2)}`;
  }
    return `$${data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

const Table: React.FC<TableProps> = (props: TableProps) => {
  const [sortedSales, setSortedSales] = useState(props.sales);

  // This will sort the sales information according to the category. (Toggles from ascending to Descending)
  const onSortSales = (sortKey: string) => {
    switch(sortKey){
        case "weekEnding":
            setSortedSales([...sortedSales].sort((a, b) => sortHelper(Number(a.weekEnding.replace(/-/g, "")), Number(b.weekEnding.replace(/-/g, "")), sortKey)));
            break
        case "retailSales":
            setSortedSales([...sortedSales].sort((a, b) => sortHelper(a.retailSales, b.retailSales, sortKey)));
            break
        case "wholesaleSales":
            setSortedSales([...sortedSales].sort((a, b) => sortHelper(a.wholesaleSales, b.wholesaleSales, sortKey)));
            break
        case "unitsSold":
            setSortedSales([...sortedSales].sort((a, b) => sortHelper(a.unitsSold, b.unitsSold, sortKey)));
            break
        case "retailerMargin":
            setSortedSales([...sortedSales].sort((a, b) => sortHelper(a.retailerMargin, b.retailerMargin, sortKey)));
    }
    sortByKeys[sortKey] =
      sortByKeys[sortKey] === "ascending" ? "descending" : "ascending";
  };

  const sortHelper = (a: number, b: number, sortKey: string) => {
      if(sortByKeys[sortKey] === "ascending"){
          return a - b;
      } else {
          return b - a;
      }
  }

  return (
    <div className="details-container">
      <table className="detail-table">
        <thead className="table-head">
          <tr>
            <th onClick={() => onSortSales("weekEnding")}>
              WEEK ENDINGS 
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </th>
            <th onClick={() => onSortSales("retailSales")}>
              RETAIL SALES  
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </th>
            <th onClick={() => onSortSales("wholesaleSales")}>
              WHOLESALE SALES  
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </th>
            <th onClick={() => onSortSales("unitsSold")}>
              UNITS SOLD <i className="fa fa-caret-down" aria-hidden="true"></i>
            </th>
            <th onClick={() => onSortSales("retailerMargin")}>
              RETAILER MARGIN  
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </th>
          </tr>
        </thead>

        <tbody className="table-body">
          {sortedSales.map((sale: any) => (
            <tr className="table-body-row">
              {Object.keys(sale).map((key) => (
                <td>{formatData(key, sale[key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
