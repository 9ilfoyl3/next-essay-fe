import React from "react";
import RealLayout from "@/components/custom/real-layout";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <RealLayout>{children}</RealLayout>;
};

export default PageLayout;
