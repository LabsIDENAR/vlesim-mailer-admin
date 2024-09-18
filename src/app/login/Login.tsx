import { Link } from "react-router-dom";
import { TextField, Button, Typography, Box, Container, CssBaseline, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const Login = () => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <Card elevation={5}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
                  <span style={{ color: "#1DD63A" }}>VLESIM</span> MAILER
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                      <Typography variant="body2" color="primary">
                        Go to Dashboard
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};