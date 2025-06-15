
-To run this project locally:

git clone https://github.com/FatmehKassab/assesment.git
cd I-MANAGE-ASSESSMENT
npm install 
npm run dev


-Project Architecture:

I-MANAGE-ASSESSMENT/
├── public/                 # Static files accessible publicly
│   ├── icons/              # Icon assets
│   └── images/             # Image assets
│
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── Button/         # Button components
│   │   ├── Forms/          # Form-related components
│   │   ├── Inputs/         # Input field components
│   │   ├── Layout/         # Layout wrappers and structure
│   │   ├── PrivateRoute/   # Route protection logic
│   │   ├── Sidebar/        # Sidebar navigation
│   │   └── TopBar/         # Top navigation bar
│   │
│   ├── context/            # React context providers
│   │   └── AuthContext.tsx # Authentication context and provider
│   │
│   ├── pages/              # Application pages
│   │   ├── dashboard/      # Dashboard views and logic
│   │   ├── login/          # Login page
│   │   └── statistics/     # Statistics-related views
│   │
│   ├── utils/              # Utility/helper functions
│   │
│   ├── App.tsx             # App root component
│   ├── globals.css         # Global styles
│   ├── main.tsx            # App entry point
│   └── vite-env.d.ts       # Vite environment typings
│
├── node_modules/           # Project dependencies
