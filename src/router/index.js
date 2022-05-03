import DZDiscovery from '@/views/discovery';
import DZDownload from '@/views/download';
import DZSubscription from '@/views/subscription';
import DZMine from '@/views/mine';
import DZHit from '@/views/discovery/pages/hit';
import DZRanking from '@/views/discovery/pages/ranking';
import DZPlaylist from '@/views/discovery/pages/playlist';
import DZPodcast from '@/views/discovery/pages/podcast';
import DZSinger from '@/views/discovery/pages/singer';
import DZAlbum from '@/views/discovery/pages/album';
import { Redirect } from 'react-router-dom';

const routes = [
    {
        path:["/","/index","/home"],
        exact:true,
        render:()=> (<Redirect to="/discovery"/>)
    },
    {
        path:"/discovery",
        component:DZDiscovery,
        routes:[
            {
                path:"/discovery/",
                exact:true,
                render:()=>(<Redirect to="/discovery/hit"/>)
            },
            {
                path:"/discovery/hit",
                component:DZHit
            },
            {
                path:"/discovery/ranking",
                component:DZRanking
            },
            {
                path:"/discovery/playlist",
                component:DZPlaylist
            },
            {
                path:"/discovery/podcast",
                component:DZPodcast
            },
            {
                path:"/discovery/singer",
                component:DZSinger
            },
            {
                path:"/discovery/album",
                component:DZAlbum
            },
        ]
    },
    {
        path:"/mine",
        component:DZMine
    },
    {
        path:"/subscription",
        component:DZSubscription
    },
    {
        path:"/download",
        component:DZDownload
    }
];

export default routes;