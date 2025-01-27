// App.tsx
import { Box, Grid, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import DepartmentCard from './components/DepartmentCard';
import { useUserData } from './hooks/useUserData';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    background: {
      default: '#f8fafc',
    },
  },
});

function App() {
  const { data, loading, error } = useUserData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  const departments = Object.entries(data);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Grid container spacing={3}>
            {departments.map(([dept, info]) => (
              <Grid item xs={12} md={6} lg={4} key={dept}>
                <DepartmentCard department={dept} data={info} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;