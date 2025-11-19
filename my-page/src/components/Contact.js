import React, { useState, useEffect, useRef } from 'react';
import { API_BASE_URL } from '../config';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [cvRequestData, setCvRequestData] = useState({
    name: '',
    email: ''
  });
  const [isCvRequesting, setIsCvRequesting] = useState(false);
  const [cvMessage, setCvMessage] = useState('');
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = contactRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCvInputChange = (e) => {
    const { name, value } = e.target;
    setCvRequestData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCvRequest = async (e) => {
    e.preventDefault();
    setIsCvRequesting(true);
    setCvMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/request-cv`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cvRequestData)
      });

      const result = await response.json();

      if (result.success) {
        setCvMessage('CV sent to your email successfully! Please check your inbox.');
        setCvRequestData({ name: '', email: '' });
      } else {
        setCvMessage(result.message || 'Failed to send CV. Please try again.');
      }
    } catch (error) {
      console.error('Error requesting CV:', error);
      setCvMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsCvRequesting(false);
    }
  };

  return (
    <div id="fh5co-consult" ref={contactRef}>
      <div className="video fh5co-video" style={{backgroundImage: `url('images/cover_bg_1.jpg')`}}>
        <div className="overlay"></div>
      </div>
      <div className={`choose animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}>
        <h2>Contact Me</h2>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="row form-group">
            <div className="col-md-6">
              <input 
                type="text" 
                id="fname" 
                name="name"
                className="form-control"
                placeholder="Your first name *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <input 
                type="text" 
                id="lname" 
                name="lastName"
                className="form-control"
                placeholder="Your last name"
                value={formData.lastName || ''}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <input 
                type="email" 
                id="email" 
                name="email"
                className="form-control"
                placeholder="Your email address *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <input 
                type="text" 
                id="subject" 
                name="subject"
                className="form-control"
                placeholder="Your subject of this message *"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="7" 
                className="form-control"
                placeholder="Your message *"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <input 
              type="submit" 
              value={isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              className="btn btn-primary"
              disabled={isSubmitting}
            />
          </div>
          {submitMessage && (
            <div className={`alert ${submitMessage.includes('Thank you') ? 'alert-success' : 'alert-danger'}`} 
                 style={{marginTop: '15px'}}>
              {submitMessage}
            </div>
          )}
        </form>

        {/* CV Request Section */}
        <div style={{marginTop: '50px', paddingTop: '30px', borderTop: '2px solid #eee'}}>
          <h3 style={{marginBottom: '20px', color: '#007bff'}}>Request My CV</h3>
          <p style={{marginBottom: '20px', color: '#666'}}>
            Interested in my professional background? Enter your details below and I'll send my CV directly to your email.
          </p>
          
          <form onSubmit={handleCvRequest}>
            <div className="row form-group">
              <div className="col-md-6">
                <input 
                  type="text" 
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                  value={cvRequestData.name}
                  onChange={handleCvInputChange}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <input 
                  type="email" 
                  name="email"
                  className="form-control"
                  placeholder="Your email address *"
                  value={cvRequestData.email}
                  onChange={handleCvInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input 
                type="submit" 
                value={isCvRequesting ? "SENDING CV..." : "GET MY CV"}
                className="btn btn-success"
                disabled={isCvRequesting}
              />
            </div>
            {cvMessage && (
              <div className={`alert ${cvMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`} 
                   style={{marginTop: '15px'}}>
                {cvMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;