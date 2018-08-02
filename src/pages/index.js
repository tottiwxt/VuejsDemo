    var app = new Vue({
            el : '#app',
            data : {
                message:'bonbonXD'
            }
        }
    )
    var app2 = new Vue({
        el : '#app2',
        methods :{
            click: function () {
                alert("hi")
            }
        }
    })
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })

    var app3 = new Vue({
        el:'#app3',
        data:{

            itemList:[
                {id:0, text:'苹果'},
                {id:1, text:'香蕉'},
                {id:3, text:'澄'}
            ]
        }
    })

    Vue.component('button-count',{

        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
        data: { count: 0 }
    })
    Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">{{ count }} times.</button>'
    })
    new Vue({
        el:'#app4'
    })
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

    // 2. Define some routes
    // Each route should map to a component. The "component" can
    // either be an actual component constructor created via
    // `Vue.extend()`, or just a component options object.
    // We'll talk about nested routes later.
    const routes = [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
    ]

    // 3. Create the router instance and pass the `routes` option
    // You can pass in additional options here, but let's
    // keep it simple for now.
    const router = new VueRouter({
      routes // short for `routes: routes`
    })

    // 4. Create and mount the root instance.
    // Make sure to inject the router with the router option to make the
    // whole app router-aware.
    const app5 = new Vue({
      router
    }).$mount('#app5')

    Vue.component('blogtitle',{
        props:['article'],
        template:`
                <div class="blogtitle">
                <h3>{{article.title}}</h3>
                <button v-on:click="$emit('enlarge-text')">Enlarge font size</button>
                <div v-html="article.content"></div>
                </div>  `
        })

    var blog_title = new Vue({
        el:'#blog_title',
        data:{
            articles:[
            {id:1,  title:'learn Vue', content:'content1'},
            {id:2 , title:'on Monday', content:'content2'}
            ],
            postFontSize: 1
            }
    })

    var threetabs = new Vue({
        el:'#threetabs',
        data:{
            currenttab : 'first',
            tabs:['first','second','third']
            },
         methods:{
            change: function(tab){
                this.currenttab = tab;
            }
         },
         computed:{
            currentTabComponent: function () {
                  return 'tab-' + this.currenttab.toLowerCase()
                }
         }
    })

    var tabletest = new Vue({
        el:'#tabletest',
        data:{
               comments:[
                        {id:1,author:'author1',text:'text1'},
                        {id:2,author:'author2',text:'text2'},
                        {id:3,author:'author3',text:'text3'}
               ]
        }
    })