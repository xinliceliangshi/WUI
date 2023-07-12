import MyButton from "./MyButton";
import JSXButton from "./JSXButton";
import SFCButton from "./SFCButton.vue";
import { App } from "vue";

export { MyButton };
export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
  },
};
