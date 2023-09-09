import Icon from "../components/Icon";
import Search from "../components/Search";

function weatherPage() {
  const weatherType = "shower";
  return (
    <div>
      <Icon weatherType={weatherType} />
      <Search/>
      
    </div>
  );
}

export default weatherPage;
