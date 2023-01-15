import{createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

const url = 'https://vue3-course-api.hexschool.io/v2/'; // 請加入站點
const path = 'wlc606'; // 請加入個人 API Path

const app = {
  data(){
    return{
      // 產品資料格式
      template:{},      
      product:[]
    }
  },  
  methods:{
      check(){        
        axios.post(`${url}api/user/check`)
        .then(res=>{
          // console.log(res);
          this.getProduct();
        }).catch(error=>{
          // console.dir(error);
          alert('請重新登入');
          window.location = 'login.html';
        })    
      },
      getProduct(){        
        axios.get(`${url}api/${path}/admin/products`)
        .then(res=>{
          console.log(res.data.products);
          this.product = res.data.products;          

        }).catch(error=>{
          console.dir(error);
        })    
      }
    
  },
  mounted(){
    //取出token     

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');    
    //預設token帶入header    
    axios.defaults.headers.common.Authorization = token;        
    console.log(token);
    this.check();  
  }
}
  


createApp(app) //生成Vue應用程式
.mount('#app'); //渲染至畫面