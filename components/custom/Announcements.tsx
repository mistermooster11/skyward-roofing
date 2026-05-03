'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Free Inspection. Written Estimate. No Surprises.</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(/images/IMG_9688-1024x682.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#101d2b',
                }}
              />
              {/* [TODO: Replace with a Skyward Roofing crew or job site photo] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every job starts the same way: an experienced estimator comes
                to your property, inspects the roof thoroughly, and explains
                exactly what&apos;s going on — before any work begins. We
                discuss all your options and give you a detailed written
                estimate. No pressure, no obligation.
              </p>
              <p>
                <strong>Step 1: Free Inspection.</strong> A senior team member
                assesses the full roof system — shingles, membrane, flashings,
                gutters, chimney, interior signs of water damage. We document
                everything with photos.
              </p>
              <p>
                <strong>Step 2: Written Estimate.</strong> We present all
                options — repair vs. replacement, material choices, cost
                ranges — so you can make an informed decision on your timeline
                and budget.
              </p>
              <p>
                <strong>Step 3: Professional Installation.</strong> Our trained
                crews install every system the right way. Quality underlayment,
                proper flashings, correct fastener counts — no shortcuts, no
                day laborers.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="/contact-us"
                label="Schedule Free Inspection"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
