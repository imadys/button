import { render, fireEvent, screen } from '@testing-library/react';
import Button from ".";

describe('Button Component', () => {
  describe('Button Render', () => {
    it('should render sucessfully without crashing', () => {
      render(<Button />);
    })
  });
  describe('Button colors', () => {
    const btnColors = ['primary','secondary', 'success', 'info', 'warning', 'danger'];
    btnColors.forEach(btn => {
      it(`should be ${btn}`, ()=>{
        const { getByRole } = render(<Button color={btn}>Hello</Button>);
        const button = getByRole('button');
        expect(button).toHaveClass(`btn-${btn}`);
      })
    });

  });
  describe('Button Varients', () => {
    const btnColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
    btnColors.forEach(btn => {
      it(`should be ${btn}`, () => {
        const { getByRole } = render(<Button color={btn} outline={true}>Hello</Button>);
        const button = getByRole('button');
        expect(button).toHaveClass(`btn-${btn}-outline`);
      })
    });
  });
  describe('Button Sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    sizes.forEach(size => {
      it(`should be btn-${size}`, () => {
        const { getByRole } = render(<Button color="primary" size={size}>Hello</Button>);
        const button = getByRole('button');
        expect(button).toHaveClass(`btn-${size}`);

      });
    });
  });
  describe('Button radius', () => {
    it('should be rounded', () => {
      const { getByRole } = render(<Button color="primary" rounded={true}>Hello</Button>);
      const button = getByRole('button');
      expect(button).toHaveClass(`rounded-md`);
    });
  });
  describe('Button icon', () => {
    it('should add icon', () => {
      const { getByRole } = render(<Button color="primary" icon={<span>icon</span>} iconDirection="right">Hello</Button>);
      const button = getByRole('button');
      const icon = button.querySelector('span');
      expect(icon).toBeInTheDocument();
    });
  });
  describe('Button types', () => {
    it('should be type submit', () => {
      const { getByRole } = render(<Button color="primary" type='submit'>Hello</Button>);
      const button = getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });
    it('should be type button', () => {
      const { getByRole } = render(<Button color="primary" type='button'>Hello</Button>);
      const button = getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
    it('should be type reset', () => {
      const { getByRole } = render(<Button color="primary" type='reset'>Hello</Button>);
      const button = getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });
  });
  describe('Button Attributes', () => {
    it('should check if attrs is being used', () => {
      const { getByRole } = render(<Button color="primary" data-type="hello">Hello</Button>);
      const button = getByRole('button');
      expect(button).toHaveAttribute('data-type','hello');
    });
  });
  describe('Button disabled', () => {
    it('should be disabled', () => {
      const clicked = jest.fn();
      const { getByRole } = render(<Button color="primary" disabled onClick={clicked}>Hello</Button>);
      const button = getByRole('button');
      fireEvent.click(button);
      expect(clicked).not.toHaveBeenCalled();
    });
  });
  describe('Button on click event', () => {
    it('should check if button is clicked', () => {
      const clicked = jest.fn();
      const { getByRole } = render(<Button color="primary" onClick={clicked}>Hello</Button>);
      const button = getByRole('button');
      fireEvent.click(button);
      expect(clicked).toHaveBeenCalled();
    });
  });

});
