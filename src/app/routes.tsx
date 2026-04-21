import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { ExplorersAvenue } from "./pages/ExplorersAvenue";
import { JrKinderLane } from "./pages/JrKinderLane";
import { CrayonClub } from "./pages/CrayonClub";
import { SummerCamp } from "./pages/SummerCamp";
import { AboutUs } from "./pages/AboutUs";
import { WhyChooseUs } from "./pages/WhyChooseUs";
import { TuitionSupport } from "./pages/TuitionSupport";
import { HealthSafety } from "./pages/HealthSafety";
import { Careers } from "./pages/Careers";
import { ParentReviews } from "./pages/ParentReviews";
import { ContactUs } from "./pages/ContactUs";
import { ScheduleTour } from "./pages/ScheduleTour";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "explorers-avenue", Component: ExplorersAvenue },
      { path: "jr-kinder-lane", Component: JrKinderLane },
      { path: "crayon-club", Component: CrayonClub },
      { path: "summer-camp", Component: SummerCamp },
      { path: "about", Component: AboutUs },
      { path: "why-choose-us", Component: WhyChooseUs },
      { path: "tuition-support", Component: TuitionSupport },
      { path: "health-safety", Component: HealthSafety },
      { path: "careers", Component: Careers },
      { path: "parent-reviews", Component: ParentReviews },
      { path: "contact", Component: ContactUs },
      { path: "schedule-tour", Component: ScheduleTour },
    ],
  },
]);