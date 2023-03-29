// React Modules
import { render, screen } from '@testing-library/react';

//Project Modules
import TopNavigationBar from "../components/TopNavigationBar";
import {Search} from "../utils/interfaces";

test('render TopNavigationBar', () => {
    const search: Search = {
        onSearch: (searchText) => "Ecksofas"
    }

    render(<TopNavigationBar search={search} />);
    
    const categoryHeaderImage = screen.getByTestId("imgLogo");
    
    expect(categoryHeaderImage).toBeInTheDocument();
    expect((categoryHeaderImage as HTMLImageElement).alt).toContain("home 24 Logo");
});