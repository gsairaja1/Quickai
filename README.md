# 🚀 QuickAI - AI-Powered Creative Suite

<div align="center">
  <img src="https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-18.0.0-green?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5.1.0-black?style=for-the-badge&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-blue?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge&logo=clerk" alt="Clerk" />
</div>

<br>

<div align="center">
  <h3>🎨 Transform Your Ideas into Reality with AI</h3>
  <p>QuickAI is a comprehensive AI-powered platform that helps you create stunning images, generate articles, review resumes, and more - all powered by cutting-edge AI technology.</p>
</div>

## ✨ Features

### 🎭 AI Image Generation
- **Stable Diffusion Integration**: Create stunning images from text prompts
- **Multiple Styles**: Choose from various artistic styles and themes
- **High Resolution**: Generate high-quality images up to 1024x1024
- **Batch Processing**: Create multiple variations at once

### 📝 Content Creation
- **Article Generation**: AI-powered article writing with customizable length
- **Blog Title Suggestions**: Get creative and engaging blog titles
- **Smart Prompts**: Intelligent prompt suggestions for better results

### 📄 Resume Review
- **AI-Powered Analysis**: Get detailed feedback on your resume
- **PDF Support**: Upload and analyze PDF resumes
- **Professional Insights**: Receive actionable recommendations
- **Strengths & Weaknesses**: Comprehensive evaluation of your document

### 🖼️ Image Editing
- **Background Removal**: Remove backgrounds from images instantly
- **Object Removal**: Clean up images by removing unwanted objects
- **High-Quality Results**: Professional-grade image processing

### 👥 Community Features
- **Share Creations**: Publish your AI-generated content
- **Like & Interact**: Engage with other users' creations
- **User Dashboard**: Track your creation history and usage

### 🔐 Authentication & Security
- **Clerk Integration**: Secure user authentication
- **Premium Plans**: Freemium model with usage limits
- **API Rate Limiting**: Fair usage policies

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL (Neon)** - Database
- **Multer** - File upload handling
- **PDF Parse** - PDF text extraction

### AI Services
- **Google Gemini** - Text generation and analysis
- **Stable Diffusion** - Image generation
- **API Layer** - Resume review service
- **ClipDrop** - Image editing

### Authentication & Storage
- **Clerk** - User authentication
- **Cloudinary** - Image storage and optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon recommended)
- API keys for AI services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gsairaja1/Quickai.git
   cd Quickai
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd client
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   ```



3. **Start the development servers**
   ```bash
   # Start backend (from client/server/)
   npm run server
   
   # Start frontend (from client/)
   npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

## 📁 Project Structure

```
QuickAI/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Static assets
│   │   └── main.jsx       # App entry point
│   ├── server/            # Backend Express application
│   │   ├── controllers/   # Route controllers
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── configs/       # Configuration files
│   │   └── server.js      # Server entry point
│   └── package.json
└── README.md
```

## 🎯 Key Features Explained

### AI Image Generation
The platform uses Stable Diffusion to generate high-quality images from text descriptions. Users can specify style, mood, and composition to create unique artwork.

### Resume Review System
Upload your PDF resume and get AI-powered feedback including:
- Overall impression analysis
- Strengths identification
- Areas for improvement
- Actionable recommendations
- Professional formatting tips

### Community Hub
Share your AI-generated creations with the community:
- Like and interact with other users' work
- Discover new creative ideas
- Build a portfolio of your AI creations

## 🔧 API Endpoints

### Authentication
- `POST /api/user/login` - User authentication
- `GET /api/user/profile` - Get user profile

### AI Services
- `POST /api/ai/generate-image` - Generate AI images
- `POST /api/ai/generate-article` - Create articles
- `POST /api/ai/resume-review` - Review resumes
- `POST /api/ai/remove-background` - Remove image backgrounds

### User Content
- `GET /api/user/get-user-creations` - Get user's creations
- `GET /api/user/get-published-creations` - Get community creations
- `POST /api/user/toggle-like-creations` - Like/unlike creations

## 🎨 UI/UX Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time feedback
- **Drag & Drop**: Easy file uploads

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **Rate Limiting**: Prevent API abuse
- **File Validation**: Secure file uploads
- **CORS Protection**: Cross-origin security
- **Input Sanitization**: Prevent injection attacks

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel --prod
```

### Backend (Railway/Render)
```bash
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini** for AI text generation
- **Stable Diffusion** for image generation
- **Clerk** for authentication
- **Neon** for database hosting
- **Cloudinary** for image storage


<div align="center">
  <p>Made with ❤️ by the QuickAI Team</p>
  <p>Transform your creativity with AI today! 🚀</p>
</div>
