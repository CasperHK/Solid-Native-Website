import { Component, JSX } from "solid-js";
import LandingNav from "@components/landing/LandingNav";
import LandingFooter from "@components/landing/LandingFooter";

interface LandingLayoutProps {
  children: JSX.Element;
}

const LandingLayout: Component<LandingLayoutProps> = (props) => {
  return (
    <div class="min-h-screen bg-dark-900">
      <LandingNav />
      <main>{props.children}</main>
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
