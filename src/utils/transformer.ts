// utils/transformer.ts
export const transformData = (users: User[]): GroupedData => {
    return users.reduce((acc: GroupedData, user: User) => {
      const dept = user.company.department;
      
      if (!acc[dept]) {
        acc[dept] = {
          male: 0,
          female: 0,
          ageRange: '',
          hair: {},
          addressUser: {}
        };
      }
  
      // Update gender count
      if (user.gender === 'male') acc[dept].male++;
      else if (user.gender === 'female') acc[dept].female++;
  
      // Update hair color count
      const hairColor = user.hair.color;
      acc[dept].hair[hairColor] = (acc[dept].hair[hairColor] || 0) + 1;
  
      // Update address user mapping
      acc[dept].addressUser[`${user.firstName}${user.lastName}`] = 
        user.address.postalCode;
  
      return acc;
    }, {});
  };
  
  export const calculateAgeRanges = (data: GroupedData, users: User[]): GroupedData => {
    Object.keys(data).forEach(dept => {
      const deptUsers = users.filter(user => user.company.department === dept);
      const ages = deptUsers.map(user => user.age);
      const min = Math.min(...ages);
      const max = Math.max(...ages);
      data[dept].ageRange = `${min}-${max}`;
    });
    return data;
  };