#!/usr/bin/env node

/**
 * Simple script to create a new blog post
 * Usage: node create-post.js "Post Title" "post-slug"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const title = process.argv[2];
const slug = process.argv[3] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

if (!title) {
  console.error('Usage: node create-post.js "Post Title" [slug]');
  process.exit(1);
}

const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
const fileName = `${slug}.md`;
const filePath = path.join(__dirname, 'src', 'posts', fileName);

const frontmatter = `---
title: ${title}
date: ${date}
excerpt: Add a brief description of your post here
readTime: 5 min read
---

# ${title}

Write your blog post content here using Markdown.

You can include:

- **Bold text**
- *Italic text*
- \`inline code\`
- [Links](https://example.com)
- Lists and more!

## Code Examples

\`\`\`javascript
// Your code here
console.log('Hello, world!');
\`\`\`

Happy blogging! 🎉

<a href="/">← Back to homepage</a>`;

try {
  fs.writeFileSync(filePath, frontmatter);
  console.log(`✅ Created new blog post: ${filePath}`);
  console.log(`📝 Edit the file to add your content`);
  console.log(`🌐 Your post will be available at: /blog/${slug}`);
} catch (error) {
  console.error('Error creating post:', error.message);
  process.exit(1);
}
