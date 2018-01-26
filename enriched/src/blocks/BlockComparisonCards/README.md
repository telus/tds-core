Example with 2 cards:

    <BlockComparisonCards 
        title="Title of plans section" 
        plans={[ 
            {
                title: 'Basic', 
                features: [{
                  value: '1 capybara',
                  featureDescription: {
                    name: 'Feature 1'
                  }
                },{
                    value: 'true',
                    featureDescription: {
                      name: 'Feature 2'
                    }
                }, {
                  value: 'false',
                  featureDescription: {
                    name: 'Feature 3'
                  }                
                }]
            }, 
            {
                title: 'Advanced', 
                features: [{
                  value: '10 capybaras',
                  featureDescription: {
                    name: 'Feature 1'
                  }
                },{
                    value: 'true',
                    featureDescription: {
                      name: 'Feature 2'
                    }
                }, {
                  value: 'true',
                  featureDescription: {
                    name: 'Feature 3'
                  }                
                }]
            } 
        ]}
    />

Example with 3 cards:

    <BlockComparisonCards 
        title="Title of plans section" 
        plans={[ 
            {
                title: 'Basic', 
                features: [{
                  value: '1 capybara',
                  featureDescription: {
                    name: 'Feature 1'
                  }
                },{
                    value: 'true',
                    featureDescription: {
                      name: 'Feature 2'
                    }
                }, {
                  value: 'false',
                  featureDescription: {
                    name: 'Feature 3'
                  }                
                }]
            }, 
            {
                title: 'Advanced', 
                features: [{
                  value: '10 capybaras',
                  featureDescription: {
                    name: 'Feature 1'
                  }
                },{
                    value: 'true',
                    featureDescription: {
                      name: 'Feature 2'
                    }
                }, {
                  value: 'true',
                  featureDescription: {
                    name: 'Feature 3'
                  }                
                }]
            },
             {
                 title: 'Super', 
                 features: [{
                   value: '100 capybaras',
                   featureDescription: {
                     name: 'Feature 1'
                   }
                 },{
                     value: 'true',
                     featureDescription: {
                       name: 'Feature 2'
                     }
                 }, {
                   value: 'true',
                   featureDescription: {
                     name: 'Feature 3'
                   }                
                 }, {
                    value: 'true',
                    featureDescription: {
                      name: 'Feature 4'
                    }                
                  }]
             } 

        ]}
    />
