import { components } from "./_generated/api";
import { Prosemirror } from "@convex-dev/prosemirror";

const prosemirror = new Prosemirror(components.prosemirror);
export const { submitSnapshot, submitSteps, get, getSteps, getVersion } =
  prosemirror.syncApi();
