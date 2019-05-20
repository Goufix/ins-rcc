import React from 'react';
import { key } from './config.js';
import apiFetch from './utils/apiFetch';

export default async function App() {
  const url = await apiFetch(`https://sheets.googleapis.com/v4/spreadsheets/1OAgQAN5MGDGVzPirEFTVtfnni05pvT3fBYeGHaB-QzA/values/'Meta%20Parcial'!A1:F100?key=${key}`)
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
