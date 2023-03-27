// 3rd Party Modules
import { HStack, Image } from '@chakra-ui/react'

//Project Modules
import logo from '../assets/home24.png';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchText: string) => void;
};

const NavBar = ({ onSearch }: Props) => {
    return (
      <HStack padding='10px'>
        <Image src={logo} boxSize='60px' alt='home 24 Logo' />
        <SearchInput onSearch={onSearch} />
      </HStack>
    )
};

export default NavBar;