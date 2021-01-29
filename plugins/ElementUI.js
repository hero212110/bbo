import Vue from "vue";
export default () => {
  Vue.component("Message", () =>
    import(
      /* webpackChunkName: 'element-ui-message' */ "element-ui/lib/message"
    )
  );
  Vue.component("ElDatePicker", () =>
    import(
      /* webpackChunkName: 'element-ui-date-picker' */ "element-ui/lib/date-picker"
    )
  );
};
