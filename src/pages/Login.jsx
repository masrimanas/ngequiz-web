// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../stores/AuthContext";



// export default function LoginPage() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const auth = useAuth();
  
//     const { from } = location.state || { from: { pathname: '/public' } };
//     const login = () => {
//       auth.signin(() => {
//         navigate(from);
//       });
//     };
  
//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={login}>Log in</button>
//       </div>
//     );
//   }