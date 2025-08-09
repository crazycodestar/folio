# Portfolio - Olalekan Adekanmbi

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Portfolio Preview](public/profile.png)

## 🚀 Features

- **Responsive Design** - Optimized for all device sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Performance** - Built with Next.js 15 and optimized for speed
- **Type Safety** - Full TypeScript implementation
- **Dark Mode Ready** - Built with dark/light mode considerations
- **SEO Optimized** - Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **Font**: Geist Mono
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── main/             # Main page sections
│   │   ├── HeroSection.tsx    # Hero/landing section
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── Projects.tsx       # Featured projects
│   │   └── BlogPosts.tsx      # Latest blog posts
│   └── container.tsx      # Layout container
├── config.ts             # Site configuration & content
├── lib/                  # Utilities
└── public/              # Static assets
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio

## ⚙️ Configuration

The portfolio content is centrally managed in `config.ts`. Update this file to customize:

- Personal information and bio
- Projects showcase
- Blog posts
- Navigation links
- Tech stack
- Social media links
- Contact information

## 📋 Sections

### Hero Section
- Personal introduction and branding
- Tech stack showcase
- Professional profile image
- Call-to-action buttons

### Projects
- Featured project showcase with Bento grid layouts
- Project descriptions and key features
- Live demo and GitHub repository links
- Responsive image galleries

### Blog Posts
- Latest blog post previews
- External blog integration ready
- Reading time and publication dates

## 🎨 Customization

### Styling
- Tailwind CSS 4 for styling
- Custom orange accent color (`orange-600`)
- Responsive design patterns
- Smooth animations and transitions

### Content
Edit `config.ts` to update:
- Personal details
- Project information
- Blog post links
- Social media profiles

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Build for Production
```bash
pnpm build
pnpm start
```

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use this as a template:

1. Fork the repository
2. Update `config.ts` with your information
3. Replace images in `public/` folder
4. Customize styling as needed

## 📄 License

This project is for personal use. Feel free to use as inspiration for your own portfolio.

## 📞 Contact

**Olalekan Adekanmbi**
- Email: [Contact via portfolio](mailto:your.email@example.com)
- LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- GitHub: [github.com/yourusername](https://github.com/yourusername)

---

Built with ❤️ using Next.js
