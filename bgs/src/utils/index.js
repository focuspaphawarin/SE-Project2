export const registrationFormControls = [
    {
      id: 'username',
      type: 'username',
      placeholder: 'Enter your username',
      label: 'Username',
      componentType: 'input',
    },
    {
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      label: 'Email',
      componentType: 'input',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      label: 'Password',
      componentType: 'input',
    },
    {
        id: 'phone_number',
        type: 'phone_number',
        placeholder: 'Enter your phone number',
        label: 'Phone',
        componentType: 'input',
    },
    {
        id: 'address',
        type: 'address',
        placeholder: 'Enter your address',
        label: 'Address',
        componentType: 'input',
    },
    {
      id: 'role',
      type: '',
      placeholder: '',
      label: 'Role',
      componentType: 'select',
      options: [
        {
          id: 'customer',
          label: 'Customer',
        },
        {
          id: 'shop',
          label: 'Shop',
        },
      ],
    },
  ];
  
  export const loginFormControls = [
    {
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      label: 'Email',
      componentType: 'input',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      label: 'Password',
      componentType: 'input',
    },
  ];
  