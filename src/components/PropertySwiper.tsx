import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { Property } from '../models/property.model';
import PropertyCard from './PropertyCard';

interface PropertySwiperProps {
  properties: Property[];
}

export default function PropertySwiper({ properties }: PropertySwiperProps) {
  const [index, setIndex] = useState(0);
  const [{ y }, api] = useSpring(() => ({ y: 0 }));

  const bind = useDrag(
    ({ down, movement: [_, my], direction: [__, dy], velocity: [___, vy] }) => {
      const trigger = vy > 0.5 || (down ? false : Math.abs(my) > 100);
      
      if (trigger) {
        if (my < 0 && index < properties.length - 1) {
          // Swipe up - next property
          setIndex(i => i + 1);
        } else if (my > 0 && index > 0) {
          // Swipe down - previous property
          setIndex(i => i - 1);
        }
        api.start({ y: 0, immediate: false });
      } else {
        // Follow finger
        api.start({ y: down ? my : 0, immediate: down });
      }
    },
    { axis: 'y', bounds: { top: -200, bottom: 200 } }
  );

  return (
    <div className="fixed inset-0 bg-black">
      <div className="relative w-full h-full overflow-hidden">
        {properties.map((property, i) => {
          const isActive = i === index;
          
          if (!isActive) return null;

          return (
            <PropertyCard
              key={property.id}
              property={property}
              style={{
                y: isActive ? y : 0,
              }}
              {...bind()}
            />
          );
        })}
      </div>
    </div>
  );
}