import React from "react";
import { text } from "@storybook/addon-knobs";
import { SampleComponent } from "../..";

export const SampleStory = () => (
  <SampleComponent title={text("Sample Title", "Page Title")}>
    {text("Page Title", "Sample description paragraph...")}
  </SampleComponent>
);
