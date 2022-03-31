import { Input, Stack, InputGroup, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <Stack spacing={4}>
      <InputGroup>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          width="20vw"
          size="sm"
          type="search"
          placeholder="Search"
        />
        {search === "" ? (
          <IconButton isDisabled size="sm" icon={<SearchIcon />} />
        ) : (
          <IconButton size="sm" icon={<SearchIcon />} />
        )}
      </InputGroup>
    </Stack>
  );
}

export default Search;
