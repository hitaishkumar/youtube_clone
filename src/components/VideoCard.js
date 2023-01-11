import {Link} from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {demoThumbnail,demoVideoUrl,demoVideoTitle
,demoChannelUrl,demoChannelTitle} from '../utils/constants';




const VideoCard = ({video:{id:{videoId},snippet}}) => {
console.log('video :>> ', videoId );
console.log(' snippet',snippet)

  return (
    <Card>
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}> 
            <CardMedia 
            image = {snippet?.thumbnails?.high?.url}
            alt = {snippet?.title}
            sx = {{ width : 358 , height : 180}}
            />

            
        </Link>
    </Card>
  )
}

export default VideoCard