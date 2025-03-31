import { afterAll, describe, expect, it, jest } from '@jest/globals';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from '../app/page';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  }),
) as unknown as typeof fetch;

describe('Page', () => {
  it('renders the page', () => {
    const { container } = render(<Page searchParams={{ forTest: 'true' }} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container).toBeInstanceOf(HTMLDivElement);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
