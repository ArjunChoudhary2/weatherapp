import Icon from "../components/Icon";
import Search from "../components/Search";
import Panel from "../components/Panel";
import TempDetails from "../components/TempDetails";
import className from "classnames";

function weatherPage() {
  return (
    <div>
      <Panel className="flex justify-center items-center h-screen ">
        <div className="flex grid">
          <Icon />
          <Search />
        </div>
        <TempDetails/>
      </Panel>
    </div>
  );
}

export default weatherPage;
