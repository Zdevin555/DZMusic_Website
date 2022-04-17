import DZDiscovery from '@/views/discovery';
import DZDownloads from '@/views/downloads';
import DZFriends from '@/views/friends';
import DZMine from '@/views/mine';

const routes = [
    {
        path:"/",
        exact:true,
        component:DZDiscovery
    },
    {
        path:"/mine",
        component:DZMine
    },
    {
        path:"/friends",
        component:DZFriends
    },
    {
        path:"/downloads",
        component:DZDownloads
    }
];

export default routes;