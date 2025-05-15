import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';


const BlogPage = () => {
  // State management
    const { t } = useTranslation();  // Translation hook
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
    authorName: '',
    authorEmail: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const postsPerPage = 6;
  const initialPosts = [
    {
      id: 1,
      slug: "account-management-program",

      title: "U-Link Gulf Seller Account Management Program",
      content: `<p>U-Link Gulf is one of the fastest-growing companies offering Account Management, IT Services, and Logistics solutions across the Gulf region. We partner with Amazon and OEMs to help sellers in countries like the UAE, Saudi Arabia, and Qatar manage their accounts and grow their e-commerce businesses.</p><p>This program includes:</p><ul><li>Inventory Management</li><li>Sales Management</li><li>Order Management</li><li>Reviews & Ratings Management</li><li>Account Health Management</li><li>Buyer-Seller Communication</li><li>Sales Boost</li></ul>`,
      excerpt: "U-Link Gulf delivers end-to-end Amazon Seller Account Management, IT Services, and Logistics support in the Gulf, in collaboration with OEMs.",
      featuredImage: "/Images/AccountM.avif",
      category: "Account Management",
      publishedAt: "2024-01-01T00:00:00Z",
      readTime: "7 min",
      author: "U-Link Gulf Team",
      likes: 35,
      views: 120
    },
    {
      id: 2,
      slug: "sales-boost-strategy",
      title: "Sales Boost Strategy for Amazon Sellers in the Gulf",
      content: `<p>Our Sales Boost strategy is designed specifically for Gulf-based Amazon sellers, including OEM product lines. We enhance visibility and results through localized listings, Arabic-English content, and targeted advertising.</p><p>The strategy includes:</p><ol><li>Listing Enhancement with keyword-optimized Arabic & English content</li><li>Gulf-specific Sponsored Product Ads</li><li>Reviews & Ratings Strategy</li></ol>`,
      excerpt: "Tailored for Gulf sellers and OEM brands, this strategy optimizes listings, boosts visibility, and drives conversions across Amazon marketplaces.",
      featuredImage: "/Images/Sales.avif",
      category: "Sales Boost",
      publishedAt: "2024-01-02T12:00:00Z",
      readTime: "6 min",
      author: "U-Link Gulf Team",
      likes: 45,
      views: 230
    },
    {
      id: 3,
      slug: "account-health-management",
      title: "Account Health Management for Amazon Gulf Sellers",
      content: `<p>Good account health is key to seller success. We support Amazon and OEM sellers across the Gulf (UAE, Saudi Arabia, Qatar) by monitoring key metrics and ensuring compliance with Amazon's regional guidelines.</p><p>We provide:</p><ul><li>ODR, LSR, CR monitoring</li><li>Negative feedback & A-to-Z resolution</li><li>Account reinstatement & policy compliance</li></ul>`,
      excerpt: "U-Link Gulf ensures Amazon and OEM sellers maintain strong account health across Gulf marketplaces through performance tracking and compliance support.",
      featuredImage: "/Images/AccountH.avif",
      category: "Account Health",
      publishedAt: "2024-01-03T09:00:00Z",
      readTime: "8 min",
      author: "U-Link Gulf Team",
      likes: 55,
      views: 310
    },
    {
      id: 4,
      slug: "inventory-management-best-practices",
      title: "Best Practices for Inventory Management in the Gulf",
      content: `<p>Inventory issues impact seller performance. U-Link Gulf enables Amazon and OEM sellers to manage inventory across Gulf warehouses using real-time tools and analytics.</p><p>Key practices include:</p><ul><li>Live stock tracking</li><li>Gulf marketplace sync</li><li>Stock velocity insights</li><li>Automated reorders</li></ul>`,
      excerpt: "Smart inventory tools designed for Amazon and OEM sellers in the Gulf to ensure availability and operational efficiency.",
      featuredImage: "/Images/Inventory.avif",
      category: "Inventory Management",
      publishedAt: "2024-01-04T08:00:00Z",
      readTime: "6 min",
      author: "U-Link Gulf Team",
      likes: 30,
      views: 180
    },
    {
      id: 5,
      slug: "order-management-system",
      title: "Streamlining Order Management for Gulf Amazon Sellers",
      content: `<p>U-Link Gulf offers advanced logistics and order processing support to Amazon and OEM sellers across the GCC. Our Order Management System (OMS) enhances fulfillment accuracy and speed.</p><p>Our OMS features:</p><ul><li>Real-time order tracking</li><li>Status-based fulfillment automation</li><li>Priority dispatch by region</li><li>Gulf 3PL integrations</li></ul>`,
      excerpt: "From real-time order updates to 3PL integration, U-Link Gulf powers efficient logistics and fulfillment in the Gulf region.",
      featuredImage: "/Images/Order.avif",
      category: "Order Management",
      publishedAt: "2024-01-05T07:00:00Z",
      readTime: "5 min",
      author: "U-Link Gulf Team",
      likes: 40,
      views: 210
    },
    {
      id: 6,
      slug: "reviews-and-rating-management-strategy",
      title: "Effective Strategy for Managing Amazon Reviews in the Gulf",
      content: `<p>Reputation matters. We help Amazon and OEM sellers across the Gulf manage public perception through active review and rating strategies tailored to local markets.</p><p>Our service includes:</p><ul><li>Monitoring Amazon review channels</li><li>Fast responses to customer feedback</li><li>Insight-based product improvement</li><li>Amazon policy adherence</li></ul>`,
      excerpt: "U-Link Gulf supports review management and customer sentiment improvement for Amazon & OEM sellers in the Gulf.",
      featuredImage: "/Images/reviews.avif",
      category: "Reviews & Ratings Management",
      publishedAt: "2024-01-06T10:00:00Z",
      readTime: "7 min",
      author: "U-Link Gulf Team",
      likes: 50,
      views: 250
    },
    {
      id: 7,
      slug: "sales-performance-analysis",
      title: "Analyzing Sales Performance for Gulf-Based Amazon Sellers",
      content: `<p>We provide deep insights into sales performance for Amazon and OEM sellers operating in the Gulf. Our analytics reveal patterns in buyer behavior, pricing effectiveness, and ad results.</p><p>Analysis includes:</p><ul><li>Conversion rates & trends</li><li>Traffic source breakdown</li><li>Pricing optimization review</li><li>Actionable insights & forecasts</li></ul>`,
      excerpt: "Our Sales Performance Analysis helps OEMs and Amazon sellers in the Gulf understand growth levers through data-driven insights.",
      featuredImage: "/Images/analysis.avif",
      category: "Sales Analysis",
      publishedAt: "2024-01-07T11:00:00Z",
      readTime: "6 min",
      author: "U-Link Gulf Team",
      likes: 60,
      views: 320
    }
  ];
  
  
  
  

  // Initialize blog data
  useEffect(() => {
    setIsLoading(true);
    setPosts(initialPosts);
    setFilteredPosts(initialPosts);
    
    // Initialize comments
    const commentsMap = {};
    initialPosts.forEach(post => {
      commentsMap[post.id] = [
        { id: 1, author: 'User1', text: 'Great article!', date: '2023-10-16' },
        { id: 2, author: 'User2', text: 'Very helpful, thanks!', date: '2023-10-17' }
      ];
    });
    setComments(commentsMap);
    
    // Extract unique categories
    const uniqueCategories = ['All', ...new Set(initialPosts.map(post => post.category))];
    setCategories(uniqueCategories);
    setIsLoading(false);
  }, []);

  // Filter posts
  useEffect(() => {
    let results = posts;
    
    if (selectedCategory && selectedCategory !== 'All') {
      results = results.filter(post => post.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(results);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, posts]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle post submission
  const handleSubmitPost = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!newPost.title.trim()) errors.title = 'Title is required';
    if (!newPost.content.trim()) errors.content = 'Content is required';
    if (!newPost.category.trim()) errors.category = 'Category is required';
    if (!newPost.authorName.trim()) errors.authorName = 'Name is required';
    if (!newPost.authorEmail.trim() || !/^\S+@\S+\.\S+$/.test(newPost.authorEmail)) {
      errors.authorEmail = 'Valid email is required';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Create new post object
    const submittedPost = {
      id: Date.now(),
      slug: newPost.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      title: newPost.title,
      content: `<p>${newPost.content.replace(/\n/g, '</p><p>')}</p>`,
      excerpt: newPost.content.substring(0, 150) + '...',
      featuredImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: newPost.category,
      publishedAt: new Date().toISOString(),
      readTime: `${Math.ceil(newPost.content.split(' ').length / 200)} min`,
      author: newPost.authorName,
      likes: 0,
      views: 0
    };
    
    // Add the new post
    setPosts(prev => [submittedPost, ...prev]);
    setFilteredPosts(prev => [submittedPost, ...prev]);
    setComments(prev => ({ ...prev, [submittedPost.id]: [] }));
    
    // Update categories if new
    if (!categories.includes(newPost.category)) {
      setCategories(prev => [...prev, newPost.category]);
    }
    
    // Reset form
    setSubmissionStatus('success');
    setNewPost({
      title: '',
      content: '',
      category: '',
      authorName: '',
      authorEmail: ''
    });
    setFormErrors({});
    
    // Hide form after 3 seconds
    setTimeout(() => {
      setShowSubmissionForm(false);
      setSubmissionStatus(null);
    }, 3000);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  // Toggle post expansion
  const togglePostExpansion = (post) => {
    setActivePost(activePost?.id === post.id ? null : post);
    // Increment views when expanding
    if (activePost?.id !== post.id) {
      setPosts(posts.map(p => 
        p.id === post.id ? { ...p, views: p.views + 1 } : p
      ));
    }
  };

  // Handle like post
  const handleLikePost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // Handle add comment
  const handleAddComment = (postId) => {
    if (!newComment.trim()) return;
    
    const comment = {
      id: Date.now(),
      author: 'You',
      text: newComment,
      date: new Date().toISOString().split('T')[0]
    };
    
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment]
    }));
    
    setNewComment('');
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <>
    <Helmet>
  <title>Blog - U-Link Gulf | Insights on IT, E-commerce & Business Growth</title>
  <meta
    name="description"
    content="Read the latest insights, strategies, and updates from U-Link It Us — covering IT trends, e-commerce tips, procurement strategies, and more."
  />
</Helmet>

    
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
  <title>U-Link Gulf Blog | Expert Seller Account Management & Marketplace Performance</title>

  <meta 
    name="description" 
    content="Explore the U-Link Gulf blog for expert insights on seller account management, marketplace performance, digital marketing strategies, and e-commerce growth." 
  />
  <meta property="og:title" content="U-Link Gulf Blog | Expert Seller Account Management & Marketplace Performance" />
  <meta property="og:description" content="Gain insights on maximizing marketplace performance, e-commerce strategies, and effective seller account management." />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://www.ulinkgulf.com/blog" />
</Helmet>


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Blog Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#009000] mb-4 bg-clip-text text-transparent bg-[#009000]">
            {t("U-Link Gulf Blog")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t("Discover expert insights on seller account management, IT services, and logistics for effective e-commerce growth strategies.")}
</p>

          
          <div className="flex justify-center gap-4 my-8">
            <button 
              onClick={() => setShowSubmissionForm(!showSubmissionForm)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                showSubmissionForm 
                  ? 'bg-[#009000] text-white hover:bg-[#009000]'
                  : 'bg-[#009000] text-white'
              } shadow-md hover:shadow-lg`}
            >
              {showSubmissionForm ? 'Cancel Submission' : 'Write a Blog Post'}
            </button>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto p-6 rounded-xl bg-white">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 border border-[#009000] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-3.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-[#009000] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Blog Submission Form */}
        {showSubmissionForm && (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t("Submit Your Blog Post")}</h2>
            
            {submissionStatus === 'success' ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>{t("Thank you for your submission! Your post is now live on our blog.")}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitPost} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="title">
                      {t("Title*")}
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newPost.title}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                        formErrors.title ? 'border-green-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                      placeholder="Enter your post title"
                    />
                    {formErrors.title && <p className="text-green-500 text-sm mt-1">{formErrors.title}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="category">
                      {t("Category*")}
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={newPost.category}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                        formErrors.category ? 'border-green-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                    >
                      <option value="">{t("Select a category")}</option>
                      {categories.filter(c => c !== 'all').map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                      <option value="_new">{t("+ Add new category")}</option>
                    </select>
                    {formErrors.category && <p className="text-green-500 text-sm mt-1">{formErrors.category}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="content">
                    {t("Content*")}
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={newPost.content}
                    onChange={handleInputChange}
                    rows="8"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                      formErrors.content ? 'border-green-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                    }`}
                    placeholder="Write your blog post content here..."
                  ></textarea>
                  {formErrors.content && <p className="text-green-500 text-sm mt-1">{formErrors.content}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="authorName">
                      {t("Your Name*")}
                    </label>
                    <input
                      type="text"
                      id="authorName"
                      name="authorName"
                      value={newPost.authorName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                        formErrors.authorName ? 'border-green-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                      placeholder="Enter your name"
                    />
                    {formErrors.authorName && <p className="text-green-500 text-sm mt-1">{formErrors.authorName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="authorEmail">
                      {t("Your Email*")}
                    </label>
                    <input
                      type="email"
                      id="authorEmail"
                      name="authorEmail"
                      value={newPost.authorEmail}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                        formErrors.authorEmail ? 'border-green-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                      placeholder="Enter your email"
                    />
                    {formErrors.authorEmail && <p className="text-green-500 text-sm mt-1">{formErrors.authorEmail}</p>}
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-lg"
                >
                  {t("Publish Post")}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Blog Posts Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#009000]"></div>
          </div>
        ) : (
          <>
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className={`bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                      activePost?.id === post.id ? 'md:col-span-2 lg:col-span-3' : ''
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden group">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-[#009000]">{post.category}</span>
                        <span className="text-sm text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      
                      {/* Expanded view content */}
                      {activePost?.id === post.id && (
                        <div className="mt-6 animate-fade-in">
                          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                          
                          {/* Comments section */}
                          <div className="mt-8 border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">{t("Comments")} ({comments[post.id]?.length || 0})</h3>
                            
                            {comments[post.id]?.map(comment => (
                              <div key={comment.id} className="mb-4 pb-4 border-b last:border-b-0">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium">{comment.author}</span>
                                  <span className="text-sm text-gray-500">{comment.date}</span>
                                </div>
                                <p className="text-gray-700">{comment.text}</p>
                              </div>
                            ))}
                            
                            <div className="mt-6">
                              <textarea
                                placeholder="Share your thoughts..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 mb-3"
                                rows="3"
                              />
                              <button
                                onClick={() => handleAddComment(post.id)}
                                className="px-5 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-300"
                              >
                                {t("Post Comment")}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => handleLikePost(post.id)}
                            className="flex items-center text-gray-500 hover:text-green-500 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {post.likes}
                          </button>
                          <span className="flex items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {post.views}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => togglePostExpansion(post)}
                          className="flex items-center text-[#009000] font-medium hover:text-green-800 transition-colors"
                        >
                          {activePost?.id === post.id ? (
                            <>
                              <span>{t("Show Less")}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>{t("Read More")}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                <div className="max-w-md mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{t("No articles found")}</h3>
                  <p className="text-gray-600 mb-6">{t("Try adjusting your search or filter criteria")}</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-5 py-2.5 bg-[#009000] text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    {t("Reset Filters")}
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mb-12">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === number
                    ? 'bg-[#009000] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
       
      </main>
    </div>
    </>
  );
};

export default BlogPage;