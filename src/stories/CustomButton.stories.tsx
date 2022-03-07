import { Meta, Story } from "@storybook/react/types-6-0";
import CustomButton from "../components/CustomButton/CustomButton";
import { ButtonProps } from "../components/CustomButton/CustomButton";
export default {
  title: "Atoms/Button",
  component: CustomButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "Default",
};

export const Modified = Template.bind({});
Modified.args = {
  title: "Modified",
  backgroundColor: "red",
  size: "100px",
  borderRadius: "100px",
};
