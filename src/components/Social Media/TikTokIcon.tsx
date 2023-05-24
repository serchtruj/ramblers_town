import tikTokImage from '../../images/tik-tok.png'
  
const TikTokIcon = ({sx, onClick, className}: {sx: {cursor?: string, height?: string, fontSize?: number,  width?: string}, onClick: any, className?: string}) => {
    return (
        <img className={className} src={tikTokImage} style={{...sx}} alt="tikTokIcon" onClick={onClick}/>
    );
};

export default TikTokIcon
