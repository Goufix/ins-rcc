import React from 'react';

export default function Table(sheetJSON) {
  return sheetJSON.values.map((data, index) => {
    return <tr><td>{Object.entries(data)}</td></tr>
    // if(index === 0) {
    //   return
    // }
    // let response = data.map((value) => {
    //   return(
    //     <td>${value}</td>
    //   )
    // })
    // return (
    //   <tr key={index}>${response}</tr>
    // )
  })
} 
