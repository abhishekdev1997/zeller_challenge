import { Text } from 'react-native-paper';

type HeadingProps = {
    title: string
}
const Heading1 = ({ title }: HeadingProps) => {
    return (
        <Text style={{ fontWeight: "bold" }} variant="titleLarge">{title}</Text>
    )
}

export { Heading1 };