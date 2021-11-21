import React from "react";

import Input from "../../../Input";

import styles from "./Inputs.module.sass";

export default function Inputs({props}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          className={styles.label}
          formikProps={props}
        />
        <Input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last Name"
          className={styles.label}
          formikProps={props}
        />
        <Input
          type="text"
          name="displayname"
          id="displayname"
          placeholder="Nickname"
          className={styles.label}
          formikProps={props}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={styles.label}
          formikProps={props}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={styles.label}
          formikProps={props}
        />
        <Input
          type="password"
          name="passwordConf"
          id="passwordConf"
          placeholder="Confirm Password"
          className={styles.label}
          formikProps={props}
        />
      </div>

      <Input
        type="radio"
        name="join"
        id="buyer"
        value="buyer"
        className={styles.radioLabel}
        formikProps={props}
        textAfter={
          <div>
            <p>Join As a Buyer</p>
            <p>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </p>
          </div>
        }
      />
      <Input
        type="radio"
        name="join"
        id="seller"
        value="seller"
        className={styles.radioLabel}
        formikProps={props}
        textAfter={
          <div>
            <p>Join As a Creative or Marketplace Seller</p>
            <p>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </p>
          </div>
        }
      />
      <Input
        type="checkbox"
        name="marketing"
        id="marketing"
        className={styles.checkboxLabel}
        formikProps={props}
        textAfter="Allow Squadhelp to send marketing/promotional offers from time to time"
      />
    </div>
  );
}
