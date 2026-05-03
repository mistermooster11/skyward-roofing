"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`front-donation ia-bg-sky flex-module wow fadeInUpS${vis}`}
    >
      <div className="inner inner--slim-1172">
        <div className={`sub-heading wow fadeInUpS${vis}`} style={{ animationDelay: "0.1s" }}>
          Free Inspection — No Obligation
        </div>
        <h2 className={`h2 wow fadeInUpS${vis}`} style={{ animationDelay: "0.15s" }}>
          Roof Problem? Call Today.
        </h2>
        <div className={`front-donation__in wow fadeInUpS${vis}`} style={{ animationDelay: "0.2s" }}>
          <div className="content-entry">
            <p>
              From missing shingles to full replacements, Skyward Roofing covers all five boroughs
              and the surrounding metro area. Call us and we&apos;ll get someone out to assess your
              roof — no cost, no pressure.
            </p>
          </div>
          <div className="front-donation__btn-wrap">
            <div className="front-donation__btn">
              <SecondaryButton
                label="Call (917) 979-8704"
                href="tel:9179798704"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
