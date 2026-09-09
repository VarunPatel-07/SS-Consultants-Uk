"use client";

import { COMMON_BORDER_RADIUS } from "@/utils/constants/common.constants";
import type { GalleryImage } from "@/utils/interface//gallery.interface";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

// The gallery is intentionally capped at three columns on larger screens.
const getColumnCount = (width: number) => (width >= 640 ? 3 : 1);
const GALLERY_GAP = 16;

function GalleryColumn({ images, columnIndex }: { images: GalleryImage[]; columnIndex: number }) {
  const [scrollMargin, setScrollMargin] = useState(0);

  useEffect(() => {
    const updateScrollMargin = () =>
      setScrollMargin(window.scrollY + document.getElementById("gallery-grid")!.getBoundingClientRect().top);
    updateScrollMargin();
    window.addEventListener("resize", updateScrollMargin);
    return () => window.removeEventListener("resize", updateScrollMargin);
  }, []);

  const virtualizer = useWindowVirtualizer({
    count: images.length,
    estimateSize: () => 300,
    gap: GALLERY_GAP,
    overscan: 3,
    scrollMargin,
  });

  return (
    <div className="relative min-w-0" style={{ height: virtualizer.getTotalSize() }}>
      {virtualizer.getVirtualItems().map((virtualItem) => {
        const item = images[virtualItem.index];
        return (
          <article
            className={twMerge("absolute left-0 top-0 w-full aspect-16/11 overflow-hidden", COMMON_BORDER_RADIUS)}
            data-index={virtualItem.index}
            key={`${columnIndex}-${item.id}`}
            ref={virtualizer.measureElement}
            style={{ transform: `translateY(${virtualItem.start - scrollMargin}px)` }}>
            <div className="relative aspect-16/11 w-full">
              <Image
                className="object-cover"
                fill
                src={item.image}
                alt={item.alt}
                sizes="(max-width: 639px) 100vw, 33vw"
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [columnCount, setColumnCount] = useState(2);

  useEffect(() => {
    const updateColumnCount = () => setColumnCount(getColumnCount(window.innerWidth));
    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  const columns = useMemo(() => {
    const nextColumns = Array.from({ length: columnCount }, () => [] as GalleryImage[]);
    const columnHeights = Array.from({ length: columnCount }, () => 0);

    images.forEach((image) => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      nextColumns[shortestColumn].push(image);
      columnHeights[shortestColumn] += 1;
    });

    return nextColumns;
  }, [columnCount, images]);

  return (
    <div
      id="gallery-grid"
      className="grid items-start gap-4"
      style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}>
      {columns.map((column, index) => (
        <GalleryColumn columnIndex={index} images={column} key={index} />
      ))}
    </div>
  );
}
