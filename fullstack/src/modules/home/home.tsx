//imports
import Header from "@/shared/widgets/header/header";
import Banner from "./features/banner";
import Branding from "./features/branding";
import Benefits from "./features/benefits";
import FeatureHighlight from "./features/feature.highlight";
import Pricing from "./features/pricing";
import Footer from "@/shared/widgets/footer/footer";

const Home = () => {
  return (
    <div>
        {/* watch- 24:45 to 25:15 */}
        <Header />
        <Banner />
        <Branding />
        <Benefits />
        <FeatureHighlight />
        <Pricing />
        <Footer />
    </div>
  )
}

export default Home;
