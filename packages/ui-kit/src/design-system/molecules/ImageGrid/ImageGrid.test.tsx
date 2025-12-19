import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ImageGrid } from './ImageGrid';

describe('ImageGrid', () => {
    it('renders images', () => {
        const images = [
            { id: 1, src: 'img1.jpg', alt: 'Test 1' },
            { id: 2, src: 'img2.jpg', alt: 'Test 2' },
        ];
        render(<ImageGrid images={images} />);
        expect(screen.getByLabelText('Test 1')).toBeInTheDocument();
        expect(screen.getByLabelText('Test 2')).toBeInTheDocument();
    });

    it('handles clicks', () => {
        const images = [{ id: 1, src: 'img1.jpg', alt: 'Test 1' }];
        const handleClick = vi.fn();
        render(<ImageGrid images={images} onImageClick={handleClick} />);
        fireEvent.click(screen.getByLabelText('Test 1'));
        expect(handleClick).toHaveBeenCalledWith(images[0]);
    });
});
