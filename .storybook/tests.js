import {
  after as afterAll,
  before as beforeAll,
  afterEach,
  beforeEach,
  it,
  specs,
  describe
} from "storybook-addon-specifications";
import expect from "expect";

const additions = { expect, afterAll, afterEach, beforeAll, beforeEach, it, specs, describe };

Object.assign(global, additions);
Object.assign(window, additions);

export default additions;
