import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';


const BlogPage = () => {
  // State management
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

   const initialPosts=[
    {
      "id": 1,
      "slug": "Account-management-program",
      "title": "Ulinkitus.com Seller Account Management Program",
      "content": "<p>Ulinkitus.com is one of India’s fastest-growing companies providing IT & e-commerce solutions. We are partnered with Amazon to help sellers manage their accounts and boost their online business performance. Our program offers comprehensive services like inventory management, sales management, and sales boost strategies to ensure your account remains in top health.</p><p>In this program, we cover the following:</p><ul><li>Inventory Management</li><li>Sales Management</li><li>Order Management</li><li>Reviews & Ratings Management</li><li>Account Health Management</li><li>Buyer-Seller Communication</li><li>Sales Boost</li></ul>",
      "excerpt": "Ulinkitus.com provides a comprehensive Seller Account Management Program, including inventory, sales, order, and review management to boost your Amazon business.",
      "featuredImage": "/Images/AccountM.avif",
      "category": "Account Management",
      "publishedAt": "2024-01-01T00:00:00Z",
      "readTime": "7 min",
      "author": "Ulinkitus.com Team",
      "likes": 35,
      "views": 120
    },
    {
      "id": 2,
      "slug": "sales-boost-strategy",
      "title": "Sales Boost Strategy for Amazon Sellers",
      "content": "<p>Our Sales Boost strategy is designed to help Amazon sellers achieve greater visibility and success on the platform. It includes listing enhancement, sponsored products, and managing reviews & ratings to ensure your products get noticed and perform well.</p><p>The strategy includes the following steps:</p><ol><li>Listing Enhancement: Optimize listings with images, keywords, bullet points, and detailed descriptions.</li><li>Sponsored Products: Run ad campaigns with a daily budget to boost visibility.</li><li>Reviews and Ratings: Maintain high reviews and ratings to improve product rankings and sales.</li></ol>",
      "excerpt": "Our Sales Boost strategy enhances your Amazon listings, runs targeted ads, and maintains high reviews to increase product visibility and sales.",
      "featuredImage": "/Images/Sales.avif",
      "category": "Sales Boost",
      "publishedAt": "2024-01-02T12:00:00Z",
      "readTime": "6 min",
      "author": "Ulinkitus.com Team",
      "likes": 45,
      "views": 230
    },
    {
      "id": 3,
      "slug": "account-health-management",
      "title": "Account Health Management for Amazon Sellers",
      "content": "<p>Maintaining account health is crucial for continued success on Amazon. Our Account Health Management service ensures that your account stays in good standing by monitoring key metrics such as ODR, LSR, and CR, and addressing any negative feedback or claims promptly.</p><p>Our service includes:</p><ul><li>Monitoring Order Defect Ratio (ODR), Late Shipment Ratio (LSR), and Cancellation Ratio (CR).</li><li>Handling Negative Feedback and A-Z Claims.</li><li>Ensuring adherence to Amazon’s policies and avoiding account suspensions.</li></ul>",
      "excerpt": "Our Account Health Management service helps Amazon sellers maintain a healthy account by managing key metrics and handling negative feedback and claims.",
      "featuredImage": "/Images/AccountH.avif",
      "category": "Account Health",
      "publishedAt": "2024-01-03T09:00:00Z",
      "readTime": "8 min",
      "author": "Ulinkitus.com Team",
      "likes": 55,
      "views": 310
    }
  ,
    {
      "id": 4,
      "slug": "inventory-management-best-practices",
      "title": "Best Practices for Inventory Management on Amazon",
      "content": "<p>Inventory management is crucial for maintaining a smooth Amazon seller account. Our program helps you efficiently manage your inventory to ensure stock levels are optimal, preventing stockouts or excess stock. We offer advanced tools for syncing inventory across multiple platforms.</p><p>Key Practices include:</p><ul><li>Real-time stock monitoring and alerts</li><li>Synchronizing inventory across marketplaces</li><li>Optimizing stock levels based on sales velocity</li><li>Preventing overselling with automated reorder alerts</li></ul>",
      "excerpt": "Our Inventory Management service helps you optimize stock levels, preventing stockouts and excess stock, and keeping your account in top shape.",
      "featuredImage": "/Images/Inventory.avif",
      "category": "Inventory Management",
      "publishedAt": "2024-01-04T08:00:00Z",
      "readTime": "6 min",
      "author": "Ulinkitus.com Team",
      "likes": 30,
      "views": 180
    },
    {
      "id": 5,
      "slug": "order-management-system",
      "title": "Streamlining Order Management for Amazon Sellers",
      "content": "<p>Our Order Management System (OMS) ensures timely dispatch and accurate tracking of your orders. We work closely with your team to monitor the status of each order and resolve any issues that arise during processing, preventing late shipments and maintaining a high level of customer satisfaction.</p><p>Our OMS includes:</p><ul><li>Automated order processing and tracking</li><li>Real-time order status updates</li><li>Order prioritization based on urgency</li><li>Integration with third-party logistics providers</li></ul>",
      "excerpt": "Our Order Management System ensures timely dispatch and tracking of orders, preventing late shipments and improving customer satisfaction.",
      "featuredImage": "/Images/Order.avif",
      "category": "Order Management",
      "publishedAt": "2024-01-05T07:00:00Z",
      "readTime": "5 min",
      "author": "Ulinkitus.com Team",
      "likes": 40,
      "views": 210
    },
    {
      "id": 6,
      "slug": "reviews-and-rating-management-strategy",
      "title": "Effective Strategy for Managing Reviews & Ratings on Amazon",
      "content": "<p>Reviews and ratings are vital for the success of your products on Amazon. Our strategy helps you maintain a high average rating by addressing customer feedback and ensuring that your products are meeting customer expectations.</p><p>Our strategy includes:</p><ul><li>Monitoring and responding to customer reviews</li><li>Resolving issues with low-rated reviews</li><li>Using customer feedback to improve products</li><li>Ensuring compliance with Amazon’s review guidelines</li></ul>",
      "excerpt": "Our strategy for managing reviews and ratings ensures high customer satisfaction and helps maintain your product’s ranking on Amazon.",
      "featuredImage": "/Images/reviews.avif",
      "category": "Reviews & Ratings Management",
      "publishedAt": "2024-01-06T10:00:00Z",
      "readTime": "7 min",
      "author": "Ulinkitus.com Team",
      "likes": 50,
      "views": 250
    },
    {
      "id": 7,
      "slug": "sales-performance-analysis",
      "title": "Analyzing Sales Performance for Amazon Sellers",
      "content": "<p>Our Sales Performance Analysis service helps you understand how your products are performing on Amazon. By analyzing key performance metrics such as conversion rates, average order value, and traffic sources, we provide insights to optimize your strategy for better sales results.</p><p>Our analysis includes:</p><ul><li>Reviewing conversion rates and identifying improvement areas</li><li>Tracking traffic sources and optimizing for high-converting channels</li><li>Analyzing pricing strategies and their impact on sales</li><li>Recommending new strategies based on sales data</li></ul>",
      "excerpt": "Our Sales Performance Analysis service helps you optimize your Amazon sales strategy by providing detailed insights into performance metrics.",
      "featuredImage": "/Images/analysis.avif",
      "category": "Sales Analysis",
      "publishedAt": "2024-01-07T11:00:00Z",
      "readTime": "6 min",
      "author": "Ulinkitus.com Team",
      "likes": 60,
      "views": 320
    }
  ]
  
  

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
  <title>Blog - U-Link It Us | Insights on IT, E-commerce & Business Growth</title>
  <meta
    name="description"
    content="Read the latest insights, strategies, and updates from U-Link It Us — covering IT trends, e-commerce tips, procurement strategies, and more."
  />
</Helmet>

    
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* SEO Meta Tags */}
      <Helmet>
  <title>Ulinkitus Blog | Expert Seller Account Management & Marketplace Performance</title>

  <meta 
    name="description" 
    content="Explore the Ulinkitus blog for expert insights on seller account management, marketplace performance, digital marketing strategies, and e-commerce growth." 
  />
  <meta property="og:title" content="Ulinkitus Blog | Expert Seller Account Management & Marketplace Performance" />
  <meta property="og:description" content="Gain insights on maximizing marketplace performance, e-commerce strategies, and effective seller account management." />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://ulinkitus.com/blog" />
