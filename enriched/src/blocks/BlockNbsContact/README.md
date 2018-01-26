Example will all props:
    
    <BlockNbsContact
        requestSalesCallbackCta={{
            title: 'Need a hand?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mi ac rutrum bibendum, nulla nunc euismod est, vel viverra nibh elit vel nunc.',
            link: {
                href : '//business.telus.com/en/business/contact-telus',
                target : "_self",
                text : "Call to action"
            }  
        }}
        contactComponent={{
          title: 'Talk to a Sales Expert',
          lowerLink: {
              href : '//business.telus.com/en/business/contact-telus',
              target : "_self",
              text : "See other ways to contact us."
          },
          phoneNumberComponent: [
            {
              description: 'Toll-free number',
              phoneNumber: '1-000-000-0000',
              operatingHours: '8am - 6pm EST, Saturday - Sunday'
            },
            {
              description: 'Toll-free number',
              phoneNumber: '1-000-000-0000',
              operatingHours: '9am - 5pm MST, Monday - Friday'
            }
          ]
        }
        }
        showMiddleContentColumn
        middleContentColumnTitle='Middle Column Title'
        middleContentColumnText='Nunc sed tempus ipsum. Nulla lobortis massa quis semper iaculis. Sed at lobortis dui. Morbi quis consequat sem.'
        middleContentColumnLink={{ 
            text: 'Callback link', 
            href: 'anyLink', 
            target: 'anyTarget' 
        }}
    />

Example without middle column, and with a single phone number:

    <BlockNbsContact
        requestSalesCallbackCta={{
            title: 'Need a hand?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mi ac rutrum bibendum, nulla nunc euismod est, vel viverra nibh elit vel nunc.',
            link: {
                href : '//business.telus.com/en/business/contact-telus',
                target : "_self",
                text : "Call to action"
            }  
        }}
        contactComponent={{
          title: 'Talk to a Sales Expert',
          lowerLink: {
              href : '//business.telus.com/en/business/contact-telus',
              target : "_self",
              text : "See other ways to contact us."
          },
          phoneNumberComponent: [
            {
              description: 'Toll-free number',
              phoneNumber: '1-000-000-0000',
              operatingHours: '8am - 6pm EST, Saturday - Sunday'
            }
          ]
        }}
    />
