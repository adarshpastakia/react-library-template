import { create } from "@storybook/theming";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import "../sass/library.scss";

addDecorator(withKnobs);
addDecorator(
  withInfo({
    inline: false,
    header: false,
    source: false
  })
);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  options: {
    showPanel: true,
    sortStoriesByKind: true,
    theme: create({
      brandTitle: "ReactJs Library"
    })
  },
  info: {
    styles: {
      button: {
        base: {
          left: 0,
          right: 0,
          width: 120,
          margin: "auto",
          background: "rgba(32,61,110,0.5)"
        },
        topRight: {
          borderRadius: "0 0 5px 5px"
        }
      }
    }
  }
});
// automatically import all files ending in *.type.js
const req = require.context("../src", true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