</Helmet>


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Blog Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#b73235] mb-4 bg-clip-text text-transparent bg-[#b73235]">
            U-Link It Us Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Discover expert insights on seller account management, marketplace performance, and effective e-commerce growth strategies.
</p>

          
          <div className="flex justify-center gap-4 my-8">
            <button 
              onClick={() => setShowSubmissionForm(!showSubmissionForm)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                showSubmissionForm 
                  ? 'bg-[#b73235] text-white hover:bg-[#b73235]'
                  : 'bg-[#b73235] text-white'
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
                className="w-full px-5 py-3 border border-[#b73235] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent shadow-sm"
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
                      ? 'bg-[#b73235] text-white shadow-md'
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Submit Your Blog Post</h2>
            
            {submissionStatus === 'success' ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>Thank you for your submission! Your post is now live on our blog.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitPost} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="title">
                      Title*
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newPost.title}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                        formErrors.title ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                      placeholder="Enter your post title"
                    />
                    {formErrors.title && <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="category">
                      Category*
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={newPost.category}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                        formErrors.category ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                    >
                      <option value="">Select a category</option>
                      {categories.filter(c => c !== 'all').map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                      <option value="_new">+ Add new category</option>
                    </select>
                    {formErrors.category && <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="content">
                    Content*
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={newPost.content}
                    onChange={handleInputChange}
                    rows="8"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                      formErrors.content ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                    }`}
                    placeholder="Write your blog post content here..."
                  ></textarea>
                  {formErrors.content && <p className="text-red-500 text-sm mt-1">{formErrors.content}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="authorName">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="authorName"
                      name="authorName"
                      value={newPost.authorName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                        formErrors.authorName ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                      placeholder="Enter your name"
                    />
                    {formErrors.authorName && <p className="text-red-500 text-sm mt-1">{formErrors.authorName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="authorEmail">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      id="authorEmail"
                      name="authorEmail"
                      value={newPost.authorEmail}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                        formErrors.authorEmail ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                      placeholder="Enter your email"
                    />
                    {formErrors.authorEmail && <p className="text-red-500 text-sm mt-1">{formErrors.authorEmail}</p>}
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-lg"
                >
                  Publish Post
                </button>
              </form>
            )}
          </div>
        )}

        {/* Blog Posts Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#b73235]"></div>
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
                        <span className="text-sm font-medium text-blue-600">{post.category}</span>
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
                            <h3 className="text-lg font-semibold mb-4">Comments ({comments[post.id]?.length || 0})</h3>
                            
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
                                className="px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300"
                              >
                                Post Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => handleLikePost(post.id)}
                            className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
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
                          className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          {activePost?.id === post.id ? (
                            <>
                              <span>Show Less</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>Read More</span>
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Reset Filters
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
                    ? 'bg-blue-500 text-white shadow-md'
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