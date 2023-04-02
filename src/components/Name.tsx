import { Text } from 'react-native-paper';

type NameProps = {
    name: string
}
const Name = ({name}: NameProps) => {
    return (
        <Text variant="titleLarge">{name}</Text>
    )
}

export default Name;