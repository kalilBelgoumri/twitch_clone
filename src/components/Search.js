import { Input, Stack, InputGroup, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search() {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <Input type="search" placeholder="Search" />
        <IconButton icon={<SearchIcon />} />
      </InputGroup>
    </Stack>
  );
}

export default Search;
