import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    name: {
      options: ["button"],
      control: { type: "select" },
    },
    size: {
      options: ["full", "half"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    icon: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    name: "button",
    size: "full",
    type: "primary",
    icon: "off",
    className: {},
    backToHomeClassName: {},
    text: "Sign in",
  },
};
