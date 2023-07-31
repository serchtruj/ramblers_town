import { useMediaQuery } from 'react-responsive'

export type ImageBgSectionProps = {
    imageSrc: string;
    components: Array<{
        props: ImageProps;
        type: "tablet" | "mobile" | "web";
    }>;
}

type ImageProps = {
    style?: React.CSSProperties;
    width?: number | string;
    height?: number | string;
}


export default function ImageBgSection({ imageSrc, components }: ImageBgSectionProps) {
    const viewScreen = {
        web: useMediaQuery({ minWidth: 1224 }),
        tablet: useMediaQuery({ maxWidth: 1224, minWidth: 600 }),
        mobile: useMediaQuery({ maxWidth: 600 })
    }
    return (<>
        {components.map(({ props, type }) => {
            return (viewScreen[type] && (
                <img
                    key={imageSrc}
                    src={imageSrc}
                    {...props}
                    alt={imageSrc}
                />
            ))
        })}
    </>)
}
