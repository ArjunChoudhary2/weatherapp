import Icon from "../components/Icon";
import Search from "../components/Search";
import Panel from "../components/Panel";
import TempDetails from "../components/TempDetails";
import className from "classnames";
import Accordion from "../components/Accordion";
import Forecast from "../components/Forecast";

function weatherPage() {
  

  return (
    <div className="py-48 ">
      <Panel className="h-64 grid place-content-center py-40">
        <Icon />
        <Search className=" text-black text-lg py-4 dark:text-white"/>
        <TempDetails className=" text-black text-base dark:text-white"/>
      </Panel>
        <Forecast/>
    </div>
  );
}

export default weatherPage;
