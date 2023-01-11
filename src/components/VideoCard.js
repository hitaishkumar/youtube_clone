import {Link} from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {demoThumbnail,demoVideoUrl,demoVideoTitle
,demoChannelUrl,demoChannelTitle} from '../utils/constants';




const VideoCard = ({video:{id:{videoId},snippet}}) => {
console.log('video :>> ', videoId );
console.log(' snippet',snippet)

  return (
    <Card sx = {{width:{md: '320px' , xs: '100%'},boxShadow:'none' , borderRadius:0}} >
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}> 
            <CardMedia 
            image = {snippet?.thumbnails?.high?.url}
            alt = {snippet?.title}
            sx = {{ width : 358 , height : 180}}
            />
            <CardContent sx = {{
                backgroundColor:'#1e1e1e',
                height:'106px'
            }}>
            <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant='subtitle1'
                fontWeight='bold' color = '#fff'  >
                    {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId? `/channelId/${snippet?.channelId}`: demoChannelUrl}>
                <Typography variant='subtitle2'
                fontWeight='bold' color = 'gray'  >
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx = {{ fontSixze: 12 , color:'gray', ml:2 }} />
                </Typography>
            </Link>
            </CardContent>

            
        </Link>
    </Card>
  )
}

export default VideoCard