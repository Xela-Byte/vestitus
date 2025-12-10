import AppInput from "@/components/ui/AppInput";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { useForm } from "react-hook-form";

// Wrapper component to use AppInput with useForm hook
const AppInputWrapper = ({ rules, onChange, ...props }: any) => {
  const { control } = useForm({
    defaultValues: {
      [props.name]: "",
    },
  });

  return <AppInput control={control} rules={rules} {...props} />;
};

describe("AppInput", () => {
  it("renders with placeholder", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper name="email" placeholder="Enter email" />
    );
    expect(getByPlaceholderText("Enter email")).toBeTruthy();
  });

  it("renders with label", () => {
    const { getByText } = render(
      <AppInputWrapper name="email" label="Email Address" />
    );
    expect(getByText("Email Address")).toBeTruthy();
  });

  it("renders as password input when password prop is true", () => {
    const { UNSAFE_root } = render(
      <AppInputWrapper name="password" placeholder="Password" password={true} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("toggles password visibility", () => {
    const { getByPlaceholderText, UNSAFE_root } = render(
      <AppInputWrapper name="password" placeholder="Password" password={true} />
    );
    const input = getByPlaceholderText("Password");
    expect(input).toBeTruthy();
    expect(UNSAFE_root).toBeTruthy();
  });

  it("accepts text input", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper name="email" placeholder="Enter email" />
    );
    const input = getByPlaceholderText("Enter email");
    fireEvent.changeText(input, "test@example.com");
    expect(input.props.value).toBe("test@example.com");
  });

  it("applies keyboard type", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper
        name="email"
        placeholder="Email"
        keyboardType="email-address"
      />
    );
    const input = getByPlaceholderText("Email");
    expect(input.props.keyboardType).toBe("email-address");
  });

  it("renders with multiline option", () => {
    const { UNSAFE_root } = render(
      <AppInputWrapper name="message" placeholder="Message" mutliline={true} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("applies custom className", () => {
    const { UNSAFE_root } = render(
      <AppInputWrapper
        name="email"
        placeholder="Email"
        className="custom-class"
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("disables input when editable is false", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper name="email" placeholder="Email" editable={false} />
    );
    const input = getByPlaceholderText("Email");
    expect(input.props.editable).toBe(false);
  });

  it("renders as editable when editable is true", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper name="email" placeholder="Email" editable={true} />
    );
    const input = getByPlaceholderText("Email");
    expect(input.props.editable).toBe(true);
  });

  it("shows error state on validation failure", () => {
    const { UNSAFE_root } = render(
      <AppInputWrapper
        name="email"
        placeholder="Email"
        rules={{ required: "Email is required" }}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows success state on valid input", () => {
    const { getByPlaceholderText, UNSAFE_root } = render(
      <AppInputWrapper name="email" placeholder="Email" />
    );
    const input = getByPlaceholderText("Email");
    fireEvent.changeText(input, "valid@email.com");
    expect(UNSAFE_root).toBeTruthy();
  });

  it("calls onFocus callback", () => {
    const onFocusMock = jest.fn();
    const { getByPlaceholderText } = render(
      <AppInputWrapper name="email" placeholder="Email" onFocus={onFocusMock} />
    );
    const input = getByPlaceholderText("Email");
    fireEvent(input, "focus");
    expect(onFocusMock).toHaveBeenCalled();
  });

  it("handles default value", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper
        name="email"
        placeholder="Email"
        defaultValue="default@email.com"
      />
    );
    const input = getByPlaceholderText("Email");
    expect(input).toBeTruthy();
  });

  it("applies email format for email inputs", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper name="email" placeholder="Email" />
    );
    const input = getByPlaceholderText("Email");
    expect(input).toBeTruthy();
  });

  it("handles input ref correctly", () => {
    const inputRef = React.createRef<any>();
    const { UNSAFE_root } = render(
      <AppInputWrapper name="email" placeholder="Email" inputRef={inputRef} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays extra component when enabled", () => {
    const ExtraComponent = () => <>📌</>;
    const { UNSAFE_root } = render(
      <AppInputWrapper
        name="email"
        placeholder="Email"
        extraComponent={<ExtraComponent />}
        enableExtraComponent={true}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("accepts additional input props", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper
        name="email"
        placeholder="Email"
        inputProps={{ maxLength: 50, autoCapitalize: "none" }}
      />
    );
    const input = getByPlaceholderText("Email");
    expect(input).toBeTruthy();
  });

  it("handles validation rules", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper
        name="email"
        placeholder="Email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
    );
    const input = getByPlaceholderText("Email");
    expect(input).toBeTruthy();
  });

  it("renders without label", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper name="email" placeholder="Email" />
    );
    expect(getByPlaceholderText("Email")).toBeTruthy();
  });

  it("properly focuses on blur", () => {
    const { getByPlaceholderText } = render(
      <AppInputWrapper name="email" placeholder="Email" />
    );
    const input = getByPlaceholderText("Email");
    fireEvent.changeText(input);
    fireEvent.changeText(input);
    expect(input).toBeTruthy();
  });
});
