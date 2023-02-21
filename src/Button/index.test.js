import { render, fireEvent, screen, getByText } from '@testing-library/react';
import Button from ".";

describe('Button Component', () => {
  it('should render sucessfully without crashing', () => {
    render(<Button />);
  })
  it(`should pick the correct button color class`, () => {
    const btnColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
    btnColors.forEach(btn => {
      const { getByText } = render(<Button color={btn}>{btn} button</Button>);
      const button = getByText(`${btn} button`);
      expect(button).toHaveClass(`btn-${btn}`);
    });
  });
  it(`should pick the correct outline button color class`, () => {
    const btnColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
    btnColors.forEach(btn => {
      const { getByText } = render(<Button color={btn} outline={true}>{btn} button</Button>);
      const button = getByText(`${btn} button`);
      expect(button).toHaveClass(`btn-${btn}-outline`);
    });
  });
  it(`should pick the correct size`, () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    sizes.forEach(size => {
      const { getByText } = render(<Button size={size} outline={true}>{size} size</Button>);
      const button = getByText(`${size} size`);
      expect(button).toHaveClass(`btn-${size}`);
    });
  });
  it('should add rounded-md class if rounded is true', () => {
    const { getByRole } = render(<Button color="primary" rounded={true}>Hello</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass(`rounded-md`);
  });
  it('should add icon at right', () => {
    const { getByRole } = render(<Button color="primary" icon={<span>icon</span>} iconDirection="right"> Hello </Button>);
    const button = getByRole('button');
    const icon = button.querySelector('span');
    console.log(button.childNodes)
    expect(button.firstChild).toBe(icon);
  });
  it('should add icon at left', () => {
    const { getByRole } = render(<Button color="primary" icon={<span>icon</span>} iconDirection="left"> Hello </Button>);
    const button = getByRole('button');
    const icon = button.querySelector('span');
    console.log(button.childNodes)
    expect(button.lastChild).toBe(icon);
  });
  it(`should pick the correct type`, () => {
    const types = ['submit', 'button', 'reset'];
    types.forEach(type => {
      const { getByText } = render(<Button color="primary" type={type}>button {type}</Button>);
      const button = getByText(`button ${type}`);
      expect(button).toHaveAttribute('type', type);
    });
  });
  it('should check if attrs is being used', () => {
    const { getByRole } = render(<Button color="primary" data-type="hello">Hello</Button>);
    const button = getByRole('button');
    expect(button).toHaveAttribute('data-type', 'hello');
  });
  it('should be disabled', () => {
    const clicked = jest.fn();
    const { getByRole } = render(<Button color="primary" disabled onClick={clicked}>Hello</Button>);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(clicked).not.toHaveBeenCalled();
  });
  it('should check if button is clicked', () => {
    const clicked = jest.fn();
    const { getByRole } = render(<Button color="primary" onClick={clicked}>Hello</Button>);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(clicked).toHaveBeenCalled();
  });
});
