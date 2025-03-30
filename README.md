# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a8418113-55ee-4a12-a9fc-2357c5377011

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a8418113-55ee-4a12-a9fc-2357c5377011) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

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

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a8418113-55ee-4a12-a9fc-2357c5377011) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Analytics with Mixpanel

This project uses Mixpanel to track user interactions and page views. The analytics implementation helps monitor user engagement and improve the user experience.

### Setup

1. Create a [Mixpanel](https://mixpanel.com) account if you don't have one already
2. Create a new project in Mixpanel and get your project token
3. Copy `.env.example` to `.env.local` and add your Mixpanel token:

```sh
VITE_MIXPANEL_TOKEN=your_mixpanel_token_here
```

### Tracked Events

The following events are tracked in the application:

- **Page Views**: When users navigate to different pages
- **Section Views**: When users scroll to different sections
- **CTA Clicks**: When users click on call-to-action buttons
- **Navigation**: When users navigate through the site
- **Feature Engagement**: When users interact with feature sections
- **Downloads**: When users click on download buttons
- **External Links**: When users click on external links

### Custom Analytics Hook

A custom hook `useAnalytics` is available for tracking events. Import it in your components:

```tsx
import useAnalytics from "@/hooks/useAnalytics";

const MyComponent = () => {
  const { trackEvent, trackCTAClick } = useAnalytics();

  const handleButtonClick = () => {
    trackCTAClick("button_name", "Button Text", "location");
  };

  return <button onClick={handleButtonClick}>Click Me</button>;
};
```
