With all props:

    <BlockOverview 
        overviewTitle="Overview title" 
        overviewDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat lectus vel leo consequat dignissim. Phasellus sit amet massa nunc. Cras vitae rutrum dui, ut lobortis libero. Vestibulum placerat, nulla sit amet vehicula tincidunt, velit sem condimentum ipsum, id consequat libero sem sed purus. Nulla ac ipsum mi." 
        ctaLink={{href: "http://google.com", text: "Search", target: "_blank" }} 
        sideContent={{
            listTitle: "List title", 
            listItems: [
                "Sed a leo non turpis mollis finibus sed sed dui.",
                "Etiam vulputate mi nec nibh facilisis fringilla.",
                "Vestibulum consequat sem non tellus semper, at sagittis ex efficitur."
            ]
        }}
    />


Without sideContent:

    <BlockOverview 
        overviewTitle="Overview title" 
        overviewDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat lectus vel leo consequat dignissim. Phasellus sit amet massa nunc. Cras vitae rutrum dui, ut lobortis libero. Vestibulum placerat, nulla sit amet vehicula tincidunt, velit sem condimentum ipsum, id consequat libero sem sed purus. Nulla ac ipsum mi." 
        ctaLink={{href: "http://google.com", text: "Search", target: "_blank" }} 
    />
