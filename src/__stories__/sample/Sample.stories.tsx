import { storiesOf } from "@storybook/react";
import { SampleComponent } from "../..";
import { SampleStory } from "./SampleStory";

storiesOf("SampleComponent", module)
  .addParameters({
    component: SampleComponent,
    info: {
      propTables: [SampleComponent]
    }
  })
  .add("Basic", SampleStory);
