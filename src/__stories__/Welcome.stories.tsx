import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Welcome", module)
  .addParameters({
    info: {
      disable: true
    },
    options: {
      showPanel: false
    }
  })
  .add("Introduction", () => (
    <div>
      <h1>ReactJs Library Template</h1>
      <p>Storybook for ReactJs library</p>
    </div>
  ));
