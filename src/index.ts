import { DependencyInjection } from "./DependencyInjection";
import { enhanceClass } from "./helpers";
export { DependencyInjection }
DependencyInjection.setupInstance(console.log);
window["DependencyInjection"] = DependencyInjection.getInstance();
window["enhanceClass"] = enhanceClass;