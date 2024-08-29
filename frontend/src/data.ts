//Source code generated by AppGPT (www.appgpt.tech)
let data: any = {
  defaultData: {
    Users: [
      {
        userId: 1,
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        password: 'password123',
        role: 'HR Manager',
      },
      {
        userId: 2,
        name: 'Maria Garcia',
        email: 'maria.garcia@example.com',
        password: 'securePass456',
        role: 'Recruiter',
      },
      {
        userId: 3,
        name: 'David Smith',
        email: 'david.smith@example.com',
        password: 'myPassword789',
        role: 'Payroll Specialist',
      },
      {
        userId: 4,
        name: 'Sophia Brown',
        email: 'sophia.brown@example.com',
        password: 'brownPassword101',
        role: 'Employee Relations',
      },
      {
        userId: 5,
        name: 'Ethan Taylor',
        email: 'ethan.taylor@example.com',
        password: 'ethanSecure102',
        role: 'Benefits Coordinator',
      },
    ],
    Employees: [
      {
        EmployeeID: 'E1001',
        FirstName: 'John',
        LastName: 'Doe',
        MiddleName: 'A.',
        DateOfBirth: '1985-04-12T00:00:00Z',
        Gender: 'Male',
        Nationality: 'American',
        MaritalStatus: 'Married',
        ContactInformation: 'john.doe@example.com',
        Address: '123 Elm St, Springfield, IL',
        Department: 'IT',
        Position: 'Software Engineer',
        Manager: 'E1005',
        EmploymentType: 'Full-Time',
        StartDate: '2010-06-01T00:00:00Z',
        EndDate: '1970-01-01T00:00:00.000Z',
        SalaryInformation: '80000',
        ProfilePicture: 'https://example.com/images/johndoe.jpg',
      },
      {
        EmployeeID: 'E1002',
        FirstName: 'Jane',
        LastName: 'Smith',
        MiddleName: 'B.',
        DateOfBirth: '1990-08-05T00:00:00Z',
        Gender: 'Female',
        Nationality: 'Canadian',
        MaritalStatus: 'Single',
        ContactInformation: 'jane.smith@example.com',
        Address: '456 Oak St, Vancouver, BC',
        Department: 'Marketing',
        Position: 'Marketing Manager',
        Manager: 'E1001',
        EmploymentType: 'Full-Time',
        StartDate: '2015-02-15T00:00:00Z',
        EndDate: '1970-01-01T00:00:00.000Z',
        SalaryInformation: '70000',
        ProfilePicture: 'https://example.com/images/janesmith.jpg',
      },
      {
        EmployeeID: 'E1003',
        FirstName: 'Michael',
        LastName: 'Johnson',
        MiddleName: 'C.',
        DateOfBirth: '1988-12-17T00:00:00Z',
        Gender: 'Male',
        Nationality: 'British',
        MaritalStatus: 'Single',
        ContactInformation: 'michael.johnson@example.com',
        Address: '789 Pine St, London, UK',
        Department: 'Human Resources',
        Position: 'HR Manager',
        Manager: 'E1002',
        EmploymentType: 'Full-Time',
        StartDate: '2012-09-20T00:00:00Z',
        EndDate: '1970-01-01T00:00:00.000Z',
        SalaryInformation: '75000',
        ProfilePicture: 'https://example.com/images/michaeljohnson.jpg',
      },
      {
        EmployeeID: 'E1004',
        FirstName: 'Emily',
        LastName: 'Williams',
        MiddleName: 'D.',
        DateOfBirth: '1992-03-22T00:00:00Z',
        Gender: 'Female',
        Nationality: 'Australian',
        MaritalStatus: 'Married',
        ContactInformation: 'emily.williams@example.com',
        Address: '1010 Maple St, Sydney, NSW',
        Department: 'Finance',
        Position: 'Financial Analyst',
        Manager: 'E1003',
        EmploymentType: 'Full-Time',
        StartDate: '2018-07-01T00:00:00Z',
        EndDate: '1970-01-01T00:00:00.000Z',
        SalaryInformation: '65000',
        ProfilePicture: 'https://example.com/images/emilywilliams.jpg',
      },
      {
        EmployeeID: 'E1005',
        FirstName: 'David',
        LastName: 'Brown',
        MiddleName: 'E.',
        DateOfBirth: '1983-01-29T00:00:00Z',
        Gender: 'Male',
        Nationality: 'American',
        MaritalStatus: 'Single',
        ContactInformation: 'david.brown@example.com',
        Address: '1313 Birch St, New York, NY',
        Department: 'Operations',
        Position: 'Operations Manager',
        Manager: 'E1004',
        EmploymentType: 'Full-Time',
        StartDate: '2008-11-10T00:00:00Z',
        EndDate: '1970-01-01T00:00:00.000Z',
        SalaryInformation: '85000',
        ProfilePicture: 'https://example.com/images/davidbrown.jpg',
      },
    ],
    Evaluations: [
      {
        ReviewID: 1,
        EmployeeID: 1,
        PeriodStart: '2023-01-01T00:00:00',
        PeriodEnd: '2023-06-30T00:00:00',
        GoalsObjectives:
          'Increase sales by 20% through strategic client partnerships.',
        Achievements:
          'Exceeded sales goal by 25%, securing 5 new key accounts.',
        ImprovementAreas:
          'Need to improve time management and delegation skills.',
        FeedbackfromSupervisor:
          'Outstanding performance, demonstrating exceptional sales and leadership skills.',
        OverallRating: 'Excellent',
        Recommendations: 'Consider for promotion to Sales Manager.',
      },
      {
        ReviewID: 2,
        EmployeeID: 2,
        PeriodStart: '2023-01-01T00:00:00',
        PeriodEnd: '2023-06-30T00:00:00',
        GoalsObjectives: 'Improve customer service satisfaction by 30%.',
        Achievements:
          'Increased customer satisfaction by 35%, reduced complaint resolution time by 50%.',
        ImprovementAreas: 'Further development in conflict resolution skills.',
        FeedbackfromSupervisor:
          'Significant improvement in customer service metrics, excellent team player.',
        OverallRating: 'Very Good',
        Recommendations: 'Enroll in advanced customer service training.',
      },
      {
        ReviewID: 3,
        EmployeeID: 3,
        PeriodStart: '2023-01-01T00:00:00',
        PeriodEnd: '2023-06-30T00:00:00',
        GoalsObjectives:
          'Complete the new software development project within the allocated budget and time.',
        Achievements: 'Project completed on time and 10% under budget.',
        ImprovementAreas:
          'Enhance knowledge on the latest software development technologies.',
        FeedbackfromSupervisor:
          'Demonstrated excellent project management and technical skills.',
        OverallRating: 'Good',
        Recommendations:
          'Attend a tech conference to learn about new technologies.',
      },
      {
        ReviewID: 4,
        EmployeeID: 4,
        PeriodStart: '2023-01-01T00:00:00',
        PeriodEnd: '2023-06-30T00:00:00',
        GoalsObjectives:
          'Reduce operational costs by 15% without impacting product quality.',
        Achievements:
          'Successfully reduced costs by 18% through efficient process redesign.',
        ImprovementAreas: 'Work on strategic planning and forecasting.',
        FeedbackfromSupervisor:
          'Excellent ability to identify and implement cost-saving measures.',
        OverallRating: 'Very Good',
        Recommendations: 'Lead a workshop on cost reduction strategies.',
      },
      {
        ReviewID: 5,
        EmployeeID: 5,
        PeriodStart: '2023-01-01T00:00:00',
        PeriodEnd: '2023-06-30T00:00:00',
        GoalsObjectives: 'Enhance team collaboration and productivity by 20%.',
        Achievements:
          'Team productivity increased by 25%, with notable improvements in collaboration.',
        ImprovementAreas: 'Focus on advanced leadership training.',
        FeedbackfromSupervisor:
          'Shows exceptional leadership and team-building skills.',
        OverallRating: 'Excellent',
        Recommendations: 'Explore leadership roles within the organization.',
      },
    ],
    Payroll: [
      {
        PayrollID: 1,
        EmployeeID: 1,
        PeriodStartDate: '2023-04-01T00:00:00Z',
        PeriodEndDate: '2023-04-30T00:00:00Z',
        GrossSalary: 5000,
        Deductions: 500,
        NetSalary: 4500,
        PayDate: '2023-05-01T00:00:00Z',
        OvertimeHours: 10.5,
        OvertimePay: 262.5,
      },
      {
        PayrollID: 2,
        EmployeeID: 2,
        PeriodStartDate: '2023-04-01T00:00:00Z',
        PeriodEndDate: '2023-04-30T00:00:00Z',
        GrossSalary: 4500,
        Deductions: 450,
        NetSalary: 4050,
        PayDate: '2023-05-01T00:00:00Z',
        OvertimeHours: 8,
        OvertimePay: 200,
      },
      {
        PayrollID: 3,
        EmployeeID: 3,
        PeriodStartDate: '2023-04-01T00:00:00Z',
        PeriodEndDate: '2023-04-30T00:00:00Z',
        GrossSalary: 5500,
        Deductions: 550,
        NetSalary: 4950,
        PayDate: '2023-05-01T00:00:00Z',
        OvertimeHours: 12,
        OvertimePay: 300,
      },
      {
        PayrollID: 4,
        EmployeeID: 4,
        PeriodStartDate: '2023-04-01T00:00:00Z',
        PeriodEndDate: '2023-04-30T00:00:00Z',
        GrossSalary: 4800,
        Deductions: 480,
        NetSalary: 4320,
        PayDate: '2023-05-01T00:00:00Z',
        OvertimeHours: 9,
        OvertimePay: 225,
      },
      {
        PayrollID: 5,
        EmployeeID: 5,
        PeriodStartDate: '2023-04-01T00:00:00Z',
        PeriodEndDate: '2023-04-30T00:00:00Z',
        GrossSalary: 5200,
        Deductions: 520,
        NetSalary: 4680,
        PayDate: '2023-05-01T00:00:00Z',
        OvertimeHours: 11,
        OvertimePay: 275,
      },
    ],
    Leaverequests: [
      {
        RequestID: 1,
        EmployeeID: 1,
        TypeofLeave: 'Annual',
        StartDate: '2023-04-10T00:00:00Z',
        EndDate: '2023-04-20T00:00:00Z',
        Reason: 'Family vacation',
        ApprovalStatus: 'Pending',
        ApproverUserid: 2,
      },
      {
        RequestID: 2,
        EmployeeID: 2,
        TypeofLeave: 'Sick',
        StartDate: '2023-05-01T00:00:00Z',
        EndDate: '2023-05-03T00:00:00Z',
        Reason: 'Medical surgery',
        ApprovalStatus: 'Approved',
        ApproverUserid: 3,
      },
      {
        RequestID: 3,
        EmployeeID: 3,
        TypeofLeave: 'Maternity',
        StartDate: '2023-06-15T00:00:00Z',
        EndDate: '2023-08-15T00:00:00Z',
        Reason: 'Childbirth',
        ApprovalStatus: 'Approved',
        ApproverUserid: 4,
      },
      {
        RequestID: 4,
        EmployeeID: 4,
        TypeofLeave: 'Paternity',
        StartDate: '2023-07-01T00:00:00Z',
        EndDate: '2023-07-14T00:00:00Z',
        Reason: 'Supporting spouse after childbirth',
        ApprovalStatus: 'Pending',
        ApproverUserid: 5,
      },
      {
        RequestID: 5,
        EmployeeID: 5,
        TypeofLeave: 'Bereavement',
        StartDate: '2023-09-20T00:00:00Z',
        EndDate: '2023-09-24T00:00:00Z',
        Reason: 'Loss of a family member',
        ApprovalStatus: 'Approved',
        ApproverUserid: 1,
      },
    ],
  },
};
export default data;
