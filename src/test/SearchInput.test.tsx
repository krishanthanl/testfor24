// React Modules
import { render, screen } from '@testing-library/react';

//Project Modules
import SearchInput from "../components/SearchInput";
import {Search} from "../utils/interfaces";

test('render SearchInput', () => {
    
    const search: Search = {
        onSearch: (searchText: string) => void(0)
    }

    render(<SearchInput search={search} />);
    
    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();
    expect((searchInput as HTMLInputElement).placeholder).toContain("Search for sofa...");
});