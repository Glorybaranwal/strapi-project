// ** React Imports
import {
    useState,
    ReactNode,
    useEffect,
  
    // MouseEvent
  } from "react";
  // ** Next Imports
  // ** MUI Components
  // import Alert from '@mui/material/Alert'
  import Button from "@mui/material/Button";
  
  //import Divider from '@mui/material/Divider'
  import Typography from "@mui/material/Typography";
  import IconButton from "@mui/material/IconButton";
  import Box, { BoxProps } from "@mui/material/Box";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { styled, useTheme } from "@mui/material/styles";
  import InputAdornment from "@mui/material/InputAdornment";
  import FormControl from "@mui/material/FormControl";
  import { OutlinedInput, Divider, CircularProgress, Skeleton } from "@mui/material";
  
  

  import { useRouter } from "next/router";
  import { keyframes } from '@mui/system';
  
  

  
  const RightWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: 450,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 600,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 750,
    },
  }));
  
  const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // ** Hooks
  
    const DefaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;
  

    const Router = useRouter();
    const [loading, setLoading] = useState(true);

    // Login Form
  
    const onSubmit = async (data) => {

        
        try {
          const response = await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/posts/`,
            {
             data : {
                identifier: email,
              password: password
            }
            }
          );
          Router.push("/post")
          console.log("response", response)
        } catch (error) {
          console.log("error", error)
        }
    }
  
  
    return (
      <Box className="content-right" sx={{ backgroundColor: "background.paper" }}>
      
        <RightWrapper>
          <Box
            sx={{
              p: [6, 12],
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 400 }}>
              <Box sx={{ my: 6 }}>
                <Typography sx={{ color: "text.secondary" }}>
                  Please sign-in to your account.
                </Typography>
              </Box>
  
              <form
                noValidate
                autoComplete="off"
              >
                <Box my={2}>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                  >
                    User Name
                  </Typography>
                </Box>
                <FormControl fullWidth>
                  <Box mb={2}>
                    <OutlinedInput
                      placeholder="Enter Your User name"
                      onChange={(e)=>setEmail(e.target.value)}
                      fullWidth
                      id="email"
                    />
                  </Box>
                </FormControl>
  
                <FormControl fullWidth>
                  <Box mb={2}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                    >
                      Password
                    </Typography>
                  </Box>
                  <OutlinedInput
                    placeholder="Enter Your Password"
                    defaultValue={password}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setShowPassword(e.target.value)}
                   
                    
                  />
                </FormControl>
                <Box
                  mt={6}
                >
                  <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{ mb: 4 }}
                      onClick={onSubmit}
                    >
                     {loading ? <CircularProgress/> : Login } 
                    </Button>
                </Box>
  
                <Divider sx={{ my: 5 }} />
              </form>
            </Box>
          </Box>
        </RightWrapper>
      </Box>
    );
  };
  
  export default LoginPage;
  