import { render, fireEvent,screen } from '@testing-library/react';
import Button from ".";

describe('Button Component', () => {
  describe('Button Render', () => {
    it('should render sucessfully without crashing', () => {
      render(<Button />);
    })
  });
  describe('Button colors', () => {
    it('should be primary', () => {
      const { container } = render(<Button color="primary" />);
      expect(container.firstChild.className).toContain('btn-primary');
      const colors = ['btn-secondary', 'btn-success', 'btn-info', 'btn-warning','btn-danger'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be secondary', () => {
      const { container } = render(<Button color="secondary" />);
      expect(container.firstChild.className).toContain('btn-secondary');
      const colors = ['btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be success', () => {
      const { container } = render(<Button color="success" />);
      expect(container.firstChild.className).toContain('btn-success');
      const colors = ['btn-primary', 'btn-secondary', 'btn-info', 'btn-warning', 'btn-danger'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be danger', () => {
      const { container } = render(<Button color="danger" />);
      expect(container.firstChild.className).toContain('btn-danger');
      const colors = ['btn-primary', 'btn-secondary', 'btn-info', 'btn-warning', 'btn-success'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be warning', () => {
      const { container } = render(<Button color="warning" />);
      expect(container.firstChild.className).toContain('warning');
      const colors = ['btn-primary', 'btn-secondary', 'btn-info', 'danger', 'success'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be info', () => {
      const { container } = render(<Button color="info" />);
      expect(container.firstChild.className).toContain('btn-info');
      const colors = ['btn-primary', 'btn-secondary', 'btn-warning', 'btn-danger', 'btn-success'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
  });
  describe('Button Varients', () => {
    it('should be primary-outline', () => {
      const { container } = render(<Button color="primary" outline={true} />);
      expect(container.firstChild.className).toContain('btn-primary-outline');
      const colors = ['btn-secondary-outline', 'btn-success-outline', 'btn-info-outline', 'btn-warning-outline', 'btn-danger-outline'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be secondary-outline', () => {
      const { container } = render(<Button color="secondary" outline={true} />);
      expect(container.firstChild.className).toContain('btn-secondary-outline');
      const colors = ['btn-primary-outline', 'btn-success-outline', 'btn-info-outline', 'btn-warning-outline', 'btn-danger-outline'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be success-outline', () => {
      const { container } = render(<Button color="success" outline={true} />);
      expect(container.firstChild.className).toContain('btn-success-outline');
      const colors = ['btn-primary-outline', 'btn-secondary-outline', 'btn-info-outline', 'btn-warning-outline', 'btn-danger-outline'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be danger', () => {
      const { container } = render(<Button color="danger" outline={true} />);
      expect(container.firstChild.className).toContain('btn-danger-outline');
      const colors = ['btn-primary-outline', 'btn-secondary-outline', 'btn-info-outline', 'btn-warning-outline', 'btn-success-outline'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be warning', () => {
      const { container } = render(<Button color="warning" outline={true} />);
      expect(container.firstChild.className).toContain('btn-warning-outline');
      const colors = ['btn-primary-outline', 'btn-secondary-outline', 'btn-info-outline', 'btn-danger-outline', 'btn-success-outline'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
    it('should be info', () => {
      const { container } = render(<Button color="info" outline={true} />);
      expect(container.firstChild.className).toContain('btn-info-outline');
      const colors = ['btn-primary-outline', 'btn-secondary-outline', 'btn-warning-outline', 'btn-danger-outline', 'btn-success-outline'];
      colors.forEach(color => {
        expect(container.firstChild.className).not.toContain(color);
      });
    });
  });
  describe('Button Sizes', () => {
    it('should be btn-xs', () => {
      const { container } = render(<Button color="primary" size="xs"/>);
      expect(container.firstChild.className).toContain('btn-xs');
      const sizes = ['btn-md', 'btn-lg', 'btn-xl','btn-sm'];
      sizes.forEach(size => {
        expect(container.firstChild.className).not.toContain(size);
      });
    });
    it('should be btn-sm', () => {
      const { container } = render(<Button color="primary" size="sm" />);
      expect(container.firstChild.className).toContain('btn-sm');
      const sizes = ['btn-md', 'btn-lg', 'btn-xl','btn-xs'];
      sizes.forEach(size => {
        expect(container.firstChild.className).not.toContain(size);
      });
    });
    it('should be btn-md', () => {
      const { container } = render(<Button color="primary" size="md" />);
      expect(container.firstChild.className).toContain('btn-md');
      const sizes = ['btn-xs', 'btn-lg', 'btn-xl', 'btn-sm'];
      sizes.forEach(size => {
        expect(container.firstChild.className).not.toContain(size);
      });
    });
    it('should be btn-lg', () => {
      const { container } = render(<Button color="primary" size="lg" />);
      expect(container.firstChild.className).toContain('btn-lg');
      const sizes = ['btn-xs', 'btn-md', 'btn-xl', 'btn-sm'];
      sizes.forEach(size => {
        expect(container.firstChild.className).not.toContain(size);
      });
    });
    it('should be btn-xl', () => {
      const { container } = render(<Button color="primary" size="xl" />);
      expect(container.firstChild.className).toContain('btn-xl');
      const sizes = ['btn-xs', 'btn-lg', 'btn-md', 'btn-sm'];
      sizes.forEach(size => {
        expect(container.firstChild.className).not.toContain(size);
      });
    });
  });
  describe('Button radius', () => {
    it('should be rounded', () => {
      const { container } = render(<Button color="warning" rounded={true} />);
      expect(container.firstChild.className).toContain('rounded-md');
    });

  });
  describe('Button disabled', () => {
    it('should be disabled', () => {
      const clicked = jest.fn();
      const { container } = render(<Button color="warning" size="xl" disabled />);
      const button = container.firstChild
      fireEvent.click(button);
      expect(clicked).toHaveBeenCalledTimes(0);
    });
  });
  describe('Button on click event', () => {
    it('should check if button is clicked', () => {
      const clicked = jest.fn();
      const { container } = render(<Button color="green" onClick={clicked}>Click!</Button>);
      const button = container.firstChild
      fireEvent.click(button);
      expect(clicked).toHaveBeenCalledTimes(1);
    });
  });

});
