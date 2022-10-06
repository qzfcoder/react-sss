import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
export function withRouter(WrapperComponent) {
  return function (props) {
    // 导航
    const navigate = useNavigate();
    // 动态路由参数 /xxx/:id
    const params = useParams();
    // 查询字符串的参数/user?name=why&aage=123
    const location = useLocation();
    // 返回的是一个数组
    const [searchParams, setSearchParams] = useSearchParams();
    // for (const item of searchParams) {
    // }
    const query = Object.fromEntries(searchParams);
    // console.log(searchParams, setSearchParams, query);
    const router = { navigate, params, location, searchParams, query };
    console.log(router);
    return <WrapperComponent {...props} router={router} />;
  };
}
