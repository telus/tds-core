Example:

    <ComponentContactPhoneNumber
      description="Lorem ipsum"
      phoneNumber="1-000-222-3333"
      operatingHours="Every day, 1am - 10pm"
      numberOfEmployees="(5000+ employees)"
      displayNumberOfEmployees
    />
    
Example where number of employees is not displayed:

    <ComponentContactPhoneNumber
      description="Lorem ipsum"
      phoneNumber="1-000-222-3333"
      operatingHours="Every day, 1am - 10pm"
      numberOfEmployees="Not displayed"
      displayNumberOfEmployees={false}
    />