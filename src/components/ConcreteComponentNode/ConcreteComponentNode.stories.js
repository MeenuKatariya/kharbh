import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
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
    drDhruvangMehtaDrDhruvangMehtaClassName: {},
    drDhruvangMehtaDrDhruvangMehtaMdClassName: {},
    drDhruvangMehtaText: "abc",
    drDhruvangMehtaText1: "abc",
  },
};
