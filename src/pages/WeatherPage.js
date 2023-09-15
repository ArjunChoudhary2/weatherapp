import Icon from "../components/Icon";
import Search from "../components/Search";
import Panel from "../components/Panel";
import TempDetails from "../components/TempDetails";
import className from "classnames";

function weatherPage() {
  return (
    <div className="py-48 ">
      <Panel className="h-64 grid place-content-center py-40">
        <Icon />
        <Search className=" text-white text-lg py-4"/>
        <TempDetails className=" text-white text-base"/>
      </Panel>
    </div>
  );
}

export default weatherPage;
