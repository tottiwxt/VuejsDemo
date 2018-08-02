import Body from '../Body'
import Footer from '../Footer'
import Index from '../Index'
import template from './index.html'
export default{
        template,
        data(){
            return {}
        },
        components:{
            'header':Index,
            'Footer':Footer,

        }
}