import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Box,
    Chip,
    alpha,
  } from '@mui/material';
  import type { DepartmentSummary } from '../types';
  
  interface Props {
    department: string;
    data: DepartmentSummary;
  }
  
// DepartmentCard.tsx
export default function DepartmentCard({ department, data }: Props) {
    const total = data.male + data.female;
  
    return (
      <Card 
        elevation={0} 
        sx={{ 
          border: '1px solid #e2e8f0',
          borderRadius: 2,
          height: '100%',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        }}
      >
        <CardHeader
          title={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" color="primary.main" fontWeight={600}>
                {department}
              </Typography>
              <Chip 
                label={`Total: ${total}`}
                size="small"
                sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '0.75rem'
                }}
              />
            </Box>
          }
          sx={{
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        />
        <CardContent sx={{ p: 2 }}>
          {/* Gender Distribution */}
          <Box sx={{ mb: 2 }}>
            <Typography color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem' }}>
              Gender Distribution
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Chip 
                label={`Male: ${data.male}`}
                size="small"
                sx={{
                  bgcolor: 'primary.light',
                  color: '#fff',
                  fontWeight: 500
                }}
              />
              <Chip 
                label={`Female: ${data.female}`}
                size="small"
                sx={{
                  bgcolor: 'secondary.light',
                  color: '#fff',
                  fontWeight: 500
                }}
              />
            </Box>
          </Box>
  
          {/* Age Range */}
          <Box sx={{ mb: 2 }}>
            <Typography color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem' }}>
              Age Range
            </Typography>
            <Chip 
              label={data.ageRange}
              size="small"
              sx={{
                bgcolor: 'info.light',
                color: '#fff',
                fontWeight: 500
              }}
            />
          </Box>
  
     {/* Hair Colors */}
<Box sx={{ mb: 2 }}>
  <Typography color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem' }}>
    Hair Colors
  </Typography>
  <Box sx={{ 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: 1,
  }}>
    {Object.entries(data.hair).map(([color, count]) => (
      <Chip
        key={color}
        label={`${color}: ${count}`}
        size="small"
        sx={{
          bgcolor: color.toLowerCase(),
          color: color.toLowerCase() === 'white' ? 'black' : 'white',
          fontWeight: 500,
          px: 1.5,
          py: 0.5,
          border: color.toLowerCase() === 'white' ? '1px solid black' : 'none',
          '& .MuiChip-label': {
            px: 1
          }
        }}
      />
    ))}
  </Box>
</Box>
  
          {/* Employee Locations */}
          <Box>
            <Typography color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem' }}>
              Employee Locations
            </Typography>
            <Box 
              sx={{ 
                maxHeight: 120,
                overflow: 'auto',
                bgcolor: 'grey.50',
                borderRadius: 1,
                p: 1,
              }}
            >
              {Object.entries(data.addressUser).map(([name, postal]) => (
                <Box
                  key={name}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'white' },
                  }}
                >
                  <Typography variant="body2">{name}</Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      bgcolor: 'white',
                      px: 1,
                      borderRadius: 0.5
                    }}
                  >
                    {postal}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }