import React from 'react'

const ButtonComponent = (props) => {
  return <button onClick={() => alert(props.alert)}>{props.text}</button>
};

export default ButtonComponent;
