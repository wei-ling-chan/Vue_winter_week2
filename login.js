import{createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const app = {
  data(){
    return{
      user : {
            username:'',
            password:''
          }  
    }
  },
  created(){
    
  },
  methods:{
    login(){      
      const url = 'https://vue3-course-api.hexschool.io/v2/'; // 請加入站點
      const path = 'wlc606'; // 請加入個人 API Path
      //1.發送 API 至遠端並登入（並儲存 Token）
      axios.post(`${url}admin/signin`,this.user)
      .then(res=>{      
        const {token,expired} =res.data;
        console.log(token,expired);
        //儲存cookie      
        document.cookie = `hexToken=${token}; expires=${new Date(expired)};`; 
        // document.cookie = `hexschool=${token}; expires=${new Date(expired)};`;

        //轉址
        window.location = 'index.html';           
      }).catch(error=>{
        console.dir(error);      
      })   
    }
  }
}

createApp(app).mount('#app');




const url = 'https://vue3-course-api.hexschool.io/v2/'; // 請加入站點
const path = 'wlc606'; // 請加入個人 API Path

// const emailAddress = document.querySelector('#username');
// const password = document.querySelector('#password');
// const loginBtn = document.querySelector('.login');

// loginBtn.addEventListener('click',login);

// function login(e){
//   e.preventDefault();
//   const user = {
//     username:emailAddress.value,
//     password : password.value
//   }  
  
  //1.發送 API 至遠端並登入（並儲存 Token）
  // axios.post(`${url}admin/signin`,user)
  //   .then(res=>{      
  //     const {token,expired} =res.data;
  //     console.log(token,expired);
  //     //儲存cookie      
  //     document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
  //     checkLogin();
  //   }).catch(error=>{
  //     console.dir(error);      
  //   })   
    
// }

// function checkLogin(){
//   //2.取得 Token（Token 僅需要設定一次）
//   const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//   console.log(token);

//   //3.下次發送axios時，預設會把token加到header中
//   axios.defaults.headers.common['Authorization'] = token;  

//   axios.post(`${url}api/user/check`)
//     .then(res=>{      
//       console.log(res.data);      
//     }).catch(error=>{
//       console.dir(error);      
//     })
// }

