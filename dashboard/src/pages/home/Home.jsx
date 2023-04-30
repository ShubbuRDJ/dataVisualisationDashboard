import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import EndVsLik from "../../components/charts/EndVsLik";
import SecVsRel from "../../components/charts/SecVsRel";
import CounVsInten from "../../components/charts/CounVsInten";
import RegVsInten from "../../components/charts/RegVsInten";
import TopicVsLik from "../../components/charts/TopicVsLik";
import PestlVsInten from "../../components/charts/PestlVsInten";

export default function Home() {
  return (
      <>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <div className="home">
      <FeaturedInfo />
      {/* chart 1 */}
      <div className="chart">
      <div className="chart1">
        <EndVsLik/>
      </div>
      </div>
      {/* chart 2 */}
      <div className="chart">
      <div className="chart1">
        <SecVsRel/>
      </div>
      </div>
      {/* chart 3 */}
      <div className="chart">
      <div className="chart1">
        <CounVsInten/>
      </div>
      </div>
      {/* chart 4 */}
      <div className="chart">
      <div className="chart1">
        <RegVsInten/>
      </div>
      </div>
      {/* chart 5 */}
      <div className="chart">
      <div className="chart1">
        <TopicVsLik/>
      </div>
      </div>
      {/* chart 6 */}
      <div className="chart">
      <div className="chart1">
        <PestlVsInten/>
      </div>
      </div>

      <div className="homeWidgets">
        <WidgetLg/>
      </div>
    </div>
      </div>
      </>
  );
}
