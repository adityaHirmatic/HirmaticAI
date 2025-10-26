import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import '@/App.css';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import EmployersPage from '@/pages/EmployersPage';
import CandidatesPage from '@/pages/CandidatesPage';
import ContactPage from '@/pages/ContactPage';
import UploadResumePage from '@/pages/UploadResumePage';
import CareersPage from '@/pages/CareersPage';
import BlogPage from '@/pages/BlogPage';
import RecruitingPage from '@/pages/services/RecruitingPage';
import FractionalCHROPage from '@/pages/services/FractionalCHROPage';
import ResumeBuildingPage from '@/pages/services/ResumeBuildingPage';
import LayoffSupportPage from '@/pages/services/LayoffSupportPage';
import SalaryCalculatorPage from '@/pages/tools/SalaryCalculatorPage';

// Blog Posts
import AIRecruitingPost from '@/pages/blog-posts/AIRecruitingPost';
import HRTechPost from '@/pages/blog-posts/HRTechPost';
import HybridHiringPost from '@/pages/blog-posts/HybridHiringPost';
import EmployerBrandPost from '@/pages/blog-posts/EmployerBrandPost';
import ATSResumePost from '@/pages/blog-posts/ATSResumePost';
import LayoffComebackPost from '@/pages/blog-posts/LayoffComebackPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/upload-resume" element={<UploadResumePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          {/* Services */}
          <Route path="/services/recruiting" element={<RecruitingPage />} />
          <Route path="/services/fractional-chro" element={<FractionalCHROPage />} />
          <Route path="/services/resume-building" element={<ResumeBuildingPage />} />
          <Route path="/services/layoff-support" element={<LayoffSupportPage />} />
          
          {/* Tools */}
          <Route path="/tools/salary-calculator" element={<SalaryCalculatorPage />} />
          
          {/* Blog Posts */}
          <Route path="/blog/ai-recruiting-precision" element={<AIRecruitingPost />} />
          <Route path="/blog/hr-tech-ai-workforce" element={<HRTechPost />} />
          <Route path="/blog/hybrid-hiring-systems" element={<HybridHiringPost />} />
          <Route path="/blog/employer-brand-aeo" element={<EmployerBrandPost />} />
          <Route path="/blog/ats-proof-resume-ai" element={<ATSResumePost />} />
          <Route path="/blog/layoff-comeback-plan" element={<LayoffComebackPost />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;