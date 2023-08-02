type TikTokProps = {
    sx: {
        cursor?: string;
        height?: string;
        fontSize?: number;
        width?: string;
        color: string;
    },
    onClick: any,
    className?: string
}

const TikTokIcon = ({ sx, onClick, className }: TikTokProps) => {
    return (
        <svg
            className={className}
            fill={sx.color}
            style={{ ...sx }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100%"
            height="100%"
            onClick={onClick}
        >
            <path d="M37.006,22.323c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
        </svg>
    );
};

export default TikTokIcon
