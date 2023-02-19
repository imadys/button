import { render, fireEvent } from '@testing-library/react';
import Button from ".";
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = window.document;

describe('Button Component', () => {

  describe('Button Render', () => {
    it('should render sucessfully without crashing', () => {
      render(<Button />);
    })
  });
  describe('Button colors', () => {
    it('should be primary', () => {
      const { container } = render(<Button color="primary" />);
      expect(container.firstChild.className).toContain('primary');
    });
    it('should be secondary', () => {
      const { container } = render(<Button color="secondary" />);
      expect(container.firstChild.className).toContain('secondary');
    });
    it('should be success', () => {
      const { container } = render(<Button color="success" />);
      expect(container.firstChild.className).toContain('success');
    });
    it('should be danger', () => {
      const { container } = render(<Button color="danger" />);
      expect(container.firstChild.className).toContain('danger');
    });
    it('should be warning', () => {
      const { container } = render(<Button color="warning" />);
      expect(container.firstChild.className).toContain('warning');
    });
    it('should be info', () => {
      const { container } = render(<Button color="info" />);
      expect(container.firstChild.className).toContain('info');
    });
  });
  describe('Button Varients', () => {
    it('should be primary-outline', () => {
      const { container } = render(<Button color="primary" outline={true} />);
      expect(container.firstChild.className).toContain('primary-outline');
    });
    it('should be secondary-outline', () => {
      const { container } = render(<Button color="secondary" outline={true} />);
      expect(container.firstChild.className).toContain('secondary-outline');
    });
    it('should be success-outline', () => {
      const { container } = render(<Button color="success" outline={true} />);
      expect(container.firstChild.className).toContain('success-outline');
    });
    it('should be danger', () => {
      const { container } = render(<Button color="danger" outline={true} />);
      expect(container.firstChild.className).toContain('danger-outline');
    });
    it('should be warning', () => {
      const { container } = render(<Button color="warning" outline={true} />);
      expect(container.firstChild.className).toContain('warning-outline');
    });
    it('should be info', () => {
      const { container } = render(<Button color="info" outline={true} />);
      expect(container.firstChild.className).toContain('info-outline');
    });
  });
  describe('Button Sizes', () => {
    it('should be btn-xs', () => {
      const { container } = render(<Button color="warning" size="xs" outline={true} />);
      expect(container.firstChild.className).toContain('btn-xs');
    });
    it('should be btn-sm', () => {
      const { container } = render(<Button color="warning" size="sm" outline={true} />);
      expect(container.firstChild.className).toContain('btn-sm');
    });
    it('should be btn-md', () => {
      const { container } = render(<Button color="warning" size="md" outline={true} />);
      expect(container.firstChild.className).toContain('btn-md');
    });
    it('should be btn-lg', () => {
      const { container } = render(<Button color="warning" size="lg" outline={true} />);
      expect(container.firstChild.className).toContain('btn-lg');
    });
    it('should be btn-xl', () => {
      const { container } = render(<Button color="warning" size="xl" outline={true} />);
      expect(container.firstChild.className).toContain('btn-xl');
    });
  });
  describe('Button radius', () => {
    it('should be rounded', () => {
      const { container } = render(<Button color="warning" size="xl" rounded={true} />);
      expect(container.firstChild.className).toContain('rounded');
    });

  });
  describe('Button disabled', () => {
    it('should be disabled', () => {
      const { container } = render(<Button color="warning" size="xl" disabled={true} />);
      expect(container.firstChild.disabled).toBe(true);
    });
  });
  describe('Button on click event', () => {
    it('should check if button is clicked', () => {
      const clicked = jest.fn();
      const { container } = render(<Button color="green" click={clicked}>Click!</Button>);
      const button = container.firstChild
      fireEvent.click(button);
      expect(clicked).toHaveBeenCalledTimes(1);
    });
  });

});
