// React Modules
import { render, screen } from '@testing-library/react';

//Project Modules
import MaterialIconList from "../components/MaterialIconList";
import {Material} from "../utils/interfaces";
import {MaterialNames} from "../utils/enum";

test('render MaterialIconList', () => {
    const materialList:Material[] = [
        {id: 1, name: MaterialNames[MaterialNames.Teak]},
        {id: 2, name: MaterialNames[MaterialNames.Ash]},
        {id: 3, name: MaterialNames[MaterialNames.Mahogany]},
    ];

    render(<MaterialIconList materials={materialList} />);
    
    const materialIconElement = screen.getByTestId("matTextBlock");
    const materialIconImageTeak = (screen.getByTestId("imgTeak"));
    const materialIconImageAsh = screen.getByTestId("imgAsh");
    const materialIconImageMahogany = screen.getByTestId("imgMahogany");
    
    expect(materialIconElement).toBeInTheDocument();
    expect(materialIconImageTeak).toBeInTheDocument();
    expect(materialIconImageAsh).toBeInTheDocument();
    expect(materialIconImageMahogany).toBeInTheDocument();

    expect((materialIconImageTeak as HTMLImageElement).alt).toContain("teak wood");
    expect((materialIconImageAsh as HTMLImageElement).alt).toContain("ash wood");
    expect((materialIconImageMahogany as HTMLImageElement).alt).toContain("mahogany wood");

});