import { DrChetanPrajapati } from ".";

export default {
  title: "Components/DrChetanPrajapati",
  component: DrChetanPrajapati,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    drChetanPrajapatiClassName: {},
    line: "https://c.animaapp.com/Pc6Y5XOd/img/line-17-2.svg",
  },
};
