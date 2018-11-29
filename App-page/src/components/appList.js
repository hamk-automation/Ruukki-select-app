import roofsensor from '../img/roofsensor.jpg'
import visu from '../img/visu.png'
import varpu from '../img/3d.png'
import guest from '../img/guest.png'
import nzeb from '../img/nzeb.png'
import sewio from '../img/sewio.png'

const AppList= 
[
    { id: 'varpu', title: 'Ruukki 3D Visualization', URL: 'overview', icon: varpu },
    { id: 'roofsensor', title: 'Ruukki<sup>&reg;</sup> Roof Sensor', URL: 'ruukkisensor', icon: roofsensor},
    { id: 'visu', title: 'OLK Solar Production', URL: 'visu', icon: visu },
    { id: 'guest', title: 'Grafana Playground', URL: 'visu/d/yBkXTUfiz/guest-playground?refresh=10s&orgId=4', icon: guest },
    { id: 'sewio', title: 'Ultrawideband and reflective surfaces', URL: 'http://192.168.100.20/', icon: sewio },
    { id: 'nzeb', title: 'Case study of nZEB', URL: 'https://www.slideshare.net/Ruukki/energy-efficient-solutions-for-steel-structures-case-study-of-a-near-zeroenergy-building', icon: nzeb }
]

export default AppList 