"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReactLenis root>{children}</ReactLenis>;
}
export default SmoothScrolling;
