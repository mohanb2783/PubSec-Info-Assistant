import React from 'react';
import styles from './HomePage.module.css';
import screen from '../../assets/screen.png';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The AI platform for
            <br />
            AI-native enterprises.
          </h1>
          <p className={styles.heroSubtitle}>
            K7 empowers every employee to work smarter with AI-powered knowledge management.
            Transform your organization's knowledge workflow with intelligent document processing,
            advanced analytics, and seamless collaboration tools.
          </p>
          <div className={styles.heroButtons}>
            <button onClick={()=>navigate('/')} className={styles.primaryButton}>Explore</button>
            {/* <button className={styles.secondaryButton}>
              Watch video
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={styles.arrow}
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}
          </div>
          <div className={styles.ratings}>
            <div className={styles.rating}>
              <span className={styles.stars}>★★★★★</span>
              <div className={styles.ratingText}>
                <div>4.8 stars</div>
                <div className={styles.reviews}>130+ reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src={screen}
            alt="K7 Interface"
            className={styles.interfaceImage}
          />
        </div>
      </section>

      <section className={styles.features}>
        <div className={`${styles.featureCard} ${styles.blueCard}`}>
          <h2>Find & understand information</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h3>Smart Search</h3>
              <p>Advanced semantic search across all your documents, data sources, and team knowledge bases</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Intelligent Exploration</h3>
              <p>AI-powered discovery of insights, patterns, and connections in your organization's data</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Interactive Chat</h3>
              <p>Natural language conversations with your documents and structured data sources</p>
            </div>
          </div>
        </div>

        <div className={`${styles.featureCard} ${styles.purpleCard}`}>
          <h2>Create & analyze content</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h3>Multi-format Processing</h3>
              <p>Support for PDF, PPT, XLSX, TSV, CSV, JSON, and Parquet formats with intelligent parsing</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Smart Summarization</h3>
              <p>AI-powered summaries of documents, meeting transcripts, and discussion threads</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Deep Analysis</h3>
              <p>Extract key insights, trends, and actionable recommendations from your content</p>
            </div>
          </div>
        </div>

        <div className={`${styles.featureCard} ${styles.greenCard}`}>
          <h2>Integrate & automate</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h3>Universal Connectivity</h3>
              <p>Seamless integration with SharePoint, OneDrive, Google Drive, and major cloud platforms</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Workflow Automation</h3>
              <p>Automate document processing, analysis, and knowledge sharing workflows</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Team Collaboration</h3>
              <p>Real-time collaboration features with role-based access and sharing controls</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productSections}>
        <div className={styles.productSection}>
          <div className={styles.productContent}>
            <h3 className={styles.productLabel}>K7 Chat Assistant</h3>
            <h2 className={styles.productTitle}>Find answers & generate content you can trust.</h2>
            <p className={styles.productDescription}>
              Experience intelligent conversations with your data. K7 Chat understands context, You can ask questions to it regarding Work, or Web, or you can chat with LLMs.
              It remembers previous interactions, and provides accurate, sourced responses from
              your knowledge base.
            </p>
            <button onClick={()=>navigate('/chat')} className={styles.exploreButton}>
              Explore K7 Chat Assistant
            </button>
          </div>
          <div className={styles.productDemo}>
            <img
              src={screen}
              className={styles.productImage}
            />
          </div>
        </div>

        <div className={`${styles.productSection} ${styles.reversed}`}>
          <div className={styles.productContent}>
            <h3 className={styles.productLabel}>K7 Docs Manager</h3>
            <h2 className={styles.productTitle}>Manage and analyze your content intelligently.</h2>
            <p className={styles.productDescription}>
              Transform how you handle documents with AI-powered processing, smart categorization,
              and automated metadata extraction. Support for multiple formats and intelligent
              version control.
            </p>
            <button onClick={()=>navigate('/content')} className={styles.exploreButton}>
              Discover K7 Docs Manager
            </button>
          </div>
          <div className={styles.productDemo}>
            <img
              src={screen}
              alt="K7 Docs Interface"
              className={styles.productImage}
            />
          </div>
        </div>

        <div className={styles.productSection}>
          <div className={styles.productContent}>
            <h3 className={styles.productLabel}>K7 Math</h3>
            <h2 className={styles.productTitle}>Solve complex mathematical problems with ease.</h2>
            <p className={styles.productDescription}>
              From basic calculations to advanced mathematical modeling, K7 Math handles
              equations, provides step-by-step solutions, and supports various mathematical
              notations and formats.
            </p>
            <button onClick={()=>navigate('/tutor')} className={styles.exploreButton}>
              Try K7 Math Assistant
            </button>
          </div>
          <div className={styles.productDemo}>
            <img
              src={screen}
              alt="K7 Math Interface"
              className={styles.productImage}
            />
          </div>
        </div>

        <div className={`${styles.productSection} ${styles.reversed}`}>
          <div className={styles.productContent}>
            <h3 className={styles.productLabel}>K7 Analytics Assistant</h3>
            <h2 className={styles.productTitle}>Transform data into actionable insights.</h2>
            <p className={styles.productDescription}>
              Powerful tabular data analysis with interactive visualizations, statistical
              analysis, and automated reporting. Connect to multiple data sources and create
              custom dashboards.
            </p>
            <button onClick={()=>navigate('/tda')} className={styles.exploreButton}>
              Explore K7 Analytics Assistant
            </button>
          </div>
          <div className={styles.productDemo}>
            <img
              src={screen}
              alt="K7 Analytics Interface"
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

    </div>
      <footer className={styles.footer}>
        <p>&copy; 2023 K7 Knowledge Assistant. All rights reserved.</p>
      </footer>
      </>
  );
};

export default HomePage;

