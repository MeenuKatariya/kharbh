import { Component30 } from ".";

export default {
  title: "Components/Component30",
  component: Component30,
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
    imageWithoutTileClassName: {},
    vector: "https://c.animaapp.com/Pc6Y5XOd/img/vector-4.svg",
  },
};
