import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" onChange = {(ev) => props.update(ev.target.value)}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}