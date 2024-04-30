import { render, screen } from '@testing-library/react';
import { Button } from './index';

describe('classNames', function () {
    test('chot-to tam', function () {
        render(<Button>TEST</Button>);
        expect(screen.getAllByText('TEST')[0]).toBeVisible();
    });
});
