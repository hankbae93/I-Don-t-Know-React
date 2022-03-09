import { act, fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button 컴포넌트 (@testing-library/react)", () => {
  it("컴포넌트가 정상적으로 생성된다", () => {
    const button = render(<Button />);
    expect(button).not.toBe(null);
  });

  it("'button'이라고 쓰여있는 엘리멘트는 HTMLButtonElement이다", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });

  it('버튼을 클릭하면, p태그안에 "버튼이 방금 눌렸다" 라고 쓰인다', () => {
    const { getByText } = render(<Button />);

    const buttonElement = getByText("button");

    fireEvent.click(buttonElement);

    const p = getByText("버튼이 방금 눌렸다");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼을 클릭하기 전엔, p태그안에 "버튼이 눌리지않았다" 라고 쓰인다', () => {
    jest.useFakeTimers();
    const { getByText } = render(<Button />);

    const buttonElement = getByText("button");

    fireEvent.click(buttonElement);
    //5초 흐른다
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const p = getByText("버튼이 눌리지않았다");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼 클릭후 5초뒤에는 "다시 버튼이 눌리지않았다" 라고 쓰인다.', () => {
    const { getByText } = render(<Button />);

    const p = getByText("버튼이 눌리지않았다");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하면 5초동안 버튼이 비활성화된다.", () => {
    jest.useFakeTimers();
    const { getByText } = render(<Button />);

    const buttonElement = getByText("button");

    fireEvent.click(buttonElement);
    // 비활성화
    expect(buttonElement).toBeDisabled();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // 활성화
    expect(buttonElement).toBeDisabled();
  });
});
