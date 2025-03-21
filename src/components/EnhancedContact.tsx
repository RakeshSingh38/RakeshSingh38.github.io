import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    // Simulate form submission
    try {
      // In a real implementation, you'd send the data to a server
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enhanced-contact" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center text-text-light dark:text-text mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-primary">
              Contact Me
            </h2>
            <p className="text-center text-text-light dark:text-text text-lg mb-10">
              Get in touch
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-8">
              {/* Contact Item 1 */}
              <ScrollAnimation animation="fade-right" delay={200} duration={800}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-light dark:text-text">Phone</h3>
                    <p className="text-text-light-muted dark:text-gray-400">+91 7021134166</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Contact Item 2 */}
              <ScrollAnimation animation="fade-right" delay={300} duration={800}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-light dark:text-text">Email</h3>
                    <p className="text-text-light-muted dark:text-gray-400">rakeshsinghtcp@gmail.com</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Contact Item 3 */}
              <ScrollAnimation animation="fade-right" delay={400} duration={800}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-light dark:text-text">Location</h3>
                    <p className="text-text-light-muted dark:text-gray-400">Maharashtra, India</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Social Links */}
              <ScrollAnimation animation="fade-right" delay={500} duration={800}>
                <div className="flex space-x-6 pt-6">
                  <a
                    href="https://github.com/RakeshSingh38"
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-light dark:text-text hover:text-primary transition-colors"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/RakeshSingh61/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-light dark:text-text hover:text-primary transition-colors"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/RakeshSingh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-light dark:text-text hover:text-primary transition-colors"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <ScrollAnimation animation="fade-left" delay={300} duration={800}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-[#171717] border border-gray-200 dark:border-[#333] text-text-light dark:text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-[#171717] border border-gray-200 dark:border-[#333] text-text-light dark:text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-[#171717] border border-gray-200 dark:border-[#333] text-text-light dark:text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-[#171717] border border-gray-200 dark:border-[#333] text-text-light dark:text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    ></textarea>
                  </div>

                  {submitResult && (
                    <div
                      className={`p-4 rounded-lg ${submitResult.success ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500' : 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500'
                        }`}
                    >
                      {submitResult.message}
                    </div>
                  )}

                  <div className="text-right">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;
