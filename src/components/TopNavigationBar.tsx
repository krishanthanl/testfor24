// 3rd Party Modules
import { HStack, Image } from '@chakra-ui/react'

//Project Modules
import logo from '../assets/home24.png';
import SearchInput from './SearchInput';
import {Search} from '../utils/interfaces';

interface Props {
  search: Search;
};

const TopNavigationBar = ({ search }: Props) => {
    return (
      <HStack padding='10px'>
        <Image data-testid={`imgLogo`} src={logo} boxSize='60px' alt='home 24 Logo' />
        <SearchInput search={search} />
      </HStack>
    )
};

export default TopNavigationBar;