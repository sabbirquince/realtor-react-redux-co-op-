import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container-md">
        <h1>Match Your Perfect Residence</h1>
        <div className={styles.form}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search House"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="success">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Header;
