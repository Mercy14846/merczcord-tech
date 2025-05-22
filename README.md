# Merczcord Technologies Website

## Project Overview

This is the official website for Merczcord Technologies, a dynamic firm specializing in providing cutting-edge geospatial solutions. The website showcases the company's services, mission, and contact information in a modern, responsive design.

## Features

- **Modern UI/UX**: Clean, minimalist design with smooth animations and transitions
- **Responsive Layout**: Fully responsive across all device sizes (mobile, tablet, desktop)
- **Service Showcase**: Detailed information about our geospatial solutions and services
- **Contact Form**: Easy-to-use contact form for inquiries and collaboration opportunities
- **Performance Optimized**: Fast loading times and optimized assets
- **Brand Integration**: Consistent use of Merczcord brand colors (teal and orange) and logo throughout the site

## Technology Stack

This project is built with:

- **Vite**: Next-generation frontend tooling
- **TypeScript**: Strongly typed JavaScript for better developer experience
- **React**: Component-based UI library
- **shadcn-ui**: High-quality UI components that are accessible and customizable
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide Icons**: Beautiful, customizable icons

## Brand Identity

Merczcord Technologies' brand is represented by:

- **Logo**: A distinctive mark featuring a location pin in orange/yellow against a dark teal circular background
- **Colors**: 
  - Primary: Dark Teal (#0D3B45) - Representing trust, professionalism, and stability
  - Secondary: Orange/Yellow (#FFAA00) - Representing innovation, energy, and optimism
- **Typography**: Clean, modern sans-serif fonts that emphasize readability and professionalism

## Services Offered

Merczcord Technologies provides specialized services in:

- Urban Planning
- Road Transportation Planning
- Disaster and Flooding Management
- Navigation Systems
- Environmental Impact Assessments
- Mapping Services

## Target Audience

- Government agencies
- Urban planners
- Environmental consultants
- Transportation authorities
- Disaster management organizations
- Real estate developers
- Educational institutions
- Non-profit organizations
- Community groups focused on sustainable development

## How to Edit This Project

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Future Development Plans

- Integration with Supabase for backend functionality
- Authentication system for client portal
- Dynamic project showcase with filtering options
- Blog section for industry insights and company news
- Interactive maps demonstrating our capabilities

## Deployment

This project is configured for easy deployment on [Render](https://render.com), a modern cloud platform.

### Deployment Steps

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Sign up for a free Render account at https://render.com
3. Create a new "Static Site" service in your Render dashboard
4. Connect your Git repository
5. The deployment configuration is already set up in the `render.yaml` file
6. Render will automatically build and deploy your site
7. Once deployed, your site will be accessible at a URL provided by Render

### Manual Configuration (if needed)

If you prefer to configure deployment manually in the Render dashboard:

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Environment Variables**: 
  - `NODE_VERSION`: 18.18.0

## Custom Domain Setup

To set up a custom domain with your Render deployment:

1. Go to your Render dashboard and select your website service
2. Navigate to the "Settings" tab
3. Scroll down to the "Custom Domain" section
4. Add your domain name and follow the DNS configuration instructions provided

## Contact

For more information about Merczcord Technologies and our services, please contact us through the form on our website or via email at info@merczcord.com.
