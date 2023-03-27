// React Modules
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// 3rd Party Modules
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return(
        <form 
            onSubmit={(event) => {
                    event.preventDefault();
                    if (ref.current) onSearch(ref.current.value);
                }
            }
        >
            <InputGroup>
                <InputLeftElement  children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder="Search for sofa..." variant="filled" aria-label="type the search text then press enter key" />
            </InputGroup>
        </form>
    );
}
export default SearchInput;