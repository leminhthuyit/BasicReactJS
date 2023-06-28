import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import logo from "../../logo.svg";
import StyleLogin from "./styled";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [use, setUse] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickHidenPassword = () => setShowPassword((show) => !show);

  const handleLogin = () => {
    if (!use && !pass) {
      alert("Vui lòng nhập đủ thông tin đăng nhập");
      return;
    }
    window.localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    navigate("/");
  };

  return (
    <StyleLogin>
      <div className="form_login">
        <Stack
          direction={"column"}
          flexWrap={"nowrap"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={4}
        >
          <img src={logo} alt="logo" width={"100px"} height={"100px"} />
          <h2>Basic ReactJS</h2>
          <TextField
            value={use}
            onChange={(e) => setUse(e.target.value)}
            label="UseName"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ width: "280px" }}
          />
          <TextField
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type={showPassword ? "text" : "password"}
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {showPassword ? (
                    <IconButton onClick={handleClickHidenPassword}>
                      <VisibilityOff />
                    </IconButton>
                  ) : (
                    <IconButton onClick={handleClickShowPassword}>
                      <Visibility />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ width: "280px" }}
          />

          <Button
            variant="contained"
            sx={{ width: "280px", fontWeight: "600" }}
            onClick={handleLogin}
          >
            Đăng nhập
          </Button>
        </Stack>
      </div>
    </StyleLogin>
  );
};

export default Login;
