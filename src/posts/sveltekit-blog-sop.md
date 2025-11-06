---
title: "Standard Operating Procedure for SvelteKit Blog Management"
date: "2025-11-04"
readTime: "15 min read"
---

# Standard Operating Procedure for SvelteKit Blog Management

This comprehensive guide outlines the standard operating procedures for maintaining and operating this SvelteKit-powered static blog. Whether you're a developer working on the codebase or a content creator adding new posts, this SOP will help you understand the workflow and best practices.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Development Environment Setup](#development-environment-setup)
3. [Content Creation Workflow](#content-creation-workflow)
4. [Code Development Workflow](#code-development-workflow)
5. [Build and Deployment Process](#build-and-deployment-process)
6. [Maintenance and Troubleshooting](#maintenance-and-troubleshooting)
7. [Best Practices](#best-practices)

## Project Overview

### Architecture

This blog is built using **SvelteKit** with the following key technologies:

- **Framework**: SvelteKit 2.x with static site generation
- **Styling**: Tailwind CSS 4.x with Typography plugin
- **Content**: Markdown files processed by mdsvex
- **Deployment**: Static site hosted on GitHub Pages
- **Build Tool**: Vite

### File Structure

```
my-svelte-site/
├── src/
│   ├── app.css                 # Global Tailwind styles
│   ├── app.html               # Base HTML template
│   ├── lib/
│   │   ├── components/        # Reusable Svelte components
│   │   │   └── BlogCard.svelte # Blog post card component
│   │   └── assets/           # Static assets (favicon, etc.)
│   ├── posts/                # Markdown blog posts
│   │   ├── *.md              # Individual blog posts
│   └── routes/               # SvelteKit routes
│       ├── +layout.svelte    # Root layout
│       ├── +page.svelte      # Homepage
│       └── blog/             # Blog section
│           ├── +page.svelte  # Blog index
│           ├── +page.ts      # Blog data loading
│           ├── [slug]/       # Dynamic post routes
│           │   └── +page.svelte
│           └── _post.svelte  # Post layout wrapper
├── static/                   # Static files (robots.txt, etc.)
├── package.json              # Dependencies and scripts
├── svelte.config.ts          # SvelteKit configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── create-post.js           # Post creation utility
```

### Key Features

- **File-based routing**: URLs automatically generated from file structure
- **Markdown support**: Blog posts written in Markdown with frontmatter
- **Static generation**: Pre-built for optimal performance
- **Responsive design**: Mobile-first with Tailwind CSS
- **SEO optimized**: Proper meta tags and structured content
- **Fast deployment**: Automated GitHub Pages deployment

## Development Environment Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm**: Version 8.x or higher (comes with Node.js)
- **Git**: For version control
- **Code editor**: VS Code recommended (with Svelte extension)

### Initial Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yoloinfinity55/my-svelte-site.git
   cd my-svelte-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify installation**:
   ```bash
   npm run check
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**: Navigate to `http://localhost:5173`

### Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run check` | Type checking and linting |
| `npm run format` | Format code with Prettier |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run create-post "Title"` | Create new blog post |

## Content Creation Workflow

### Creating Blog Posts

#### Method 1: Using the Create Post Script (Recommended)

1. **Run the creation script**:
   ```bash
   npm run create-post "Your Blog Post Title"
   ```

   Or with custom slug:
   ```bash
   npm run create-post "Your Blog Post Title" "custom-slug-2024"
   ```

2. **Edit the generated file**: The script creates `src/posts/your-blog-post-title.md`

3. **Update frontmatter and content**:
   ```markdown
   ---
   title: Your Blog Post Title
   date: 2024-11-05
   excerpt: Brief description of your post (1-2 sentences)
   readTime: 5 min read
   ---

   # Your Blog Post Title

   Your content here...

   <a href="../../">← Back to homepage</a>
   ```

#### Method 2: Manual Creation

1. **Create new markdown file** in `src/posts/`:
   ```bash
   touch src/posts/new-post.md
   ```

2. **Add frontmatter and content** following the template above.

### Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Post title | `My First Post` |
| `date` | Yes | Publication date | `2024-11-05` |
| `excerpt` | Yes | Brief description | `This is my first blog post...` |
| `readTime` | Yes | Estimated reading time | `5 min read` |

### Markdown Formatting Guidelines

#### Headers
```markdown
# Main Title (H1 - automatically from title)
## Section Header (H2)
### Subsection (H3)
#### Sub-subsection (H4)
```

#### Text Formatting
```markdown
**Bold text**
*Italic text*
`inline code`
~~strikethrough~~
```

#### Links and Images
```markdown
[Link text](https://example.com)
![Alt text](image-url.jpg)
```

#### Lists
```markdown
- Unordered item
- Another item

1. Ordered item
2. Another ordered item
```

#### Code Blocks
```javascript
// Syntax highlighted code
function hello() {
  console.log('Hello, world!');
}
```

#### Blockquotes
```markdown
> This is a blockquote
> It can span multiple lines
```

### Content Best Practices

1. **Use descriptive titles**: Make them SEO-friendly and engaging
2. **Write compelling excerpts**: Should entice readers to click
3. **Estimate read time accurately**: Base on 200-250 words per minute
4. **Include back link**: Always add `<a href="../../">← Back to homepage</a>`
5. **Use semantic HTML**: Proper heading hierarchy
6. **Optimize images**: Use appropriate sizes and alt text
7. **Internal linking**: Link to other posts when relevant

## Code Development Workflow

### Component Development

#### Creating New Components

1. **Create component file** in `src/lib/components/`:
   ```bash
   touch src/lib/components/NewComponent.svelte
   ```

2. **Follow component structure**:
   ```svelte
   <script lang="ts">
     interface Props {
       title: string;
       // other props
     }

     let { title }: Props = $props();
   </script>

   <!-- Template -->
   <div class="component-class">
     <h2>{title}</h2>
   </div>

   <style>
     /* Component-specific styles if needed */
   </style>
   ```

#### Using Components

```svelte
<script lang="ts">
  import NewComponent from '$lib/components/NewComponent.svelte';
</script>

<NewComponent title="Hello World" />
```

### Route Development

#### Adding New Pages

1. **Create route file**: `src/routes/new-page/+page.svelte`

2. **Add page logic**:
   ```svelte
   <script lang="ts">
     // Page logic here
   </script>

   <svelte:head>
     <title>Page Title</title>
   </svelte:head>

   <!-- Page content -->
   ```

#### Adding Dynamic Routes

1. **Create dynamic folder**: `src/routes/blog/[slug]/+page.svelte`

2. **Handle parameters**:
   ```svelte
   <script lang="ts">
     export async function load({ params }: { params: { slug: string } }) {
       // Load data based on slug
       return { data };
     }
   </script>
   ```

### Styling Guidelines

#### Tailwind CSS Classes

- Use **utility-first** approach
- Follow **mobile-first** responsive design
- Use **semantic color names** (blue-600, gray-900, etc.)
- Leverage **Tailwind Typography** for prose content

#### Common Patterns

```svelte
<!-- Card component -->
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">

<!-- Button styles -->
<button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Typography -->
<h1 class="text-3xl font-bold mb-4">
<p class="text-gray-700 leading-relaxed">
```

### State Management

#### Local Component State

```svelte
<script lang="ts">
  let count = $state(0);

  function increment() {
    count++;
  }
</script>
```

#### Reactive Statements

```svelte
<script lang="ts">
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>
```

## Build and Deployment Process

### Local Build Testing

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Preview locally**:
   ```bash
   npm run preview
   ```

3. **Verify build output**: Check `build/` directory

### Deployment to GitHub Pages

#### Automated Deployment

1. **Ensure clean working directory**:
   ```bash
   git status
   git add .
   git commit -m "Your commit message"
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   This script:
   - Builds the project
   - Creates/pushes to `gh-pages` branch
   - Deploys to GitHub Pages

#### Manual Deployment

If automated deployment fails:

1. **Build project**:
   ```bash
   npm run build
   ```

2. **Switch to build output**:
   ```bash
   cd build
   ```

3. **Create CNAME file** (if using custom domain):
   ```bash
   echo "yourdomain.com" > CNAME
   ```

4. **Deploy manually**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main:gh-pages
   ```

### Deployment Checklist

- [ ] All changes committed and pushed
- [ ] Build completes without errors
- [ ] Preview works locally
- [ ] Images and assets load correctly
- [ ] Links work properly
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present

## Maintenance and Troubleshooting

### Common Issues

#### Build Failures

**Problem**: `npm run build` fails
**Solutions**:
1. Check for TypeScript errors: `npm run check`
2. Verify all imports are correct
3. Ensure all required dependencies are installed
4. Check for syntax errors in Svelte components

#### Post Not Appearing

**Problem**: New blog post doesn't show up
**Solutions**:
1. Verify file is in `src/posts/` directory
2. Check frontmatter syntax (YAML format)
3. Ensure date format is `YYYY-MM-DD`
4. Restart development server
5. Check browser cache

#### Styling Issues

**Problem**: Tailwind classes not working
**Solutions**:
1. Verify class names are correct
2. Check `tailwind.config.js` content paths
3. Ensure file is included in content array
4. Restart development server

#### Routing Problems

**Problem**: 404 errors on valid routes
**Solutions**:
1. Check file structure matches route
2. Verify `+page.svelte` files exist
3. Check for typos in folder names
4. Ensure proper export syntax

### Performance Optimization

#### Image Optimization

1. **Use appropriate formats**: WebP for modern browsers, JPEG/PNG fallback
2. **Compress images**: Use tools like ImageOptim or TinyPNG
3. **Responsive images**: Different sizes for different screen sizes

#### Bundle Analysis

```bash
npm install -D vite-bundle-analyzer
npx vite-bundle-analyzer build
```

#### Code Splitting

SvelteKit automatically code-splits routes. For manual splitting:

```javascript
// In +page.ts
export async function load({ params }) {
  const module = await import(`./posts/${params.slug}.svelte`);
  return { component: module.default };
}
```

### SEO and Analytics

#### Meta Tags

Ensure each page has proper meta tags:

```svelte
<svelte:head>
  <title>{title} - My SvelteKit Blog</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
</svelte:head>
```

#### Analytics Integration

Add Google Analytics or similar in the root layout:

```svelte
<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    // Add analytics code
  });
</script>
```

## Best Practices

### Code Quality

1. **TypeScript**: Use strict typing for all components
2. **Linting**: Run `npm run lint` before commits
3. **Formatting**: Use `npm run format` for consistent code style
4. **Testing**: Add tests for critical functionality

### Content Strategy

1. **Consistent publishing**: Maintain regular posting schedule
2. **Quality over quantity**: Focus on valuable, well-researched content
3. **SEO optimization**: Use relevant keywords in titles and content
4. **Engagement**: Include calls-to-action and social sharing

### Performance

1. **Lazy loading**: Use SvelteKit's built-in lazy loading
2. **Optimize images**: Compress and use appropriate formats
3. **Minimize bundle size**: Remove unused dependencies
4. **Caching**: Leverage browser caching for static assets

### Security

1. **Input validation**: Sanitize user inputs
2. **Dependency updates**: Regularly update packages
3. **CSP headers**: Implement Content Security Policy
4. **HTTPS**: Ensure secure connections

### Accessibility

1. **Semantic HTML**: Use proper heading hierarchy
2. **Alt text**: Provide descriptive alt text for images
3. **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
4. **Color contrast**: Maintain WCAG compliance
5. **Screen readers**: Test with screen reader software

### Version Control

1. **Commit frequently**: Make small, focused commits
2. **Branch strategy**: Use feature branches for new work
3. **Pull requests**: Review code changes before merging
4. **Documentation**: Update this SOP when processes change

---

## Quick Reference

### File Locations

- **Blog posts**: `src/posts/`
- **Components**: `src/lib/components/`
- **Routes**: `src/routes/`
- **Styles**: `src/app.css`
- **Config**: `svelte.config.ts`, `tailwind.config.js`

### Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run check           # Type check and lint
npm run format          # Format code

# Content
npm run create-post "Title"  # Create new post

# Production
npm run build           # Build for production
npm run preview         # Preview build
npm run deploy          # Deploy to GitHub Pages
```

### Support Resources

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [mdsvex Documentation](https://mdsvex.com/)
- [Svelte Tutorial](https://svelte.dev/tutorial)

---

This SOP should be updated whenever significant changes are made to the workflow or technology stack. Last updated: November 5, 2024.

<a href="../../">← Back to homepage</a>
