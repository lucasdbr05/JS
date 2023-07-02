import { inline } from "./modulesjs/inline.js";
import defaultInline from "./modulesjs/inline.js";
import exportDefault, { group, a, b, c, d } from "./non-inline.js";

inline();
defaultInline();

group();
exportDefault();
