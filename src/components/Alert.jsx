import React from 'react'
import _ from 'lodash';
export default function Alert(props) {
  return (
    <div style={{height:"50px"}} className="my-1.5">
      {props.type==="success" && <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
  <strong>{_.capitalize(
props.type)}!</strong> {props.message}
</div>}
</div>
  )
}
