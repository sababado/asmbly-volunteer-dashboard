import * as React from "react";
import { cn } from "../../../lib/utils";

export interface ImageItem {
    id: string | number;
    src: string;
    alt: string;
}

export interface ImageGridProps extends React.HTMLAttributes<HTMLDivElement> {
    images: ImageItem[];
    onImageClick?: (image: ImageItem) => void;
}

const ImageGrid = React.forwardRef<HTMLDivElement, ImageGridProps>(
    ({ className, images, onImageClick, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("grid grid-cols-2 sm:grid-cols-4 gap-4", className)}
                {...props}
            >
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="aspect-square rounded-lg bg-cover bg-center shadow-sm border border-slate-200 dark:border-white/10 hover:opacity-90 transition-opacity cursor-pointer"
                        style={{ backgroundImage: `url('${img.src}')` }}
                        role="img"
                        aria-label={img.alt}
                        onClick={() => onImageClick?.(img)}
                    />
                ))}
            </div>
        );
    }
);
ImageGrid.displayName = "ImageGrid";

export { ImageGrid };
