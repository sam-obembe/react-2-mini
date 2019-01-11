import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" onChange = {(ev) => props.update(ev.target.value)}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}