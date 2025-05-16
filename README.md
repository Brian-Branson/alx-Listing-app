                        ALX Listing App — Hotel Booking Website
This is a modern, responsive hotel booking web application built with Next.js, TypeScript, Tailwind CSS, and a clean component structure. The site includes sections for featured rooms, about us, contact information, and more, all based on a Figma design mockup.
                                
                                Project Goals
Provide users with a visually appealing and easy-to-navigate listing of available rooms, including images.
Display a static list of hotel rooms with images and basic details.
Present general information about the hotel and contact details.
Build a fully functional, styled hotel booking interface using Next.js with the pages directory
Maintain a clean, scalable folder structure.
Integrate reusable components like a carousel, modals (login/signup), and room cards.

                                Project folder Structure

alx-listing-app/
├── public/
│   └── assets/
│       └── rooms/
        └── carousel/         
│
├── components/
│   ├── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── ImageCarousel.tsx
│       ├── LoginModal.tsx
│       └── SignupModal.tsx

├── constants/     
│             └──index.ts

├── Interfaces/     
│             └──index.ts
│
├── pages/
│   └── api/
│   ├── _app.tsx_
    ├── _documents.tsx
    └── _index.tsx             
│
├── styles/
│   └── globals.css            
│
├── next.config.ts             
├── tailwind.config.ts        
├── tsconfig.json             
└── package.json

                Technologies Used

Next.js (Pages directory)

React

Tailwind CSS

TypeScript

                How to Run the Project Locally

Clone the Repository

bash
Copy
Edit
git clone <your-repo-url>
cd alx-listing-app
Install Dependencies

bash
Copy
Edit
npm install
Run the Development Server

bash
Copy
Edit
npm run dev
Open in Browser
Navigate to http://localhost:3000

                                 Components Included
                                 
ImageCarousel (components/common/ImageCarousel.tsx)
A visually engaging component showcasing hotel highlights.

Card (components/common/Card.tsx)
Displays room image, title, description, and a call-to-action button.

Form (inside pages/index.tsx)
Collects check-in/check-out dates, adults, and children count.

LoginModal & SignupModal
Handles user authentication UI.