import { Input, Space } from "antd";

function Search() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
}

export default Search;
