import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Buttons() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">All</Button>
      <Button variant="secondary">Active</Button>
      <Button variant="secondary">Completed</Button>
    </ButtonGroup>
  );
}

export default Buttons;