import React from 'react'
import _ from 'lodash';
export default function Alert(props) {
  return (
      props.type==="success" && <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
  <strong>{_.capitalize(
props.type)}!</strong> {props.message}
</div>
  )
}
