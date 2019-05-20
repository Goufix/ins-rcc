import React from 'react';
import apiFetch from './utils/apiFetch';


export default async function App() {
  const url = await apiFetch("https://sheets.googleapis.com/v4/spreadsheets/1OAgQAN5MGDGVzPirEFTVtfnni05pvT3fBYeGHaB-QzA/values/'Meta%20Parcial'!A1:F100?key=AIzaSyA2NHXz2Ma5Y5S88el7FlJyLfonjwknW_A")
  return (
    <>
    <div class="main">
      <table>
        <tbody>
          <tr>{url.values[1]}</tr>
        </tbody>
      </table>
    </div>
    </>
  )
}
