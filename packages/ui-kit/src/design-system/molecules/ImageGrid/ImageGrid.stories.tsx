import type { Meta, StoryObj } from '@storybook/react';
import { ImageGrid } from './ImageGrid';

const meta = {
    title: 'Molecules/ImageGrid',
    component: ImageGrid,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ImageGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        images: [
            { id: 1, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMW89mCHqSCrV7M_cd2b1xSBoSjsfYIBzf4hqA6DPadwPuKMxp7L3am_SyYBFGvhJvuL3su5O8V_mSsbdGOFnxoGtCMUxNPtYyFqkwJl2yl330MJKcTrvrhhQ4-s3XRuX-66kVwB5NvtRn8-tdy50vmikxqh5uisjTA6hSV8W9Syf5EThyc9IZAIVYaGy05nhL_CORrP_vQQcXZ6P1BsgZ39UOs5PNua1hYaN3wkhvhxwb0llYZq-_7KUXl4n8k46fdjlrRmvDyYv', alt: 'Saw blade' },
            { id: 2, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNV42By9BGJDm_L9HGbFQWMDxDPWsqXJirhQGDJI4sivbIjtdwyOZt7e3yo95owACd-4waZ6m-LldXmDaASgMmCh5N5Plu_6PxZfj2_me9JFk3nkD0WlZzfRBF6lbkAbHVYeEZQk0rMzEQkKYg29tT3w4aGw2OniTKPV_aZcd-nEwv524ZtuEUoHF6mOVPnbMRKMhySlBoAoe-E6qoTI8s0aSUBJiWYDoWaCK1mxG4jr0L1gkAaGrE6gPlBNvAu1xfxkJwXLVl2--S', alt: 'Tools' },
        ],
    },
};
