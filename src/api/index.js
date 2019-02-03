import axios from 'axios'
const serverUrl = 'http://www.phptrain.cn/api/Teacher';

axios.defaults.baseURL = serverUrl;

// 响应拦截器
axios.interceptors.response.use(
  response => response.data,
  (error) => {
    // 响应异常处理
  },
);

// 获取排行
const getDataList = () => (axios.get('/ranking'));

// 搜索结果
const getSerchRes = ({
  searchData
}) => {
  return axios.post('/search', {
    school: searchData
  })
}

// 获取投票页面
const getvotePage = ({
  schoolnum
}) => {
  return axios.post('/votePage', {
    schoolnum: schoolnum
  })
}



export {
  getDataList,
  getSerchRes,
  getvotePage
}
