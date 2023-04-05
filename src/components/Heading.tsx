import { Text } from 'react-native-paper';

type HeadingProps = {
    title: string
}
const Heading1 = ({ title }: HeadingProps) => {
    return (
        <Text style={{ fontWeight: "700" }} variant="titleLarge">{title}</Text>
    )
}

export { Heading1 };