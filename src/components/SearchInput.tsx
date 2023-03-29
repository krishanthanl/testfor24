// React Modules
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// 3rd Party Modules
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

// Project Modules
import { Search } from "../utils/interfaces";

interface Props {
    search: Search;
}

const SearchInput = ({ search }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return(
        <form 
            onSubmit={(event) => {
                    event.preventDefault();
                    if (ref.current) search.onSearch(ref.current.value);
                }
            }
        >
            <InputGroup>
                <InputLeftElement  children={<BsSearch />} />
                <Input data-testid={`searchInput`} ref={ref} borderRadius={20} placeholder="Search for sofa..." variant="filled" aria-label="type the search text then press enter key" />
            </InputGroup>
        </form>
    );
}
export default SearchInput;