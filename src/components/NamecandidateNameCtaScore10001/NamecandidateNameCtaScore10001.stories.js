import { NamecandidateNameCtaScore10001 } from ".";

export default {
  title: "Components/NamecandidateNameCtaScore10001",
  component: NamecandidateNameCtaScore10001,
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
