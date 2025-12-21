# Asmbly Volunteer Dashboard UI Kit

A shared React component library for the Asmbly Volunteer Dashboard, built with Tailwind CSS, TypeScript, and Lucide Icons.

## Features

- **Atomic Design**: Components organized by Atoms, Molecules, Organisms, Templates, and Pages.
- **Tailwind CSS**: Pre-configured design tokens (colors, typography) matching Asmbly branding.
- **Dark Mode**: Built-in support for dark mode via Tailwind classes.
- **Testing**: Comprehensive tests with Vitest + React Testing Library.
- **Storybook**: Interactive documentation (run `npm run storybook`).

## Components
 
### Atoms
- `Badge` (Status, Area indicators)
- `Button` (Primary, Secondary, Outline, Ghost, Danger)
- `Input` (Text fields with icon support)
- `Logo` (Asmbly brand logo)
- `ProgressBar` (Progress visualization)
- `Select` (Dropdown selection)

### Molecules
- `AnnouncementBanner`
- `AuthDivider`
- `ReportIssueCard`
- `SidebarItem`
- `SocialLoginButton`
- `StatCard`
- `TaskListItem`

### Organisms
- `AuthCard`
- `DashboardHeader`
- `ImpactWidgets`
- `LoginForm`
- `Sidebar`
- `TaskList`

### Templates
- `DashboardLayout`

### Pages
- `AuthPage`
- `VolunteerDashboardPage`

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start Storybook
npm run storybook

# Build library
npm run build
```

## Running Storybook

To start the interactive component explorer (Storybook) locally:

```bash
npm run storybook
```

#### From the Project Root
```bash
npm run storybook -w @asmbly/ui-kit
```


This will start the development server at `http://localhost:6006`.
