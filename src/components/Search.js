import { Input, Stack, InputGroup, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search() {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <Input width="20vw" size="sm" type="search" placeholder="Search" />
        <IconButton size="sm" icon={<SearchIcon />} />
      </InputGroup>
    </Stack>
  );
}

export default Search;
