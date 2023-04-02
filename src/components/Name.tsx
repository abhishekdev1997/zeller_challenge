import { Text } from 'react-native-paper';
import { colorVariables } from '../utils';

type NameProps = {
    name: string
}
const Name = ({name}: NameProps) => {
    return (
        <Text style={{color:colorVariables.light_black}} variant="titleLarge">{name}</Text>
    )
}

export default Name;