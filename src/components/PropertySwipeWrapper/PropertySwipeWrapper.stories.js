import { PropertySwipeWrapper } from ".";

export default {
  title: "Components/PropertySwipeWrapper",
  component: PropertySwipeWrapper,
  argTypes: {
    property1: {
      options: ["swipe-left", "variant-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "swipe-left",
    className: {},
  },
};
